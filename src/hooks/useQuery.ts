import { useCallback, useEffect, useState } from "react";
import { useCacheKey } from "../cache";

type QueryState = "idle" | "loading" | "error" | "success";

function useQuery<Data extends any, Params extends Record<string, unknown>>(
  key: string,
  func: (params?: Params) => Promise<Data>,
  params?: Params
) {
  const cacheKey = useCacheKey<Data>(key);
  const [state, setState] = useState<QueryState>("idle");
  const [error, setError] = useState<Error | null>(null);

  const query = useCallback(
    async (params?: Params) => {
      try {
        setError(null);
        setState("loading");

        const data = await func(params);

        setState("success");

        cacheKey.set(data);
      } catch (error) {
        setError(error as Error);
        setState("error");
      }
    },
    [cacheKey.set, func]
  );

  useEffect(() => {
    (async () => {
      await query(params);
    })();
  }, [key, params]);

  return {
    refetch: query,
    data: cacheKey.data,
    loading: state === "loading",
    idle: state === "idle",
    success: state === "success",
    error,
    state,
  };
}

export default useQuery;

import { useCallback, useEffect, useState } from "react";
import { useCacheKey } from "../cache";

function useQuery<Data extends any, Params extends Record<string, unknown>>(
  key: string,
  func: (params?: Params) => Promise<Data>,
  params?: Params
) {
  const cacheKey = useCacheKey<Data>(key);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const query = useCallback(
    async (params?: Params) => {
      try {
        setError(null);
        setLoading(true);

        const data = await func(params);

        setLoading(false);

        cacheKey.set(data);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    },
    [cacheKey.set, func]
  );

  useEffect(() => {
    (async () => {
        await query(params);
    })();
  }, [key, params]);

  return { refetch: query, data: cacheKey.data, loading, error };
}

export default useQuery;

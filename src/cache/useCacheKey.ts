import { useCallback } from "react";
import { useCache } from "./cache";

function useCacheKey<Data extends any = any>(key: string) {
    const cache = useCache();
    const data = useCache<Data>((state) => state.cache[key]);
    
    const set = useCallback((data: Data) => {
        cache.set(key, data)
    }, [key]);

    const remove = useCallback(() => {
        cache.remove(key)
    }, [key]);

    return { set, data, remove };
}

export default useCacheKey;

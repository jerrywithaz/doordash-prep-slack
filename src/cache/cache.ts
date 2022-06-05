import create from 'zustand';

type Cache = {
    set: (key: string, data: any) => void;
    remove: (key: string) => void;
    cache: Record<string, any>;
};

const cacheStore = create<Cache>((set) => ({
    set: (key, data) => {
        set((prevData) => {
            return {
                ...prevData,
                cache: {
                    ...prevData.cache,
                    [key]: data
                }
            }
        });
    },
    remove: (key) => {
        set((prevData) => {
            delete prevData.cache[key];
            return {
                ...prevData,
                cache: {
                    ...prevData.cache,
                }
            }
        });
    },
    cache: {},
}))


export const useCache = cacheStore;

export default cacheStore;

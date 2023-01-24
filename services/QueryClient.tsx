import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 7 * 24 * 60 * 60 * 1000,
    },
  },
});

export const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
  key: "wittix-cache-v2",
});

import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LayoutProvider } from "./context";
import { useCachedResources } from "./hooks";
import Navigation from "./navigation";
import { asyncStoragePersister, queryClient } from "./services";

export default function App() {
  const isLoading = useCachedResources();

  if (isLoading) return null;

  return (
    <SafeAreaProvider>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: asyncStoragePersister }}
      >
        <LayoutProvider>
          <Navigation />
        </LayoutProvider>
      </PersistQueryClientProvider>
    </SafeAreaProvider>
  );
}

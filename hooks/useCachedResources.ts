import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export function useCachedResources() {
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => {
      async function loadResourcesAndDataAsync() {
        try {
          SplashScreen.preventAutoHideAsync();
          //
        } catch (error) {
          console.warn(error);
        } finally {
          setLoading(false);
          SplashScreen.hideAsync();
        }
      }

      loadResourcesAndDataAsync();
    },
    //
    []
  );

  return isLoading;
}

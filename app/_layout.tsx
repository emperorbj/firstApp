
import SafeScreen from "../components/SafeScreen"; // corrected path
import { Stack, useSegments, useRouter, Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useAuthStore } from "@/store/authStore";
import { useEffect, useState } from "react";
import { AuthState } from "@/types/data";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SplashScreen from "../components/SplashScreen";

const queryClient = new QueryClient();


export default function RootLayout() {
  const { checkAuth, user, token } = useAuthStore() as AuthState;
  const router = useRouter();
  const segment = useSegments();

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const initAuth = async () => {
      await checkAuth(); // <- wait for auth check
      setLoading(false); // <- finished loading
    };
    initAuth();
  }, []);

  useEffect(() => {
    if (loading) return; // don't redirect during loading

    const isAuthScreen = segment[0] === "(auth)";
    const isSigned = user && token;

    if (!isAuthScreen && !isSigned) {
      router.replace("/(auth)/login");
    } else if (isAuthScreen && isSigned) {
      setTimeout(()=>{
      router.replace("/(tabs)");
      },5000)
      
    }
  }, [user, segment, token, loading]);


  return     (<SafeAreaProvider>
    <QueryClientProvider client={queryClient}>
  <SafeScreen>
    {/* The main content (always render Slot) */}
    <Slot />

    {/* Splash screen over it */}
    {loading && (
      <SplashScreen/>
    )}
  </SafeScreen>
  </QueryClientProvider>
</SafeAreaProvider>
);
}


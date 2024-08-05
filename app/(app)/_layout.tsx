import useAuth from "@/hooks/useAuth";
import Routes from "@/routes/routes";
import { Redirect, Stack } from "expo-router";

function AppLayout() {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn === false) return <Redirect href={Routes.login} />;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" />
    </Stack>
  );
}

export default AppLayout;

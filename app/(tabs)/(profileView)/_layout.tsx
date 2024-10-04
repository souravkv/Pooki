import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 , }}>
      <Stack screenOptions={{ headerShown:false, }} >
        <Stack.Screen  name="mysettings" options={{headerShown:true, animation:"ios" ,headerTitle:"my Settings.."}} ></Stack.Screen>
        <Stack.Screen  name="passwordchanger" options={{headerShown:true, animation:"ios",headerTitle:"change your passoword"}} ></Stack.Screen>
      </Stack>

    </GestureHandlerRootView>
  );
}

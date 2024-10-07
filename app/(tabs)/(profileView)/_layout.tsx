import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 , }}>
      <Stack screenOptions={{ headerShown:false,headerStyle:{backgroundColor:"black"},headerTintColor:"white",statusBarColor:"#111111" }} >
        <Stack.Screen  name="mysettings"  options={{headerShown:true, animation:"ios" ,headerTitle:"Profile Settings",title:""}} ></Stack.Screen>
        <Stack.Screen  name="passwordchanger" options={{headerShown:true, animation:"ios",headerTitle:"change your passoword"}} ></Stack.Screen>
      </Stack>

    </GestureHandlerRootView>
  );
}

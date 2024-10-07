import { Stack } from "expo-router";

export default function(){
    return<Stack screenOptions={{headerShown:false,statusBarColor:"#111111",navigationBarColor:"#111111"}}>
        <Stack.Screen name="wallpaper" ></Stack.Screen>
            <Stack.Screen options={{animation:"ios"}} name="PinnedScreen" ></Stack.Screen>
    </Stack>
}
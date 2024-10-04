import { Stack } from "expo-router";

export default function(){
    return<Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="wallpaper" ></Stack.Screen>
            <Stack.Screen options={{animation:"ios"}} name="PinnedScreen" ></Stack.Screen>
    </Stack>
}
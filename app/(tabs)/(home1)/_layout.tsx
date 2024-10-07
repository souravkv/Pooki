import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function(){
    return<GestureHandlerRootView>
        <Stack screenOptions={{headerShown:false,statusBarColor:"#111111"}}>

        </Stack>
        
    </GestureHandlerRootView>
}
import { Link } from "expo-router";
import { View ,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function(){
    return      <View>
        <Link href="/passwordchanger">
            <Text>password change</Text>
        </Link>
        </View>
   
}
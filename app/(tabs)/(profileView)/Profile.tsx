import { Link } from "expo-router";
import { View,Text } from "react-native";

export default function(){
  return<View>
    <Text>Profile</Text>
    
    <Link href="/mysettings">
    <Text>MY SETTINGS ___ </Text>
    </Link>
  
  </View>
}
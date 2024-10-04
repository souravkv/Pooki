import { View, Text,Image ,StyleSheet,ScrollView, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import {  TouchableOpacity } from "react-native-gesture-handler";
import Pin from "@/components/Pin";
import PinImages from "@/constants/pinImages";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import PinnedScreen from "../PinnedScreen";
import { useNavigation } from "expo-router";

export default function(){
    const navigation = useNavigation();
    const toPinnedScreen=()=>{
        navigation.navigate("PinnedScreen");
    }

    return<SafeAreaView style={styles.container}>
        
        <TouchableOpacity>

<Text style={styles.text1}>Hi</Text>
</TouchableOpacity>
<ScrollView  style={styles.container}>
<View style={styles.rowss}>


<Pressable onPress={toPinnedScreen}  style={{flex:1}}>
    {PinImages.filter((thing,index)=>index%2==0).map(pin=><Pin key={pin.id} pin={pin}/>)}
</Pressable>

<Pressable style={{flex:1}} >
{PinImages.filter((thing,index)=>index%2!=0).map(pin=><Pin key={pin.id} pin={pin}/>)}
</Pressable>

</View>


</ScrollView> 
    </SafeAreaView>
    
    
}

const styles = StyleSheet.create({

    container:{
       
        backgroundColor:'#111111'
        ,height:"100%", padding:6,flex:1

    },
    text1:{
        position:"relative",
        zIndex:10,
        display:'flex',
       alignItems:'center',
       justifyContent:'center',
        fontWeight:"bold",
        textAlign:'center',
        fontSize:24,color:"white",
        width:"100%",paddingBottom:30
        

    },
    rowss:{
        flexDirection:"row"

    },
    download:{
        color:"white"
        ,position:"absolute",
        bottom:50,right:"5%"
    }
    ,
    back:{
        position:'absolute',
        top:0,left:0,color:"white",padding:17
    }
})


{/* <TouchableOpacity>

<Text style={styles.text1}>Hi</Text>
</TouchableOpacity>
<ScrollView  style={styles.container}>
<View style={styles.rowss}>

<View  style={{flex:1}}>
    {PinImages.filter((thing,index)=>index%2==0).map(pin=><Pin key={pin.id} pin={pin}/>)}
</View>
<View style={{flex:1}} >
{PinImages.filter((thing,index)=>index%2!=0).map(pin=><Pin key={pin.id} pin={pin}/>)}
</View>

</View>


</ScrollView> */}
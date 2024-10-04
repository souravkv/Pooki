import pinImages from "@/constants/pinImages"
import { View,StyleSheet,SafeAreaView, Pressable } from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pin from "@/components/Pin";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";




export default function(){

    const route = useRoute  ();
    const PinId = route.params?.id;
    const pin1 = pinImages.find(p=>p.id==PinId);
    const navigation= useNavigation();

    function goback(){
        navigation.goBack();

    }
    return <View style={styles.container}>
      <View>
        <View style={styles.image}>

      <Pin pin={pin1}></Pin>
        </View>
      
      <TouchableOpacity style={styles.back} onPress={goback}>
            <Ionicons   name="return-down-back-outline" size={35} color="white" />
      </TouchableOpacity>

      </View>
  
      <MaterialCommunityIcons name="download" size={35} style={styles.download}/>
      
      

    </View>

}

const styles = StyleSheet.create({

  container:{
     
      backgroundColor:'#111111'
      ,height:"100%", padding:15,flex:1

  },
  image:{
    
    height:"100%",
    justifyContent:"center"
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
     top:-600,left:0,color:"white",padding:17
  }
})




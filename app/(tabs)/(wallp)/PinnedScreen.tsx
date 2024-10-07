import pinImages from "@/constants/pinImages"
import { View,StyleSheet,SafeAreaView, Pressable } from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Pin from "@/components/Pin";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';






export default function(){

    const route = useRoute  ();
    //@ts-ignore
    const PinId = route.params?.id;
    const pin1 = pinImages.find(p=>p.id==PinId);
    const navigation= useNavigation();


    //--------------------------------------------------------------------------------------------

const handleDownload = async () => {
    const imageUrl=pin1?.img;

    let date = new Date().getTime();
    let fileUri = FileSystem.documentDirectory + `${date}.jpg`;
    try {
        //@ts-ignore
        const res = await FileSystem.downloadAsync(imageUrl, fileUri)
        saveFile(res.uri)
    } catch (err) {
        console.log("FS Err: ", err)
    }
}

const saveFile = async (fileUri:any) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
        try {
            const asset = await MediaLibrary.createAssetAsync(fileUri);
            const album = await MediaLibrary.getAlbumAsync('Download');
            if (album == null) {
                await MediaLibrary.createAlbumAsync('Download', asset, false);
            } else {
                await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
            }
        } catch (err) {
            console.log("Save err: ", err)
        }
    } else if (status === "denied") {
        alert("please allow permissions to download")
    }
}
    //---------------------------------------------download -logic------------------


   
    function goback(){
        navigation.goBack();

    }
    return <View style={styles.container}>
      <View>
        <View style={styles.image}>
    
      <Pin pin={pin1 as any}></Pin>
        </View>
      
      <TouchableOpacity style={styles.back} onPress={goback}>
            <Ionicons   name="return-down-back-outline" size={35} color="white" />
      </TouchableOpacity>

      </View>
    <TouchableOpacity onPress={()=>{handleDownload()}}>
            <MaterialCommunityIcons name="download" size={35} style={styles.download}/>
    </TouchableOpacity>
      
      

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




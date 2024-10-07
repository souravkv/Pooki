import { View, Text,Image ,StyleSheet,ScrollView, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {  TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Pin from "@/components/Pin";
import PinImages from "@/constants/pinImages";
import Profile from "../(profileView)/Profile";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import LottieView from "lottie-react-native";
import axios from 'axios';



export default function(){
    const anime ="https://brown-vitia-13.tiiny.site/pooki1%20(copy).json";
    const football="https://api.npoint.io/836e46761c9ae2471641";
    const car= "https://api.npoint.io/1ce94c1628e9cf61a0d9";
    const movie ="https://api.npoint.io/f529e4baac56253b372e";
    

    
        const [username,setUsername]=useState("Speed");
        const [pins,setPins]=useState([])

        useEffect(()=>{
            const call =async()=>{

                const {data,error}= await supabase.auth.getSession();
                if(data){
                    const name=data.session?.user?.email;
                    if(name)
                    setUsername(name.split('@')[0]);
                }

                const pinss= await axios.get(anime);
                setPins(pinss.data.pinimages);
                console.log(pins[0]);
            }
            call();

        },[])


    const navigation=useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const prfileurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHErWhAfmHiy4vLaEkytduhuK0h0r6zzPH-A&s";
   

    return<SafeAreaView style={styles.container}>

        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <View style={{display:"flex",flexDirection:"row",flex:1}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('(profileView)')}}>
          <Image style={styles.profile} source={{uri:prfileurl}}></Image>
</TouchableOpacity>
    <TouchableOpacity onPress={()=>{navigation.navigate("Login/index")}}>
            <Text style={styles.text1}>Hi {username}</Text>
    </TouchableOpacity>

            </View>
            <View style={{flex:1,alignItems:"flex-end"}}>
            {/* <LottieView
        autoPlay
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#111111',marginHorizontal:30,top:"-8%"
        }}
        // Find more Lottie files at https://lottiefiles.com/featureds
        source={require('../../../assets/anime2.json')}
      /> */}

            </View>
        </View>
<ScrollView  style={styles.container}>
<View style={styles.rowss}>


<Pressable  style={{flex:1}}>
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
        width:"100%",paddingBottom:30,left:20,fontStyle:"italic"
    
        

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
    },
    profile:{
        height:40,aspectRatio:1,opacity:0.8,
        borderRadius:35,
        margin:10,
        marginLeft:20,top:-10

    }
})




 
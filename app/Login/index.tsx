import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet,View,Text, ActivityIndicator} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { supabase } from "@/utils/supabase";
import { useNavigation } from "expo-router";
import { useState } from "react";
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';

export default function(){
    const [loaded, error] = useFonts({
        'nothing': require('../../assets/fonts/nothing.ttf'),
      });

    const [name,setName]=useState("a");
    const [pass,setPass]=useState("b");
    const navigation= useNavigation();
    // setTimeout(()=>{navigation.navigate('(tabs)')},1000)s

   const  singer = async()=>{
    const {error} =  await supabase.auth.signInWithPassword({
    email:name+"@gmail.com",
        password:pass


    })

    if(error){
        alert("id/password is wronggg"+name+pass);
    }
    else{
        alert("logi success !");
        navigation.navigate('(tabs)');

    }
   }

if(!loaded){
    return<ActivityIndicator size="large" color="white"></ActivityIndicator>
}





  

    return <SafeAreaView style={{flex:1}}>
       <View style={{flex:1}}>
<TouchableOpacity onPress={singer}>
        <View style={{position:"relative",top:0,left:0,backgroundColor:"#B3A635",height:10,marginHorizontal:50,borderRadius:10,marginTop:30,zIndex:10}}></View>
</TouchableOpacity>

<LottieView
        autoPlay speed={1}
        style={{opacity:0.8,
          width: 300,
          height: 300,
          backgroundColor: '#111111', position:'absolute',top:"20%",left:"33%",zIndex:2
        }}
        // Find more Lottie files at https://lottiefiles.com/featureasd
        source={require('../../assets/morty.json')}
      /> 

 <LottieView
        autoPlay
        style={{
          width: 500,
          height: 500,
          backgroundColor: '#111111', position:'absolute',bottom:"-13%",left:"-10%",zIndex:1
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/anime4.json')}
      />
        <View style={{flex:1,justifyContent:"center",height:"100%",zIndex:3,left:"-10%"}}>
       
      
    
            <View style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"row"}}>
        <TouchableOpacity>
                <Text style={{fontFamily:"nothing",color:"gray",paddingRight:20,fontSize:24}}>Name</Text>
    </TouchableOpacity>
                <TextInput onChangeText={(e)=>{setName(e)}} placeholder="user....." placeholderTextColor="black"  maxLength={8} style={styles.userinput}></TextInput>

            </View>
            <View style={{justifyContent:"center",paddingTop:20,alignItems:"center",display:"flex",flexDirection:"row"}}>
                <Text style={{color:"gray",fontSize:24,fontFamily:"nothing",paddingRight:20}}>Passw</Text>
                <TextInput secureTextEntry={true} onChangeText={(e)=>setPass(e)} keyboardType="numeric" placeholder="pass....." placeholderTextColor="black"  maxLength={5} style={styles.userinput}></TextInput>

            </View>

        </View>
       </View>
    </SafeAreaView>

}

const styles = StyleSheet.create({

    userinput:{
        width:100,
        color:"black" ,backgroundColor:"gray",borderRadius:7 ,paddingLeft:7,
        paddingRight:5,fontSize:15,fontFamily:"nothing"

    }
})
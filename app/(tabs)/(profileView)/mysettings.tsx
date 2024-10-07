import { supabase } from "@/utils/supabase";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View ,Text,Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function(){

    const profileurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHErWhAfmHiy4vLaEkytduhuK0h0r6zzPH-A&s";
    const [name,setName]=useState("Speed");

    useEffect(()=>{
        const call =async()=>{
            const {data,error}= await supabase.auth.getSession();
            if(data){
                const name=data.session?.user?.email;
                if(name)
                setName(name.split('@')[0]);
            }

        }
        call();

    },[])


    const logout=async()=>{

        await supabase.auth.signOut();
        alert("logout suucesfull.");
    }
    
    return      <View style={{backgroundColor:"#111111",height:"100%"}}>
        <View style={{justifyContent:"center",alignItems:"center",margin:20}}>


             <Image source={{uri:profileurl}} style={{height:150,aspectRatio:1,borderRadius:1000,opacity:0.8}}></Image>        

             <Text style={{color:"white",fontStyle:"italic",fontSize:20,marginTop:10}}>{name}</Text>
              <Text style={{color:"white",fontStyle:"italic"}}>Age: 19</Text>
              <TouchableOpacity onPress={logout}>
                    <Text style={{color:"gray",padding:10}}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
        <Link href="/passwordchanger" >
        <View>

            <Text  style={{color:"gray",height:"100%",textAlign:"center",padding:20,width:"100%"}}>Change password </Text>
        </View>

        </Link>
        </View>
   
}


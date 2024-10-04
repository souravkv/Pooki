import { View,Image,Text ,StyleSheet, Pressable} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect, useState } from "react";

export default function({pin:{title ,img}}:{pin:{title:string | null ,img:string}}){

    const [ration,setRation] = useState(1);



    useEffect(()=>{
        if(img) 
        Image.getSize(img,(w,h)=>{setRation(w/h)}) 
    },[img])

    return <View>
    <Image style={[styles.pinImage,{aspectRatio:ration}]} source={{uri:img}}/>
    <View>

        <Pressable style={styles.heart}>
            <AntDesign  name="hearto" size={20}  color="gray" />
        </Pressable>
    </View>
    <Text style={styles .pinText}> {title} </Text>
</View>
}

const styles=StyleSheet.create({

    pinImage:{
        width:"50%",borderRadius:25,
        aspectRatio:1
        
    },
    
    pinText:{
        color:"white",margin:6,fontSize:12

    },
    heart:{
        position:"absolute",
        left:0,
        bottom:0,
        padding:10
    }
})
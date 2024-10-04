import { View, Text,Image ,StyleSheet,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import {  TouchableOpacity } from "react-native-gesture-handler";
import Pin from "@/components/Pin";

export default function(){

    return<SafeAreaView style={styles.container}>
        
            <TouchableOpacity>

                    <Text style={styles.text1}>Hi</Text>
            </TouchableOpacity>
        <ScrollView  style={styles.container}>
                  <Pin pin={ {title:"Gojo Satoru" ,img:"https://i.pinimg.com/736x/ba/10/1d/ba101d4fb49a43fda96d9866d5ba2c59.jpg"}}/>
                 
                  <Pin pin={ {title:"" ,img:"https://i.pinimg.com/564x/24/61/6b/24616b13272e2a193d3bb68bd4b50dda.jpg"}}/>
                  <Pin pin={ {title:"Sunshine" ,img:"https://i.pinimg.com/564x/b6/31/94/b631947bc5368d65b6355051da338626.jpg"}}></Pin>
                  <Pin pin={ { title:"" ,img:"https://i.pinimg.com/564x/79/c6/9a/79c69a45976283811e452830dd3b8c1c.jpg"}}/>
                 
                

   
    </ScrollView>
    </SafeAreaView>
    
    
}

const styles = StyleSheet.create({

    container:{
       
        backgroundColor:'#111111'
        ,height:"100%", padding:7,flex:1

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
        

    }
})
import { BSheet } from '@/components/BottomSheet';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useState } from 'react';
import { View ,Text, Button,Image,StyleSheet} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

export default function index() {
  return (

    <Tab.Navigator 
    screenOptions={{
      tabBarStyle:{backgroundColor:"black",paddingTop:15}, tabBarActiveTintColor:"white",
      tabBarIndicatorStyle:{backgroundColor:"orange"}
    }}>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Suggested" component={Suggested} />
    </Tab.Navigator>
  );
}

function Library(){
        const [pictureOpen,setPictureOpen] = useState(false);

    return    <View style={{flex:1, backgroundColor:'#111111',paddingTop:10}}>

        <TouchableOpacity>
          <Text  style={styles.timet} onPress={()=>{ setPictureOpen(!pictureOpen)}} >TIME TABLE</Text>
        </TouchableOpacity>
       
        
        {pictureOpen && <BSheet onClose={()=>{setPictureOpen(false)}} />}


    </View>
    

}






function Liked(){
    return<View style={{backgroundColor:'#111111' , height:"100%"}}>
       
    </View>
}
function Suggested(){
  return<View style={{backgroundColor:'#111111' , height:"100%"}}>
       
  </View>
}

const styles=StyleSheet.create({
  text1:{
    position:"relative", top:20,color:"white",fontSize:44,zIndex:10,fontStyle:"italic"
  },
  timet:{ textAlign:"center",width:"100%",color:"white",fontSize:24,paddingTop:10}

})
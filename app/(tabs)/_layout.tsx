import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Tabs } from 'expo-router';
import { StatusBar, View } from 'react-native';


export default function TabLayout() {
  return (
    <View style={{height:"100%"}}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      

    <Tabs screenOptions={{ tabBarStyle:{backgroundColor:"#1B1B1B" ,borderTopWidth:0,borderRadius:30,margin:0,marginHorizontal:10,height:45,paddingTop:10},tabBarActiveTintColor: 'white' , headerShown:false }}>
      
      <Tabs.Screen
        name="(wallp)"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome  size={24} name="th" color={color} />,
        }}
        />
      <Tabs.Screen
        name="(home1)"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
        }}
        />
      <Tabs.Screen 
        name="(profileView)"
        options={{
          title:"",
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="cog" color={color} />,
        }}
        />
       
       
      
      
    </Tabs>
        </View>
  );
}

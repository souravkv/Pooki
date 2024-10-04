import FontAwesome from '@expo/vector-icons/FontAwesome';
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';
import { Tabs } from 'expo-router';
import { StatusBar, View } from 'react-native';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function TabLayout() {
  return (
    <View style={{height:"100%"}}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      

    <Tabs screenOptions={{ tabBarStyle:{backgroundColor:"black" ,paddingTop:10},tabBarActiveTintColor: 'white' ,tabBarInactiveTintColor: 'gray', headerShown:false }}>
      
      <Tabs.Screen
        name="(wallp)"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome  size={28} name="th" color={color} />,
        }}
        />
      <Tabs.Screen
        name="(home1)"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
        />
      <Tabs.Screen 
        name="(profileView)"
        options={{
          title:"",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
        />
       
       
      
      
    </Tabs>
        </View>
  );
}

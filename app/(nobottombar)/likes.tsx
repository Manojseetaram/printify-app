import React from "react";
import { Text,StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native'
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

const ForYou = () => {

   
  return (
  
     
        <Tab.Navigator>
          <Tab.Screen name="New Orders" component={HomeScreen} />
      <Tab.Screen name="Past Orders" component={SettingsScreen} />
     
        </Tab.Navigator>
       
    
      
  );
};
function HomeScreen() {
  return <View>
       <Text>Hii There i'm here</Text>
 </View>
}
function SettingsScreen() {
    return (
      <SafeAreaProvider style={styles.container}>
      <View>
      <Text>Hi There from the home screen</Text>
            </View>
  </SafeAreaProvider>
  )
}


export default ForYou;

const styles = StyleSheet.create({
  header: {
    fontSize:20
    },
    container: {
        backgroundColor:"#576CD6"
    }
})
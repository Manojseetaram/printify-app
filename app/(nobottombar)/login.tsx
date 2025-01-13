import { View ,Text,StyleSheet,TextInput,TouchableOpacity,Image} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { styles } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Checkbox from 'expo-checkbox'
export default function login() {
    const [iseCheck,setIsCheck]=useState(false)
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View>
                <Image
                    style={styles.image}
                        source={require("@/assets/images/education 1.png")} />
                    </View>
                <View style={styles.header}>
                    <Text style={styles.headermaintext}>
                        Welcome Back
                    </Text>
                    <Text style={styles.text}>
                        Login to your account
                    </Text>
                </View>
                    <View style={styles.inputCenter}>
                    <View style={styles.inputContainer}>
                          <LinearGradient
                        colors={["#F9F9F9", "#AFB9E9"]}
                        start={{ x:0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.inputContainer}
                    >
                        <FontAwesome name="envelope" size={20} color="2459A1" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#354F8F"
                            
                        />
                        </LinearGradient>
                        
                    </View>
                    <View style={styles.inputContainer}>
                          <LinearGradient
                        colors={["#F9F9F9", "#AFB9E9"]}
                        start={{ x:0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.inputContainer}
                    >
                        <FontAwesome name="key" size={20} color="2459A1" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#354F8F"
                            
                        />
                        </LinearGradient>
                        
                    </View>
                </View>
                <View style={styles.checkboxparagraph}>
                      <View style={styles.checkboxline}>
                        <Checkbox style={styles.checkbox} value={iseCheck} onValueChange={setIsCheck} />
                       <Text style={{ marginLeft: 10, color: 'white',  fontWeight:'semibold'}}>Remember me</Text>
                       <Text style={{ fontWeight: 'semibold', color: 'white'}}>Forgot Password?</Text>
                     </View>
                </View>
                

                  <View style={styles.centerbutton}>
                                    <LinearGradient
                                        colors={["#374C76","#5A7BC0"]}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 1 }}
                                    style={styles.centerbutton}>
                                <TouchableOpacity style={styles.button}>
                                            <Text style={{ alignItems:'center',color:'white',textAlign:'center',marginTop:10,fontWeight:'bold',fontSize:14,letterSpacing:2}}>Login</Text>
                                 </TouchableOpacity>
                               </LinearGradient>
                                </View>
                              
                                <View style={styles.login}>
                                    <Text style={{color:'white'}}>Don't have an account?</Text>
                                  <Link href="/signin"  style={{color:'white', fontSize:14, fontWeight:'bold',textAlign:"center",textDecorationLine:'underline'}}>SIGNUP</Link>
                                </View>
             </SafeAreaView>
       </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
         backgroundColor: "#576CD6",
    },
    header: {
      justifyContent:'center',
      
        flex:.5
    },
    headermaintext: {
         
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize:40
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight:'bold'
    },
     inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
       
        width: 300,
        height: 50,
        marginTop:20
    },
    icon: {
        marginRight: 10,
        marginLeft:10
    },
    input: {
        flex: 1,
        fontSize: 16,
       
    },
    inputCenter: {
        alignItems:'center'
    },
    checkboxline: {
        marginTop:20,
        flexDirection: "row",
        textAlign: 'center',
        alignItems:'center'
    },
    checkbox: {
       
        backgroundColor: 'white',
        color: 'black',
       
        
        
    },
     button: {
    
        
        alignItems: "center",
       
     
        width: 268,
        height: 44,
        textAlign: 'center',
        shadowColor: '#374C76',
        shadowOpacity:.3
      
       
    },
    centerbutton: {
        alignItems: 'center',
        
        borderRadius: 40,
        shadowOffset: { width: 0, height: 0 },
     
    },
    login: {
      
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-evenly',
       
    },
    image: {
        width: "100%",
        borderBottomRightRadius: 50,
         borderBottomLeftRadius:50
    }
})
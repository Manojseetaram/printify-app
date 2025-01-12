// import { styles } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList"
import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
export default function Signin() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Register</Text>
                    <Text style={styles.smallHeader}>Create your account</Text>
                </View>
                <View style={styles.inputCenter}>
                    <View style={styles.inputContainer}>
                       <LinearGradient
                        colors={["#F9F9F9", "#AFB9E9"]}
                        start={{ x:0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.inputContainer}
                    >
                        <FontAwesome name="user" size={20} color="2459A1" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
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
                        <FontAwesome name="envelope" size={20} color="2459A1" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
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
                            placeholder="Confirm Password"
                            placeholderTextColor="#354F8F"
                          
                        />
                        </LinearGradient>
                        
                    </View>
                </View>
                <View style={styles.centerbutton}>
                    <LinearGradient
                        colors={["#374C76","#5A7BC0"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                    style={styles.centerbutton}>
                <TouchableOpacity style={styles.button}>
                            <Text style={{ alignItems:'center',color:'white',textAlign:'center',marginTop:10,fontWeight:'bold',fontSize:14,letterSpacing:2}}>Register</Text>
                 </TouchableOpacity>
               </LinearGradient>
                </View>
                <View style={styles.login}>
                    <Text style={{color:'white'}}>Already have an account?</Text>
                    <Text style={{color:'white', fontSize:14, fontWeight:'bold'}}>LOGIN</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#576CD6",
    },
    headerText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 40,
    },
    header: {
        flex: 0.5,
        justifyContent: "center",
    },
    smallHeader: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 14,
    },
    inputCenter: {
        alignItems: "center",
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
        marginTop: 30,
        borderRadius: 40,
        shadowOffset: { width: 0, height: 0 },
     
    },
    login: {
      flex:1
    } 
});

import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Login: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('@/assets/images/collage.webp')}
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.textCenter}>Printify</Text>
          <Text style={styles.smalltext}>
            Can’t seem to keep a Printify alive? Let us help you change that
          </Text>
        </View>
        <View style={styles.buttoncenter}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.buttonText}>Sign up</Text>
           </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#576CD6",
    flex: 1,
  },
  image: {
    position: "relative",
    resizeMode: "cover",
    width: 400,
    height: 250,
    borderRadius: 40,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 20,
  },
  buttoncenter: {
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#576CD6",
    fontSize: 18,
    fontWeight: "bold",
  },
  smalltext: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
  },
  textCenter: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    color: "#fff",
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default Login;

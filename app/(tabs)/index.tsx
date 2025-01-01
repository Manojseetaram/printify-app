
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadPitcher from "@/components/BottomSheet";
import Slider from "@/components/Slider";

const Likes = () => {
  const [pitcherOpen, setPitcherOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Slider Section */}
      <Slider />

      {/* Button Section */}
      <View style={styles.centerContent}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPitcherOpen(true)}
        >
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet */}
      {pitcherOpen && (
        <View style={styles.overlay}>
          <DownloadPitcher onClose={() => setPitcherOpen(false)} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Likes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#576CD6",
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
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
  buttonText: {
    color: "#576CD6",
    fontSize: 18,
    fontWeight: "bold",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});


import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { ImageSliderType } from "@/data/SliderData";

const { width } = Dimensions.get("screen");

type Props = {
  item: ImageSliderType;
};

const SliderItem = ({ item }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width,
  },
  image: {
    width: width * 0.8,
    height: 250,
    borderRadius: 15,
  },
});

export default SliderItem;

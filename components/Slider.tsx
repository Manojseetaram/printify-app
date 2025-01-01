

import React, { useRef, useEffect } from "react";
import { View, FlatList, StyleSheet, Animated, Dimensions } from "react-native";
import { ImageSlider } from "@/data/SliderData";
// import SliderItem from "./SliderItem";
import SliderItem from "./Slideritem";
import Pagination from "./Pagination";

const { width } = Dimensions.get("screen");

const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % ImageSlider.length;

      flatListRef.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        ref={flatListRef}
        data={ImageSlider}
        renderItem={({ item }) => <SliderItem item={item} />}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
      <Pagination items={ImageSlider} scrollX={scrollX} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: 20,
  },
});

import { ThemedText } from "@/components/ThemedText";
import { View,Text,StyleSheet,Image, Dimensions,ScrollView } from "react-native";
import Animated, {interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset} from 'react-native-reanimated'
const { width } = Dimensions.get('window')
const IMG_HEIGHT = 250;
const IMG_HEIGHT_OTHER = 300
const Page = () => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOfset = useScrollViewOffset(scrollRef);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOfset.value,
            [-IMG_HEIGHT,0,IMG_HEIGHT],
            [-IMG_HEIGHT,0,IMG_HEIGHT]
          )
        }
      ]
    };
  })

  return (
    <View style={styles.container}>
     
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={6}>
      <Animated.Image source={{ uri: "https://imgs.search.brave.com/e88R2vu2z8wi3R-dveq1sQ_jX88-A8TE0UzSyMJpn_E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZm9yZnVu/LmNvbS9mZXRjaC9m/MS9mMWMzNjRlOTcx/MTdmZTQ3NWYzNTJl/YTU1ZTU1ZDAyYy5q/cGVn" }}
            style={[styles.image1,imageAnimatedStyle]} />
          
        
        <Text style={styles.text}>Only bottom parts are Screen</Text>

        <View style={styles.innercontainer}>
          <Image source={{ uri: 'https://imgs.search.brave.com/pMjBMN813KD0HI4bf8mlNDv9vuu5f8x3tPx4KHZP5Oc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS93/cC1jb250ZW50L3Ro/ZW1lcy93YWxscGFw/ZXJzLmNvbS9zcmMv/c3BsYXNoLW4uanBn' }}
       style={styles.image}></Image>
      
       
       <Image source={{ uri: 'https://imgs.search.brave.com/pMjBMN813KD0HI4bf8mlNDv9vuu5f8x3tPx4KHZP5Oc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS93/cC1jb250ZW50L3Ro/ZW1lcy93YWxscGFw/ZXJzLmNvbS9zcmMv/c3BsYXNoLW4uanBn' }}
            style={styles.image} />
         </View>
         <View style={styles.innercontainer}>
         <Image source={{ uri: 'https://imgs.search.brave.com/pMjBMN813KD0HI4bf8mlNDv9vuu5f8x3tPx4KHZP5Oc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS93/cC1jb250ZW50L3Ro/ZW1lcy93YWxscGFw/ZXJzLmNvbS9zcmMv/c3BsYXNoLW4uanBn' }}
          style={styles.image} />
         <Image source={{ uri: 'https://imgs.search.brave.com/pMjBMN813KD0HI4bf8mlNDv9vuu5f8x3tPx4KHZP5Oc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS93/cC1jb250ZW50L3Ro/ZW1lcy93YWxscGFw/ZXJzLmNvbS9zcmMv/c3BsYXNoLW4uanBn' }}
            style={styles.image} />
        </View>
        <View style={styles.innercontainer}>
         
         <Image source={{ uri: 'https://imgs.search.brave.com/pMjBMN813KD0HI4bf8mlNDv9vuu5f8x3tPx4KHZP5Oc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS93/cC1jb250ZW50L3Ro/ZW1lcy93YWxscGFw/ZXJzLmNvbS9zcmMv/c3BsYXNoLW4uanBn' }}
            style={styles.image} />
          
          <Image source={{ uri: 'https://imgs.search.brave.com/pMjBMN813KD0HI4bf8mlNDv9vuu5f8x3tPx4KHZP5Oc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS93/cC1jb250ZW50L3Ro/ZW1lcy93YWxscGFw/ZXJzLmNvbS9zcmMv/c3BsYXNoLW4uanBn' }}
            style={styles.image} />
          
          </View>
        </Animated.ScrollView>
    </View>
  )
}
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'white',
  },
  image: {
   
    height: IMG_HEIGHT_OTHER,
    margin: 20,
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    borderRadius:20,
   
    
    
  },
  
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:10,
  },
  image1: {
     width,
    height: IMG_HEIGHT,
    
  },
  innercontainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor:'white'
    
  },

})

import { Wallpaper } from "@/hooks/useWallpaper"
import { View, Text, StyleSheet, Image } from "react-native"

export default function ImageCard({ wallpaper }: {
    wallpaper : Wallpaper
}) {
    return (
        <View>
          <Image source={{uri: wallpaper.url}} style={styles.image}/>
            
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        height:300
    }
})
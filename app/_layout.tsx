import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return <GestureHandlerRootView>

        <Stack screenOptions={{
         headerShown:false
        }} >
        <Stack.Screen name="(nobottombar)/acountsinfo" options={{
            headerShown:true,headerTitle:""
        }} />
        </Stack>
    </GestureHandlerRootView>
}
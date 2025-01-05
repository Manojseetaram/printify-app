import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(nobottombar)/PDFViewer" options={{
                    headerShown: true,
                    headerTitle: "PDF Viewer"
                }} />
                <Stack.Screen name="(nobottombar)/acountsinfo" options={{
                    headerShown: true,
                    headerTitle: ""
                }} />
                <Stack.Screen name="(nobottombar)/option" options={{
                    headerShown: true,
                    headerTitle: "Print Options"
                }} />
            </Stack>
        </GestureHandlerRootView>
    );
}

import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker'; // For gallery selection
import * as DocumentPicker from 'expo-document-picker'; // For Drive/Docs

const DownloadPitcher = ({ onClose }: { onClose: () => void }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const router = useRouter();

  const handleSheetChanges = useCallback((index: number) => {
    console.log('Sheet index:', index);
  }, []);

  // Select multiple images from gallery
  const selectFromGallery = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'We need permission to access your photo library.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All, // Allow all media types
        allowsMultipleSelection: true, // Enable multiple selections
        quality: 1,
      });

      if (!result.canceled && result.assets) {
        console.log('Selected files:', result.assets);
        router.push({
          pathname: '/(nobottombar)/acountsinfo',
          params: { files: JSON.stringify(result.assets) },
        });
      } else {
        console.log('Image Picker cancelled');
      }
    } catch (err) {
      console.error('Image picker error:', err);
      Alert.alert('Error', 'Failed to pick images.');
    }
  };

  // Select files from Drive/Documents
  const selectFromDrive = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        multiple: true,
      });

      if (!result.canceled && result.assets) {
        const pdfFiles = result.assets.map(asset => ({
          uri: asset.uri,
          type: 'document',
          name: asset.name || 'PDF Document',
        }));

        router.push({
          pathname: '/(nobottombar)/acountsinfo',
          params: { files: JSON.stringify(pdfFiles) },
        });
      }
    } catch (err) {
      console.error('Document picker error:', err);
      Alert.alert('Error', 'Failed to pick PDF.');
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['40%']}
        enablePanDownToClose
        onChange={handleSheetChanges}
        onClose={onClose}
        handleIndicatorStyle={{ height: 0 }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.buttonSheet}>
            <TouchableOpacity style={styles.button} onPress={selectFromGallery}>
              <Text style={styles.buttonText}>From Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={selectFromDrive}>
              <Text style={styles.buttonText}>From Drive</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
  },
  buttonSheet: {
    alignItems: 'center',
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#576CD6',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DownloadPitcher;
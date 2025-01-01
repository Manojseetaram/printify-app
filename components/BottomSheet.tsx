

// import React, { useCallback, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// import { useRouter } from 'expo-router';
// import DocumentPicker from 'react-native-document-picker';

// const DownloadPitcher = ({ onClose }: { onClose: () => void }) => {
//   const bottomSheetRef = useRef<BottomSheet>(null);
//   const router = useRouter();

//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('Sheet index:', index);
//   }, []);
//   const selectDoc = async () => {
//     try {
//       const doc = await DocumentPicker.pick();
//     } catch (err) {
//       if (DocumentPicker.isCancel(err))
//         console.log(err);
//     }

//  }
//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <BottomSheet
//         ref={bottomSheetRef}
//         snapPoints={['40%']}
//         enablePanDownToClose
//         onChange={handleSheetChanges}
//         onClose={onClose}
//         handleIndicatorStyle={{ height: 0 }}
//       >
//         <BottomSheetView style={styles.contentContainer}>
//           <View style={styles.buttonSheet}>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => router.push('/(nobottombar)/acountsinfo')}
//             >
//               <Text style={styles.buttonText}>From Gallery</Text>
//             </TouchableOpacity>
//               <TouchableOpacity
//               style={styles.button}
           
//             >
//               <Text style={styles.buttonText}>From Drive</Text>
//             </TouchableOpacity>
//               <TouchableOpacity
//               style={styles.button}
//               onPress={selectDoc}
//             >
//               <Text style={styles.buttonText}>From Camera</Text>
//             </TouchableOpacity>
//           </View>
//         </BottomSheetView>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 30,
//     alignItems: 'center',
//   },
//   buttonSheet: {
//     alignItems: 'center',
//   },
//   button: {
//     width: 300,
//     height: 50,
//     borderRadius: 12,
//     backgroundColor: '#576CD6',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default DownloadPitcher;


// import React, { useCallback, useRef, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// import { useRouter } from 'expo-router';
// import * as DocumentPicker from 'expo-document-picker'; // For Expo

// const DownloadPitcher = ({ onClose }: { onClose: () => void }) => {
//   const bottomSheetRef = useRef<BottomSheet>(null);
//   const router = useRouter();
//   const [selectedDoc, setSelectedDoc] = useState<any>(null); // Store selected document

//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('Sheet index:', index);
//   }, []);

//   const selectDoc = async () => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: '*/*', // You can filter this to specific types like image/*, pdf/*, etc.
//       });

//       if (result.type === 'success') {
//         console.log('Selected document:', result);
//         setSelectedDoc(result);

//         // Navigate and pass file details as query parameters
//         router.push(`/acountsinfo?fileUri=${result.uri}&fileName=${result.name}`);
//       } else {
//         console.log('Document Picker cancelled');
//       }
//     } catch (err) {
//       console.error('Document picker error:', err);
//       Alert.alert('Error', 'Failed to pick a document.');
//     }
//   };

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <BottomSheet
//         ref={bottomSheetRef}
//         snapPoints={['40%']}
//         enablePanDownToClose
//         onChange={handleSheetChanges}
//         onClose={onClose}
//         handleIndicatorStyle={{ height: 0 }}
//       >
//         <BottomSheetView style={styles.contentContainer}>
//           <View style={styles.buttonSheet}>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => router.push('/(nobottombar)/acountsinfo')}
//             >
//               <Text style={styles.buttonText}>From Gallery</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.button}
//               onPress={selectDoc} // Call the corrected selectDoc function
//             >
//               <Text style={styles.buttonText}>From Drive</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>From Camera</Text>
//             </TouchableOpacity>
//           </View>
//         </BottomSheetView>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 30,
//     alignItems: 'center',
//   },
//   buttonSheet: {
//     alignItems: 'center',
//   },
//   button: {
//     width: 300,
//     height: 50,
//     borderRadius: 12,
//     backgroundColor: '#576CD6',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default DownloadPitcher;
// import React, { useCallback, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// import { useRouter } from 'expo-router';
// import * as ImagePicker from 'expo-image-picker';
// import * as DocumentPicker from 'expo-document-picker';

// const DownloadPitcher = ({ onClose }: { onClose: () => void }) => {
//   const bottomSheetRef = useRef<BottomSheet>(null);
//   const router = useRouter();

//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('Sheet index:', index);
//   }, []);

//   // Select multiple images from the gallery
//   const selectFromGallery = async () => {
//     try {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission Denied', 'We need permission to access your photo library.');
//         return;
//       }

//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsMultipleSelection: true,
//         quality: 1,
//       });

//       if (!result.canceled && result.assets) {
//         const filesWithNames = result.assets.map((asset) => ({
//           uri: asset.uri,
//           name: asset.fileName || asset.uri.split('/').pop(), // Extract file name
//         }));
//         console.log('Selected files:', filesWithNames);

//         // Push to account info page with files in query params
//         router.push({
//           pathname: '/(nobottombar)/acountsinfo',
//           query: { files: JSON.stringify(filesWithNames) },
//         });
//       } else {
//         console.log('Image Picker cancelled');
//       }
//     } catch (err) {
//       console.error('Image picker error:', err);
//       Alert.alert('Error', 'Failed to pick images.');
//     }
//   };

//   const selectFromDrive = async () => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: '*/*',
//         multiple: true,
//       });

//       if (result.type === 'success') {
//         const filesWithNames = result.files.map((file) => ({
//           uri: file.uri,
//           name: file.name || file.uri.split('/').pop(), // Extract file name
//         }));
//         console.log('Selected files:', filesWithNames);

//         // Push to account info page with files in query params
//         router.push({
//           pathname: '/(nobottombar)/acountsinfo',
//           query: { files: JSON.stringify(filesWithNames) },
//         });
//       } else {
//         console.log('Document Picker cancelled');
//       }
//     } catch (err) {
//       console.error('Document picker error:', err);
//       Alert.alert('Error', 'Failed to pick documents.');
//     }
//   };

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <BottomSheet
//         ref={bottomSheetRef}
//         snapPoints={['40%']}
//         enablePanDownToClose
//         onChange={handleSheetChanges}
//         onClose={onClose}
//         handleIndicatorStyle={{ height: 0 }}
//       >
//         <BottomSheetView style={styles.contentContainer}>
//           <View style={styles.buttonSheet}>
//             <TouchableOpacity style={styles.button} onPress={selectFromGallery}>
//               <Text style={styles.buttonText}>From Gallery</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.button} onPress={selectFromDrive}>
//               <Text style={styles.buttonText}>From Drive</Text>
//             </TouchableOpacity>
//           </View>
//         </BottomSheetView>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 30,
//     alignItems: 'center',
//   },
//   buttonSheet: {
//     alignItems: 'center',
//   },
//   button: {
//     width: 300,
//     height: 50,
//     borderRadius: 12,
//     backgroundColor: '#576CD6',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default DownloadPitcher;
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

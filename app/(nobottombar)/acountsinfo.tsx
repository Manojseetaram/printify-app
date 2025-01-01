
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { Stack } from 'expo-router';
// import { MaterialIcons } from '@expo/vector-icons'; 

// const AccountsInfo = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedSide, setSelectedSide] = useState('');

//   // Handle input changes (allow only numeric values)
//   const handleChange = (text: string) => {
//     const numericValue = text.replace(/[^0-9]/g, '');
//     setInputValue(numericValue);
//   };

//   // Toggle dropdown visibility
//   const toggleDropdown = (dropdownName: string) => {
//     setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
//   };

//   // Handle dropdown selection
//   const handleColorSelect = (color: string) => {
//     setSelectedColor(color);
//     setOpenDropdown(null);
//   };

//   const handleSizeSelect = (size: string) => {
//     setSelectedSize(size);
//     setOpenDropdown(null);
//   };

//   const handleSideSelect = (side: string) => {
//     setSelectedSide(side);
//     setOpenDropdown(null);
//   };

//   return (
//     <>
//       {/* Header */}
//       <Stack.Screen
//         options={{
//           headerStyle: { backgroundColor: '#576CD6' },
//           headerTintColor: '#fff',
//           headerTitleStyle: { color: '#fff', fontWeight: 'bold' },
//           headerTitle: 'Accounts Info',
//         }}
//       />

//       {/* Page Content */}
//       <View style={styles.container}>
       

//         {/* Numeric Input */}
//         <TextInput
//           style={styles.input}
//           onChangeText={handleChange}
//           value={inputValue}
//           keyboardType="numeric"
//           placeholder="Enter number of copies"
//         />

//         {/* Color Dropdown */}
//         <TouchableOpacity
//           style={styles.dropdownButton}
//           onPress={() => toggleDropdown('color')}
//         >
//           <Text style={styles.dropdownButtonText}>
//             {selectedColor || 'Select Color'}
//           </Text>
//           <MaterialIcons
//             name={openDropdown === 'color' ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
//             size={24}
//             color="#000"
//           />
//         </TouchableOpacity>

//         {openDropdown === 'color' && (
//           <View style={styles.dropdown}>
//             <TouchableOpacity
//               style={styles.dropdownOption}
//               onPress={() => handleColorSelect('Color')}
//             >
//               <Text style={styles.dropdownOptionText}>Color</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.dropdownOption}
//               onPress={() => handleColorSelect('Black and White')}
//             >
//               <Text style={styles.dropdownOptionText}>Black and White</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* Size Dropdown */}
//         <TouchableOpacity
//           style={styles.dropdownButton}
//           onPress={() => toggleDropdown('size')}
//         >
//           <Text style={styles.dropdownButtonText}>
//             {selectedSize || 'Select Size'}
//           </Text>
//           <MaterialIcons
//             name={openDropdown === 'size' ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
//             size={24}
//             color="#000"
//           />
//         </TouchableOpacity>

//         {openDropdown === 'size' && (
//           <View style={styles.dropdown}>
//             <TouchableOpacity
//               style={styles.dropdownOption}
//               onPress={() => handleSizeSelect('A4')}
//             >
//               <Text style={styles.dropdownOptionText}>A4</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.dropdownOption}
//               onPress={() => handleSizeSelect('A3')}
//             >
//               <Text style={styles.dropdownOptionText}>A3</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* Paper Side Dropdown */}
//         <TouchableOpacity
//           style={styles.dropdownButton}
//           onPress={() => toggleDropdown('side')}
//         >
//           <Text style={styles.dropdownButtonText}>
//             {selectedSide || 'Select Side'}
//           </Text>
//           <MaterialIcons
//             name={openDropdown === 'side' ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
//             size={24}
//             color="#000"
//           />
//         </TouchableOpacity>

//         {openDropdown === 'side' && (
//           <View style={styles.dropdown}>
//             <TouchableOpacity
//               style={styles.dropdownOption}
//               onPress={() => handleSideSelect('One Side')}
//             >
//               <Text style={styles.dropdownOptionText}>One Side</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.dropdownOption}
//               onPress={() => handleSideSelect('Both Sides')}
//             >
//               <Text style={styles.dropdownOptionText}>Both Sides</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         <TouchableOpacity
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>SUBMIT</Text>
//         </TouchableOpacity>

//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#576CD6',
//   },
//   text: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: 300,
//     height: 50,
//     borderRadius: 12,
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   dropdownButton: {
//     width: 300,
//     height: 50,
//     borderRadius: 12,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     marginBottom: 10,
//   },
//   dropdownButtonText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   dropdown: {
//     width: 300,
//     borderRadius: 12,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//     marginBottom: 20,
//   },
//   dropdownOption: {
//     paddingVertical: 15,
//     paddingHorizontal: 20,
   
//   },
//   dropdownOptionText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   button: {
//     width: 200,
//     height: 50,
//     backgroundColor: '#fff',
//     borderRadius: 30,
//      alignItems: 'center',
//     justifyContent: 'center',
    
//   },
//   buttonText: {
//     textAlign: 'center',
//    color:'#000000'
//   }
// });

// export default AccountsInfo;

// 
// FileInfo.tsx

// import React, { useState, useCallback } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   LayoutAnimation,
//   Platform,
//   UIManager,
// } from 'react-native';
// import { useRoute, RouteProp } from '@react-navigation/native';

// type RouteParams = {
//   files: string;
// };

// type RootStackParamList = {
//   AccountInfo: RouteParams;
// };

// type FileItem = {
//   uri: string;
//   type: string;
//   name?: string;
// };

// // Enable LayoutAnimation for Android
// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// // RenderFile Component
// const RenderFile = React.memo(
//   ({
//     item,
//     index,
//     onRemove,
//   }: {
//     item: FileItem;
//     index: number;
//     onRemove: (index: number) => void;
//   }) => (
//     <View style={styles.card}>
//       <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(index)}>
//         <Text style={styles.removeButtonText}>X</Text>
//       </TouchableOpacity>
//       <Text style={styles.serialNumber}>#{index + 1}</Text>
//       <Image source={{ uri: item.uri }} style={styles.image} />
//       <Text style={styles.fileName}>{item.name || ''}</Text>
//     </View>
//   )
// );

// const AccountInfo = () => {
//   const route = useRoute<RouteProp<RootStackParamList, 'AccountInfo'>>();

//   const initialFilesArray: FileItem[] = route.params?.files
//     ? JSON.parse(route.params.files)
//     : [];

//   const [filesArray, setFilesArray] = useState<FileItem[]>(initialFilesArray);

//   // Handle Remove with Animation
//   const handleRemove = useCallback(
//     (index: number) => {
//       LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//       setFilesArray((prevFilesArray) => prevFilesArray.filter((_, i) => i !== index));
//     },
//     []
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Selected Images</Text>
//       {filesArray.length > 0 ? (
//         <FlatList
//           data={filesArray}
//           renderItem={({ item, index }) => (
//             <RenderFile item={item} index={index} onRemove={handleRemove} />
//           )}
//           keyExtractor={(item) => item.uri} // Use unique key
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.flatListContainer}
//         />
//       ) : (
//         <Text>No files selected.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingVertical: 20,
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   flatListContainer: {
//     paddingHorizontal: 10,
//   },
//   card: {
//     width: 250,
//     height: 320,
//     marginHorizontal: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   serialNumber: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 10,
//   },
//   fileName: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginTop: 10,
//   },
//   image: {
//     width: '100%',
//     height: '75%',
//     resizeMode: 'cover',
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   removeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     backgroundColor: 'rgba(73, 13, 13, 0.6)',
//     borderRadius: 15,
//     width: 30,
//     height: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   removeButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default AccountInfo;
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';


type RouteParams = {
  files: string; 
};

type RootStackParamList = {
  AccountInfo: RouteParams;
};

type FileItem = {
  uri: string;
  type: string; 
  name?: string;
};

const AccountInfo = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'AccountInfo'>>();
  const [files, setFiles] = useState<FileItem[]>(
    route.params?.files ? JSON.parse(route.params.files) : []
  );

  const addNewFile = async () => {
    try {
    
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/*'],
        multiple: true,
      });

      if (!result.canceled && result.assets) {
        const newFiles = result.assets.map(asset => ({
          uri: asset.uri,
          type: asset.mimeType?.includes('pdf') ? 'document' : 'image',
          name: asset.name,
        }));

        setFiles([...files, ...newFiles]);
      }
    } catch (err) {
      console.error('File picker error:', err);
    }
  };

  const renderFile = ({ item, index }: { item: FileItem; index: number }) => {
    if (item.type === 'image') {
      return (
        <View style={styles.card}>
          <View style={styles.textContainer}>
            <Text style={styles.serialNumber}>#{index + 1}</Text>
          </View>
          <Image source={{ uri: item.uri }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.fileName}></Text>
          </View>
        </View>
      );
    }

    // PDF rendering
    return (
      <View style={styles.pdfItem}>
        <Text style={styles.pdfIcon}>PDF</Text>
        <Text style={styles.pdfName}>{item.name || 'PDF Document'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Selected Files</Text>
        <FlatList
          data={files}
          renderItem={renderFile}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No files selected</Text>
          }
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={addNewFile}>
          <Text style={styles.addButtonText}>+ Add More Files</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 80,
    backgroundColor: 'transparent',
  },
  addButton: {
    backgroundColor: '#576CD6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flatListContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  card: {
    width: 250,
    height: 320,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  serialNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  fileName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  pdfItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    // backgroundColor: '#fff',
    marginHorizontal: 10,
    // marginVertical: 5,
    // borderRadius: 8,
    // minWidth: 200,
  },
  pdfIcon: {
    backgroundColor: '#E74C3C',
    color: '#fff',
    padding: 8,
    borderRadius: 4,
    fontSize: 12,
    marginRight: 10,
  
  },
  pdfName: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    backgroundColor: 'white',
    padding:20
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  textContainer: {
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
});

export default AccountInfo;

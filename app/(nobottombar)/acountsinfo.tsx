import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';

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

type SelectedFiles = {
  images: FileItem[];
  pdfs: FileItem[];
};

const AccountInfo = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'AccountInfo'>>();
  const [files, setFiles] = useState<FileItem[]>(
    route.params?.files ? JSON.parse(route.params.files) : []
  );

  const router = useRouter();

  // Separate files into images and PDFs
  const imageFiles = files.filter(file => file.type === 'image');
  const pdfFiles = files.filter(file => file.type === 'document');

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

  const handlePDFPress = (pdf: FileItem) => {
    try {
      router.push({
        pathname: "/PDFViewer",
        params: {
          uri: pdf.uri,
          name: pdf.name || 'PDF Document'
        }
      });
    } catch (error) {
      console.error('Navigation error:', error);
      Alert.alert('Error', 'Failed to open PDF');
    }
  };

  const renderImage = ({ item, index }: { item: FileItem; index: number }) => (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.serialNumber}>#{index + 1}</Text>
      </View>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.fileName}>{item.name || 'Image'}</Text>
      </View>
    </View>
  );

  const renderPDF = ({ item, index }: { item: FileItem; index: number }) => (
    <TouchableOpacity 
      style={styles.pdfCard}
      onPress={() => handlePDFPress(item)}
    >
      <View style={styles.pdfIconContainer}>
        <Text style={styles.pdfIcon}>PDF</Text>
      </View>
      <Text style={styles.pdfName}>{item.name || 'PDF Document'}</Text>
      <Text style={styles.pdfNumber}>#{index + 1}</Text>
    </TouchableOpacity>
  );

  const handleContinue = () => {
    if (files.length === 0) {
      Alert.alert('Error', 'Please select at least one file');
      return;
    }

    router.push({
      pathname: "/option",
      params: {
        selectedFiles: JSON.stringify({
          images: imageFiles,
          pdfs: pdfFiles
        })
      }
    });
  };

  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.contentContainer}>
        {imageFiles.length > 0 && (
          <View style={styles.sectionContainer}>
            
            <Text style={styles.sectionTitle}>Selected Images</Text>
            <FlatList
              data={imageFiles}
              renderItem={renderImage}
              keyExtractor={(item, index) => `image-${index}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>
        )}

        {pdfFiles.length > 0 && (
          <View style={styles.sectionContainer}>
            
            <Text style={styles.sectionTitle}>Selected PDFs</Text>
            <FlatList
              data={pdfFiles}
              renderItem={renderPDF}
              keyExtractor={(item, index) => `pdf-${index}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>
        )}

        {files.length === 0 && (
          <Text style={styles.emptyText}>No files selected</Text>
        )}
      </View>
       <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={addNewFile}>
          <Text style={styles.addButtonText}>+ Add More Files</Text>
        </TouchableOpacity>
      </View>
            
       <View style={styles.continueButton}>
        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueText}>CONTINUE TO PRINT</Text>
        </TouchableOpacity>
      </View>
     
     
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  sectionContainer: {
    // marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 16,
    textAlign:'center'
  },
  flatListContainer: {
    paddingHorizontal: 8,
  },
  card: {
    width: 250,
    height: 220,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    overflow: 'hidden',
    alignItems:'center'
  },
  pdfCard: {
    width: 200,
    height: 150,
    marginHorizontal: 18,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 46,
    justifyContent: 'space-between',
  },
  pdfIconContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
    alignItems: 'center',
  },
  serialNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  fileName: {
    fontSize: 14,
    color: '#666',
  },
  pdfIcon: {
    backgroundColor: '#E74C3C',
    color: '#fff',
    padding: 8,
    borderRadius: 4,
    fontSize: 12,
  },
  pdfName: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  pdfNumber: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 16,
   
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
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
    // marginTop: 20,
  },
  continueText: {
    color:'white'
  },
  continueButton:{
    paddingBottom: 80,
    textAlign: 'center',
    alignItems: 'center',
    
  },
  submitButton: {
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
  }
});

export default AccountInfo;
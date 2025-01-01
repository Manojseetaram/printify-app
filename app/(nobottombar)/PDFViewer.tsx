import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import { useLocalSearchParams, useRouter } from 'expo-router';
import RNFetchBlob from 'react-native-blob-util';

type PDFViewerParams = {
  uri: string;
  name: string;
};

const PDFViewer = () => {
  const params = useLocalSearchParams<PDFViewerParams>();
  const router = useRouter();
  const { uri, name } = params;
  const [selectedPages, setSelectedPages] = useState<number[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageSelected = (pageNumber: number) => {
    setSelectedPages(prev => {
      if (prev.includes(pageNumber)) {
        return prev.filter(p => p !== pageNumber);
      }
      return [...prev, pageNumber].sort((a, b) => a - b);
    });
  };

  const handleUploadSelected = () => {
    // Return selected pages back to AccountInfo
    router.back();
  };

  // Convert file:// URI to actual path if needed
  const source = {
    uri: uri,
    cache: true,
    cacheFileName: `pdf-${name}`
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.fileName}>{name}</Text>
        <Text style={styles.pageInfo}>
          Selected: {selectedPages.length} pages
        </Text>
      </View>

      <Pdf
        source={source}
        style={styles.pdf}
        trustAllCerts={false}
        onPageChanged={(page) => {
          console.log(`Current page: ${page}`);
        }}
        onLoadComplete={(numberOfPages) => {
          setTotalPages(numberOfPages);
        }}
        enablePaging={true}
      />

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.uploadButton}
          onPress={handleUploadSelected}
        >
          <Text style={styles.uploadButtonText}>
            Upload {selectedPages.length} Pages
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  fileName: {
    fontSize: 16,
    fontWeight: '600',
  },
  pageInfo: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  uploadButton: {
    backgroundColor: '#576CD6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PDFViewer; 
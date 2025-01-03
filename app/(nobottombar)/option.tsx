import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

type FileItem = {
  uri: string;
  type: string;
  name?: string;
};

type SelectedFiles = {
  images: FileItem[];
  pdfs: FileItem[];
};

type PrintOptions = {
  color: 'color' | 'blackAndWhite';
  copies: number;
  selectedPages: number[];
};

const Option = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [selectedFiles, setSelectedFiles] = useState<SelectedFiles | null>(null);
  const [printOptions, setPrintOptions] = useState<PrintOptions>({
    color: 'color',
    copies: '0',
    selectedPages: []
  });

  // Parse files only once when component mounts
  useEffect(() => {
    if (params.selectedFiles) {
      try {
        const parsedFiles = JSON.parse(params.selectedFiles as string);
        setSelectedFiles(parsedFiles);
      } catch (error) {
        console.error('Error parsing files:', error);
        Alert.alert('Error', 'Failed to load selected files');
      }
    }
  }, [params.selectedFiles]);

  const handleSubmit = () => {
    if (!selectedFiles) {
      Alert.alert('Error', 'No files selected');
      return;
    }

    const dataToSend = {
      files: selectedFiles,
      printOptions
    };

    console.log('Sending to admin:', dataToSend);
    
   
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Print Options</Text>
        
      
        <View style={styles.optionContainer}>
          <Text style={styles.optionLabel}>Print Color:</Text>
          <Picker
            selectedValue={printOptions.color}
            onValueChange={(value: 'color' | 'blackAndWhite') => 
              setPrintOptions(prev => ({ ...prev, color: value }))}
            style={styles.picker}
          >
            <Picker.Item label="Color" value="color" />
            <Picker.Item label="Black & White" value="blackAndWhite" />
          </Picker>
        </View>

    
        <View style={styles.optionContainer}>
          <Text style={styles.optionLabel}>Number of Copies:</Text>
          <TextInput
            style={styles.input}
            value={printOptions.copies.toString()}
            onChangeText={(value) => {
              const copies = parseInt(value) || 1;
              setPrintOptions(prev => ({ ...prev, copies }));
            }}
            keyboardType="number-pad"
            maxLength={2}
          />
        </View>

        {/* Selected Files Summary */}
        <View style={styles.summary}>
          <Text style={styles.summaryText}>Selected Files:</Text>
          <Text>Images: {selectedFiles?.images.length || 0}</Text>
          <Text>PDFs: {selectedFiles?.pdfs.length || 0}</Text>
        </View>

        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>Submit Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  optionContainer: {
    marginBottom: 20,
  },
  optionLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
  picker: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#576CD6',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },
  summary: {
    marginVertical: 20,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  submitButton: {
    backgroundColor: '#576CD6',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Option;



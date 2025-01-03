import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Alert, Text, TextInput, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import Pdf from 'react-native-pdf';
import { Picker } from '@react-native-picker/picker';

const PDFViewer = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [copies, setCopies] = useState('1');
  const [color, setColor] = useState('color');
  
  const uri = decodeURIComponent(params.uri as string);
  const name = decodeURIComponent(params.name as string);

  const handleSubmit = () => {
    const printData = {
      uri,
      name,
      options: {
        copies: parseInt(copies),
        color,
      }
    };

    console.log('Print data:', printData);
    // Here you would send the data to your backend
    Alert.alert('Success', 'Print job submitted successfully');
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: name,
          headerStyle: { backgroundColor: '#576CD6' },
          headerTintColor: '#fff',
        }} 
      />
      <View style={styles.container}>
        <View style={styles.pdfContainer}>
          <Pdf
            source={{ uri }}
            style={styles.pdf}
            onLoadComplete={(numberOfPages) => {
              console.log('Pages:', numberOfPages);
            }}
            onError={(error) => {
              console.error('PDF Error:', error);
              Alert.alert('Error', 'Failed to load PDF');
            }}
            enablePaging={true}
          />
        </View>

        <View style={styles.optionsContainer}>
          <View style={styles.optionRow}>
            <Text style={styles.label}>Color:</Text>
            <Picker
              selectedValue={color}
              onValueChange={setColor}
              style={styles.picker}
            >
              <Picker.Item label="Color" value="color" />
              <Picker.Item label="Black & White" value="blackAndWhite" />
            </Picker>
          </View>

          <View style={styles.optionRow}>
            <Text style={styles.label}>Copies:</Text>
            <TextInput
              style={styles.input}
              value={copies}
              onChangeText={setCopies}
              keyboardType="number-pad"
              maxLength={2}
            />
          </View>

          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitText}>Submit Print Job</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pdfContainer: {
    flex: 2,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  optionsContainer: {
    flex: 1,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  optionRow: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  picker: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
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

export default PDFViewer; 
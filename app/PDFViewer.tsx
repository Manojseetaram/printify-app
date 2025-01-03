import React from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import Pdf from 'react-native-pdf';

const PDFViewer = () => {
  const params = useLocalSearchParams();
  const uri = decodeURIComponent(params.uri as string);
  const name = decodeURIComponent(params.name as string);

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
        <Pdf
          source={{ uri: uri }}
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

export default PDFViewer; 
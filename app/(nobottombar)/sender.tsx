// import React from 'react';
// import { View, Button } from 'react-native';
// import { useRouter } from 'expo-router';

// const SenderScreen = () => {
//   const router = useRouter();

//   // Sample files data (with file names and URIs)
//   const files = [
//     { name: 'file1.pdf', uri: 'https://example.com/file1.pdf' }, // A PDF link
//     { name: 'image1.jpg', uri: 'https://example.com/image1.jpg' }, // An image link
//   ];

//   const navigateToAccountInfo = () => {
//     // Passing files to AccountInfo screen as a query parameter
//     router.push({
//       pathname: '/(nobottombar)/acountsinfo', // Your target screen path
//       query: { files: JSON.stringify(files) }, // Passing files as JSON string
//     });
//   };

//   return (
//     <View>
//       <Button title="Go to Account Info" onPress={navigateToAccountInfo} />
//     </View>
//   );
// };

// export default SenderScreen;
// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { useSearchParams } from 'expo-router/build/hooks';

// const Sender: React.FC = () => {
//   const params = useSearchParams();
//   const { name, uri } = params as { name?: string; uri?: string };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Selected File Details</Text>
//       {name && <Text style={styles.detailText}>Name: {name}</Text>}
//       {uri && <Text style={styles.detailText}>URI: {uri}</Text>}
//       {uri && <Image source={{ uri }} style={styles.image} />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f4f4f4',
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   detailText: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 10,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//     marginTop: 10,
//   },
// });

// export default Sender;

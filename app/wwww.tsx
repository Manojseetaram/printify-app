import { View, Text,TextInput ,StyleSheet} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
// import { styles } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList";

const wwww = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
              <Text>Print</Text>    
              <View style={styles.optionContainer}>
                  <Text style={styles.optionLabel}>Print Color :</Text>
             
              </View>
              <View style={styles.optionContainer}>
                  <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      maxLength={3}
                  
                  />
              </View>
              <View style={styles.summary}>
                  <Text style={styles.summaryText}>
                      SelectedFiles
                  </Text>
              </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        
    },
    optionContainer: {
        
    },
    optionLabel: {
        
    },
    input: {
        
    },
    summary: {
        
    },
    summaryText: {
        
    }
})

export default wwww;

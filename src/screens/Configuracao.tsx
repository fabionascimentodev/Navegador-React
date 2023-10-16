import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Config() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold', fontSize:50, color:'black'}}>Configuração</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00fff7',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

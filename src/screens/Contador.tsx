import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Contador() {
    const [counter, setCounter] = useState<number>(0);
  return (
    <>
        <Text style={styles.counte}>{counter}</Text>
    <View style={styles.btn}>
        <Button onPress={() => setCounter(counter+1)} title='Incrementar'/>
        <Button onPress={() => setCounter(counter-1)} title='Decrementar'/>
        <Button onPress={() => setCounter(counter-counter)} title='Reset'/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00fff7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  counte:{
    fontWeight:'bold',
    fontSize:200
  },

  btn:{
    display:'flex',
    justifyContent:'center'
  }
});
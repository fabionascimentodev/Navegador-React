import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Contador() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <View style={styles.btn}>
        <Button onPress={() => setCounter(counter + 1)} title='Incrementar' />
        <Button onPress={() => setCounter(counter - 1)} title='Decrementar' />
        <Button onPress={() => setCounter(0)} title='Reset' />
      </View>
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
  counter: {
    fontWeight: 'bold',
    fontSize: 200,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

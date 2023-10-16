import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';


export default function Relogio() {
  const [horas, setHoras] = useState<string>('');
  useEffect(() => {
    const intervalo = setInterval(() => {
        const rel = new Date();
        const horas = rel.getHours().toString().padStart(2, "0");
        const minutos = rel.getMinutes().toString().padStart(2, "0");

        setHoras(`${horas}:${minutos}`);
    }, 1000);

    return () => clearInterval(intervalo);
}, []);

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Hora Certa</Text>
            <Text style={styles.relogio}>{horas}</Text>
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
  titulo: {
    fontSize: 40,
},
relogio: {
    fontSize: 80,
}

});

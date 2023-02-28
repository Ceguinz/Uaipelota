import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ceguin!</Text>

      <View style={styles.row}>

      <TouchableOpacity style={styles.button}>
        <text style={styles}>Entrar</text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#9b111e'}]}>
        <text style={styles}>Voltar</text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434250',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#fff',
  },
  button: {
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: '#0A0',
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 20,
  },
  textButton: {
    color: "fff",
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
});

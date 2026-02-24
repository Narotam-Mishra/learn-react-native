import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = "React Native";
  const age = 20;
  const str = `Hello ${name} with ${age} years of dominance`;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    flexDirection: "row",
  },
  box:{
    width: 100,
    height: 100,
    backgroundColor: "maroon",
    margin: 5,
  }
});

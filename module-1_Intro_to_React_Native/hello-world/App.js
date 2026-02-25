import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.bold]}>Mobile App dev using React Native</Text>
      <Text style={[styles.text, styles.italic]}>React Native by Meta for Mobile</Text>
      <Text style={[styles.text, styles.underline]}>React Native is cool</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 24,
  },
  bold:{
    fontStyle: "bold",
  },
  italic:{
    fontStyle: "italic"
  },
  underline:{
    textDecorationLine: "underline"
  }
});

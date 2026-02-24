import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("Button pressed!!");
  }

  const name = "React Native";
  const age = 20;
  const str = `Hello ${name} with ${age} years of dominance`;

  return (
    <View style={styles.container}>
      <Button color={"red"} title="Submit" onPress={handlePress}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

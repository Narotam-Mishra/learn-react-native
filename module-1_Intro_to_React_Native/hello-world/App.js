import { SafeAreaView, SafeAreaViewBase, ScrollView, ScrollViewBase, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <SafeAreaViewBase>
        <ScrollView>
        <Text style={styles.text}>Item-1</Text>
        <Text style={styles.text}>Item-2</Text>
        <Text style={styles.text}>Item-3</Text>
        <Text style={styles.text}>Item-4</Text>
        <Text style={styles.text}>Item-5</Text>
        <Text style={styles.text}>Item-6</Text>
        <Text style={styles.text}>Item-7</Text>
        <Text style={styles.text}>Item-8</Text>
        <Text style={styles.text}>Item-9</Text>
        <Text style={styles.text}>Item-10</Text>
        <Text style={styles.text}>Item-11</Text>
        <Text style={styles.text}>Item-12</Text>
        <Text style={styles.text}>Item-13</Text>
        <Text style={styles.text}>Item-41</Text>
      </ScrollView>
      </SafeAreaViewBase>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1:{
    height: 100,
    width: 100,
    backgroundColor: "red",
    margin: 5,
  },
  box2:{
    height: 100,
    width: 100,
    backgroundColor: "blue",
    margin: 5,
  },
  text:{
    fontSize: 32,
    fontWeight: 'bold',
    paddingVertical: 30,
  }
});

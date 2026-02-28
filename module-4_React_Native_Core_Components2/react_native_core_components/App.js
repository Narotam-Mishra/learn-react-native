import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={{ uri: "https://picsum.photos/200" }} style={styles.container} imageStyle={styles.backgroundImage}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Native App</Text>
        <Text style={styles.subtitle}>Discover the amazing deatures of React Native App</Text>
        <Image/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center"
  },
  content:{
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255,0,0,1)"
  },
  backgroundImage:{
    opacity: 0.8,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle:{
    fontSize: 18
  }
});

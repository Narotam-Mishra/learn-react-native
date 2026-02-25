import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. {"\n"} Natus eligendi provident magnam omnis fugit distinctio? Maiores nihil necessitatibus rerum commodi laboriosam obcaecati, officiis facilis aliquid ipsum voluptatibus voluptatem molestiae doloremque dolore cupiditate et in explicabo dolorum odit placeat atque numquam fugit, enim possimus! Quis mollitia reiciendis excepturi dolorum, esse quam earum dignissimos debitis, ipsam nihil eius iste perspiciatis? Delectus, autem!</Text>
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

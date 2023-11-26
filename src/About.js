import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Bio}>Shodiqul Faris</Text>
      <Text style={styles.Bio}>21120121130052</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Genshin-List adalah sebuah aplikasi yang memuat beberapa list yang berhubungan tentang Genshin Impact </Text>
        <Text></Text>
        <Text style={styles.text}>credit untuk penyedia API https://api.genshin.dev/ </Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textContainer: {
    backgroundColor: "#fff",
    padding: 20,
  },
  text: {
    marginBottom: 10,
    textAlign: "center",
  },
  Bio: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: "bold",
  },
});

export default About;

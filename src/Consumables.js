
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Consume = () => {

  const navigation = useNavigation();
  const navigateToFoods = () => {
    navigation.navigate("Foods");
  };
  const navigateToPotions = () => {
    navigation.navigate("Potions");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Consumables</Text>
      </View>
      <TouchableOpacity onPress={navigateToFoods} style={styles.card}>
        <Text style={styles.cardTitle}>FOODS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToPotions} style={styles.card}>
        <Text style={styles.cardTitle}>POTIONS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    paddingBottom: 90,
    marginBottom:90,
  },


  headerContainer: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    textAlign: "center",
  },

  listContainer: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    
    marginVertical: 8,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: "100%",
    height:"45%",
    alignSelf: "flex-start",
    borderWidth: 1, // Lebar garis tepi (outline border)
    borderColor: "#003459", // Warna garis tepi
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: "normal",
    color: "#333",
    fontWeight: "bold",
  },
});

export default Consume;

import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ navigation, route }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  const rating = route.params?.rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>Review Details Screen</Text>
        <Text>{route.params?.title ?? "No Title"}</Text>
        <Text>{route.params?.body ?? "No Body"}</Text>
        <View style={styles.rating}>
          <Text>{`GameZone rating: ${rating ?? "No Rating"} `}</Text>
          <Image source={images.ratings[rating]} />
        </View>
        <Text></Text>
        <Button title="back to home screen" onPress={pressHandler} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});

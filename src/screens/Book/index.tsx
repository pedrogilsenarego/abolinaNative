import React from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import { BookType } from "../../types/types";
import { useNavigation } from "@react-navigation/native";

interface Props {
  book: BookType;
}

const Book = ({ book }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: book.coverPage.toString() }} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{book?.title}</Text>
          <Text style={styles.text}>€{book?.price}</Text>
        </View>

      </View>
      <Text style={{ marginTop: "30px" }}>{book?.resume}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
    marginHorizontal: 20,



  },
  container: {

    flexDirection: "row",
    alignItems: "center",

  },
  imageContainer: {
    flex: 1.1,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 0.9,
    marginLeft: 10,

    height: "100%",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  text: {
    fontSize: 16,

    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export default Book;

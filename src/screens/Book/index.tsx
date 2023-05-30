import React from "react";
import { Button, Text, View } from "react-native";
import { BookType } from "../../types/types";
import { useNavigation } from "@react-navigation/native";

interface Props {
  route: {
    params?: {
      book: BookType;
    };
  };
}

const Book = ({ route }: Props) => {
  const { book } = route?.params || { book: { title: "Default Title" } };
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 100 }}>
      <Text>{JSON.stringify(book.title)}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Book;

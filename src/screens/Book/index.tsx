import React from "react";
import { Button, Text, View } from "react-native";
import { BookType } from "../../types/types";
import { useNavigation } from "@react-navigation/native";

interface Props {
  book: BookType
}

const Book = ({ book }: Props) => {

  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 100 }}>
      <Text>{JSON.stringify(book?.title)}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Book;

import React from "react";
import { Text } from "react-native";
import { BookType } from "../../types/types";

interface Props {
  route: {
    params: {
      book: BookType;
    };
  };
}

const Book = ({ route }: Props) => {
  const { book } = route?.params || { book: { title: "correu mal" } };

  return <Text>{book?.title}</Text>;
};

export default Book;

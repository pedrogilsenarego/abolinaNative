import { View, Text, Image } from "react-native";

interface Props {
  product: {
    image: string;
    coverPage: string;
    title: string;
  };
}

const Product = ({ product }: Props) => {
  return (
    <View
      style={{
        width: "31%",
        alignItems: "center",
        margin: `${7 / 6}%`,

        padding: 8,
      }}
    >
      <Image
        style={{ width: "100%", height: 150 }}
        source={{ uri: product.coverPage.toString() }}
      />
      <Text>{product.title}</Text>
    </View>
  );
};

export default Product;

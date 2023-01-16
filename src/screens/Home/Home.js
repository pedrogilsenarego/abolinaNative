import { useState, useEffect } from "react";

import { View, FlatList, SafeAreaView } from "react-native";
import { Colors } from "../../constants/pallete";
import FocusedStatusBar from "../../components/FocusedStatusBar";
import Product from "./components/Product";
import { firestore } from "../../config/firebaseConfig";

const Home = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    firestore.collection("books").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setBooks(list);
    });
  }, []);

  const products = [
    {
      name: "Touro",
      image:
        "https://www.visitcornwall.com/sites/default/files/styles/product_image_breakpoints_theme_visitcornwall2_tablet_1x/public/product_image/IMGP0013.JPG?itok=vnFPoSFc&timestamp=1363679670",
    },
    {
      name: "Touro2",
      image:
        "https://www.visitcornwall.com/sites/default/files/styles/product_image_breakpoints_theme_visitcornwall2_tablet_1x/public/product_image/IMGP0013.JPG?itok=vnFPoSFc&timestamp=1363679670",
    },
    {
      name: "Touro3",
      image:
        "https://www.visitcornwall.com/sites/default/files/styles/product_image_breakpoints_theme_visitcornwall2_tablet_1x/public/product_image/IMGP0013.JPG?itok=vnFPoSFc&timestamp=1363679670",
    },
    {
      name: "Touro4",
      image:
        "https://www.visitcornwall.com/sites/default/files/styles/product_image_breakpoints_theme_visitcornwall2_tablet_1x/public/product_image/IMGP0013.JPG?itok=vnFPoSFc&timestamp=1363679670",
    },
  ];
  const gap = 10;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.tealc,
        alignItems: "center",
      }}
    >
      <View style={{ marginHorizontal: 10, marginTop: 100 }}>
        <FlatList
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          data={books}
          renderItem={({ item }) => <Product product={item} />}
        ></FlatList>
      </View>
      <FocusedStatusBar />
    </SafeAreaView>
  );
};

export default Home;

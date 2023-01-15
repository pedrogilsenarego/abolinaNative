import { View, SafeArea, FlatList, Text, SafeAreaView } from "react-native";
import { Colors } from "../constants/pallete";
import FocusedStatusBar from "../components/FocusedStatusBar";

const Home = () => {
  const gap = 10;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.tealc,
      }}
    >
      <FocusedStatusBar />
      <View
        style={{
          backgroundColor: "red",
          marginHorizontal: "2%",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingHorizontal: gap / -2,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "green",
            marginHorizontal: gap / 2,
          }}
        >
          <Text style={{ color: "white", fontSize: "20px" }}>Abolina </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "green",
            marginHorizontal: gap / 2,
          }}
        >
          <Text style={{ color: "white", fontSize: "20px" }}>Abolina </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "green",
            marginHorizontal: gap / 2,
          }}
        >
          <Text style={{ color: "white", fontSize: "20px" }}>Abolina </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

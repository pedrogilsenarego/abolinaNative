import { SafeAreaView, View } from "react-native"
import MenuBar from "../../components/MenuBar"
import { Colors } from "../../constants/pallete"

const MainLayout = (props: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View style={{ marginTop: 20 }}>
        <MenuBar />
        {props.children}
      </View>
    </SafeAreaView>
  )
}
export default MainLayout
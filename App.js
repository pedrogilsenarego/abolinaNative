import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./src/screens/Home/Home";
import Book from "./src/screens/Book";
import { useFonts } from "expo-font";
import MainLayout from "./src/layouts/MainLayout";
import { ROUTE_PATHS } from "./src/constants/routes";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const HomeScreen = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

const BookScreen = () => {
  return <Book />;
};

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={ROUTE_PATHS.HOME}
      >
        <Stack.Screen name={ROUTE_PATHS.HOME} component={HomeScreen} />
        <Stack.Screen name={ROUTE_PATHS.BOOK} component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
}

import { StatusBar } from "react-native";
import SignInScreen from "../src/screens/SignInScreen";

export default function Home() {
  return (
    <>
      <SignInScreen />
      <StatusBar barStyle={"dark-content"} />
    </>
  );
}

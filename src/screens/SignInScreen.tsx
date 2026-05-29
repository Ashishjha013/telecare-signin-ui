import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import CustomInput from '../components/CustomInput';

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Ionicons name="add-circle" size={72} color={COLORS.primary} />
        </View>

        <Text style={styles.heading}>Sign In</Text>

        <Text style={styles.subheading}>
          Let's experience the joy of telecare AI.
        </Text>

        <CustomInput placeholder="Enter your email" icon="mail-outline" />
        <CustomInput placeholder="Enter your password" icon="lock-closed-outline" />
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: "center",
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  heading: {
    fontSize: 42,
    fontWeight: "700",
    color: COLORS.text,
    textAlign: "center",
    marginTop: 32,
  },

  subheading: {
    fontSize: 16,
    color: COLORS.gray,
    textAlign: "center",
    marginTop: 12,
  },
});

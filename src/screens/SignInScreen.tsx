import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../components/CustomInput";
import SocialButton from "../components/SocialButton";
import { COLORS } from "../constants/colors";

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

        <CustomInput
          placeholder="Enter your email"
          icon="mail-outline"
          keyboardType="email-address"
        />
        <CustomInput
          placeholder="Enter your password"
          icon="lock-closed-outline"
          secureTextEntry
          showPasswordToggle
        />

        <TouchableOpacity style={styles.signInButton} activeOpacity={0.7}>
          <Text style={styles.signInButtonText}>Sign In</Text>

          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <SocialButton icon="logo-facebook" />
          <SocialButton icon="logo-google" />
          <SocialButton icon="logo-instagram" />
        </View>

        <View style={styles.footer}>
          <View style={styles.signUpRow}>
            <Text style={styles.footerText}>Don't have an account?</Text>

            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.linkText}> Sign Up.</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
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
    fontWeight: "800",
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

  signInButton: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 24,
  },

  signInButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop: 32,
  },

  footer: {
    alignItems: "center",
    marginTop: 32,
  },

  footerText: {
    color: COLORS.gray,
    fontSize: 15,
  },

  linkText: {
    color: COLORS.primary,
    fontWeight: "600",
  },

  forgotPassword: {
    marginTop: 16,
    color: COLORS.primary,
    fontSize: 15,
  },

  signUpRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

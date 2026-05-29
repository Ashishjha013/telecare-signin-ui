import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, TextInputProps } from "react-native";

import { COLORS } from "../constants/colors";

type Props = {
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
};

const CustomInput = ({
  placeholder,
  icon,
  secureTextEntry,
  showPasswordToggle,
  keyboardType = "default",
}: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color={COLORS.gray} />

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        keyboardType={keyboardType}
      />

      {showPasswordToggle && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
            size={22}
            color={COLORS.gray}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    paddingHorizontal: 18,
    backgroundColor: COLORS.white,
    marginTop: 18,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: COLORS.text,
  },
});

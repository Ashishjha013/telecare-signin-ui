import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../constants/colors";

type Props = {
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
  secureTextEntry?: boolean;
};

const CustomInput = ({ placeholder, icon, secureTextEntry }: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color={COLORS.gray}></Ionicons>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
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

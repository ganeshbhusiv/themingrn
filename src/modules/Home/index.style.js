import { StyleSheet } from "react-native";
import { LightTheme1 } from "../../styles/themeColors";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  btn: {
    padding: 6,
    fontSize: 14,
    color: LightTheme1.colors.text,
    backgroundColor: '#ff0000',
    alignSelf: 'flex-start',
    borderRadius: 8,
    fontWeight: 'bold',
    margin: 20,
  },
});

export default styles;
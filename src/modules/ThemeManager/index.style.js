import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cta: {
    paddingVertical: 8,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 12,
    lineHeight: 22,
  },
  icon: {
    width: 12,
    height: 12,
    fontSize: 22,
    marginRight: 22,
    borderRadius: 6,
    backgroundColor: 'red',
  },
  noIcon: {
    width: 12,
    height: 12,
    fontSize: 22,
    marginRight: 22,
    borderRadius: 6,
  },
  themeHeader: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default styles;
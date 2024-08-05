import { StyleSheet } from "react-native";
import Colors from "./colors";

const globalStyles = StyleSheet.create({
  darkTheme: { backgroundColor: "#000" },
  lightTheme: { backgroundColor: "#fff" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  flex_grow: { flex: 1 },
  col_center: {
    justifyContent: "center",
    alignItems: "center",
  },
  col_start: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  col_between: {
    justifyContent: "space-between",
  },
  row_center: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  row_between: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row_betweenNoCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row_around: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  row_start: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  row_End: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  // shadow_prop: {
  //   shadowColor: Colors.shadowColor,
  //   shadowOffset: { width: -2, height: 4 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 3,
  // },
  // shadow_elevation: {
  //   elevation: 5,
  //   shadowColor: Colors.shadowColor,
  // },
});

export default globalStyles;

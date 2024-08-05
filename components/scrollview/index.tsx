import { StatusBar } from "expo-status-bar";
import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

function CustomScrollView({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <StatusBar
        // backgroundColor="#F08E42"
        // eslint-disable-next-line react/style-prop-object
        style="dark"
      />

      <SafeAreaView style={styles.safe_area}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardDismissMode="on-drag"
          enableOnAndroid
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>{children}</View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
}

export default CustomScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    overflow: "hidden",
  },
  safe_area: {
    flex: 1,
  },
});

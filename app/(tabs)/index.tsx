// ✅ عرض موقع el-atar داخل WebView
import { View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  return (
    <WebView
      source={{ uri: "https://el-atar.netlify.app" }} // 🔗 موقعك
      startInLoadingState={true}
      renderLoading={() => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#20438a" />
        </View>
      )}
    />
  );
}

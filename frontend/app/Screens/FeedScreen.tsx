import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";

 const FeedScreen: React.FC = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Icon name="rss-feed" size={40} color="#6200ea" />
    <Text>Welcome to Feed</Text>
  </View>
);
export default FeedScreen;

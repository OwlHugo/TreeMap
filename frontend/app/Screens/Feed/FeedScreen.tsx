import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import {
  GoodMorningUser,
  PostContainer,
  PostHeader,
  Avatar,
  UserInfo,
  UserName,
} from "./FeedScreen.styles";
import { useUser } from "@/hooks/useUser";

const FeedScreen = () => {
  const {user} = useUser();
  console.log(user)
  return (
    <View style={{ flex: 1 }}>
      <GoodMorningUser>Bom dia, {user?.name}</GoodMorningUser>
    </View>
  );
};
export default FeedScreen;

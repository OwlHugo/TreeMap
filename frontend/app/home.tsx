import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, Text } from "react-native";
import HomeScreen from "./Screens/Home/HomeScreen";
import  FeedScreen  from "./Screens/Feed/FeedScreen";

const ProfileScreen: React.FC = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Icon name="person" size={40} color="#6200ea" />
    <Text>Welcome to Profile</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Feed") {
            iconName = "rss-feed";
          } else if (route.name === "Profile") {
            iconName = "person";
          }

          return <Icon name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6200ea",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { paddingBottom: 10, height: 60 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;

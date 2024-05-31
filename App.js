import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./src/Welcome.js";
import Home from "./src/Home.js";
import Map from "./src/Map.js";
import PromptLoginSignUp from "./src/promptLoginSignUp.js";
import Login from "./src/Login.js";
import SignUp from "./src/signUp.js";
import CenterHome from "./src/centerHome.js";
import FindComposter from "./src/FindComposter.js";
import { GlobalProvider } from "./src/context/global";
import Navigation from "./Navigation";

const Stack = createStackNavigator();

// authentification screens
const AuthStack = () => (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="PromptLoginSignUp" component={PromptLoginSignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
);

// after user logs in screens
const AppStack = () => (
    <Stack.Navigator initialRouteName="Navigation" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CenterHome" component={CenterHome} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="FindComposter" component={FindComposter} />

    </Stack.Navigator>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Add this state variable

  return (
      <GlobalProvider>
        <NavigationContainer>
          {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </GlobalProvider>
  );
};

export default App;
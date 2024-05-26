import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./src/Welcome.js";
import Home from "./src/Home.js";
import Map from "./src/Map.js";
import PromptLoginSignUp from "./src/promptLoginSignUp.js";
import Login from "./src/Login.js";
import SignUp from "./src/signUp.js";
import FindComposter from "./src/FindComposter.js";
import { GlobalProvider } from "./src/context/global";

const Stack = createStackNavigator();

const App = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="FindComposter" component={FindComposter} />
          <Stack.Screen name="PromptLoginSignUp" component={PromptLoginSignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />

        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;
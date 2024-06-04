import React, { useState, useEffect } from "react";
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
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

// authentification screens
const AuthStack = ({ handleLogin }) => (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="PromptLoginSignUp" component={PromptLoginSignUp} />
        <Stack.Screen name="Login">
            {props => <Login {...props} onLogin={handleLogin} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
);

// after user logs in screens
// after user logs in screens
const AppStack = ({email}) => {
    const navigation = useNavigation();
    useEffect(() => {
        if (email) {
            navigation.setParams({ email });
        }
    }, [email]);

    return (
        <Stack.Navigator initialRouteName="Navigation" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Navigation" component={Navigation} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CenterHome" component={CenterHome} initialParams={{ email: email }} />
            <Stack.Screen name="FindComposter" component={FindComposter} />
        </Stack.Navigator>
    );
};



// In your App.js file
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");

    const handleLogin = (userEmail) => {
        setIsLoggedIn(true);
        setEmail(userEmail);
    };

    return (
        <GlobalProvider>
            <NavigationContainer>
                {isLoggedIn ? ( <AppStack email={email} /> ) : (<AuthStack handleLogin={(userEmail) => {  handleLogin(userEmail); }} />)}
            </NavigationContainer>
        </GlobalProvider>
    );
};

export default App;
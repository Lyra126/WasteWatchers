import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FindComposter from "./src/FindComposter";
import CenterHome from "./src/centerHome";
import Scanner from "./src/Scanner";
import Home from "./src/Home";


const Tab = createBottomTabNavigator();

function TabGroup(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={CenterHome}/>
            <Tab.Screen name="Tree" component={Home}/>
            <Tab.Screen name="Find Composter" component={FindComposter}/>

        </Tab.Navigator>
    )
}
export default function Navigation(){
    return(
        <TabGroup/>
    )
}
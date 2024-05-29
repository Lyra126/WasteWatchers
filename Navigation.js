import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FindComposter from "./src/FindComposter";
import CenterHome from "./src/centerHome";

const Tab = createBottomTabNavigator();

function TabGroup(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="CenterHome" component={CenterHome}/>
            <Tab.Screen name="FindComposter" component={FindComposter}/>
        </Tab.Navigator>
    )
}
export default function Navigation(){
    return(
        <TabGroup/>
    )
}
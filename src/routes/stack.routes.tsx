import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from '../styles/colors';
import { Welcome } from "../screens/Welcome";
import { UserIndentification } from "../screens/UserIdentification";
import { Confirmation } from "../screens/Confirmation";


//Organization of the bulk of data about routes, cataloging routes
const stackRoutes = createStackNavigator();


const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
        cardStyle:{
            backgroundColor: colors.white
        }
    }}>
        <stackRoutes.Screen
        name="Welcome"
        component={Welcome}
        />
        <stackRoutes.Screen
        name="UserIdentification"
        component={UserIndentification}
        />
        <stackRoutes.Screen
        name="Confirmation"
        component={Confirmation}
        />

    </stackRoutes.Navigator>
)


export default AppRoutes;
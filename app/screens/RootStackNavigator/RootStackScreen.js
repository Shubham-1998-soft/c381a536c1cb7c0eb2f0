/**
 * Root Stack Screen
 */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../Splash/SplashScreen';
import HomeScreen from '../Home/HomeScreen';
import CountryListScreen from '../CountryList/Country_List';
import CountryDetailScreen from '../CountryDetails/Country_Details';


const RootStack = createStackNavigator();
const NewStack = createStackNavigator();

const RootStackScreen = (props) => {
    return (
        <RootStack.Navigator>                        
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen 
                options={({ route, navigation }) => ({
                    title: 'Search Country by its name',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                } 
                name="HomeScreen" 
                component={HomeScreen}
            />
            <RootStack.Screen 
                options={({ route, navigation }) => ({
                    title: 'Country List',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                } 
                name="CountryListScreen" 
                component={CountryListScreen}
            />
            <RootStack.Screen 
                options={({ route, navigation }) => ({
                    title: 'Country Details',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                } 
                name="CountryDetailScreen" 
                component={CountryDetailScreen}
            />
        </RootStack.Navigator>
    );
};

export default RootStackScreen;
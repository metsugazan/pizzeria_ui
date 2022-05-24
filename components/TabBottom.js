import * as React from 'react';
import { BottomNavigation, DefaultTheme } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen'
import NewsScreen from '../screens/NewsScreen';
import ProductOneScreen from '../screens/ProductOneScreen';
import ProductScreen from '../screens/ProductScreen';
import ContactScreen from '../screens/ContactScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const HomeRoute = () => <HomeScreen /> 

const NewsRoute = () =>   <NewsScreen />

const Stack = createNativeStackNavigator();

const ProductRoute = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Produits">
        <Stack.Screen
          name="Produits"
          component={ProductScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={ProductOneScreen}
          options={{ 
              headerTitleStyle: {color:'#ECEDCB'},
                    headerStyle: {
            backgroundColor: '#ECEDCB',
          }, 
        }}
        />
      </Stack.Navigator>
      </NavigationContainer>
    );
  };

const ContactRoute = () =>  <ContactScreen />


const TabBottomComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Accueil', icon: 'home'},
        { key: 'news', title: 'Nouvelles', icon: 'newspaper-variant', color: '#FFBA08'},
        { key: 'product', title: 'Produits', icon: 'toolbox' },
        { key: 'contact', title: 'Contact', icon: 'phone-in-talk', color: '#FFBA08' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        news: NewsRoute,
        product: ProductRoute,
        contact: ContactRoute,
    });
    const theme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
          ...DefaultTheme.colors,
          primary: '#FAA307',
          accent: '#F48C06',
        },
      };
    return (
        <BottomNavigation
        theme={theme}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default TabBottomComponent



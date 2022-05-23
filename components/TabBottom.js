import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import CardComponent from './Card';

import HomeScreen from '../screens/HomeScreen'
import NewsScreen from '../screens/NewsScreen';
import ProductOneScreen from '../screens/ProductOneScreen';
import ProductScreen from '../screens/ProductScreen';
import ContactScreen from '../screens/ContactScreen';

const HomeRoute = () =>  <HomeScreen />

const NewsRoute = () =>   <NewsScreen />


const ProductRoute = () =>  <ProductScreen />

const ContactRoute = () =>  <ContactScreen />

const TabBottomComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Accueil', icon: 'home', color: '#FAA307'},
        { key: 'news', title: 'Nouvelles', icon: 'newspaper-variant', color: '#FFBA08'},
        { key: 'product', title: 'Produits', icon: 'toolbox', color: '#FAA307' },
        { key: 'contact', title: 'Contact', icon: 'phone-in-talk', color: '#FFBA08' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        news: NewsRoute,
        product: ProductRoute,
        contact: ContactRoute,
    });

    return (
        <BottomNavigation style={styles.bottom}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default TabBottomComponent


const styles = StyleSheet.create({

    bottom: {
           
    },
});
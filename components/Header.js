import * as React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const HeaderComponent = () => (

    <Appbar.Header style={ styles.top}>

        <Avatar.Image size={42} style={{marginRight: 20, backgroundColor: '#ECEDCB'}} source={require('../assets/images/logo.png')} />
    </Appbar.Header>

);

export default HeaderComponent

const styles = StyleSheet.create({
    top: {
        left: 0,
        right: 0,
        bottom: 0,
        height: 80,
        marginTop: 25,
            flexDirection:'row-reverse',
            backgroundColor:'#ECEDCB'
        
    },
    txt: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});
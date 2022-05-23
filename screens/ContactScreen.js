
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { Card, Title, Paragraph, Actions, Button, Searchbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

ContactScreen = () => {

    return (
        <View style={styles.container}>
            <MapView
                style={{ alignSelf: 'stretch', height: '30%' }}
            //showsUserLocation=''
            />

            <View style={{ flexDirection: 'row', backgroundColor: '#FAA307', borderRadius: 10, marginVertical: 10, marginHorizontal: 10, height: 120 }}>
                <View style={{ flex: 1, marginVertical: 10, }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name='location' size={40} style={{ color: '#D00000' }} />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name='phone' size={40} style={{ color: '#D00000' }} />
                    </View>
                </View>
                <View style={{ flex: 3, marginVertical: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Title style={{ fontSize: 18, fontWeight: 'bold', color: '#6A040F', marginTop: 5, textAlign: 'center', marginRight: 10 }}>La pizza de Manu</Title>
                        <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 16, textAlign: 'center', marginRight: 10 }}>10 Place Léon Meyer 76600 Le Havre</Paragraph>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 16, textAlign: 'center', marginRight: 10 }}>09.86.27.17.04</Paragraph>

                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <MaterialCommunityIcons name='facebook' size={70} style={{ color: 'blue' }} />
                </View>
            </View>

        </View>
    );
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECEDCB'
    },
});
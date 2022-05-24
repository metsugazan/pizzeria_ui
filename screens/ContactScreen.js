
import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';


ContactScreen = () => {

    return (
        <KeyboardAvoidingView >
            <ScrollView>
                <MapView
                    style={{ width: '100%', height: '20%' }}
                    initialRegion={{
                        latitude: 49.4927598,
                        longitude: 0.1134049,
                        latitudeDelta: 0,
                        longitudeDelta: 0.0131,
                    }}
                >
                    <Marker coordinate={{
                        latitude: 49.4927598,
                        longitude: 0.1134049,
                    }} >
                        <Callout><Text>La Pizza de Manu</Text></Callout>
                    </Marker>
                </MapView>
                <View style={{ flex: 3, backgroundColor: '#ECEDCB' }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#FAA307', borderRadius: 10, marginVertical: 10, marginHorizontal: 10, height: 140 }}>
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
                                <Title style={{ fontSize: 18, fontWeight: 'bold', color: '#6A040F', marginTop: 15, textAlign: 'center', }}>La pizza de Manu</Title>
                                <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 16, textAlign: 'center', marginRight: 10 }}>10 Place Léon Meyer 76600 Le Havre</Paragraph>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 16, marginTop: 10, textAlign: 'center', marginRight: 10 }}>09.86.27.17.04</Paragraph>

                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <MaterialCommunityIcons name='facebook' size={70} style={{ color: 'blue' }} />
                        </View>
                    </View>
                    <Card style={{
                        marginVertical: 15, marginHorizontal: 10, borderRadius: 5,
                        shadowColor: 'black',
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 6.84,
                        elevation: 5,
                        backgroundColor: '#FFBA08'
                    }}>
                        <Card.Content>
                            <Title style={{ fontSize: 22, fontWeight: 'bold', color: '#6A040F', textAlign: 'center', marginBottom: 10 }}>Nous contacter</Title>

                            <TextInput
                                style={styles.textInput} placeholder="Adresse Mail"
                                returnKeyType="next"
                                autoCapitalize="none"
                            />
                            <TextInput
                                style={styles.textInput} placeholder="Objet"
                                returnKeyType="next"
                                autoCapitalize="none"
                            />
                            <TextInput
                                multiline={true}
                                numberOfLines={10}
                                placeholder="Ecrire quelque chose"
                                style={styles.textArea}
                            />
                            <TouchableOpacity >
                                <Text style={styles.buttonStyle}>Envoyer</Text>
                            </TouchableOpacity>

                        </Card.Content>
                    </Card>
                </View>
                <View style={{ height: 170, backgroundColor: '#ECEDCB' }} />
            </ScrollView>

        </KeyboardAvoidingView>
    );
}

export default ContactScreen

const styles = StyleSheet.create({
    textInput: {
        fontSize: 17,
        lineHeight: 24,
        height: 45,
        width: '100%',
        borderColor: '#9D0208',
        borderWidth: 1,
        paddingLeft: 15,
        paddingRight: 5,
        backgroundColor: '#ECEDCB',
        borderRadius: 30,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 12,
        color: '#9D0208',
    },
    textArea: {
        fontSize: 17,
        lineHeight: 24,
        width: '100%',
        borderColor: '#9D0208',
        borderWidth: 1,
        paddingLeft: 15,
        paddingRight: 5,
        backgroundColor: '#ECEDCB',
        borderRadius: 10,
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 12,
        color: '#9D0208',
    },
    buttonStyle: {
        padding: 10,
        backgroundColor: '#ECEDCB',
        color: '#6A040F',
        fontSize: 20,
        width:'80%',
        textAlign: 'center',
        borderRadius: 30,
        marginHorizontal: 40,
        fontWeight: 'bold',
    },
});
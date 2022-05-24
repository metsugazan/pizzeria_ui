import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const CardComponent = () => (

    <ScrollView style={{ backgroundColor:'#ECEDCB' }}>         
            <Card.Title title="Home" titleStyle={{ fontSize: 32, fontWeight: 'bold', marginTop: 25, marginHorizontal: 20 }} />
            <Card style={{
                margin: 15, borderWidth: 2, borderColor: 'black', borderRadius: 0,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 6.84,
                elevation: 5
            }}>
                <Card.Content>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 15 }}>
                                <Paragraph style={{ color: 'gray', fontSize: 20 }}>26 mai 2021</Paragraph>
                                <Title style={{ fontSize: 25, fontWeight: 'bold' }}>Marche à pied</Title>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Title>Distance</Title>
                                <Paragraph style={{ color: 'gray', fontSize: 20 }}>6 Km</Paragraph>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Card.Cover style={{ marginRight: 25, borderWidth: 3, width: 180, height: 110 }} source={require('../assets/marche-pied.jpg')} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Title style={{ textAlign: 'center' }}>Durée</Title>
                                <Paragraph style={{ color: 'gray', fontSize: 20, textAlign: 'center', marginLeft: 20 }}>0h59mn</Paragraph>
                            </View>
                        </View>
                    </View>
                </Card.Content>
            </Card>
            <Card style={{
                margin: 15, borderWidth: 2, borderColor: 'black', borderRadius: 0,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 6.84,
                elevation: 5
            }}>
                <Card.Content>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 15 }}>
                                <Paragraph style={{ color: 'gray', fontSize: 20 }}>23 mai 2021</Paragraph>
                                <Title style={{ fontSize: 25, fontWeight: 'bold' }}>Vélo</Title>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Title>Distance</Title>
                                <Paragraph style={{ color: 'gray', fontSize: 20 }}>10 Km</Paragraph>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Card.Cover style={{ marginRight: 25, borderWidth: 3, width: 180, height: 110 }} source={require('../assets/velo.jpg')} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Title style={{ textAlign: 'center' }}>Durée</Title>
                                <Paragraph style={{ color: 'gray', fontSize: 20, textAlign: 'center', marginLeft: 20 }}>1h38mn</Paragraph>
                            </View>
                        </View>
                    </View>
                </Card.Content>
            </Card>
            <Card style={{
                margin: 15, borderWidth: 2, borderColor: 'black', borderRadius: 0,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 6.84,
                elevation: 5
            }}>
                <Card.Content>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 15 }}>
                                <Paragraph style={{ color: 'gray', fontSize: 20 }}>20 mai 2021</Paragraph>
                                <Title style={{ fontSize: 25, fontWeight: 'bold' }}>Marche à pied</Title>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Title>Distance</Title>
                                <Paragraph style={{ color: 'gray', fontSize: 20 }}>2 Km</Paragraph>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Card.Cover style={{ marginRight: 25, borderWidth: 3, width: 180, height: 110 }} source={require('../assets/marche-pied.jpg')} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Title style={{ textAlign: 'center' }}>Durée</Title>
                                <Paragraph style={{ color: 'gray', fontSize: 20, textAlign: 'center', marginLeft: 20 }}>0h26mn</Paragraph>
                            </View>
                        </View>
                    </View>
                </Card.Content>
            </Card>
    </ScrollView>

);

export default CardComponent
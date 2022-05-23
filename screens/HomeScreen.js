import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';



HomeScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: '#ECEDCB' }}>
            <Card.Title title="La Pizza de manu" titleStyle={{ fontSize: 32, textAlign: 'center', fontWeight: 'bold', color: '#6A040F' }} />
            <Card style={{
                marginHorizontal: 15, borderRadius: 20,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 6.84,
                elevation: 5
            }}>
                <Card.Cover style={{ width: '100%', height: 180, borderRadius: 20 }} source={require('../assets/images/pizzeria-home.jpg')} />
            </Card>

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
                backgroundColor: '#EBE8E8'
            }}>
                <Card.Content>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 1.15 }}>
                            <Title style={{ fontSize: 22, fontWeight: 'bold', color: '#6A040F' }}>A propos</Title>
                            <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 16, textAlign: 'justify', marginRight: 15 }}>La Pizza de Manu est situé au Havre, à deux pas du centre ville.</Paragraph>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Card.Cover style={{
                                shadowColor: 'black',
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 6.84,
                                elevation: 5,
                                borderWidth: 9,
                                borderColor: '#FFBA08',
                                width: 180,
                                height: 130,
                                borderRadius: 12,
                            }} source={require('../assets/images/centreville.jpg')} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 0.95, marginRight: 10, alignItems: 'center' }}>
                            <Card.Cover style={{
                                shadowColor: 'black',
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 6.84,
                                elevation: 5,
                                borderColor: '#FFBA08',
                                marginTop: 25,
                                width: 170,
                                height: 120,
                                borderRadius: 12,
                            }} source={require('../assets/images/home1.jpg')} />
                        </View>
                        <View style={{ flex: 1.05 }}>
                            <Title style={{ fontSize: 22, fontWeight: 'bold', color: '#6A040F', marginTop: 15 }}>Notre savoir-faire</Title>
                            <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 16, textAlign: 'justify' }}>Venez goûter à nos préparations faites maison, réalisées avec amour et dans la tradition Italienne.</Paragraph>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 1.15 }}>
                            <Title style={{ fontSize: 22, fontWeight: 'bold', color: '#6A040F', marginTop: 15 }}>Gage de qualité</Title>
                            <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 16, textAlign: 'justify', marginRight: 15 }}>Nos ingrédients nous permet de mettre en place une recette de pâte à pizza ancestrale à l'aide de farine italienne, ce qui lui confère un gout et une texture légère.</Paragraph>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Card.Cover style={{
                                shadowColor: 'black',
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 6.84,
                                elevation: 5,
                                borderWidth: 9,
                                borderColor: '#FFBA08',
                                marginTop: 40,
                                width: 180,
                                height: 130,
                                borderRadius: 12,
                            }} source={require('../assets/images/quality.jpg')} />
                        </View>
                    </View>

                </Card.Content>
            </Card>
        </ScrollView>
    );
}

export default HomeScreen
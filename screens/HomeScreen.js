import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';



HomeScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: '#ECEDCB' }}>
            <Card.Title title="La Pizza de manu" titleStyle={{ fontSize: 32, textAlign: 'center', fontWeight: 'bold', color: '#6A040F' }} />
            <Card style={{
                marginHorizontal: 25, borderRadius: 20,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 6.84,
                elevation: 5
            }}>
                    <Card.Cover style={{width: '100%', height: 220}} source={require('../assets/images/pizzeria-home.jpg')} />
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
                    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: '#EBE8E8' }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 15 }}>
                                <Title style={{ fontSize: 25, fontWeight: 'bold', color: '#6A040F' }}>A propos</Title>
                                <Paragraph style={{ color: 'gray', fontSize: 20 }}>La Pizza de Manu est situé au Havre, à deux pas du centre ville.</Paragraph>

                            </View>

                        </View>
                        <View style={{ flex: 1, backgroundColor: '#FFBA08' }}>
                            <Card.Cover style={{ marginRight: 25, borderWidth: 3, width: 180, height: 110 }} source={require('../assets/images/centreville.jpg')} />
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}

export default HomeScreen
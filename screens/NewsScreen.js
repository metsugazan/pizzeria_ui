
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

NewsScreen = ({navigation}) => {
    return (
        <ScrollView style={{ backgroundColor: '#ECEDCB' }}>
            <Card style={{
                marginHorizontal: 15, borderRadius: 20, backgroundColor: '#FFBA08', height: 200,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 6.84,
                elevation: 5
            }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 2 }}>
                        <Title style={{ fontSize: 20, fontWeight: 'bold', color: '#6A040F', marginTop: 10, marginLeft: 15 }}>Mangez saint </Title>
                        <Title style={{ fontSize: 20, fontWeight: 'bold', color: '#6A040F', marginLeft: 15 }}>dans notre pizzeria !</Title>

                    </View>
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, marginTop: 10 }}>
                    <View style={{ flex: 1 }}></View>

                    <Card.Cover style={{ width: '100%', height: '100%', flex: 1.55, marginRight: 10, backgroundColor: 'none' }} source={require('../assets/images/junk3.png')} />

                </View>
                <View style={{ flexDirection: 'row', flex: 1, alignContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')} style={styles.btn}><Text style={{ color: '#E85D04', textAlign: 'center', fontWeight: 'bold', lineHeight: 24 }}>Voir nos réalisations</Text></TouchableOpacity>
                </View>
            </Card>

            <Card.Title title="Populaire" titleStyle={{ fontSize: 22, marginLeft: 15, fontWeight: 'bold', color: '#6A040F' }} />
            {/*left*/}
            <View style={{ flexDirection: 'row', flex: 1, height: 270, }}>
                <View style={{
                    flex: 1, backgroundColor: '#FFF', borderRadius: 10, marginHorizontal: 15, shadowColor: 'black',
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 6.84,
                    elevation: 5
                }}>
                    <Title style={{ fontSize: 20, fontWeight: 'bold', color: '#6A040F', marginTop: 10, textAlign: 'center' }}>Hut Sushi</Title>
                    <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>La base</Paragraph>
                    <Card.Cover style={{ width: '60%', height: 120, backgroundColor: 'none', alignSelf: 'center', marginTop: 15 }} source={require('../assets/images/pizza1.png')} />
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20, textAlign: 'right', marginRight: 10 }}>8 <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#E85D04' }}>€</Text> <Icon name='add-circle' size={34} style={{ color: "#E85D04" }} /></Text>
                </View>

                {/*right*/}
                <View style={{ flex: 1 }}>
                    <View style={{
                        flex: 1, backgroundColor: '#FFF', borderRadius: 10, marginHorizontal: 15, marginBottom: 10, shadowColor: 'black',
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 6.84,
                        elevation: 5
                    }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Card.Cover style={{ width: '73%', height: 50, backgroundColor: 'none', alignSelf: 'center', marginTop: 40 }} source={require('../assets/images/pizza1.png')} />
                            </View>
                            <View style={{ flex: 1.60 }}>
                                <View style={{ flex: 1 }}>
                                    <Title style={{ fontSize: 14, fontWeight: 'bold', color: '#6A040F', marginTop: 5, textAlign: 'center', marginRight: 10 }}>Hut Sushi</Title>
                                    <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 12, textAlign: 'center', marginRight: 10 }}>box right top </Paragraph>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10, textAlign: 'right', marginRight: 10 }}>8 <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#E85D04' }}>€</Text></Text>
                                    <Icon name='add-circle' size={24} style={{ color: "#E85D04", textAlign: 'right', marginRight: 10 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flex: 1, backgroundColor: '#FFF', borderRadius: 10, marginHorizontal: 15, marginBottom: 10, shadowColor: 'black',
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 6.84,
                        elevation: 5
                    }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                <Card.Cover style={{ width: '73%', height: 50, backgroundColor: 'none', alignSelf: 'center', marginTop: 40 }} source={require('../assets/images/pizza1.png')} />
                            </View>
                            <View style={{ flex: 1.60 }}>
                                <View style={{ flex: 1 }}>
                                    <Title style={{ fontSize: 14, fontWeight: 'bold', color: '#6A040F', marginTop: 5, textAlign: 'center', marginRight: 10 }}>Hut Sushi</Title>
                                    <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 12, textAlign: 'center', marginRight: 10 }}>box right top </Paragraph>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10, textAlign: 'right', marginRight: 10 }}>8 <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#E85D04' }}>€</Text></Text>
                                    <Icon name='add-circle' size={24} style={{ color: "#E85D04", textAlign: 'right', marginRight: 10 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>


            <Card.Title title="Pizza du moment" titleStyle={{ fontSize: 22, marginLeft: 15, fontWeight: 'bold', color: '#6A040F' }} />
            <Card style={{
                marginHorizontal: 15, borderRadius: 20, backgroundColor: '#FFBA08', height: 180, marginBottom: 20,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.25,
                shadowRadius: 6.84,
                elevation: 5
            }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 1 }}>
                    <Card.Cover style={{ width: '100%', height: 160, margin:10, borderRadius: 20 }} source={require('../assets/images/pizza-normande.jpg')} />

                    </View>
                    <View style={{ flex: 1.50 }}>
                        <View style={{ flex: 1.50 }}>
                        <Title style={{ fontSize: 18, fontWeight: 'bold', color: '#6A040F', marginTop: 5, textAlign: 'center', marginRight: 10 }}>La Normande</Title>
                        <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 16, textAlign: 'center', marginRight: 10 }}>Pizza à base de crème fraiche et de camembert</Paragraph>

                        </View>
                        <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10, textAlign: 'right', marginRight: 20 }}>8 <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#E85D04' }}>€</Text></Text>
                        <Icon name='add-circle' size={24} style={{ color: "#E85D04", textAlign: 'right', marginRight: 20 }} />
                        </View>
                    </View>
                </View>
            </Card>
        </ScrollView>
    );
}

export default NewsScreen



const styles = StyleSheet.create({

    btn: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5,
        borderRadius: 15,
        height: 26,
        width: '50%',
        marginLeft: 15,

    },
});
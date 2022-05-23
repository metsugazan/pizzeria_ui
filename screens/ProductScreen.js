import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { Card, Title, Paragraph, Actions, Button, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

ProductScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={{ flex: 1, backgroundColor: '#ECEDCB' }}>
            <Searchbar
                placeholder="Rechercher"
                onChangeText={onChangeSearch}
                style={{ flexDirection: 'row-reverse', borderRadius: 30, backgroundColor: '#FEFFE2' }}
                value={searchQuery}
            />
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 70, marginVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.filter}><Text style={styles.txtfilter}>Salée</Text></TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.filter2}><Text style={styles.txtfilter}>Sucrée</Text></TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.filter}><Text style={styles.txtfilter}>Vegan</Text></TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, marginLeft: 15, flexDirection: 'row-reverse' }}>
                        <Icon name='filter' size={24} />
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
                    backgroundColor: '#FAA307'
                }}>

                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 1.1, marginRight: 35, alignItems: 'center' }}>
                            <Card.Cover style={{
                                borderColor: '#FFBA08',
                                width: 170,
                                height: 100,
                                borderRadius: 8,
                            }} source={require('../assets/images/pizza-normande.jpg')} />
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1.2 }}>
                            <View style={{ flex: 3, justifyContent: 'center' }}>
                                <Title style={{ fontSize: 22, fontWeight: 'bold', color: '#6A040F' }}>La Normande</Title>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', marginRight: 5 }}>
                                <TouchableOpacity><Icon name='chevron-right' size={50} style={{ color: '#6A040F' }} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </Card>


            </ScrollView>
        </View>
    );
}

export default ProductScreen


const styles = StyleSheet.create({
    filter: {
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5,
        backgroundColor: '#FAA307',
        borderRadius: 5,
        marginHorizontal: 10
    },
    filter2: {
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        elevation: 5,
        backgroundColor: '#FFBA08',
        borderRadius: 5,
        marginHorizontal: 10
    },
    txtfilter: {
        color: '#6A040F',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});
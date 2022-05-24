
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomTitle from './CustomTitle';
import CustomImage from './CustomImage';

const ListComponent = (props) => {
    const { data } = props
    return data.map((item, index) => {
        return (
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
                        <CustomImage source={item.img} />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1.2 }}>
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <CustomTitle title={item.title} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', marginRight: 5 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Details')}><Icon name='chevron-right' size={50} style={{ color: '#6A040F' }} /></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Card>
        )
    })
}

export default ListComponent

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        width: '100%',
        marginVertical: 5,
    },
    bloc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftBloc: {
        flex: 1,
    },
    rightBloc: {
        flex: 1,
        padding: 10,
    },
})
import * as React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';


export default function ProductOneScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ECEDCB' }}>
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
        <Card.Cover style={{
          borderColor: '#FFBA08',
          width: '100%',
          height: 200,
          borderRadius: 8,
        }} source={require('../assets/images/pizza-normande.jpg')} />
        <Card.Content>

          <Title style={{ fontSize: 22, fontWeight: 'bold', color: '#6A040F' }}>Titre</Title>
          <Paragraph style={{ color: '#9D0208', fontWeight: 'bold', fontSize: 16, textAlign: 'justify', marginRight: 15 }}>Description
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Vivamus ac dolor vitae metus
            vulputate finibus.
            Suspendisse potenti.
            Nullam nec ultrices justo.
            Proin aliquam convallis iaculis.
            Etiam varius facilisis elit
            consectetur lobortis.</Paragraph>

        </Card.Content>
      </Card>
    </ScrollView>
  );
}


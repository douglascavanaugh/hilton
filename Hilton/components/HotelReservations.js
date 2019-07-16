import React from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

import { WaterFrontBeachImage } from './../assets/images';

import styles from './styles/Styles';

import PostReservationMutation from '../data/mutations/PostReservationMutation';

const HotelReservations = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.cardReservationsStyle}>
          <Card.Title title="Book Your Room Now:" left={(props) => <Avatar.Icon {...props} icon="hotel" />} />
          <Card.Cover
            source={WaterFrontBeachImage}
            resizeMode="contain"
            style={styles.reservationImageContainer}
          />
          <PostReservationMutation navigation={navigation} />
        </Card>
      </ScrollView>
    </View>
  );
};

export default HotelReservations;

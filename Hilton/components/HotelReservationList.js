import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Avatar, Card, Paragraph } from 'react-native-paper';

import styles from './styles/Styles';

import GetHotelsQuery from '../data/queries/GetHotelsQuery';

const HotelList = ({ navigation }) => {

  return (
    <Fragment>
      <View style={styles.container}>
        <Card style={styles.cardStyle}>
          <Card.Title title="Hilton Honors - 5 Star Hotels" left={(props) => <Avatar.Icon {...props} icon="flight" />} />
          <Paragraph style={styles.cardStyleText}>
            Select a hotel and start planning your getaway with our latest travel packages and exclusive discounts.
          </Paragraph>
        </Card>
        <GetHotelsQuery navigation={navigation} />
      </View>
    </Fragment>
  );
};

export default HotelList;

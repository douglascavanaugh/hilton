import React, { Fragment } from 'react';
import { Platform, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

import { LobbyImage } from './../assets/images';

import styles from './styles/Styles';

import GetHotelDetailsQuery from '../data/queries/GetHotelDetailsQuery';

const HotelDetails = ({ navigation }) => {
  const platformCardStyle = Platform.select({
    ios: styles.cardDetailsiOSStyle,
    android: styles.cardDetailsAndroidStyle
  });

  return (
    <Fragment>
      <View style={styles.container}>
        <Card style={platformCardStyle}>
          <Card.Title title="Checkin Details:" left={(props) => <Avatar.Icon {...props} icon="hotel" />} />
          <Card.Cover
            source={LobbyImage}
            resizeMode="contain"
          />
          <GetHotelDetailsQuery navigation={navigation} />
        </Card>
      </View>
    </Fragment>
  );
};

export default HotelDetails;

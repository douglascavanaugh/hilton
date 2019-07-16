import React, { Fragment } from 'react';
import { FlatList, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { graphql } from 'react-apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { HonoluluImage } from './../../assets/images';

import styles from './../../components/styles/Styles';

const GET_HOTELS_QUERY = gql`
  {
    reservations(first: 25) {
      id
      hotelName
      name
      arrivalDate
      departureDate
    }
  }
`;

const GetHotelsQuery = ({ navigation }) => (
  <Query
    query={GET_HOTELS_QUERY}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text style={styles.loading}>Loading...</Text>;
      if (error) return <Text>Error: {error.message}</Text>;

      return (
        <Fragment>
          <FlatList
            data={data.reservations}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <View key={item.id}>
                <Card
                  style={styles.cardItem}
                  onPress={() => navigation.navigate('HotelReservations', {
                    item: item
                  })}>
                  <Card.Content style={styles.hotelListTopContainer}>
                    <Card.Cover
                      source={HonoluluImage}
                      resizeMode="contain"
                      style={styles.hotelListImageContainer}
                    />
                    <View style={styles.hotelListContainer}>
                      <View style={styles.hotelListTitle}>
                        <Text style={styles.hotelListTitleText}>
                          {item.hotelName}
                        </Text>
                      </View>
                      <View style={styles.hotelListRatingDetails}>
                        <Text style={styles.hotelListRating}>5.0</Text>
                        <Icon name="star" style={styles.hotelListRatingStar} />
                        <Icon name="star" style={styles.hotelListRatingStar} />
                        <Icon name="star" style={styles.hotelListRatingStar} />
                        <Icon name="star" style={styles.hotelListRatingStar} />
                        <Icon name="star" style={styles.hotelListRatingStar} />
                        <Text style={styles.hotelListRatingVotes}>(3,479)</Text>
                      </View>
                      <View style={styles.hotelListAmenitiesDetails}>
                        <Text>Free Breakfast</Text>
                      </View>
                      <View style={styles.hotelListAmenitiesDetails}>
                        <Text>Free WIFI</Text>
                      </View>
                    </View>
                  </Card.Content>
                </Card>
              </View>
            }
          />
        </Fragment>
      );
    }}
  </Query>
);

export default graphql(GET_HOTELS_QUERY)(GetHotelsQuery);

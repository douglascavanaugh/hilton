import React from "react";
import { View, Text } from "react-native";
import { Button, Divider } from 'react-native-paper';
import { graphql } from "react-apollo";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./../../components/styles/Styles";

const GET_HOTEL_QUERY = gql`
  query HotelDetails($id: ID!) {
    reservation(where: { id: $id }) {
      id
      hotelName
      name
      departureDate
      arrivalDate
  	}
  }
`;

const GetHotelQuery = ({ navigation }) => (

  <Query
    query={GET_HOTEL_QUERY}
    variables={{
      id: navigation.state.params.item
    }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error: {error.message}</Text>;
      const { id, hotelName, name, arrivalDate, departureDate } = data.reservation;

      backToHotelList = () => {
        navigation.navigate('HotelReservationList')
      }

      return (
        <View style={styles.hotelDetailsContainer}>
          <View style={styles.hotelDetailsTitle}>
            <Text style={styles.hotelDetailsTitleText}>
              {hotelName}
            </Text>
          </View>
          <View style={styles.hotelDetailsRatingDetails}>
            <Text style={styles.hotelDetailsRating}>5.0</Text>
            <Icon name="star" style={styles.hotelDetailsRatingStar} />
            <Icon name="star" style={styles.hotelDetailsRatingStar} />
            <Icon name="star" style={styles.hotelDetailsRatingStar} />
            <Icon name="star" style={styles.hotelDetailsRatingStar} />
            <Icon name="star" style={styles.hotelDetailsRatingStar} />
            <Text style={styles.hotelDetailsRatingVotes}>(3,479)</Text>
          </View>
          <View>
            <Text>
              Guest Name: <Text style={styles.bold}>{name}</Text>
            </Text>
          </View>
          <View>
            <Text>
              Guest Arrival Date: <Text style={styles.bold}>{arrivalDate}</Text>
            </Text>
          </View>
          <View>
            <Text>
              Guest Departure Date: <Text style={styles.bold}>{departureDate}</Text>
            </Text>
          </View>
          <View style={styles.hotelAmenitiesDetailsTitle}>
            <Text style={styles.bold}>Amenities:</Text>
          </View>
          <View style={styles.hotelAmenitiesDetails}>
            <Text>Free Breakfast</Text>
          </View>
          <View style={styles.hotelAmenitiesDetails}>
            <Text>Free WIFI</Text>
          </View>
          <Button
            mode="contained"
            onPress={backToHotelList}
            style={styles.hotelHomeButton}
          >
            Done
        </Button>
        </View>
      );
    }}
  </Query>
);

export default graphql(GET_HOTEL_QUERY)(GetHotelQuery);
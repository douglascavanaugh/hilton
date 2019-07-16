import React, { useState } from 'react';
import { Text } from "react-native";
import { graphql } from "react-apollo";
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";

import ReservationForm from '../../elements/ReservationForm';

const POST_RESERVATION_MUTATION = gql`
  mutation postReservation($id: ID!, $hotelName: String!, $name: String!, $arrivalDate: String!, $departureDate: String!) {
    createReservation(data: {id: $id, hotelName: $hotelName, name: $name, arrivalDate: $arrivalDate, departureDate: $departureDate})
    {
      id
    }
  }
`;

const PostReservationMutation = ({ navigation }) => {

  return (
    <Mutation mutation={POST_RESERVATION_MUTATION}>
      {(insertReservation, { loading, error }) => {
        newReservation = ({ id, hotelName, name, dateRange }) => {
          if (loading) return console.log('Loading...');
          if (error) return console.log('HEY Heres the Error: ', error.message);
          insertReservation({
            variables: {
              id: id,
              hotelName: hotelName,
              name: name,
              arrivalDate: dateRange.startDate,
              departureDate: dateRange.endDate
            }
          });
          navigation.navigate('HotelReservationDetails', {
            item: id
          });
        }
        return (
          <ReservationForm onSubmit={newReservation} navigation={navigation} />
        );
      }}
    </Mutation>
  );
};

export default graphql(POST_RESERVATION_MUTATION)(PostReservationMutation);

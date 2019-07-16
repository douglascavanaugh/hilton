import { createStackNavigator, createAppContainer } from 'react-navigation';

import HotelReservationList from './../components/HotelReservationList';
import HotelReservations from './../components/HotelReservations';
import HotelReservationDetails from './../components/HotelReservationDetails';

import navStyles from './styles/Styles';

const MainStack = createStackNavigator({
  HotelReservationList: {
    screen: HotelReservationList,
    navigationOptions: () => ({
      title: 'Hilton Listings',
      headerBackTitle: null,
      ...navStyles
    })
  },
  HotelReservations: {
    screen: HotelReservations,
    navigationOptions: () => ({
      title: 'Hilton Reservations',
      headerBackTitle: null,
      ...navStyles
    })
  },
  HotelReservationDetails: {
    screen: HotelReservationDetails,
    navigationOptions: () => ({
      title: 'Hilton Reservation Details',
      headerBackTitle: null,
      headerLeft: null,
      ...navStyles
    })
  },
  initialRouteName: 'HotelReservationList'
});

export default createAppContainer(MainStack);

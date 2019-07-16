import { StyleSheet } from "react-native";

export default StyleSheet.create({
  loading: {
    position: 'absolute',
    top: '50%',
    left: '40%',
    fontSize: 24
  },
  container: {
    backgroundColor: "#ebebeb",
    padding: 8,
    height: '100%'
  },
  cardStyle: {
    height: 120,
    marginBottom: 10
  },
  cardDetailsiOSStyle: {
    height: '80%',
    marginBottom: 10
  },
  cardDetailsAndroidStyle: {
    height: '100%',
    marginBottom: 10
  },
  cardReservationsStyle: {
    height: '100%',
    marginBottom: 10
  },
  cardStyleText: {
    flexDirection: "row",
    marginTop: -8,
    paddingLeft: 20
  },
  cardItem: {
    marginBottom: 10,
    padding: 0,
    height: 124,
    borderRadius: 10,
  },
  hotelListTopContainer: {
    flexDirection: "row",
    height: 124,
    width: '100%',
    margin: -16
  },
  hotelListImageContainer: {
    flexDirection: "column",
    height: 124,
    width: '45%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  reservationImageContainer: {
    flexDirection: "column",
    padding: 8
  },
  hotelListContainer: {
    flexDirection: "column",
    height: 124,
    width: '55%',
    paddingTop: 5,
    paddingLeft: 10
  },
  hotelDetailsContainer: {
    flexDirection: "column",
    height: '100%',
    width: '100%',
    paddingTop: 5,
    paddingLeft: 10
  },
  hotelListTitle: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 52
  },
  hotelDetailsTitle: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 50
  },
  hotelListTitleText: {
    fontWeight: '500',
    fontSize: 14
  },
  hotelDetailsTitleText: {
    fontWeight: '500',
    fontSize: 20
  },
  hotelListRatingDetails: {
    flexDirection: "row",
    width: "100%",
    fontSize: 14,
    height: 25
  },
  hotelDetailsRatingDetails: {
    flexDirection: "row",
    width: "100%",
    fontSize: 14,
    height: 25
  },
  hotelListRating: {
    flexDirection: "column",
    fontSize: 14,
    color: "#e5712b"
  },
  hotelDetailsRating: {
    flexDirection: "column",
    fontSize: 14,
    color: "#e5712b"
  },
  hotelListRatingStar: {
    flexDirection: "column",
    fontSize: 17,
    color: "#e5712b"
  },
  hotelDetailsRatingStar: {
    flexDirection: "column",
    fontSize: 17,
    color: "#e5712b"
  },
  hotelListRatingVotes: {
    flexDirection: "column"
  },
  hotelDetailsRatingVotes: {
    flexDirection: "column"
  },
  hotelAmenitiesDetailsTitle: {
    flexDirection: "row",
    paddingTop: 10
  },
  hotelListAmenitiesDetails: {
    flexDirection: "row",
    width: "100%",
    fontSize: 12
  },
  hotelDetailsAmenitiesDetails: {
    flexDirection: "row",
    width: "100%",
    fontSize: 12
  },
  bold: {
    fontWeight: '700',
  },
  hotelHomeButton: {
    marginTop: 40,
    fontWeight: '800',
    width: 150,
    left: '28%'
  },
});

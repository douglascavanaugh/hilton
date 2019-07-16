import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 375
  },
  titleContainer: {
    padding: 10
  },
  textInput: {
    backgroundColor: '#ffffff',
    fontSize: 18,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d6d7da'
  },
  reservationTitle: {
    fontWeight: '500',
    fontSize: 16,
    paddingBottom: 10
  },
  reservationValues: {
    fontWeight: '100',
    fontSize: 14
  },
  reservationDatePicker: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#d6d7da'
  },
  reservationButtion: {
    marginTop: 30,
    fontWeight: '800',
    width: 150,
    left: '29%'
  },
  reservationDialog: {
    fontWeight: '700',
  }
});
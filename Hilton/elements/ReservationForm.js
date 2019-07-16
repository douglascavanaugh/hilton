import React, { Fragment, useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import DatePicker from 'react-native-daterange';
import { ConfirmDialog } from 'react-native-simple-dialogs';

import styles from './styles/Styles';

const ReservationForm = ({ navigation, onSubmit }) => {

  const [hotelName] = useState(navigation.state.params.item.hotelName);
  const [guestName, setGuestName] = useState('');
  const [dateDuration, setDateDuration] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  submitForm = () => {
    onSubmit({
      id: Math.random().toString(36).slice(2),
      hotelName: hotelName,
      name: guestName,
      dateRange: dateDuration
    })
  };

  validateForm = () => {
    guestName === '' || Object.keys(dateDuration).length < 1
      ? showErrorModalDialog()
      : submitForm()
  }

  showErrorModalDialog = () => {
    setShowModal(true);
    setModalMessage('Error:  You need to provide a Guest Name and select a Date Range to continue!');
  }

  hideModalDialog = () => {
    setShowModal(false)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Fragment>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.reservationTitle}>Hotel Name:</Text>
            <Text style={styles.reservationValues}>{hotelName}</Text>
          </View>
          <Divider />
          <View style={styles.titleContainer}>
            <Text style={styles.reservationTitle}>Full Name:</Text>
            {/* TODO: Separate out into it's own Element */}
            <TextInput
              style={styles.textInput}
              onChangeText={guestName => setGuestName(guestName)}
              value={guestName}
              placeholder="Enter Your Name"
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.reservationTitle}>Select the dates of your stay:</Text>
            {/* TODO: Separate out into it's own Element for reuse */}
            <DatePicker
              style={styles.reservationDatePicker}
              customStyles={{
                placeholderText: { fontSize: 18 },
                contentText: { fontSize: 18 }
              }}
              placeholder={'Select your Date Range...'}
              selectedBgColor='#3f51b5'
              selectedTextColor='white'
              onConfirm={date => setDateDuration(date)}
              returnFormat='MM/DD/YYYY'
              blockBefore='true'
              mode='range'
            />
          </View>
          {/* TODO: Separate out into it's own Element for reuse */}
          <Button
            mode="contained"
            onPress={validateForm}
            style={styles.reservationButton}
          >
            Reserve Now
          </Button>
        </View>
        {/* TODO: Separate out into it's own Element for reuse */}
        <ConfirmDialog
          title="Confirm Dialog"
          titleStyle={styles.reservationDialog}
          message="Are you sure about that?"
          visible={showModal}
          onTouchOutside={hideModalDialog}
          positiveButton={{
            title: 'Close',
            onPress: () => hideModalDialog()
          }}
        >
          <View>
            <Text>
              {modalMessage}
            </Text>
          </View>
        </ConfirmDialog>
      </Fragment>
    </KeyboardAvoidingView>
  );
};

export default ReservationForm;
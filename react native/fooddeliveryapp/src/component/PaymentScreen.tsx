import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const PRIMARY = '#FF5A5F';

export default function PaymentScreen() {
  const [selected, setSelected] = useState('visa');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}

        <Text style={styles.heading}>
          Payment Method
        </Text>

        {/* Total Amount */}

        <View style={styles.amountCard}>
          <Text style={styles.amountLabel}>
            Total Payment
          </Text>

          <Text style={styles.amount}>
            $18.19
          </Text>
        </View>

        {/* VISA CARD */}

        <TouchableOpacity
          style={[
            styles.cardContainer,
            selected === 'visa' &&
              styles.selectedCard,
          ]}
          onPress={() => setSelected('visa')}>
          <View style={styles.cardTop}>
            <Text style={styles.cardType}>
              VISA
            </Text>

            <View style={styles.radioOuter}>
              {selected === 'visa' && (
                <View
                  style={styles.radioInner}
                />
              )}
            </View>
          </View>

          <Text style={styles.cardNumber}>
            **** **** **** 1234
          </Text>

          <View style={styles.cardBottom}>
            <Text style={styles.cardName}>
              John Doe
            </Text>

            <Text style={styles.cardExpiry}>
              12/28
            </Text>
          </View>
        </TouchableOpacity>

        {/* MasterCard */}

        <TouchableOpacity
          style={[
            styles.paymentOption,
            selected === 'master' &&
              styles.selectedOption,
          ]}
          onPress={() =>
            setSelected('master')
          }>
          <Text style={styles.optionText}>
            💳 Master Card
          </Text>

          <View style={styles.radioOuter}>
            {selected === 'master' && (
              <View
                style={styles.radioInner}
              />
            )}
          </View>
        </TouchableOpacity>

        {/* PayPal */}

        <TouchableOpacity
          style={[
            styles.paymentOption,
            selected === 'paypal' &&
              styles.selectedOption,
          ]}
          onPress={() =>
            setSelected('paypal')
          }>
          <Text style={styles.optionText}>
            🅿️ PayPal
          </Text>

          <View style={styles.radioOuter}>
            {selected === 'paypal' && (
              <View
                style={styles.radioInner}
              />
            )}
          </View>
        </TouchableOpacity>

        {/* Google Pay */}

        <TouchableOpacity
          style={[
            styles.paymentOption,
            selected === 'google' &&
              styles.selectedOption,
          ]}
          onPress={() =>
            setSelected('google')
          }>
          <Text style={styles.optionText}>
            🟢 Google Pay
          </Text>

          <View style={styles.radioOuter}>
            {selected === 'google' && (
              <View
                style={styles.radioInner}
              />
            )}
          </View>
        </TouchableOpacity>

        {/* Add New Card */}

        <TouchableOpacity
          style={styles.addCardBtn}>
          <Text style={styles.addCardText}>
            + Add New Card
          </Text>
        </TouchableOpacity>

        {/* Security Notice */}

        <View style={styles.securityBox}>
          <Text style={styles.securityText}>
            🔒 Your payment information is
            encrypted and secure.
          </Text>
        </View>
      </ScrollView>

      {/* Pay Button */}

      <TouchableOpacity
        style={styles.payBtn}>
        <Text style={styles.payText}>
          Pay $18.19
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },

  heading: {
    fontSize: 28,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  amountCard: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 25,
    elevation: 4,
  },

  amountLabel: {
    color: '#888',
    fontSize: 14,
  },

  amount: {
    fontSize: 32,
    fontWeight: '700',
    color: PRIMARY,
    marginTop: 5,
  },

  cardContainer: {
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 22,
    backgroundColor: PRIMARY,
    marginBottom: 20,
  },

  selectedCard: {
    borderWidth: 3,
    borderColor: '#fff',
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardType: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  cardNumber: {
    color: '#fff',
    fontSize: 22,
    letterSpacing: 2,
    marginVertical: 25,
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardName: {
    color: '#fff',
    fontWeight: '600',
  },

  cardExpiry: {
    color: '#fff',
    fontWeight: '600',
  },

  paymentOption: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  selectedOption: {
    borderWidth: 2,
    borderColor: PRIMARY,
  },

  optionText: {
    fontSize: 16,
    fontWeight: '600',
  },

  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: PRIMARY,
  },

  addCardBtn: {
    marginHorizontal: 20,
    marginTop: 10,
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: PRIMARY,
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  addCardText: {
    color: PRIMARY,
    fontWeight: '700',
  },

  securityBox: {
    margin: 20,
    backgroundColor: '#FFF5F5',
    padding: 16,
    borderRadius: 16,
  },

  securityText: {
    color: '#555',
    textAlign: 'center',
  },

  payBtn: {
    backgroundColor: PRIMARY,
    margin: 20,
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  payText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});
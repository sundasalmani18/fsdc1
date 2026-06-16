import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function CartScreen() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Cheese Burger',
      price: 8.99,
      qty: 2,
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    },
    {
      id: '2',
      name: 'Chicken Burger',
      price: 10.99,
      qty: 1,
      image:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500',
    },
  ]);

  const updateQty = (id, action) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            qty:
              action === 'inc'
                ? item.qty + 1
                : Math.max(1, item.qty - 1),
          };
        }
        return item;
      }),
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  const renderItem = ({ item }) => (
    <View style={styles.cartCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <View style={{ flex: 1 }}>
        <Text style={styles.itemName}>
          {item.name}
        </Text>

        <Text style={styles.itemPrice}>
          ${item.price.toFixed(2)}
        </Text>

        <View style={styles.qtyContainer}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() =>
              updateQty(item.id, 'dec')
            }>
            <Text style={styles.qtyText}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qtyValue}>
            {item.qty}
          </Text>

          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() =>
              updateQty(item.id, 'inc')
            }>
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        My Cart
      </Text>

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>
          Order Summary
        </Text>

        <View style={styles.row}>
          <Text>Subtotal</Text>
          <Text>${subtotal.toFixed(2)}</Text>
        </View>

        <View style={styles.row}>
          <Text>Delivery Fee</Text>
          <Text>${deliveryFee.toFixed(2)}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.totalLabel}>
            Total
          </Text>

          <Text style={styles.totalPrice}>
            ${total.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>
            Proceed To Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = '#FF3B5C';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: '700',
    marginVertical: 20,
    color: '#111',
  },

  cartCard: {
    backgroundColor: '#fff',
    borderRadius: 22,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 18,
    marginRight: 15,
  },

  itemName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
  },

  itemPrice: {
    fontSize: 18,
    color: PRIMARY,
    fontWeight: '700',
    marginTop: 8,
  },

  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  qtyBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  qtyValue: {
    fontSize: 16,
    fontWeight: '700',
    marginHorizontal: 15,
  },

  summaryCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },

  summaryTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: 15,
  },

  totalLabel: {
    fontSize: 20,
    fontWeight: '700',
  },

  totalPrice: {
    fontSize: 22,
    fontWeight: '700',
    color: PRIMARY,
  },

  checkoutBtn: {
    backgroundColor: PRIMARY,
    borderRadius: 18,
    marginTop: 25,
    paddingVertical: 16,
    alignItems: 'center',
  },

  checkoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
  },
});
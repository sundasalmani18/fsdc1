// import { View, Text, } from 'react-native'
// import { Appbar } from 'react-native-paper';
// import React from 'react'
// import { Platform } from 'react-native';



// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
// const Paperexample = () => {
//   return (
  
//       <Appbar.Header>
//      <Appbar.Content title="Title" subtitle={'Subtitle'} />
//       <Appbar.Action icon="magnify" onPress={() => {}} />
//       <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
//   </Appbar.Header>
  
//   )
// }

// export default Paperexample




import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const foods = [
  {
    id: 1,
    name: 'Cheese Burger',
    price: '$12.99',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200',
  },
  {
    id: 2,
    name: 'Italian Pizza',
    price: '$18.50',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200',
  },
];

export default function Paperexample() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>Deliver To</Text>
            <Text style={styles.location}>karachi,Pakistan📍</Text>
          </View>

          <Image
            source={{
              uri: 'https://i.pravatar.cc/150?img=12',
            }}
            style={styles.avatar}
          />
        </View>

        {/* HERO */}
        <View style={styles.hero}>
          <View style={{ flex: 1 }}>
            <Text style={styles.heroTitle}>
              Fast Delivery {'\n'}
              at your doorstep
            </Text>

            <Text style={styles.heroSubtitle}>
              Home delivery & online reservation system for restaurants
            </Text>

            <TouchableOpacity style={styles.heroButton}>
              <Text style={styles.heroButtonText}>
                Order Now
              </Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5787/5787016.png',
            }}
            style={styles.heroImage}
          />
        </View>

        {/* SEARCH */}
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="Search your favorite food"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        {/* CATEGORIES */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 20 }}
        >
          {['🍔 Burger', '🍕 Pizza', '🥤 Drinks', '🍰 Dessert'].map(
            (item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryCard}
              >
                <Text style={styles.categoryText}>{item}</Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>

        {/* POPULAR */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Popular Foods</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        {foods.map(food => (
          <View key={food.id} style={styles.foodCard}>
            <Image
              source={{ uri: food.image }}
              style={styles.foodImage}
            />

            <View style={styles.foodContent}>
              <View>
                <Text style={styles.foodName}>
                  {food.name}
                </Text>

                <Text style={styles.foodDescription}>
                  Delicious & hot food with fast delivery
                </Text>
              </View>

              <View style={styles.foodFooter}>
                <Text style={styles.foodPrice}>
                  {food.price}
                </Text>

                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  smallText: {
    color: '#888',
    fontSize: 14,
  },

  location: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
    marginTop: 3,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },

  hero: {
    marginTop: 25,
    backgroundColor: '#FF6B35',
    borderRadius: 30,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },

  heroTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 38,
  },

  heroSubtitle: {
    color: '#FFE5DB',
    marginTop: 10,
    lineHeight: 22,
    width: 180,
  },

  heroButton: {
    marginTop: 20,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 16,
  },

  heroButtonText: {
    color: '#FF6B35',
    fontWeight: '700',
  },

  heroImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },

  searchWrapper: {
    marginVertical: 25,
  },

  searchInput: {
    backgroundColor: '#F4F4F4',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 15,
    fontSize: 16,
    color: '#111',
  },

  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
  },

  seeAll: {
    color: '#FF6B35',
    fontWeight: '600',
  },

  categoryCard: {
    backgroundColor: '#FFF2EC',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 18,
    marginRight: 12,
  },

  categoryText: {
    color: '#FF6B35',
    fontWeight: '700',
  },

  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    marginBottom: 22,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 4,
  },

  foodImage: {
    width: '100%',
    height: 190,
  },

  foodContent: {
    padding: 18,
  },

  foodName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },

  foodDescription: {
    marginTop: 6,
    color: '#777',
    lineHeight: 22,
  },

  foodFooter: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  foodPrice: {
    fontSize: 24,
    color: '#FF6B35',
    fontWeight: '800',
  },

  addButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
});
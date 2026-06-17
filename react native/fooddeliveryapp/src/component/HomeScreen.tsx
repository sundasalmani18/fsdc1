import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const categories = [
  'Burger',
  'Pizza',
  'Drinks',
  'Fries',
];

const burgers = [
  {
    id: '1',
    name: 'Cheese Burger',
    price: 'Rs:400',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
  },
  {
    id: '2',
    name: 'Chicken Burger',
    price: 'Rs:200',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500',
  },
  {
    id: '3',
    name: 'Double Burger',
    price: 'Rs:800',
    image:
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500',
  },
  {
    id: '4',
    name: 'Veg Burger',
    price: 'Rs:120',
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500',
  },
];

export default function HomeScreen() {
  const renderBurger = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.burgerImage} />

      <Text style={styles.burgerName}>{item.name}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>Foodgo</Text>
          <Text style={styles.description}>Order Your Favourite Food</Text>
        </View>

       
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search burger..."
          placeholderTextColor="#999"
        />
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <View>
          <Text style={styles.bannerTitle}>
            Get 30% OFF
          </Text>

          <Text style={styles.bannerSub}>
            On your first order
          </Text>
        </View>

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
          }}
          style={styles.bannerBurger}
        />
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>
        Categories
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryChip,
              index === 0 && styles.activeChip,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                index === 0 && {
                  color: '#fff',
                },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popular */}
      <Text style={styles.sectionTitle}>
        Popular Burgers
      </Text>

      <FlatList
        data={burgers}
        renderItem={renderBurger}
        keyExtractor={item => item.id}
        numColumns={2}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  appName: {
     fontSize: 24,
    fontWeight: '700',
    marginTop: 4,
  },

  description: {
  color: '#777',
    fontSize: 14,
  },
   



  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginTop: 20,
    paddingHorizontal: 15,
    elevation: 3,
  },

  banner: {
    backgroundColor: '#FF3B5C',
    marginTop: 20,
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bannerTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },

  bannerSub: {
    color: '#fff',
    marginTop: 5,
  },

  bannerBurger: {
    width: 80,
    height: 80,
  },

  sectionTitle: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: '700',
  },

  categoryChip: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  activeChip: {
    backgroundColor: '#FF3B5C',
  },

  categoryText: {
    fontWeight: '600',
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 24,
    padding: 15,
    elevation: 4,
  },

  burgerImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },

  burgerName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '700',
  },

  priceRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF3B5C',
  },

  addBtn: {
    width: 34,
    height: 34,
    backgroundColor: '#FF3B5C',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
});
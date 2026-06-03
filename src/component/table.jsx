import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
// import favicon from './assets/favicon.png';

const Table = () => {
   return (
    <View style={styles.container}>
      <Image
  source={require('../../assets/favicon.png')}
  style={{ width: 50, height: 50 }}
/>
       {/* <Image source={favicon} style={styles.image} /> */}
      {/* Header */}
      <View style={[styles.row, styles.header]}>
        <Text style={styles.cell}>Name</Text>
        <Text style={styles.cell}>Age</Text>
        <Text style={styles.cell}>City</Text>
      </View>

      {/* Row 1 */}
      <View style={styles.row}>
        <Text style={styles.cell}>Ali</Text>
        <Text style={styles.cell}>22</Text>
        <Text style={styles.cell}>Karachi</Text>
      </View>

      {/* Row 2 */}
      <View style={styles.row}>
        <Text style={styles.cell}>Sara</Text>
        <Text style={styles.cell}>25</Text>
        <Text style={styles.cell}>Lahore</Text>
      </View>

    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  header: {
    backgroundColor: '#f2f2f2',
  },

  cell: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
});

export default Table
import React from 'react';
import { View, Text ,Image,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = () => {
  return (
      <SafeAreaView className="flex-1" style={{backgroundColor:"black"}}>
        <View>
          <Text>
     Welcome To Cravings
          </Text>
          <Text>
            Order Your Favorite meal and enjoy taste.
          </Text>
          <Text>
            Fresh delivery -------Simple and Convinent
          </Text>
          
        </View>
      
    </SafeAreaView>
  
  );
};

export default WelcomeScreen;
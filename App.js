import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBroadScreen from './OnBroadScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Shop from './Shop';
import Cart from './Cart';
import Login from './Login';
import ProductScreen from './ProductScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from './FavoritesScreen';
import Navigation from './Navigation';
import 'react-native-gesture-handler' ;

import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Store/reducer';



const store = legacy_createStore(reducer)





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




export default function App() {
    return (
      <Provider store= {store}>
          <Navigation />
      </Provider>
     
    );

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBroadScreen from './OnBroadScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Shop from './Shop';
import Cart from './Cart';
import Profile from './Profile';
import Search from './Search';
import Bag from './Bag';
import Login from './Login';
import Register from './Register';
import FilterScreen from './FilterScreen';
import Cart2 from './Cart2';
import Cart3 from './Cart3';
import ProductScreen from './ProductScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from './FavoritesScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



const HomeStack = () => {
      return(
        <Stack.Navigator>

        <Stack.Screen
        options={{
          headerShown: false
        }}
        name='OnBroadScreen' component={OnBroadScreen} />
          <Stack.Screen
        options={{
          headerShown: false
        }}
        name='Shop' component={Shop} />
          <Stack.Screen
        options={{
          headerShown: false
        }}
        name='Cart' component={Cart} />
           <Stack.Screen
        options={{
          headerShown: false
        }}
        name='Register' component={Register} />
           <Stack.Screen
        options={{
          headerShown: false
        }}
        name='Login' component={Login} />
  
            <Stack.Screen
        options={{
          headerShown: false
        }}
        name='ProductScreen' component={ProductScreen} />
        </Stack.Navigator>
      )
}

const FavStack = () => {
  return(
    <Stack.Navigator>
           <Stack.Screen
        options={{
          headerShown: false
        }}
        name='FavoritesScreen' component={FavoritesScreen} />
    </Stack.Navigator>
  )
}

const SearchStack = () => {
  return(
    <Stack.Navigator>
           <Stack.Screen
        options={{
          headerShown: false
        }}
        name='Search' component={Search} />
    </Stack.Navigator>
  )
}
const BagStack = () => {
  return(
    <Stack.Navigator>
           <Stack.Screen
        options={{
          headerShown: false
        }}
        name='Bag' component={Bag} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return(
    <Stack.Navigator>
           <Stack.Screen
        options={{
          headerShown: false
        }}
        name='Profile' component={Profile} />
    </Stack.Navigator>
  )
}

const FilterStack = () => {
  return(
    <Stack.Navigator>
    <Stack.Screen
 options={{
   headerShown: false
 }}
 name='FilterScreen' component={FilterScreen} />
</Stack.Navigator>

  )
}

const ShopStack = () => {
  return(
    <Stack.Navigator>
    <Stack.Screen
 options={{
   headerShown: false
 }}
 name='ShopScreen' component={Shop} />
</Stack.Navigator>

  )
}

const LoginStack = () => {
  return(
    <Stack.Navigator>
<Stack.Screen
options={{
  headerShown: false
}}
name='Login' component={Login} />
<Stack.Screen
options={{
  headerShown: false
}}
name='Register' component={Register} />
</Stack.Navigator>

  )
}





const HTab = () => {
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomePage') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
            size = 35
        } else if (route.name === 'Search') {
          iconName = focused ? 'md-search-sharp' : 'md-search-outline';
          size = 35
        }else if (route.name === 'Favorites') {
          iconName = focused ? 'heart' : 'ios-heart-outline';
          size = 35
        }else if (route.name === 'Bag') {
          iconName = focused ? 'cart' : 'cart-outline';
          size = 35
        }else if (route.name === 'Profile') {
          iconName = focused ? 'person-sharp' : 'person-outline';
          size = 35
        }


        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
    })}
   >
    <Tab.Screen 
    name='HomePage'
    component={HomeStack}
    options={{
      headerShown: false
    }}
    />
            <Tab.Screen 
    name='Search'
    component={SearchStack}
    options={{
      headerShown: false
    }}
    />
      <Tab.Screen 
    name='Favorites'
    component={FavStack}
    options={{
      headerShown: false
    }}
    />
           <Tab.Screen 
    name='Bag'
    component={BagStack}
    options={{
      headerShown: false
    }}
    />
             <Tab.Screen 
    name='Profile'
    component={Profile}
    options={{
      headerShown: false
    }}
    />
  
   </Tab.Navigator>

  )
}



const Navigation = () => {
    return (
      <NavigationContainer>
 
       <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HTab} 
            options={{
              headerShown: false,
              
            }}
        />
        <Drawer.Screen name='Filter ' component={FilterStack}
            options={{
              headerShown: false
            }}
        />
             <Drawer.Screen name='Shop ' component={ShopStack}
            options={{
              headerShown: false
            }}
        />
              <Drawer.Screen name='Login ' component={LoginStack}
            options={{
              headerShown: false
            }}
        />
       </Drawer.Navigator>
   

      </NavigationContainer>
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

export default Navigation;



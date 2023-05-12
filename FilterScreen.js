import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList, props, route } from "react-native";
import { Divider, ListItem, Stack } from "@react-native-material/core";
import { LIST } from "./list";
import { Categories } from "./list";
import { DATA, PRODUCTS } from "./Data";
import ProductScreen from "./ProductScreen";
import { Switch } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";





const FilterScreen = (props) => {  

    const [isBandNewOn, setIsBrandNewOn] = useState(false);
    const [isSaleOffOn, setIsSaleOffOn] = useState(false);

    const dispatch = useDispatch()

    const filters = {
      isBandNewOn: isBandNewOn,
      isSaleOffOn: isSaleOffOn,
    }
    
    return(
      
        <View>
             {/* Header */}
        <View style={styles.container} >
          <TouchableOpacity
          onPress={() => props.navigation.navigate("OnBroadScreen")}
          >
          <Image
          source={require('./assets/nike-icon.png')}
          style={{height: 50, width: 150,}}
          />
          </TouchableOpacity>
        </View>


        
        <ScrollView>



            {/* Air Max */}
            
            <View style={{marginTop: 50, alignItems:'center', marginLeft: 24}}>
                <View
                >
                    <Text
                    style={{textAlign:'center', 
                    fontWeight: '900',
                    fontSize: 50
                }}
                    >FILTER</Text>
                </View>
            </View>

            <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity> 
                    <Image
          source={{uri: 'https://img.icons8.com/ios-filled/50/null/list.png'}}
          style={{height: 45, width: 50,
            marginLeft: 20
        }}
          />
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => dispatch 
            (
              {
                type: 'Filter',
                filters: filters

              }
            )
          
          }
          > 
                    <Image
          source={{uri: 'https://img.icons8.com/sf-black-filled/64/null/save.png'}}
          style={{height: 50, width: 60, marginRight: 20
            
        }}
          />
          </TouchableOpacity>
            </View>

            <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginLeft: 20, marginTop: 11, fontSize: 20, fontWeight: '600'}}> 
                SALE OFF
          </Text>

        <Switch 
        value={isSaleOffOn}
        onValueChange={(newValue) => setIsSaleOffOn(newValue)}
        style={styles.switch}

        />
    
 
            </View>

            <View style={{marginTop: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginLeft: 20, marginTop: 11, fontSize: 20, fontWeight: '600'}}> 
                BRAND NEW
          </Text>

          <Switch 
        value={isBandNewOn}
        onValueChange={(newValue) => setIsBrandNewOn(newValue)}
        style={styles.switch}

        />
    

            </View>

           

    
            
            




       
                    {/* categories */}


           
        </ScrollView>
       
        


        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30, marginLeft: 40,

        
      },
      icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
        
      },
      textft: {
        color: 'white', 
                marginTop: 20, 
                fontSize: 15, 
                fontWeight: '600',
                 marginLeft: 15,
                 
      },
      switch: {
        transform: [{ scaleX: 2.2}, {scaleY: 2.2}],
        marginRight: 50
      }
})

export default FilterScreen;
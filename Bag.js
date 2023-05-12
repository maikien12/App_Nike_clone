import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList,props, route } from "react-native";
import { Divider, ListItem, Stack, Switch } from "@react-native-material/core";
import { LIST } from "./list";
import { Categories } from "./list";
import { DATA, PRODUCTS } from "./Data";
import ProductScreen from "./ProductScreen";
import { useSelector } from "react-redux";
import { useState } from "react";




const Bag = (props) => {  

  const bagProducts = useSelector(state => state.bagProducts)
 
    // const [Quantity, setQuantity] = useState(1)


  if(bagProducts.length == 0){
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

      <Text
      style={{textAlign: 'center', justifyContent: 'center' , fontSize: 25, fontWeight: '900', marginTop: 250}}
      >NO PRODUCTS IN BAG !</Text>


      </View>
    )
  }
  else {




  return(
    
      <View style={{flex: 1}}>
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


      
  



          {/* Air Max */}
          <View style={{marginTop: 20, marginLeft: 15, marginBottom: 30}}>
              <Text style={{
                  marginTop: 15, fontSize: 30, fontWeight: '900'
              }}>Bag</Text>
          </View>



          <View style={{marginTop: 5, marginBottom: 20}}>
          <Divider leadingInset={6} color="black" />
          </View>


     



                  {/* prodcut */}

                  <FlatList 
                   data={bagProducts}
                 
                   keyExtractor={item => item.id}
                   renderItem={({item }) =>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                      <TouchableOpacity
                       onPress={() => props.navigation.navigate("Cart", {productsID: item.id}) }
                      >
                         <Image
                      source={{uri: item.image}}
                      style={{height: 200, width: 210,}}
                      />
                      </TouchableOpacity>
                 
                   <View style={{flexDirection: 'column',}}>
                      <Text
                      style={{
                        fontSize: 15, 
                        fontWeight:'900',
                        marginTop: 10,
                        color:'#E94560'
                      }}
                      >{item.fist}</Text>
                      <TouchableOpacity
                       onPress={() => props.navigation.navigate("Cart", {productsID: item.id}) }
                      >
                       <Text
                      style={{
                        fontSize: 20, 
                        fontWeight:'900',
                        marginTop: 10
                      }}
                      >{item.name}</Text>
                      </TouchableOpacity>
                       <Text
                      style={{
                        fontSize: 18, 
                      
                        marginTop: 5
                      }}
                      >{item.description}</Text>
                        <Text
                      style={{
                        fontSize: 16, 
                        fontWeight:'900',
                        color: 'grey'
                       
                      }}
                      >{item.color}</Text>
                        <Text
                      style={{
                        fontSize: 25, 
                        fontWeight:'900',
                        marginTop: 10
                      }}
                      >{item.price}</Text>
                        <Text
                      style={{
                        fontSize: 16, 
                        color: "#17B794", 
                        fontWeight: '800',
                        marginTop: 5
                       
                      }}
                      >{item.sale}</Text>

                      {/* <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                       onPress={() => setQuantity(Quantity - 1)}
                      >
                      <Text
                      style={{
                        fontSize: 30, 
                    
                      }}
                      >_</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{borderWidth: 2, width: 45, height: 35, marginTop: 13, marginLeft: 15}}>
                      <Text style={{textAlign: 'center', fontSize: 22}}>{Quantity}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={() => setQuantity(Quantity + 1)}
                      >
                      <Text
                          style={{
                            fontSize: 30,
                            marginLeft: 15,
                            marginTop: 10
                          }}
                      >+</Text>
                      </TouchableOpacity> */}
                        {/* </View> */}

                      
                  
                  </View>
                   
                   
                    </View>
                  }
                   />

{/* <View style={{marginTop: 20, marginLeft: 15, marginBottom: 30}}>
              <Text style={{
                  marginTop: 15, fontSize: 30, fontWeight: '900'
              }}>Bag</Text>
          </View> */}

                  {/* endprodcut */}
                

                  {/* categories */}
          <View style={{marginBottom: 50, marginTop: 20}}>
          <TouchableOpacity
                        style={{
                        backgroundColor: 'black',
                        height: 60,
                        borderRadius: 30,
                        width: 350,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        }}
                        >
                            <Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: '600'}}>CHECK OUT</Text>
                        </TouchableOpacity>
          </View>

          {/* <View style={{backgroundColor: 'black', marginBottom: 50, height: 580, width: "100%"}}> 
        <View style={{marginTop: 35}}>
        <TouchableOpacity>
        <Text
        style={styles.textft}>
          GIFT CARDS</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text
        style={styles.textft}>
          PROMOTION</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text
        style={styles.textft}>
          FIND A STORE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text
        style={styles.textft}>
          SIGN UP FOR EMAIL</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text
        style={styles.textft}>
          BECOME A MEMBER</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text
        style={styles.textft}>
          NIKE JOURNAL</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text
        style={styles.textft}>
          SEND UP FEEDBACK</Text>
        </TouchableOpacity>
        <Divider leadingInset={6} color="white" 
        style={{marginTop: 15}}
        />
        </View>

        <View>
          <TouchableOpacity>
        <Text
        style={styles.textft}>
          GET HELP</Text>
        </TouchableOpacity>
        
        <View style={{marginTop: 30}}>
        <TouchableOpacity>
        <Text
        style={styles.textft}>
            ABOUT NIKE</Text>
        </TouchableOpacity>
        </View>
        </View>

        <View style={{marginTop: 50, marginLeft: 300}}>
          <Text style={{color: 'white'}}> United States</Text>
          <Text style={{color: 'grey'}}>@2023 Nike, Inc, All Right Reserved </Text>
        </View>
     
        </View> */}


      </View>
     
      


     
  )
}
   
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
                 
      }
})

export default Bag;
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList,props, route,} from "react-native";
import { Divider, ListItem, Stack } from "@react-native-material/core";
import { LIST } from "./list";
import { Categories } from "./list";
import { DATA, PRODUCTS } from "./Data";
import ProductScreen from "./ProductScreen";
import { Switch } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";




const Shop = (props) => {  

  const [isPickUpOn, setIsPickupOn] = useState(false);
  const filteredProducts = useSelector(state => state.filteredProducts)
  // console.log(filteredProducts)


    return(
      
        <View style={{flex: 1}} >
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
       
     
        {/* <ScrollView> */}

            {/* Air Max */}
            <View style={{marginTop: 15, marginLeft: 15, marginBottom: 10}}>
                <Text style={{fontSize: 15, fontWeight: '600', }}>Shoes / Air Max</Text>
                <Text style={{
                    marginTop: 15, fontSize: 25, fontWeight: '600'
                }}> Air Max Shoes</Text>
            </View>

                {/* list product */}
            <View style={{marginLeft: 15, marginBottom: 20}}>
        
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                {LIST.map((item, index) =>(
                    <View key={index} style={{alignItems: 'center'}}>
                        <TouchableOpacity
                        onPress={() => props.navigation.navigate("ProductScreen", { listID: item.id}) }
                        style={{
                          borderWidth: 1,
                          padding: 5, 
                         borderRadius: 10, 
                         marginRight: 25,
                         borderColor: 'black'
                        }}
                        >
                        <Text style={{color: 'black', 
                        fontSize: 20,
                        paddingLeft: 15,
                        marginRight: 20,
                        fontWeight: '600'}}>
                        {item.name}
                        </Text>
                    </TouchableOpacity>
                    
                     
                    </View>
                ))}
            </ScrollView>
          

            {/* <FlatList 
            data={LIST}
            renderItem={({ item }) =>
            <TouchableOpacity
            onPress={() => props.navigation.navigate("ProductScreen", { listID: item.id}) }
            style={{marginLeft: 15, padding: 5, marginRight: 20, marginTop: 5,
            borderWidth: 1,
            height: 30,
            width: 100, alignItems: 'center'
            }}
            >
              <Text
              style={{}}
              >{item.name}</Text>
              </TouchableOpacity>}
              keyExtractor={item => item.id}
            /> */}
            </View>

            <View style={{marginTop: 5, marginBottom: 5}}>
            <Divider leadingInset={6} color="black" />
            </View>

            <View style={{marginLeft: 15, flexDirection: 'row'}}>
                <Text
                style={{fontSize: 25, fontWeight: '500'}}
                > Pickup To Day</Text>
                <View style={{justifyContent: 'center', marginLeft: 180}}>
                   
                    <Switch
                    value={isPickUpOn}
                    onValueChange={( newValue ) => setIsPickupOn( newValue )}
                    style={styles.switch}
                    />
                   
            
               
                 </View>
            </View> 

             <View style={{marginTop: 5, marginBottom: 10}}>
            <Divider leadingInset={6} color="black" />
            </View>

            <View style={{marginLeft: 15, marginBottom: 10, flexDirection:'row', alignItems:'center'}}>
                <Text
                style={{fontSize: 16, color:'grey', }}
                > 216 Results</Text>
                {/* <TouchableOpacity
                style={{borderWidth: 2, borderColor: 'black', marginLeft: 240, borderRadius: 10, width: 80, height: 35}}
                >
                    <Text
                    style={{fontSize: 20, fontWeight:'600', textAlign:'center', color: 'grey'}}
                    > Filter</Text>
                </TouchableOpacity> */}
            </View>

                    {/* product */}
                    {/* product 1 */}
                   <FlatList 
                   data={filteredProducts}
                  //  style={{marginBottom: 430}}
                   keyExtractor={item => item.id}
                   renderItem={({item }) =>
                    <View style={{flexDirection: 'row', }}>
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
                  
                  </View>


                    </View>
                 
                  }
                   />


               
         

                    {/* categories */}
            {/* <View style={{marginBottom: 15,marginTop: 300}}>
                <Text style={{marginBottom: 30, marginLeft: 15, fontSize: 25, fontWeight:'900'}}> Related Categories</Text>
                <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                {Categories.map((story, index) =>(
                    <View key={index} style={{alignItems: 'center'}}>
                        <TouchableOpacity
                        style={{ borderWidth: 1,
                            color: 'black',
                        width: 250,
                        height: 40,
                        marginRight: 30, marginLeft: 15,
                        borderRadius: 15
                        }}
                        
                        >
                        <Text style={{color: 'black', 
                        fontSize: 20,
                        marginTop: 5,
                        fontWeight: '600',

                        textAlign: 'center'
                        }}>
                        {story.name}
                        </Text>
                    </TouchableOpacity>
                    
                    </View>
                ))}
            </ScrollView>
            </View>

            <View style={{backgroundColor: 'black', marginBottom: 900, height: 580, width: "100%"}}> 
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


        {/* </ScrollView> */}
       
       
        


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
        transform: [{ scaleX: 1.3}, {scaleY: 1.3}],
        marginRight: 15
      }
})

export default Shop;
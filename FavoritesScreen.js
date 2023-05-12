import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, useState, FlatList,props, route, useEffect } from "react-native";
import { Divider, ListItem, Stack, Switch } from "@react-native-material/core";
import { LIST } from "./list";
import { Categories } from "./list";
import { DATA, PRODUCTS } from "./Data";
import ProductScreen from "./ProductScreen";
import { useSelector } from "react-redux";





const FavoriteScreen = (props) => {  
    // const favProducts = PRODUCTS.filter(product => product.isFav == true)
    // console.log(favProducts)

    const favProducts = useSelector(state => state.favProducts)
    // console.log(favProducts)

//test



//end 



    if(favProducts.length == 0){
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
> NO FAVORITE PRODUCTS !</Text>


</View>
      )
    }
    else {

  


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


        
        {/* <ScrollView> */}



            {/* Air Max */}
            <View style={{marginTop: 20, marginLeft: 15, marginBottom: 30}}>
                <Text style={{
                    marginTop: 15, fontSize: 30, fontWeight: '900'
                }}>Favorites</Text>
            </View>



            <View style={{marginTop: 5, marginBottom: 20}}>
            <Divider leadingInset={6} color="black" />
            </View>


       

  

                    {/* prodcut */}

                    <FlatList 
                   data={favProducts}
                   keyExtractor={item => item.id}
                   style={{marginBottom: 200}}
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

                      <Text>remove</Text>
                  
                  </View>
                   
                   
                    </View>
                  }
                   />

                   
                    {/* endprodcut */}
                  

                    {/* categories */}
            {/* <View style={{marginBottom: 50, marginTop: 50}}>
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

            <View style={{backgroundColor: 'black', marginBottom: 50, height: 580, width: "100%"}}> 
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

export default FavoriteScreen;
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, useState, props } from "react-native";
import { Hinh } from "./list";
import { DATA } from "./Data";
import { Divider } from "react-native-flex-layout";
import { PRODUCTS } from "./Data";
import { LIST } from "./list";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";




const ProductScreen = (props) => {
    const {listID} = props.route.params;
   
    // sản phẩm có sẵn ( sản phẩm sau khi lọc )
    const avaiableProducts = useSelector((state) => state.filteredProducts)
    console.log(avaiableProducts)

  const data = avaiableProducts.filter(item => item.listID === listID)


    return(
        <SafeAreaView>
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
              {/* banner */}
        <View style={{marginTop: 20, marginBottom: 50, backgroundColor: '#cbcbcb', flexDirection: 'row'}}>
            <View style={{marginBottom: 5, marginLeft: 15}}>
          <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center', marginTop: 10}}>
            FREE SHIPING + RETURNS, FREE</Text>
          <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center', marginTop: 5}}>
            MEMBERSHIP, EXCLUSIVE</Text>
            <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center', marginTop: 5}}>
            PRODUCTS</Text>
          
          </View>
          <TouchableOpacity 
          style={{marginTop: 10, marginLeft: 35, justifyContent: 'center',}}
          >
            <Text style={{fontSize: 16, textAlign: 'center', fontWeight: '400', marginBottom: 10,}}>join Now</Text>
          </TouchableOpacity>
        </View>


        <View>


<Text
                      style={{
                        fontSize: 20, 
                        fontWeight:'600',
                        marginTop: 5, marginBottom: 10, marginLeft: 20
                      }}
                      >Shoes</Text>

<Divider leadingInset={6} color="black" 
          style={{marginTop: 10}}
          />


            <View style={{marginLeft: 15, marginBottom: 20, marginTop: 20, flexDirection:'row', alignItems:'center'}}>
                <Text
                style={{fontSize: 16, color:'grey', }}
                > 45 Results</Text>
                <TouchableOpacity
                style={{borderWidth: 2, borderColor: 'black', marginLeft: 240, borderRadius: 10, width: 80, height: 35}}
                >
                    <Text
                    style={{fontSize: 20, fontWeight:'600', textAlign:'center', color: 'grey'}}
                    > Filter</Text>
                </TouchableOpacity>
            </View>
            </View>




             {/* Air Max */}

            <FlatList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                onPress={() => props.navigation.navigate("Cart", {productsID: item.id}) }
                >
                <Image 
                source={{uri: item.image}}
                style={{height: 200, width: 200}}
                />
                </TouchableOpacity>
                <View style={{flexDirection: 'column', marginLeft: 15}}>
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
                      </View>
            </View>

        
        }
            />
 


                

                 

 <Divider leadingInset={6} color="black" 
          style={{marginTop: 50}}
          />
                 
                   {/* other */}
                   <View style={{marginBottom: 30, marginTop: 20}}> 
            <Text style={{marginLeft: 15, fontSize: 25, fontWeight: '600', marginBottom: 10}}>Happening Now</Text>
            <TouchableOpacity>
            <Image 
          source={{uri: 'https://i.pinimg.com/564x/79/6c/73/796c73f0ff36c3db6065376b1fc8c513.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          />
          </TouchableOpacity>
          <View style={{marginLeft: 15, marginTop: 30}}>
          <Text>Members: Log in and get an extra 20% off</Text>
           <Text>select styles. Use code EARLY20 at</Text> 
           <Text>checkout. Exclusions apply</Text>
           <TouchableOpacity 

           style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'black', height: 50, width: 80, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 15, fontWeight: '600',  color: 'white'}}>Shop</Text>
          </TouchableOpacity>
          </View>
          </View>
          

            {/* popular */}
          <View style={{marginBottom: 50}}> 
            <Text style={{marginLeft: 15, fontSize: 25, fontWeight: '600', marginBottom: 10}}>Popular Right Now</Text>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                {DATA.map((story, index) =>(
                    <View key={index} style={{alignItems: 'center'}}>
                        <TouchableOpacity>
                    <Image source={{uri: story.image}}
                        style={styles.story2}
                    />
                    </TouchableOpacity>
                    <Text style={{color: 'black', fontWeight: '800'}}>
                        {story.name}
                        </Text>
                        <Text style={{color: 'black',}}>
                        {story.des}
                        </Text>
                        <Text style={{color: 'black', fontWeight: '800'}}>
                        {story.price}
                        </Text>
                    </View>
                ))}
            </ScrollView>
          </View>

          {/* footer */}
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

          <View style={{marginTop: 50, marginLeft: 30}}>
            <Text style={{color: 'white'}}> United States</Text>
            <Text style={{color: 'grey'}}>@2023 Nike, Inc, All Right Reserved </Text>
          </View>
       
          </View>


        </ScrollView>

        </SafeAreaView>
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
      story: {
        width: 200,
        height: 200,

    },
    size:{
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
      marginTop: 15
       
    
    }, 
    boder: {
        borderWidth: 1,
        borderRadius: 5,
        height: 60,
        width: 60, marginLeft: 18, 
        borderColor:'grey'
    },
    story2: {
        width: 300,
        height: 300,
      
        marginLeft: 30,
        borderWidth: 3,
      
      }, 
      memtext: {
        color: 'white',
        fontSize: 50,
        fontWeight: '900'
      },
      textft: {
        color: 'white', 
                marginTop: 20, 
                fontSize: 15, 
                fontWeight: '600',
                 marginLeft: 15,
                 
      }

});

export default ProductScreen;
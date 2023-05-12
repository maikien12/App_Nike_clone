import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, useState, props } from "react-native";
import { Hinh } from "./list";
import { DATA } from "./Data";
import { Divider } from "react-native-flex-layout";



const Cart2 = () => {
    return(
        <SafeAreaView>
            <View style={styles.container} >
          <TouchableOpacity
          >
          <Image
          source={require('./assets/nike-icon.png')}
          style={{height: 30, width: 70,}}
          />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginRight: 10}}>
          <TouchableOpacity>
          <Image 
          source={{uri: 'https://img.icons8.com/ios-glyphs/30/null/search--v1.png'}} 
          style={styles.icon}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image 
          source={{uri: 'https://img.icons8.com/material-outlined/24/null/shopping-bag--v1.png'}} 
          style={styles.icon}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image 
          source={{uri: 'https://img.icons8.com/ios-glyphs/30/null/overview-pages-3--v2.png'}} 
          style={ styles.icon }
          />
          </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
              {/* banner */}
        <View style={{marginTop: 20, backgroundColor: '#cbcbcb', flexDirection: 'row'}}>
            <View style={{marginBottom: 5, marginLeft: 15}}>
          <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center', marginTop: 10}}>
            FREE SHIPING + RETURNS, FREE</Text>
          <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center', marginTop: 5}}>
            MEMBERSHIP, EXCLUSIVE</Text>
            <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center', marginTop: 5}}>
            PRODUCTS</Text>
          
          </View>
          <TouchableOpacity 
          style={{marginTop: 10, marginLeft: 35, justifyContent: 'center'}}
          >
            <Text style={{fontSize: 16, textAlign: 'center', fontWeight: '400', marginBottom: 10,}}>join Now</Text>
          </TouchableOpacity>
        </View>

             {/* Air Max */}
             <View style={{marginTop: 30, marginLeft: 15, marginBottom: 50}}>
             <Text style={{
                    marginTop: 15, fontSize: 25, fontWeight: '600'
                }}>Nike Air Max Pulse</Text>
                <Text style={{fontSize: 20, marginLeft: 10, fontWeight: '600', }}>Men's Shoes</Text>
                <Text style={{fontSize: 20, marginLeft: 10, marginTop: 20, marginBottom:5, fontWeight: '900', }}>$150</Text>
         
            </View>

            {/* image */}
                <View style={{ marginBottom: 20}}>
                <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                {Hinh.map((story, index) =>(
                    <View key={index} style={{alignItems: 'center'}}>
                        
                    <Image source={{uri: story.image}}
                        style={styles.story}
                    />
                    
                   
                    </View>
                ))}
            </ScrollView>
                </View>

                {/* size */}
                <View style={{marginBottom: 2, marginLeft: 15}}>
                    <View style={{flexDirection: 'row', }}>
                        <TouchableOpacity style={{marginLeft: 50}}>
                    <Text style={{ fontSize: 20, fontWeight: '600'}}>Select Size</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 100}}>
                    <Text style={{ fontSize: 20, fontWeight: '600'}}>Size Guide</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20,  flexDirection: 'row',}}>
                        <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>6.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>7.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>8</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                    {/* linen2 */}
                <View style={{marginBottom: 2, marginLeft: 15}}>
           
                    <View style={{marginTop: 5,  flexDirection: 'row',}}>
                        <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>8.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>9.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>10.5</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                {/* line 3 */}
                <View style={{marginBottom: 2, marginLeft: 15}}>
           
                    <View style={{marginTop: 5,  flexDirection: 'row',}}>
                        <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>11</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>11.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>12.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.boder}
                        >
                    <Text style={styles.size}>13</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                {/* line 4 */}
                <View style={{marginBottom: 50, marginLeft: 15}}>
           
           <View style={{marginTop: 5,  flexDirection: 'row',}}>
               <TouchableOpacity
               style={styles.boder}
               >
           <Text style={styles.size}>13</Text>
           </TouchableOpacity>
           <TouchableOpacity
               style={styles.boder}
               >
           <Text style={styles.size}>14</Text>
           </TouchableOpacity>
           </View>
       </View>

                    <View style={{marginBottom: 20}}>
                        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '400'}}>4 interrest-free payments of $37.50 with </Text>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                        <Text style={{fontSize: 18, fontWeight: '900'}}>Klana.</Text>
                        <TouchableOpacity>
                        <Text style={{fontSize: 18, marginLeft: 10}}>Learn More</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginBottom: 20 , }}>
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
                            <Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: '600'}}>Add To Bag</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        marginTop: 10,
                        height: 60,
                        borderRadius: 30,
                        width: 350,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        }}
                        >
                            <Text style={{textAlign: 'center', color: 'black', fontSize: 20, fontWeight: '600'}}>Favarite</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginBottom: 25}}>
                        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '400'}}>This product is excluded from site</Text>
                        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '400'}}>promotions and discounts</Text>
                              
                   </View>

                   {/* descreption */}
                   <View style={{marginBottom: 30}}>
                        <Text style={{marginLeft: 15,padding: 10, fontSize: 18, fontWeight: '400'}}>
                        Keeping to the essence, the Air Max Pulse takes inspiration from the London music scene,
                         bringing a subcultural touch to the iconic Air Max line. 
                         A textile-wrapped midsole and vacuum-sealed treated details keep the shoe looking modern and stylish, 
                         while colors inspired by the London music scene revolutionize your look. 
                         Specifically concentrated Air cushioning, reimagined from the super-soft Air Max 270 unit, 
                         delivers better momentum, helping you push your limits..</Text>
                         <Text style={{marginLeft: 15, fontSize: 18, fontWeight: '400'}}>* Colour Shown: Phantom/High</Text>
                         <Text style={{marginLeft: 15,  padding: 10, fontSize: 18, fontWeight: '400'}}>Voltage/White</Text>
                         <Text style={{marginLeft: 15, fontSize: 18, fontWeight: '400'}}>* Style: FD6409-001</Text>
                         <TouchableOpacity style={{marginTop: 25}}>
                         <Text style={{marginLeft: 15, fontSize: 20, fontWeight: '900'}}>View Product Details</Text>
                         </TouchableOpacity>
                   </View>

                   {/* other */}
                   <View style={{marginBottom: 30}}> 
            <Text style={{marginLeft: 15, fontSize: 25, fontWeight: '600', marginBottom: 10}}>Happening Now</Text>
            <TouchableOpacity>
            <Image 
          source={{uri: 'https://sg.everydayonsales.com/wp-content/uploads/2020/05/Nike-Online-Flash-Sale.jpg'}}
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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30, marginLeft: 20,
        
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
        width: 500,
        height: 500,

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

export default Cart2;
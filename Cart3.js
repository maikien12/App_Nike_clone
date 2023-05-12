import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, useState, props } from "react-native";
import { Hinh } from "./list";
import { DATA } from "./Data";
import { Divider } from "react-native-flex-layout";
import { Hinh2 } from "./list";



const Cart3 = () => {
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
                {Hinh2.map((story, index) =>(
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
                   <View style={{marginBottom: 50}}>
                        <Text style={{marginLeft: 15,padding: 10, fontSize: 18, fontWeight: '400'}}>
                        The Nike Air Max 270 GO are ready for the youngest to be always ready!
                         What does always mean? It's our answer to making sneakers extremely easy to put on and take off, 
                         hands-free! Help your baby press down on the collapsible heel. 
                         Introduce the feet and notice how the heel resumes its position. 
                         It's done! Don't forget the Air 270 unit, 
                         which provides a high sense of elasticity when playing.</Text>
                         <Text style={{marginLeft: 15, fontSize: 18, fontWeight: '400'}}>* Colour Shown: Summit White/Photon</Text>
                         <Text style={{marginLeft: 15,  padding: 10, fontSize: 18, fontWeight: '400'}}>Dust/Laser</Text>
                         <Text style={{marginLeft: 15, fontSize: 18, fontWeight: '400'}}>* Style: DV1970-100</Text>
                         <TouchableOpacity style={{marginTop: 25}}>
                         <Text style={{marginLeft: 15, fontSize: 20, fontWeight: '900'}}>View Product Details</Text>
                         </TouchableOpacity>
                   </View>

                   {/* other */}
                   <View style={{marginBottom: 50}}> 
            <Text style={{textAlign: 'center',  fontSize: 25, fontWeight: '600', marginBottom: 10}}>Air Go All Day</Text>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 20, fontWeight: '300', marginBottom: 10}}>
                The iconic Air Max evolves into the next generation. 
                While rocking in comfort, 
                kids discover the magic of Air technology with a new, 
                easy-to-enter fold-over heel.</Text>
            <TouchableOpacity>
            <Image 
          source={{uri: 'https://static.nike.com/a/images/w_1920,c_limit,f_auto,q_auto/d3a8511c-be09-42a7-b580-3dd64b77455b/image.jpg'}}
          style={{width: 500, marginTop: 25, height: 600, alignSelf: 'center'}}
          />
          </TouchableOpacity>

          </View>

          <View style={{marginBottom: 50}}> 
            <Text style={{textAlign: 'center',  fontSize: 25, fontWeight: '600', marginBottom: 10}}>Hassle-free Air technology</Text>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 20, fontWeight: '300', marginBottom: 10}}>
                The easy-to-pull fold-over heel gives way and lets kids slip on easily. 
                Once your foot is in place, 
                the collapsible heel rises to provide a secure fit that's ready for whatever the day's challenge.</Text>
            <TouchableOpacity>
            <Image 
          source={{uri: 'https://static.nike.com/a/images/w_1920,c_limit,f_auto,q_auto/2593b3db-0bf6-485d-be91-706eedf41e3d/image.jpg'}}
          style={{width: 500, marginTop: 25, height: 600, alignSelf: 'center'}}
          />
          </TouchableOpacity>

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

export default Cart3;
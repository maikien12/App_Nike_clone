import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, useState, props, TextInput, ImageBackground } from "react-native";
import { Hinh } from "./list";
import { DATA } from "./Data";
import { Divider } from "react-native-flex-layout";
import {  ListItem } from "@react-native-material/core";
import { PRODUCTS } from "./Data";
import { LIST } from "./list";
import { FlatList } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { mem } from "./Data";




const Search = (props) => {

  const [selected, setSelected] = React.useState("");
  const data = [
      {key:'1', value:'Shoes', },
      {key:'2', value:'Runner'},
      {key:'3', value:'Shirts'},
      {key:'4', value:'Jeans'},
      {key:'5', value:'Sweaters'},
      {key:'6', value:'Hodies'},
      {key:'7', value:'accessory'},
  ]
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
 


        <View>



<Text
                      style={{
                        fontSize: 30, 
                        fontWeight:'900',
                        marginTop: 5, marginBottom: 5, marginLeft: 20
                      }}
                      >Search</Text>

<View style={{marginTop: 0, marginBottom: 30,}}>
        <TextInput placeholder="Search" placeholderTextColor= "#909090"
           style={{
            marginTop: 30,
            width: '94%',
            backgroundColor: '#EBEBEB',
            borderRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 35,
            fontSize: 15,
            padding: 4,
            paddingLeft: 50, marginLeft: 5
        
        }}
           />


  

        </View>

<Divider leadingInset={6} color="black" 
          style={{marginTop: 10}}
          />
        <SelectList 
             setSelected={(val) => setSelected(val)} 
            data={data} 
             save="value"
             boxStyles={{height: 50, width: 400, marginLeft: 20, marginTop: 40, marginBottom: 30}}
             searchPlaceholder={'Category'}
             
             />


        

<View style={{marginBottom: 70, marginTop: 30}}>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                {mem.map((story, index) =>(
                    <View key={index} style={{alignItems: 'center'}}>
                        <TouchableOpacity>
                    <Image source={{uri: story.image}}
                        style={styles.story2}
                    />
                    </TouchableOpacity>
                    <Text style={{color: 'black', marginLeft: 25, fontSize: 20 , alignSelf: 'center' ,  fontWeight: '800'}}>
                        {story.name}
                        </Text>
              
                        
                    </View>
                ))}
            </ScrollView>
          </View>

          <View style={{marginBottom: 10}}> 
           
           
        {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}

        <TouchableOpacity>   
            <ImageBackground
          source={{uri: 'https://i.pinimg.com/564x/88/98/9b/88989b3f08219e5048fcbbe35aafb9c8.jpg'}}
          style={{width: 400, height: 150, alignSelf: 'center'}}
          >
          {/* <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginBottom: 0, marginTop: 40, }}>DESIGNED</Text> */}
       
          </ImageBackground>
          </TouchableOpacity>
          </View>

          <View style={{marginBottom: 10}}> 
           
           
           {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}
   
           <TouchableOpacity>   
               <ImageBackground
             source={{uri: 'https://i.pinimg.com/564x/3e/91/95/3e91954cc3d5c63b221d48eea3fa92aa.jpg'}}
             style={{width: 400, height: 150, alignSelf: 'center'}}
             >
             {/* <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginBottom: 0, marginTop: 40, }}>DESIGNED</Text> */}
          
             </ImageBackground>
             </TouchableOpacity>
             </View>

             <View style={{marginBottom: 10}}> 
           
           
           {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}
   
           <TouchableOpacity>   
               <ImageBackground
             source={{uri: 'https://i.pinimg.com/736x/04/97/18/049718af5c676fc7728c93c85ba71371.jpg'}}
             style={{width: 400, height: 150, alignSelf: 'center'}}
             >
             {/* <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginBottom: 0, marginTop: 40, }}>DESIGNED</Text> */}
          
             </ImageBackground>
             </TouchableOpacity>
             </View>

             <View style={{marginBottom: 10}}> 
           
           
           {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}
   
           <TouchableOpacity>   
               <ImageBackground
             source={{uri: 'https://i.pinimg.com/564x/2d/ac/75/2dac75b5483e255889fa775d823c6e1f.jpg'}}
             style={{width: 400, height: 150, alignSelf: 'center'}}
             >
             {/* <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginBottom: 0, marginTop: 40, }}>DESIGNED</Text> */}
          
             </ImageBackground>
             </TouchableOpacity>
             </View>

            <View style={{marginLeft: 15, marginBottom: 20, marginTop: 20, flexDirection:'column', }}>
                <Text
                style={{fontSize: 25, color:'black', fontWeight: '900' }}
                >Up to 40% off Clearance</Text>
                    <Text
                    style={{fontSize: 18, fontWeight:'600', color: 'grey'}}
                    >New Styles Added</Text>
               
            </View>

            <ScrollView  style={{flexDirection: 'row'}}>
            <View style={{marginBottom: 50, marginTop: 10, marginLeft: 40}}>
            <View style={{backgroundColor: "#EEEEEE"}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'center'}}>
            <Text style={{ marginLeft: 20}}>Air Max 90</Text>
            <Text style={styles.textpro}>Stay true to your roots </Text>
           <Text style={styles.textpro}> in this iconic style</Text>
            </View>
            <TouchableOpacity>
            <Image
              source={{uri: 'https://cdn.chiaki.vn/unsafe/0x900/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/07/giay-nike-air-max-90-evolution-of-icons-da5562-001-phoi-mau-62c3b9c99f7c4-05072022111049.jpg'}}
              style={{height: 150, width: 150, marginLeft: 60}}
            />
            </TouchableOpacity>
            </View>

              {/* product 2 */}
            <View style={{flexDirection: 'row', marginTop: 25}}>
                <View style={{justifyContent: 'center'}}>
            <Text style={{ marginLeft: 20}}>Air Max 97</Text>
            <Text style={styles.textpro}>Heighten your style in  </Text>
           <Text style={styles.textpro}>first-class comfort</Text>
            </View>
            <TouchableOpacity>
            <Image
              source={{uri: 'https://product.hstatic.net/200000265619/product/02-dm0027-100-nike-air-max-97-white-bullet_f4b3c3fdb5f44c3b9a00dd3ede81955f.jpg'}}
              style={{height: 150, width: 150, marginLeft: 60}}
            />
            </TouchableOpacity>
            </View>

              {/* product 3 */}
            <View style={{flexDirection: 'row', marginTop: 25}}>
                <View style={{justifyContent: 'center'}}>
            <Text style={{ marginLeft: 20}}>Air VaporMax</Text>
            <Text style={styles.textpro}>Easygoing styles and a</Text>
           <Text style={styles.textpro}>splash of swag </Text>
            </View>
            <TouchableOpacity>
            <Image
              source={{uri: 'https://cdn.shopify.com/s/files/1/0931/7740/products/DX3720_200_A_PREM_2000x.jpg?v=1676649476'}}
              style={{height: 150, width: 150, marginLeft: 60}}
            />
            </TouchableOpacity>
            </View>

              {/* product 4 */}
            <View style={{flexDirection: 'row', marginTop: 25}}>
                <View style={{justifyContent: 'center'}}>
            <Text style={{ marginLeft: 20}}>Air Max 270</Text>
            <Text style={styles.textpro}>Bring bouncy style and</Text>
           <Text style={styles.textpro}>cloudlike comfort  </Text>
            </View>
            <TouchableOpacity>
            <Image
              source={{uri: 'https://5.imimg.com/data5/AJ/LP/BW/ANDROID-53016925/product-jpeg-500x500.jpg'}}
              style={{height: 150, width: 150, marginLeft: 60}}
            />
            </TouchableOpacity>
            </View>
            </View>
          </View>
            </ScrollView>
            </View>

            <View style={{marginBottom: 50, }}>
                <TouchableOpacity
                style={{borderWidth: 2,
                height: 35,
                width: 150,
                marginLeft: 145, borderRadius: 10
                }}
                >
                    <Text style={{textAlign: 'center' ,fontSize: 20, marginTop: 3}}>View all</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginBottom: 30}}>
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


          
            <View style={{marginBottom: 10}}> 
          <ListItem title="Product advice" />
          <ListItem title="Featured" />
          <ListItem title="Shoes" />
          <ListItem title="Clothing" />
          <ListItem title="Kids'" />
          </View>



             {/* Air Max */}
 
 <Divider leadingInset={6} color="black" 
          style={{marginTop: 30}}
          />
                 
                   {/* other */}
                   <View style={{marginBottom: 30, marginTop: 20}}> 
            <Text style={{marginLeft: 15, fontSize: 25, fontWeight: '600', marginBottom: 10}}>Happening Now</Text>
            <TouchableOpacity>
            <Image 
          source={{uri: 'https://i.pinimg.com/564x/18/27/b6/1827b630f37a4e6b555e0da15a17ef48.jpg'}}
          style={{width: 400, height: 700, alignSelf: 'center'}}
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
        width: 200,
        height: 200,
      
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

export default Search;
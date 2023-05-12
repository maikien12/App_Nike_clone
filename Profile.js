import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, useState, FlatList,props, route } from "react-native";
import { Divider, ListItem, Stack, Switch } from "@react-native-material/core";
import { LIST } from "./list";
import { Categories } from "./list";
import { DATA, PRODUCTS } from "./Data";
import ProductScreen from "./ProductScreen";





const Profile = (props) => {  
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
            <View style={{marginTop: 70, marginLeft: 80, marginBottom: 10, alignSelf: 'center'}}>
            <Image source={{uri: 'https://img.freepik.com/photos-gratuite/beau-jeune-homme-nouvelle-coupe-cheveux-elegante_176420-19636.jpg?w=740&t=st=1681527360~exp=1681527960~hmac=281cd21a89c4f0373ed70c5121c9d627cf921260be590c413c92391308f0f283'}} 
           style={{height: 150, width: 150, marginRight: 75, borderRadius: 250 }} />
            </View>
            <View style={{marginTop: 5}}>
                <Text
                style={{textAlign:'center',
                    fontSize: 30,
                    marginLeft: 20,
                    fontWeight:'900'

            }}
                >Nouvelle</Text>
            </View>

            <View style={{marginTop: 50, alignItems:'center', marginLeft: 24}}>
                <TouchableOpacity
                style={{
                borderWidth: 2,
                height: 40,
                width: 150,
                justifyContent:'center',
                borderRadius: 10

                }}
                >
                    <Text
                    style={{textAlign:'center', 
                    fontWeight: '600',
                    fontSize: 17
                }}
                    >EDIT PROFILE</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{marginTop: 50,}}>
            <Divider leadingInset={6} color="black" />
            </View>

            <View style={{flexDirection: 'row', marginTop: 50}}>

                <View style={{marginLeft: 15}}> 
                <TouchableOpacity>
                     <Image source={{uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-order-food-delivery-tanah-basah-glyph-tanah-basah.png'}} 
                     style={{height: 40, width: 40,}} />
                     <Text style={{marginTop: 5}}>Orders</Text>
                     </TouchableOpacity>
                </View>

                <View style={{marginLeft: 80}}> 
                <TouchableOpacity>
                     <Image source={{uri: 'https://img.icons8.com/ios-filled/50/null/contact-card.png'}} 
                     style={{height: 40, width: 40,}} />
                     <Text style={{marginTop: 5}}>Pass</Text>
                     </TouchableOpacity>
                </View>

                <View style={{marginLeft: 80}}> 
                <TouchableOpacity>
                     <Image source={{uri: 'https://img.icons8.com/ios-filled/50/null/calendar--v1.png'}} 
                     style={{height: 40, width: 40,}} />
                     <Text style={{marginTop: 5}}>Events</Text>
                     </TouchableOpacity>
                </View>

                <View style={{marginLeft: 75}}> 
                <TouchableOpacity>
                     <Image source={{uri: 'https://img.icons8.com/ios-filled/50/null/settings.png'}} 
                     style={{height: 40, width: 40,}} />
                     <Text style={{marginTop: 5, textAlign:'center', }}>Settings</Text>
                     </TouchableOpacity>
                </View>

            </View>

            <View style={{marginBottom: 10, marginTop: 50}}> 
          <ListItem 
          title="INBOX" 
          secondaryText="View messages"
          style={{height: 60}}
          
          />
    <View style={{marginTop: 15, marginBottom: 15}}>
            <Divider leadingInset={5} color="black" />
            </View>

          <ListItem title="YOUR NIKE MEMBER REWARDS" 
          secondaryText="2 avaiable"
           style={{height: 60}}
          />
       
          </View>

          <View style={{marginTop: 50, marginBottom: 15}}>
            <Divider leadingInset={6} color="black" />
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{marginLeft: 15,  fontWeight: '600'}}>
                    FOLLOWING 
                </Text>
                <Text style={{marginLeft: 300}}>
                    Edit
                </Text>
            </View>
            

            <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 15}}>
            <Image source={{uri: 'https://sport5.mediacdn.vn/158855217956261888/2023/1/10/16732129871197-16732626655181999472908-1673332225164-16733322267291057429051.jpg'}}
                     style={{height: 150, width: 150,}} />
            </View>





       
                    {/* categories */}
            <View style={{marginBottom: 80, marginTop: 30,
            backgroundColor:'#cbcbcbcb',
            textAlign:'center'
            }}>
                <Text style={{marginBottom: 20, marginTop: 20, marginLeft: 15, fontSize: 15,textAlign:'center'}}> Member since April 2023</Text>
               
            </View>

           
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
                 
      }
})

export default Profile;
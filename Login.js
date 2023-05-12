import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image, props } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { CheckBox } from "@rneui/themed";
import OnBroadScreen from "./OnBroadScreen";
import { useState } from "react";
import Register from "./Register";


const Login = (props) => {
    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);

    return(
        <SafeAreaView style={{flex: 1}}>
               <Image source={{uri: 'https://www.defining.co/wp-content/uploads/2022/09/image_4df73265-96c7-41e4-a475-f1f61dab3dcc.jpg'}}
                style={{
                    height: 200, 
                    width: '100%',
                    borderBottomLeftRadius: 100
            }}
                />

                <ScrollView>
            <View style={{marginTop: 15, marginLeft: 15, alignItems: 'center'}}>
            <Text
            style={{fontSize: 30, fontWeight: '900'}}
            >YOUR ACCOUNT FOR</Text>
             <Text
            style={{fontSize: 29, fontWeight: '900'}}
            >EVERYTHING NIKE</Text>
            </View>

            <View style={{marginTop: 30, marginLeft: 20, borderWidth: 1, height: 50, width: 400 , borderColor: '#ccc'}}>
                <TextInput 
                placeholder="Email address" 
                placeholderTextColor={'black'}
                style={{ paddingVertical: 0, marginLeft: 10, marginTop: 10 }}
 
                />
            </View>

            <View style={{marginTop: 20, marginLeft: 20, borderWidth: 1, height: 50, width: 400 , borderColor: '#ccc'}}>
                <TextInput 
                placeholder="Password" 
                placeholderTextColor={'black'}
                style={{ paddingVertical: 0, marginLeft: 10, marginTop: 10 }}
                secureTextEntry={true}
                
                />
            </View>

            <View style={{flexDirection: 'row', marginTop: 30}}>
            <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           // Use ThemeProvider to make change for all checkbox
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="black"
           size={30}
         />
         <Text style={{alignSelf: 'center',}}>Keep me signed in</Text>
         <TouchableOpacity style={{alignSelf: 'center'}}>
         <Text style={{marginLeft: 60, color: 'grey',}}>Forgotten your password ?</Text>
         </TouchableOpacity>
         </View>

         <View style={{marginTop: 40, flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{fontSize: 16}}>By logging in you agree to Nike's </Text>
            <TouchableOpacity style={{marginLeft: 5, marginRight: 5,}}>
            <Text style={{textDecorationLine: 'underline', fontSize: 16}}>Privacy Pollicy</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16}}>and</Text>
         </View>
         <TouchableOpacity style={{marginTop: 15, alignSelf: 'center'}}>
            <Text style={{fontSize: 16, textDecorationLine: 'underline'}}>Terms of Use</Text>
         </TouchableOpacity>

            <View style={{ marginTop: 30}}>
                <TouchableOpacity 
                style={{borderWidth: 1, backgroundColor: 'black' , borderColor: 'black', borderRadius: 20, height: 60, width: 350, alignSelf: 'center'}}
                onPress={() => props.navigation.navigate("OnBroadScreen")}
                >
                    <Text
                    style={{ textAlign: 'center',fontSize: 25, fontWeight: '600', marginTop: 9, color: 'white' }}
                    >SING IN</Text>
                </TouchableOpacity>
            </View>




            <View style={{marginTop: 30, marginLeft: 15, justifyContent:'center', flexDirection: 'row'}}> 
                <Text style={{fontSize: 18}}>Not a Member ?</Text>
                <TouchableOpacity
                onPress={() => props.navigation.navigate("Register")}
                >
                <Text style={{alignSelf: 'center', fontSize: 18, marginLeft: 5 , textDecorationLine: 'underline', fontWeight: '600'}}>Join Us</Text>
                </TouchableOpacity>
            </View>


            </ScrollView>

        </SafeAreaView>
    )
}


export  default Login;
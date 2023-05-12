import React from 'react';
import { View,Text, Image, TouchableOpacity, TextInput,Button, SafeAreaView } from 'react-native';
import OnBroadScreen from './OnBroadScreen';
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SelectList } from 'react-native-dropdown-select-list';
import { ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed';
import Login from './Login';

const Register = (props) => {
 

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.log("A date has been picked: ", date);
      hideDatePicker();
    };

    const [selected, setSelected] = React.useState("");
    const data = [
        {key:'1', value:'VietNamese', disabled:true},
        {key:'2', value:'American'},
        {key:'3', value:'Cannada'},
        {key:'4', value:'Japan', disabled:true},
        {key:'5', value:'Korean'},
        {key:'6', value:'ThaiLand'},
        {key:'7', value:'Singapore'},
    ]

    const [selectedIndex, setIndex] = React.useState(0);

    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);

    return(
        <SafeAreaView>
                    <View style={{
                         justifyContent: 'center',
                         alignItems: 'center',
                         flexDirection: 'row',
                         marginTop: 30, marginLeft: 40,
                    }}  >
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

                    <View style={{ marginTop: 30}}>
                    <Text style={{textAlign: 'center', fontSize: 25, fontWeight: '900'}}>BECOME A NIKE MEMBER</Text>
                    <View style={{marginTop: 20,}}>
                    <Text style={{textAlign: 'center', fontSize: 16, marginBottom: 5}}>create your Nike Member profi;e and get first</Text>
                    <Text style={{textAlign: 'center', fontSize: 16, marginBottom: 5}}>access to the very best of Nike products, inspiration</Text>
                    <Text style={{textAlign: 'center', fontSize: 16, marginBottom: 5}}>and community</Text>
                    </View>
                    </View>


                <View style={{marginTop: 20, marginLeft: 20, borderWidth: 1, height: 50, width: 400 , borderColor: '#ccc'}}>
                <TextInput 
                placeholder="Email Address" 
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

            <View style={{marginTop: 20}}>
            <SelectList 
             setSelected={(val) => setSelected(val)} 
            data={data} 
             save="value"
             boxStyles={{height: 50, width: 400, marginLeft: 20}}
             searchPlaceholder={'Country'}
             
             
             />

            </View>   

            <View style={{marginTop: 20, marginLeft: 20, borderWidth: 1, height: 50, width: 400 , borderColor: '#ccc'}}>
                <TextInput 
                placeholder="First Name" 
                placeholderTextColor={'black'}
                style={{ paddingVertical: 0, marginLeft: 10, marginTop: 10 }}
                
                />
            </View>

            <View style={{marginTop: 20, marginLeft: 20, borderWidth: 1, height: 50, width: 400 , borderColor: '#ccc'}}>
                <TextInput 
                placeholder="Last Name" 
                placeholderTextColor={'black'}
                style={{ paddingVertical: 0, marginLeft: 10, marginTop: 10 }}
              
                />
            </View>



            <TouchableOpacity
            onPress={showDatePicker}
            style={{ marginLeft: 20, marginTop: 20, borderWidth: 1, height: 50, width: 400 , borderColor: '#ccc', flexDirection: 'row'}}
            >
                <Text style={{ paddingVertical: 0, marginLeft: 10, marginTop: 13 }}> Date of birthday</Text>

            <Image source={{uri: 'https://img.icons8.com/windows/32/null/birthday-date.png'}}
                style={{
                    height: 40, 
                    width: 40,
                    marginLeft: 230, marginTop: 5
                   
            }}
                />
                </TouchableOpacity>
            <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />


            <View style={{marginTop: 10}}>
                <Text style={{textAlign: 'center', color: 'grey'}}>Get a Nike Member Reward every year on your Birthday</Text>
                </View>


            <View style={{marginTop: 20, marginLeft: 15, flexDirection: 'row'}}>
                <CheckBox
           checked={selectedIndex === 0}
           onPress={() => setIndex(0)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
           checkedColor='grey'
         />
         <Text style={{fontSize: 25, alignSelf: 'center'}}> Male</Text>
         <CheckBox
           checked={selectedIndex === 1}
           onPress={() => setIndex(1)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
           checkedColor='grey'
         />
         <Text style={{fontSize: 25, alignSelf: 'center'}}>Female</Text>
         </View>

         <View style={{marginTop: 5, flexDirection: 'row'}}>
         <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           // Use ThemeProvider to make change for all checkbox
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="grey"
           size={30}
         
         />
         <View style={{alignSelf: 'center'}}>
            <Text style={{fontSize: 16, color:'grey'}}>Sing up for emails to get updates from nike on</Text>
            <Text  style={{fontSize: 16, color:'grey'}}>product, offers and your Member benefits</Text>
         </View>

         </View>


         <View style={{marginTop: 30, flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{fontSize: 16}}>By Creating an account to Nike's </Text>
            <TouchableOpacity style={{marginLeft: 5, marginRight: 5,}}>
            <Text style={{textDecorationLine: 'underline', fontSize: 16}}>Privacy Pollicy</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16}}>and</Text>
         </View>
         <TouchableOpacity style={{marginTop: 5, alignSelf: 'center', marginBottom: 20}}>
            <Text style={{fontSize: 16, textDecorationLine: 'underline'}}>Terms of Use</Text>
         </TouchableOpacity>


         <View style={{ marginTop: 5}}>
                <TouchableOpacity 
                style={{borderWidth: 1, backgroundColor: 'black' , borderColor: 'black', borderRadius: 20, height: 60, width: 350, alignSelf: 'center'}}
                onPress={() => props.navigation.navigate("OnBroadScreen")}
                >
                    <Text
                    style={{ textAlign: 'center',fontSize: 25, fontWeight: '600', marginTop: 9, color: 'white' }}
                    >JOIN IN</Text>
                </TouchableOpacity>
            </View>




            <View style={{marginTop: 30, marginLeft: 15, justifyContent:'center', flexDirection: 'row', marginBottom: 120}}> 
                <Text style={{fontSize: 18}}>Already a Member ?</Text>
                <TouchableOpacity
                onPress={() => props.navigation.navigate("Login")}
                >
                <Text style={{alignSelf: 'center', fontSize: 18, marginLeft: 5 , textDecorationLine: 'underline', fontWeight: '600'}}>Sing in</Text>
                </TouchableOpacity>
            </View>
     
        


                </ScrollView>

        </SafeAreaView>
    )
}

export default Register;
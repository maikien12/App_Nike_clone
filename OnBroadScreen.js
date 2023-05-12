import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, props, ImageBackground, backgroundVideo } from "react-native";
import { Divider, ListItem } from "@react-native-material/core";
import { DATA } from "./Data";
import Login from "./Login";
import Register from "./Register";
import Shop from "./Shop";
import { Banner } from "./Data";



const OnBroadScreen = (props) => {
  // const videoStyle = {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  //   height: 250,
  // };

    return (
      <SafeAreaView>

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

        {/* banner */}
        <ScrollView >
        <View style={{marginTop: 20, backgroundColor: '#cbcbcb'}}>
          <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center', marginTop: 10}}>Why Wait? Try Store Pickup</Text>
          <Text style={{fontSize: 14, textAlign: 'center', marginTop: 5}}>Buy online and find a store near you for pick up in less than 2 hours</Text>
          <TouchableOpacity 
          style={{marginTop: 10}}
          onPress={() => props.navigation.navigate("Shop")}
          >
            <Text style={{fontSize: 16, textAlign: 'center', fontWeight: '400', marginBottom: 10}}>Shop Now</Text>
          </TouchableOpacity>
        </View>



        
          
         <View>
          {/* <Image 
          source={{uri: 'https://static.nike.com/a/images/w_1920,c_limit,f_auto/xwnooafpjvjmmfjqzh6m/nike-air-max-1-anniversary-white-dark-obsidian-release-date-908375-104.jpg'}}
          style={{width: 400, height: 400, alignSelf: 'center'}}
          /> */}
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                {Banner.map((story, index) =>(
                    <View key={index} style={{alignItems: 'center'}}>
                        <TouchableOpacity>
                    <Image source={{uri: story.image}}
                         style={{width: 500, height: 500, marginLeft: 15, marginRight: 15 ,  alignSelf: 'center'}}
                    />
                    </TouchableOpacity>
            
                    </View>
                ))}
            </ScrollView>
          </View>

          <View style={{padding: 10, marginLeft: 5}}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Just In</Text>
          <Text style={{fontSize: 40, fontWeight: '900'}}>NIKE AIR</Text>
        
          <Text>Inspired by the energy of London's </Text>
           <Text>music scene comes the Air Max </Text> 
           <Text> A tough silhouetle infused with an
            unreal sensation on Air</Text>
            <TouchableOpacity 
            style={{
              padding: 15,
               marginTop: 20,
                marginBottom: 15, 
                backgroundColor: 'black', 
                height: 50, width: 80, alignItems: 'center', borderRadius: 20}}
                onPress={() => props.navigation.navigate("Shop")}
                >
            <Text style={{fontSize: 15, fontWeight: '600',  color: 'white'}}>Shop</Text>
          </TouchableOpacity>
          </View>


            {/* product */}
          {/* <Divider leadingInset={6} color="black" /> */}

  


          {/* Lebron XX */}

          <View style={{marginBottom: 10}}> 
            {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}
           
            <ImageBackground
          source={{uri: 'https://i.pinimg.com/564x/1e/1e/1b/1e1e1b15be7c9e52bf1e7fc32ae77247.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          >
         
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginBottom: 10, marginTop: 5,}}>LEBRON XX</Text>
          <View style={{marginLeft: 15, marginTop: 370}}>
          <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>The 'Next Life' colorway celebrates</Text>
           <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>LeBron's greatness and his lifetime</Text> 
           <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>dedication to his craft</Text>
            <TouchableOpacity style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'white', height: 50, width: 200, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 16, fontWeight: '900',  color: 'black'}}>Shop LeBron</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>

          {/* nike zoom  */}
          <View style={{marginBottom: 10}}> 
            {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}
           
            <ImageBackground
          source={{uri: 'https://i.pinimg.com/564x/45/58/44/45584490075819830f35a3c47c0b1594.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          >
         
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginBottom: 0, marginTop: 360, }}>DESIGNED</Text>
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginBottom: 0, marginTop: 0,}}>FOR SPEED</Text>
          <View style={{marginLeft: 15, marginTop: 4}}>
          <Text style={{color: 'black', fontSize: 17, fontWeight: '700'}}>Nike Vaporfly 3</Text>
      
            <TouchableOpacity style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'black', height: 50, width: 200, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 16, fontWeight: '900',  color: 'white'}}>explore</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>

          {/* lucky green */}
          <View style={{marginBottom: 10}}> 
            {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}
           
            <ImageBackground
          source={{uri: 'https://i.pinimg.com/564x/a3/21/e9/a321e9dbaf1e8966d29010ad1df57cf0.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          >
         
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginBottom: 10, marginTop: 410,}}>LUCKY GREEN</Text>
          <View style={{marginLeft: 15, marginTop: 4}}>
          <Text style={{color: 'black', fontSize: 17, fontWeight: '700'}}>Trending Now</Text>
      
            <TouchableOpacity style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'black', height: 50, width: 200, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 16, fontWeight: '900',  color: 'white'}}>explore</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>


          {/* nike invincible 3 */}
          <View style={{marginBottom: 10}}> 
            {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}
           
            <ImageBackground
          source={{uri: 'https://i.pinimg.com/564x/b1/15/7f/b1157fdff8d39f5788e36df7aa2477c4.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          >
         
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginTop: 390,}}>FELL IT TO</Text>
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', }}>BELIEVE IT</Text>
          <View style={{marginLeft: 15, marginTop: 4}}>
         
      
            <TouchableOpacity style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'black', height: 50, width: 200, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 16, fontWeight: '900',  color: 'white'}}>SHOP</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>

          {/* nike pegasus 40 */}
          <View style={{marginBottom: 10}}> 
            {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}
           
            <ImageBackground
          source={{uri: 'https://i.pinimg.com/564x/b7/f0/d7/b7f0d780247436c4b55357a35a80e50b.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          >
         
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginTop: 430, color: 'white'}}>NIKE PEGASUS 40</Text>
      
          <View style={{marginLeft: 15, marginTop: 4}}>
         
      
            <TouchableOpacity style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'white', height: 50, width: 200, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 16, fontWeight: '900',  color: 'black'}}>SHOP</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>
          

          {/* nike trail */}
          <View style={{marginBottom: 10}}> 
            {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}
           
            <ImageBackground
          source={{uri: 'https://i.pinimg.com/564x/2a/16/56/2a16567e980057c6f92ba347cd8df761.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          >
         
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginTop: 390, color: 'white'}}>TRAIL</Text>
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900',  color: 'white'}}>BLAZERS</Text>
      
          <View style={{marginLeft: 15, marginTop: 4}}>
         
      
            <TouchableOpacity style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'white', height: 50, width: 200, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 16, fontWeight: '900',  color: 'black'}}>SHOP</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>

          {/* take on tough */}
          <View style={{marginBottom: 10}}> 
            {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}
           
            <ImageBackground
          source={{uri: 'https://i.pinimg.com/564x/b9/1c/70/b91c70ffb27457d49ec9c562fdf09d3a.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          >
         
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginTop: 390, color: 'white'}}>TAKE ON</Text>
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900',  color: 'white'}}>TOUGH</Text>
      
          <View style={{marginLeft: 15, marginTop: 4}}>
         
      
            <TouchableOpacity style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'white', height: 50, width: 200, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 16, fontWeight: '900',  color: 'black'}}>SHOP</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>

          {/* nike react infinity 3 */}
          <View style={{marginBottom: 10}}> 
            {/* <Text style={{marginLeft: 13, fontSize: 30, fontWeight: '900', marginBottom: 10}}> Nike Basketball</Text> */}
           
            <ImageBackground
          source={{uri: 'https://i.pinimg.com/736x/48/39/86/483986520c271a0b4c4e1c2625d2f33a.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          >
         
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900', marginTop: 390, color: 'white'}}>BUILT FOR A</Text>
          <Text style={{marginLeft: 13, fontSize: 40, fontWeight: '900',  color: 'white'}}>SMOOTH RUN</Text>
      
          <View style={{marginLeft: 15, marginTop: 4}}>
         
      
            <TouchableOpacity style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'white', height: 50, width: 200, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 16, fontWeight: '900',  color: 'black'}}>SHOP</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>

              {/* jordanmen */}
          <View style={{marginBottom: 10}}> 
            {/* <Text style={{marginLeft: 15, fontSize: 30, fontWeight: '900', marginBottom: 10}}>Jordan</Text> */}
            <ImageBackground 
          source={{uri: 'https://i.pinimg.com/736x/7c/20/a8/7c20a882f4899a63049f32a142dc49fe.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          >
         
          <View style={{marginLeft: 15, marginTop: 433}}>
          <Text style={{color: 'black', fontSize: 17, fontWeight: '700'}}>Members: Log in and get an extra 20% off</Text>
           <Text style={{color: 'black', fontSize: 17, fontWeight: '700'}}>select styles. Use code EARLY20 at</Text> 
           <Text style={{color: 'black', fontSize: 17, fontWeight: '700'}}>checkout. Exclusions apply</Text>
           <TouchableOpacity 
            onPress={() => props.navigation.navigate("Shop")}
           style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'black', height: 50, width: 150, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 18, fontWeight: '900',  color: 'white'}}>Learn More</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
          </View>

              {/* runner */}
          <View style={{marginBottom: 50}}> 
            {/* <Text style={{marginLeft: 15, fontSize: 30, fontWeight: '900', marginBottom: 10}}>Runner</Text> */}
         
            <ImageBackground 
          source={{uri: 'https://i.pinimg.com/564x/87/08/72/87087245d6b86e0923397413ce9f1641.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          >
          
          <View style={{marginLeft: 15, marginTop: 425}}>
          <Text style={{color: 'white', fontSize: 17, fontWeight: '600'}}>Members: Log in and get an extra 20% off</Text>
           <Text style={{color: 'white', fontSize: 17, fontWeight: '600'}}>select styles. Use code EARLY20 at</Text> 
           <Text style={{color: 'white', fontSize: 17, fontWeight: '600'}}>checkout. Exclusions apply</Text>
           <TouchableOpacity 
            onPress={() => props.navigation.navigate("Shop")}
           style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'white', height: 50, width: 150, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 18, fontWeight: '900',  color: 'black'}}>Learn More</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
       
  
          </View>




            {/* Happening now sale */}
          <View style={{marginBottom: 50}}> 
            <Text style={{marginLeft: 15, fontSize: 25, fontWeight: '600', marginBottom: 10}}>Happening Now</Text>
            <TouchableOpacity>
            <Image 
          source={{uri: 'https://i.pinimg.com/564x/96/7a/fe/967afefcc96b6b807cdd7eb91c9b2a03.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          />
          </TouchableOpacity>
          <View style={{marginLeft: 15, marginTop: 30}}>
          <Text>Members: Log in and get an extra 20% off</Text>
           <Text>select styles. Use code EARLY20 at</Text> 
           <Text>checkout. Exclusions apply</Text>
           <TouchableOpacity 
            onPress={() => props.navigation.navigate("Shop")}
           style={{padding: 15, marginTop: 20, marginBottom: 15, backgroundColor: 'black', height: 50, width: 80, alignItems: 'center', borderRadius: 20}}>
            <Text style={{fontSize: 15, fontWeight: '600',  color: 'white'}}>Shop</Text>
          </TouchableOpacity>
          </View>
          </View>

            {/* product 1 */}
            <View style={{marginBottom: 50, marginTop: 10}}>
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

          

            {/* popular */}
          <View style={{marginBottom: 30}}> 
            <Text style={{marginLeft: 15, fontSize: 25, fontWeight: '600', marginBottom: 10}}>Popular Right Now</Text>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                {DATA.map((story, index) =>(
                    <View key={index} style={{alignItems: 'center'}}>
                        <TouchableOpacity>
                    <Image source={{uri: story.image}}
                        style={styles.story}
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
          
                {/* member ship */}
          < View > 
            <Text style={{marginLeft: 15, fontSize: 25, fontWeight: '600', marginBottom: 10}}>Nike Membership</Text>

             <View style={{backgroundColor: 'black', marginLeft: 15, marginRight: 15, height: 580, width: 400}}>
                  <Image 
                    source={{uri: 'https://i.pinimg.com/564x/d5/c7/2c/d5c72cb18497d1ea65f29f0857a8c760.jpg'}}
                  style={{height: 150, marginTop: 80, width: 350, alignSelf: 'center'}}
                  />
                  
                  <View style={{marginTop: 40, marginLeft: 20}}>
                  <Text style={styles.memtext}>BECOME A</Text>
                  <Text style={styles.memtext}>MEMBER</Text>
                  <Text style={{color: 'white', marginTop: 35, fontSize: 20}}>Sing up for free, Join the community</Text>
                  
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                  <TouchableOpacity 
                  style={{padding: 15, 
                  marginTop: 20, 
                  marginBottom: 15, 
                  backgroundColor: 'white', 
                  height: 50, width: 170, 
                  alignItems: 'center',
                   borderRadius: 20}}
                   onPress={() => props.navigation.navigate("Register")}
                   >
            <Text style={{fontSize: 15, fontWeight: '900',  color: 'black'}}>Join Us</Text>
          </TouchableOpacity>
          <TouchableOpacity 
                  style={{padding: 15, 
                  marginTop: 20, 
                  marginBottom: 15, 
                  backgroundColor: 'white', 
                  height: 50, width: 170, 
                  alignItems: 'center',
                   borderRadius: 20,
                   marginLeft: 25
                   }}
                   onPress={() => props.navigation.navigate("Login")}
                   >
            <Text style={{fontSize: 15, fontWeight: '900',  color: 'black'}}>Sing In</Text>
          </TouchableOpacity>
          </View>
                  </View>
             </View>
          </View>


                   {/* poter */}
          <View style={{marginBottom: 50}}> 
            
            <TouchableOpacity>
            <Image 
          source={{uri: 'https://i.pinimg.com/564x/25/87/96/2587966b39d47a031873cb7e23fae36a.jpg'}}
          style={{width: 400, height: 600, alignSelf: 'center'}}
          />
          </TouchableOpacity>

          </View>


                   {/* list */}
          <View style={{marginBottom: 20}}> 
          <ListItem title="Product advice" />
          <ListItem title="Featured" />
          <ListItem title="Shoes" />
          <ListItem title="Clothing" />
          <ListItem title="Kids'" />
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

          <View style={{marginTop: 50, marginLeft: 30}}>
            <Text style={{color: 'white'}}> United States</Text>
            <Text style={{color: 'grey'}}>@2023 Nike, Inc, All Right Reserved </Text>
          </View>
       
          </View>


        </ScrollView>
       

       
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30, marginLeft: 40,
    
  },
  container2: {
    marginTop: 200,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5
}, 
icon: {
  width: 30,
  height: 30,
  marginLeft: 10,
  resizeMode: 'contain',
  
},
textpro: {
  marginTop: 5, 
  marginLeft: 20,
  fontWeight: '600',
  fontSize: 18
},
story: {
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
           
},
backgroundVideo: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
},

})

export default OnBroadScreen;
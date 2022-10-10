
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image
 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {

  
    return (
      <View style={styles.container} >
        <SafeAreaView />
        <StatusBar barStyle="dark-content" backgroundColor='#ffffff' />

      <View style={styles.containerSearch}>
        <View style={styles.search}>
        <Icon style={{color:'black',marginTop:10}} name="search-outline" size={25} />
          <TextInput style={{alignSelf:'center',alignItems:'center',color:'#716e75f',fontSize:14,paddingLeft:20}} placeholder="Search for apps & gam..." keyboardType="email-address"></TextInput>
          <Icon style={{color:'black',marginTop:10,paddingLeft:20,justifyContent:"flex-end"}} name="mic-outline" size={25} />
          <Image 
          source={require('./images/person.png')}  
          style={{width: 32, height: 32,borderRadius:50,resizeMode:"contain",alignSelf:"center",marginLeft:0}} 
          />

        </View>
        
        
        <View style={{flexDirection:"row",marginTop:20,justifyContent:'space-around'}}>
        <Text style={{color:"#476bd2"}}>For you</Text>
        <Text>Top chart</Text>
        <Text>Children</Text>
        <Text>Categories</Text>
        {/* <Text>More</Text> */}
        </View>
        <View style={{backgroundColor:"#476bd2",borderTopLeftRadius:10,borderTopRightRadius:10,height:4,width:50,marginLeft:20,marginTop:14}}><Text></Text></View>

      </View>

      <ScrollView>

      <View style={{flexDirection:"row",justifyContent:'space-around',marginTop:20}}>
        <Text style={{fontSize:18,color:"black"}}>Low on space?</Text>
        <Text style={{marginHorizontal:70}}></Text>
        <Icon name='arrow-forward-outline' size={30} color="gray" />
      </View>
      <View><Text style={{marginLeft:20,color:'gray',fontSize:12}}>Lightweight apps</Text></View>

      <View>
      <View style={{flexDirection: 'column'}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
        
       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30,}} source={require('./images/adop.png')} />

        <View>
        <Text style={styles.tex1}>{'Adobe Acrobat\nReader: Edit PDF\n4.5★'}</Text>
        </View>
       </View>
       

       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30,}} source={require('./images/goo.png')} />

        <View>
        <Text style={styles.tex1}>{'Adobe Acrobat\nReader: Edit PDF\n4.4★'}</Text>
        </View>
       </View>

       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30,}} source={require('./images/facebook.png')} />

        <View>
        <Text style={styles.tex1}>{'Facebook: Social\nDiscovery\n4.9★'}</Text>
        </View>
       </View>

       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30,}} source={require('./images/Shazam.png')} />

        <View>
        <Text style={styles.tex1}>{'Shazam: Music\nDiscovery\n4.6★'}</Text>
        </View>
       </View>

      
        </ScrollView>
        </View>
      </View>

      <View style={{flexDirection:'row',marginLeft:15,marginTop:5}}>
        <Text>Ads • </Text>
        <Text style={{fontSize:16,color:'#000000'}}>Suggested for you</Text>
      </View>

      <View>
      <View style={{flexDirection: 'column'}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
        
       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30,}} source={require('./images/Spotify.png')} />

        <View>
        <Text style={styles.tex1}>{'Spotify: Play\nmusic & podcasts\n4.5★'}</Text>
        </View>
       </View>
       

       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30,}} source={require('./images/krave.png')} />

        <View>
        <Text style={styles.tex1}>{'Krave Mart-\nGrocery Delivery\n4.4★'}</Text>
        </View>
       </View>

       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30}} source={require('./images/driver.png')} />

        <View>
        <Text style={styles.tex1}>{'inDriver: Offer\nyour fare\n4.7★'}</Text>
        </View>
       </View>

       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30,}} source={require('./images/Shazam.png')} />

        <View>
        <Text style={styles.tex1}>{'Shazam: Music\nDiscovery\n4.6★'}</Text>
        </View>
       </View>
        </ScrollView>

        <View style={{flexDirection:"row",justifyContent:'space-around',marginTop:5}}>
        <Text style={{fontSize:18,color:"black"}}>Recommended for you</Text>
        <Text style={{marginHorizontal:35}}></Text>
        <Icon name='arrow-forward-outline' size={30} color="gray" />
      </View>

      <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
        
       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30,}} source={require('./images/word.png')} />

        <View>
        <Text style={styles.tex1}>{'Spotify: Play\nmusic & podcasts\n4.5★'}</Text>
        </View>
       </View>
       

       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30,}} source={require('./images/twitter.png')} />

        <View>
        <Text style={styles.tex1}>{'Krave Mart-\nGrocery Delivery\n4.4★'}</Text>
        </View>
       </View>

       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30}} source={require('./images/outlook.png')} />

        <View>
        <Text style={styles.tex1}>{'inDriver: Offer\nyour fare\n4.7★'}</Text>
        </View>
       </View>

       <View style={styles.scrolContainer}>
        
        <Image style={{height:120,width:120, borderRadius:30,}} source={require('./images/cloud.png')} />

        <View>
        <Text style={styles.tex1}>{'Shazam: Music\nDiscovery\n4.6★'}</Text>
        </View>
       </View>
        </ScrollView>
        </View>
      </View>
      </ScrollView>

      <View style={{backgroundColor:"#f9fbfd",height:90,width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{marginTop:15}}>
        <Icon style={{marginLeft:8}} name='game-controller-outline' size={30} />
        <View style={{marginTop:5}}>
        <Text>Games</Text>
        </View>
        </View>
        <View style={{marginTop:15,backgroundColor:"#e8e8e8",height:35,width:60,borderRadius:30}}>
        <Icon style={{alignSelf:'center',marginTop:1}} name='logo-apple-appstore' size={30} color="#000000" />
        <View style={{marginTop:5,marginLeft:15}}>
        <Text>Apps</Text>
        </View>
        
        </View>
        
      </View>

       </View>


       

        
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',

  },

containerSearch:{
  height:115,
  backgroundColor:'white',
  borderBottomWidth: 1,
  borderBottomColor: "lightgray",


},
search:{
  justifyContent: "space-around",
  flexDirection:'row',
  height:45,
  borderRadius:30,
  backgroundColor:'#e8e5ea',
  marginTop:10,
  marginHorizontal:20,
  paddingLeft:10,
},
scrolContainer:{
  height:200,
  width:115,
  marginHorizontal:10,
  marginTop:20,
  // backgroundColor:'red',

},
tex1:{
  color:"gray",
  paddingLeft:5,
  marginTop:5,
  fontSize:12,

},

 
});

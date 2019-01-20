import React, {Component} from 'react';
import { ScrollView, View, Text ,StyleSheet, ActivityIndicator ,Image,Animated,ImageBackground} from 'react-native';
import { Card, Divider} from 'react-native-elements';



class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class LinksScreen extends React.Component {
  static navigationOptions = {
      title: 'Weather',
  };

   constructor(props)
    {
        super(props);
        this.state = {
            receivedData: null
        };
    }
  getWeather(){

  // Construct the API url to call
    let url = 'http://samples.openweathermap.org/data/2.5/weather?q=Vancouver,uk&appid=aa3f0ad6b0d8d7b52a01fcdd110472a1';

    // Call the API, and set the state of the weather forecast
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({receivedData : data});
    })
  }
  componentWillMount(){
       this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this.getWeather();
       }, 1000);

  }
	render() {


    let time;

		// Create a new date from the passed date time
		var date = new Date();

		// Hours part from the timestamp
		var hours = date.getHours();

		// Minutes part from the timestamp
		var minutes = "0" + date.getMinutes();

		time = hours + ':' + minutes.substr(-2);


    if (this.state.receivedData) {
      return (
        <ScrollView style={{marginTop:20}}>
          <Card containerStyle={styles.card}>
            <Text style={styles.notes}>{this.state.receivedData.location}</Text>

            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
              <Image style={{width:100, height:100}} source={{uri:"https://openweathermap.org/img/w/" + this.state.receivedData.weather[0].icon + ".png"}} />
              <Text style={styles.time}>{time}</Text>
            </View>

            <Divider style={{ backgroundColor: '#133A7C', marginVertical:20}} />

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={styles.notes}>{this.state.receivedData.weather[0].description}</Text>
              <Text style={styles.notes}>{Math.round( this.state.receivedData.main.temp / 10) / 10 }&#8451;</Text>
            </View>
            <Divider style={{ backgroundColor: '#133A7C', marginVertical:20}} />

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={styles.notes}>Wind Speed:{this.state.receivedData.wind.speed}</Text>
              <Text style={styles.notes}>Wind Direction:{this.state.receivedData.wind.deg}°</Text>
            </View>
          </Card>
        </ScrollView>
      );

    } else {
      return (

        <ImageBackground source={require('./load.jpg')} style={{width: '100%', height: '100%'}}>

        </ImageBackground>
      );
    }

	}
}

const styles = StyleSheet.create({
  loadContainer:{

    backgroundColor:'#A1E3D8',
    height:100,
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',

  },

  loadText: {

        textAlign:'center',
        fontSize:20 ,
        fontWeight:'bold',
        color:'#47A8E5',
        marginBottom:10,
        marginTop:150,
  },

  card:{
		backgroundColor:'rgba(56, 172, 236, 1)',
		borderWidth:4,
		borderRadius:20,
    borderColor:'#133A7C',
	},

	time:{
		fontSize:38,
		color:'#fff'
	},

	notes: {
		fontSize: 18,
		color:'#fff',
		textTransform:'capitalize'
	},

  horizontal: {
   flexDirection: 'row',
   justifyContent: 'space-around',
   padding: 10
 },
});

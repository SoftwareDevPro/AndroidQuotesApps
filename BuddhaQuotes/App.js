/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

var quotes = [
  "Give, even if you only have a little.",
  "There is no fear for one whose mind is not filled with desires.",
  "Even death is not to be feared by one who has lived wisely.",
  "Irrigators channel waters; fletchers straighten arrows; carpenters bend wood; the wise master themselves.",
  "Drop by drop is the water pot filled. Likewise, the wise man, gathering it little by little, fills himself with good.",
  "Better than a thousand hollow words, is one word that brings peace.",
  "The root of suffering is attachment.",
  "Silence the angry man with love. Silence the ill-natured man with kindness. Silence the miser with generosity. Silence the liar with truth.",
  "People with opinions just go around bothering each other.",
  "Nothing can harm you as much as your own thoughts unguarded.",
  "Meditate… do not delay, lest you later regret it.",
  "Understanding is the heartwood of well-spoken words.",
  "Ceasing to do evil, Cultivating the good, Purifying the heart: This is the teaching of the Buddhas.",
  "Delight in meditation and solitude. Compose yourself, be happy. You are a seeker.",
  "Ardently do today what must be done. Who knows? Tomorrow, death comes.",
  "What you are is what you have been. What you’ll be is what you do now.",
  "If anything is worth doing, do it with all your heart.",
  "All that we are is the result of what we have thought.",
  "Stop, stop. Do not speak. The ultimate truth is not even to think.",
  "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
  "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
  "Our life is shaped by our mind; we become what we think. Joy follows a pure thought like a shadow that never leaves.",
  "Chaos is inherent in all compounded things. Strive on with diligence.",
  "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
  "Work out your own salvation. Do not depend on others.",
  "You only lose what you cling to.",
  "True love is born from understanding.",
  "He is able who thinks he is able.",
  "You are a seeker. Delight in the mastery of your hands and your feet, of your words and your thoughts.",
  "The one who has conquered himself is a far greater hero than he who has defeated a thousand times a thousand men.",
  "Do not look for a sanctuary in anyone except your self.",
  "Nothing is forever except change.",
  "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship."
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  type Props = {};
  export default class App extends Component<Props> {
  
    constructor(props) {
      super(props);
      
      this.state = {
        currentQuote: 0
      };
  
      this._onPrevClick = this._onPrevClick.bind(this);
      this._onNextClick = this._onNextClick.bind(this);
      this._onClickFirst = this._onClickFirst.bind(this);
      this._onClickLast  = this._onClickLast.bind(this);
      this._onClickRandomQuote  = this._onClickRandomQuote.bind(this);
    }
  
    componentDidMount() {
      // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        setTimeout(() => {
          SplashScreen.hide();        
        }, 2000);
    } 
  
  
    _onPrevClick () {
      console.log("_onPrevClick-enter");
  
      var lastQuote = quotes.length - 1;
      var curQuote = this.state['currentQuote'];
      
      if (curQuote == 0) {
        this.setState({ 'currentQuote': lastQuote });
      } else {
        this.setState({ 'currentQuote': curQuote - 1 });
      }
  
      console.log("_onPrevClick-exit");
    }
  
    _onNextClick() {
      console.log("_onNextClick-enter");
  
      var lastQuote = quotes.length - 1;
      var curQuote = this.state['currentQuote'];
      
      if (curQuote == lastQuote) {
        this.setState({ 'currentQuote': 0 });
      } else {
        this.setState({ 'currentQuote': curQuote + 1 });
      }
  
      console.log("_onNextClick-exit");
    }
  
    _onClickFirst() {
      console.log("_onClickFirst-enter");
          
      this.setState({ 'currentQuote': 0 });
  
      console.log("_onClickFirst-exit");
    }
  
    _onClickLast() {
      console.log("_onClickLast-enter");
      
      var lastQuote = quotes.length - 1;
  
      this.setState({ 'currentQuote': lastQuote });
  
      console.log("_onClickLast-exit");
    }
  
    _onClickRandomQuote() {
      console.log("_onClickRandomQuote-enter");
      
      var curQuote = this.state['currentQuote'];
      var newQuote = getRandomInt(quotes.length);
  
      while (newQuote == curQuote) {
        newQuote = getRandomInt(quotes.length);
      }
      
      this.setState({ 'currentQuote': newQuote });
      
      console.log("_onClickRandomQuote-exit");
    }
  
    onSwipeLeft(gestureState) {
      this._onPrevClick();
    }
   
    onSwipeRight(gestureState) {
      this._onNextClick();
    }
  
    render() {
  
      const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };
      
      return (
        <GestureRecognizer
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <View style={styles.container}>
          <Text style={styles.headerStyle}>Buddha Quotes</Text>
          <View>
            <Text style={styles.quoteText}>
              "{quotes[this.state['currentQuote']]}"
            </Text>
          </View>
          <View style={styles.buttonView}>
              <Button 
              title="<<"
              onPress={this._onClickFirst}
              />
              <Button 
              title="<"
              onPress={this._onPrevClick}
              />
              <Button 
              title="Random Quote"
              onPress={this._onClickRandomQuote}
              />
              <Button 
              title=">"
              onPress={this._onNextClick}
              />
              <Button 
              title=">>"
              onPress={this._onClickLast}
              />
            </View>
          </View>
          </GestureRecognizer>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      margin: 50
    },
    headerStyle: {
      fontSize: 30,
      textAlign: 'center',
      margin: 30
    },
    quoteText: {
      color: '#000000',
      textAlign: 'center',
      fontSize: 20
    },
    buttonView: {
      flex: 1,
      width: 400,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-evenly'
    }
  });
  
  
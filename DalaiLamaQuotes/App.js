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
  "The goal is not to be better than the other man, but your previous self.",
  "Happiness is not something ready made. It comes from your own actions.",
  "We need to learn to want what we have, not to have what we want, in order to get stable and steady happiness.",
  "It is under the greatest adversity that there exists the greatest potential for doing good, both for oneself and others.",
  "Compassion is the radicalism of our time.",
  "To conquer oneself is a greater victory than to conquer thousands in a battle.",
  "People take different roads seeking fulfillment and happiness. Just because they’re not on your road doesn’t mean they’ve gotten lost.",
  "If you think you are too small to make a difference, try sleeping with a mosquito.",
  "My religion is very simple. My religion is kindness.",
  "Give the ones you love wings to fly, roots to come back, and reasons to stay.",
  "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.",
  "Be kind whenever possible. It is always possible.",
  "The world doesn’t belong to leaders. The world belongs to all humanity.",
  "Sometimes one creates a dynamic impression by saying something, and sometimes one creates as significant an impression by remaining silent.",
  "A disciplined mind leads to happiness, and an undisciplined mind leads to suffering.",
  "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
  "Just one small positive thought in the morning can change your whole day.",
  "Choose to be optimistic, it feels better.",
  "Love is the absence of judgment.",	
  "Help others, and if you can’t help them at least don’t hurt them.",
  "Do not let the behavior of others destroy your inner peace.",
  "When you talk, you are only repeating what you already know; But when you listen, you may learn something new.",
  "Be happy to change your goals, but never change your values.",
  "Look at situations from all angles, and you will become more open.",
  "Sleep is the best meditation.",
  "Know the rules well, so you can break them effectively.",
  "Home is where you feel at home and are treated well.",
  "The true hero is one who conquers his own anger and hatred.",
  "In order to carry a positive action we must develop here a positive vision.",
  "If you don’t love yourself, you cannot love others.",
  "When you are discontent, you always want more, more, more, more. Your desire can never be satisfied. But when you practice contentment, you can say to yourself, oh yes, I already have everything that I really need.",
  "Silence is sometimes the best answer.",
  "We can never obtain peace in the outer world until we make peace with ourselves.",
  "The seed of goodness is found in the soil of appreciation.",
  "Share your knowledge. It is a way to achieve immortality.",
  "Hard times build determination and inner strength. Through them we can also come to appreciate the uselessness of anger. Instead of getting angry nurture a deep caring and respect for troublemakers because by creating such trying circumstances they provide us with invaluable opportunities to practice tolerance and patience.",
  "Instead of wondering WHY this is happening to you, consider why this is happening to YOU.",
  "Happiness doesn’t always come from a pursuit. Sometimes it comes when we least expect it.",
  "Anger is the ultimate destroyer of your own peace of mind.",
  "I believe that the very purpose of life is to be happy.",
  "One great question underlies our experience, whether we think about it or not: what is the purpose of life? . . . From the moment of birth every human being wants happiness and does not want suffering. Neither social conditioning nor education nor ideology affects this. From the very core of our being, we simply desire contentment. . . Therefore, it is important to discover what will bring about the greatest degree of happiness."
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
          <Text style={styles.headerStyle}>Dalai Lama Quotes</Text>
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
  
  

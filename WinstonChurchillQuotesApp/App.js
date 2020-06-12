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
  "It is a good thing for an uneducated man to read books of quotations.",
  "There are a terrible lot of lies going about the world, and the worst of it is that half of them are true.",
  "To improve is to change, so to be perfect is to change often.",
  "To build may have to be the slow and laborious task of years. To destroy can be the thoughtless act of a single day.",
  "The farther backward you can look, the farther forward you are likely to see.",
  "The price of greatness is responsibility.",
  "Men occasionally stumble over the truth, but most of them pick themselves up and hurry off as if nothing ever happened.",
  "Never hold discussions with the monkey when the organ grinder is in the room.",
  "Personally I’m always ready to learn, although I do not always like being taught.",
  "Success is the ability to go from one failure to another with no loss of enthusiasm.",
  "Every day you may make progress. Every step may be fruitful. Yet there will stretch out before you an ever-lengthening, ever-ascending, ever-improving path. You know you will never get to the end of the journey. But this, so far from discouraging, only adds to the joy and glory of the climb.",
  "Attitude is a little thing that makes a BIG difference.",
  "Success is not final, failure is not fatal, it is the courage to continue that counts.",
  "If you’re going through hell, keep going.",
  "Everyone has his day, and some days last longer than others.",
  "You have enemies? Good. It means you’ve stood up for something, sometime in your life.",
  "There is only one duty, only one safe course, and that is to try to be right and not to fear to do or say what you believe to be right.",
  "Every man should ask himself each day whether he is not too readily accepting negative solutions." ,
  "The greatest lesson in life is to know that even fools are right sometimes.", 
  "It is a mistake to try to look too far ahead. The chain of destiny can only be grasped one link at a time.",
  "It’s not enough that we do our best; sometimes we have to do what’s required.",
  "The problems of victory are more agreeable than those of defeat, but they are no less difficult.",
  "Courage is what it takes to stand up and speak, it’s also what it takes to sit down and listen.",
  "Continuous efforts – not strength or intelligence – is the key to unlocking our potential.",
  "Success is never found. Failure is never fatal. Courage is the only thing."
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
        <Text style={styles.headerStyle}>Winston Churchill Quotes</Text>
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


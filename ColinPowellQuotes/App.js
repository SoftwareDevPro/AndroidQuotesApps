/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

var quotes = [
  "A dream doesn't become reality through magic; it takes sweat, determination and hard work.",
  "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence.",
  "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
  "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude.",
  "Don't bother people for help without first trying to solve the problem yourself.",
  "Surround yourself with people who take their work seriously, but not themselves, those who work hard and play hard.",
  "Don't be afraid to challenge the pros, even in their own backyard.",
  "Never let your ego get so close to your position that when your position goes, your ego goes with it.",
  "Get mad, then get over it.",
  "Experts often possess more data than judgment.",
  "I try to be the same person I was yesterday.",
  "It ain’t as bad as you think. It will look better in the morning.",
  "Giving back involves a certain amount of giving up.",
  "Always focus on the front windshield and not the rearview mirror.",
  "Trying to get everyone to like you is a sign of mediocrity.",
  "Faults are yours to fix, not to curse.",
  "None of us can change our yesterdays but all of us can change our tomorrows.",
  "Remain calm. Be kind.",
  "Always do your best. Somebody is watching you.",
  "You don’t step on enthusiasm.",
  "Being responsible sometimes means pissing people off.",
  "Organization charts and fancy titles count for next to nothing.",
  "The freedom to do your best means nothing unless you are willing to do your best."
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
      }, 3000);
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
        <Text style={styles.headerStyle}>Colin Powell Quotes</Text>
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


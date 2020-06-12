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
  "In a time of deceit telling the truth is a revolutionary act.",
  "The most effective way to destroy people is to deny and obliterate their own understanding of their history.",
  "Perhaps one did not want to be loved so much as to be understood.",
  "Who controls the past controls the future. Who controls the present controls the past.",
  "Doublethink means the power of holding two contradictory beliefs in one’s mind simultaneously, and accepting both of them.",
  "If liberty means anything at all, it means the right to tell people what they do not want to hear.",
  "In the face of pain there are no heroes.",
  "Power is in tearing human minds to pieces and putting them together again in new shapes of your own choosing.",
  "The essence of being human is that one does not seek perfection.",
  "The choice for mankind lies between freedom and happiness and for the great bulk of mankind, happiness is better.",
  "Reality exists in the human mind, and nowhere else.",
  "People sleep peaceably in their beds at night only because rough men stand ready to do violence on their behalf.",
  "On the whole human beings want to be good, but not too good, and not quite all the time.",
  "Men can only be happy when they do not assume that the object of life is happiness.",
  "To see what is in front of one’s nose needs a constant struggle.",
  "If you want to keep a secret, you must also hide it from yourself.",
  "In general, the greater the understanding, the greater the delusion; the more intelligent, the less sane.",
  "Big Brother is Watching You.",
  "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.",
  "Man is the only creature that consumes without producing. He does not give milk, he does not lay eggs, he is too weak to pull the plough, he cannot run fast enough to catch rabbits. Yet he is lord of all the animals. He sets them to work, he gives back to them the bare minimum that will prevent them from starving, and the rest he keeps for himself.", 
  "At 50, everyone has the face he deserves.", 
  "Liberal: a power worshipper without power.",
  "The quickest way of ending a war is to lose it.",
  "All animals are equal but some animals are more equal than others."
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
        <Text style={styles.headerStyle}>George Orwell Quotes</Text>
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




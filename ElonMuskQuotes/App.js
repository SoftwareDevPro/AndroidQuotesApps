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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var quotes = [
  //
  "When something is important enough, you do it even if the odds are not in your favor.",
  "Patience is a virtue, and I'm learning patience. It's a tough lesson.",
  "Life is too short for long-term grudges.",
  "We're running the most dangerous experiment in history right now, which is to see how much carbon dioxide the atmosphere... can handle before there is an environmental catastrophe.",
  "I think that's the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.",
  "I think you should always bear in mind that entropy is not on your side.",
  "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.",
  "It's OK to have your eggs in one basket as long as you control what happens to that basket.",
  "Any product that needs a manual to work is broken.",
  "When Henry Ford made cheap, reliable cars people said, 'Nah, what's wrong with a horse?' That was a huge bet he made, and it worked.",
  "Trying to read our DNA is like trying to understand software code - with only 90% of the code riddled with errors. It's very difficult in that case to understand and predict what that software code is going to do.",
  "Some people don't like change, but you need to embrace change if the alternative is disaster.",
  "I could either watch it happen or be a part of it.",
  "The first step is to establish that something is possible; then probability will occur.",
  "I think it is possible for ordinary people to choose to be extraordinary.",
  "If you go back a few hundred years, what we take for granted today would seem like magic-being able to talk to people over long distances, to transmit images, flying, accessing vast amounts of data like an oracle. These are all things that would have been considered magic a few hundred years ago.",
  "Persistence is very important. You should not give up unless you are forced to give up.",
  "Failure is an option here. If things are not failing, you are not innovating enough.",
  "Work like hell. I mean you just have to put in 80 to 100 hour weeks every week. [This] improves the odds of success. If other people are putting in 40 hour workweeks and you're putting in 100 hour workweeks, then even if you're doing the same thing, you know that you will achieve in four months what it takes them a year to achieve.",
  "No, I don’t ever give up. I’d have to be dead or completely incapacitated.",
  "If you need inspiration, don’t do it.",
  "Persistence is very important. You should not give up unless you are forced to give up. ",

  // Meeting Quotes
  "Excessive meetings are the blight of big companies and almost always get worse over time. Please get [out] of all large meetings, unless you’re certain they are providing value to the whole audience, in which case keep them very short.",
  "Also get rid of frequent meetings, unless you are dealing with an extremely urgent matter. Meeting frequency should drop rapidly once the urgent matter is resolved.",
  "Walk out of a meeting or drop off a call as soon as it is obvious you aren’t adding value. It is not rude to leave, it is rude to make someone stay and waste their time.",
  "Don’t use acronyms or nonsense words for objects, software or processes at Tesla. In general, anything that requires an explanation inhibits communication. We don’t want people to have to memorize a glossary just to function at Tesla.",
  "Communication should travel via the shortest path necessary to get the job done, not through the ‘chain of command’. Any manager who attempts to enforce chain of command communication will soon find themselves working elsewhere.",
  "In general, always pick common sense as your guide. If following a ‘company rule’ is obviously ridiculous in a particular situation, such that it would make for a great Dilbert cartoon, then the rule should change."
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
      SplashScreen.hide();
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
        <Text style={styles.headerStyle}>Elon Musk Quotes</Text>
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

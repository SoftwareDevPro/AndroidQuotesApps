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
  "The value of achievement lies in the achieving.",
  "I always get by best with my naivety, which is 20 percent deliberate. ",
  "A happy man is too satisfied with the present to dwell too much on the future.",
  "Three rules of work: Out of clutter find simplicity; From discord find harmony; In the middle of difficulty lies opportunity.",
  "I salute the man who is going through life always helpful, knowing no fear, and to whom aggressiveness and resentment are alien.",
  "A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness.",
  "The only thing more dangerous than ignorance is arrogance.",
  "Weak people revenge. Strong people forgive. Intelligent people ignore.",
  "Most people say that it is the intellect which makes a great scientist. They are wrong: it is character.",
  "To raise new questions, new possibilities, to regard old problems from a new angle, requires creative imagination and marks real advance in science.",
  "Unthinking respect for authority is the greatest enemy of truth.",
  "The value of a man should be seen in what he gives and not in what he is able to receive.",
  "I believe in intuition and inspiration. At times I feel certain I am right while not knowing the reason.",
  "Don’t listen to the person who has the answers; listen to the person who has the questions.",
  "Any fool can know. The point is to understand.",
  "The only thing that interferes with my learning is my education.",
  "Imagination is the highest form of research.",
  "You never fail until you stop trying.",
  "Once we accept our limits, we go beyond them.",
  "The only source of knowledge is experience.",
  "A little knowledge is dangerous. So is a lot.",
  "Where there’s a will there’s a way.",
  "The only real valuable thing is intuition.",
  "If the facts don’t fit the theory, change the facts.",
  "I never think of the future – it comes soon enough.",
  "Learn from yesterday, live for today, hope for tomorrow.",
  "Never memorize something that you can look up.",
  "If you can’t explain it simply, you don’t understand it well enough.",
  "Imagination is everything. It is the preview of life’s coming attractions.",
  "Intellectuals solve problems, geniuses prevent them.",
  "I have no special talent. I am only passionately curious.",
  "The true sign of intelligence is not knowledge but imagination.",
  "Never give up on what you really want to do. The person with big dreams is more powerful than one with all the facts.",
  "The most powerful force in the universe is compound interest.",
  "You have to learn the rules of the game. And then you have to play better than anyone else.",
  "Bureaucracy is the death of all sound work.",
  "Two things are infinite: the universe and human stupidity; and I’m not sure about the the universe.",
  "The difference between stupidity and genius is that genius has its limits.",
  "Insanity: doing the same thing over and over again and expecting different results.",
  "A clever person solves a problem. A wise person avoids it.",
  "Stay away from negative people. They have a problem for every solution.",
  "What is right is not always popular and what is popular is not always right.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "There are two means of refuge from the misery of life – music and cats.",
  "Love brings much happiness, much more than pining brings pain.",
  "The important thing is not to stop questioning. Curiosity has its own reason for existing. One cannot help but be in awe when one contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries to comprehend only a little of this mystery every day.",
  "Logic will get you from A to B. Imagination will take you everywhere.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Anyone who has never made a mistake has never tried anything new.",
  "Equations are more important to me, because politics is for the present, but an equation is something for eternity.",
  "The measure of intelligence is the ability to change.",
  "Thinking is hard work; that’s why so few do it."  
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
        <Text style={styles.headerStyle}>Albert Einstein Quotes</Text>
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


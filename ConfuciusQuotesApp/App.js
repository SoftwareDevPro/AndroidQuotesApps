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
  "The man who says he can, and the man who says he can not... Are both correct.",
  "Your life is what your thoughts make it.",
  "Real knowledge is to know the extent of one’s ignorance.",
  "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
  "The journey with a 1000 miles begins with one step.",
  "Choose a job you love, and you will never have to work a day in your life.",
  "You are what you think.",
  "Looking at small advantages prevents great affairs from being accomplished.",
  "All people are the same; only their habits differ.",
  "Learn advidly. Question it repeatedly. Analyze it carefully. Then put what you have learned into practice intelligently.",
  "We have two lives, and the second begins when we realize we only have one.",
  "If you are the smartest person in the room, then you are in the wrong room.",
  "Act with kindness but do not expect gratitude.",
  "Worry not that no one knows you; seek to be worth knowing.",
  "The man who moves a mountain begins by carrying away small stones.",
  "When it is obvious that the goals cannot be reached, don’t adjust the goals, adjust the action steps.",
  "The essence of knowledge is, having it, to use it.",
  "One joy dispels a hundred cares.",
  "Anyone can find the switch after the lights are on.",
  "When you see a good person, think of becoming like her/him. When you see someone not so good, reflect on your own weak points.",
  "I slept and dreamt life is beauty, I woke and found life is duty.",
  "They must often change who would remain constant in happiness and wisdom.",
  "Be not ashamed of mistakes and thus make them crimes.",
  "The superior man is modest in his speech, but exceeds in his actions.",
  "Be strict with yourself but least reproachful of others and complaint is kept afar.",
  "No matter how busy you make think you are you must find time for reading, or surrender yourself to self-chosen ignorance.",
  "Think of tomorrow, the past can’t be mended.",
  "Respect yourself and others will respect you.",
  "To be wronged is nothing, unless you continue to remember it.",
  "I hear and I forget. I see and I remember. I do and I understand.",
  "By nature, men are nearly alike; by practice, they get to be wide apart.",
  "Learn as if you were not reaching your goal and as though you were scared of missing it.",
  "Never contract friendship with a man that is not better than thyself.",
  "He who knows all the answers has not been asked all the questions.",
  "Those who cannot forgive others break the bridge over which they themselves must pass.",
  "Those who know the truth are not equal to those who love it.",
  "The superior man thinks always of virtue; the common man thinks of comfort.",
  "The superior man acts before he speaks, and afterwards speaks according to his action.",
  "Success depends upon previous preparation, and without such preparation there is sure to be failure.",
  "Only the wisest and stupidest of men never change.",
  "Study the past if you would define the future.",
  "Our greatest glory is not in never falling, but in rising every time we fall.",
  "Learning without thought is labor lost; thought without learning is perilous.",
  "Do not impose on others what you yourself do not desire.",
  "The superior man makes the difficulty to be overcome his first interest; success only comes later.",
  "If you make a mistake and do not correct it, this is called a mistake.",
  "Education breeds confidence. Confidence breeds hope. Hope breeds peace.",
  "A superior man is modest in his speech, but exceeds in his actions.",
  "To see the right and not to do it is cowardice.",
  "Virtuous people often revenge themselves for the constraints to which they submit by the boredom which they inspire.",
  "He who acts with a constant view to his own advantage will be much murmured against.",
  "The superior man is distressed by the limitations of his ability; he is not distressed by the fact that men do not recognize the ability that he has.",
  "To see what is right and not to do it is want of courage, or of principle.",
  "When anger rises, think of the consequences.",
  "To know what you know and what you do not know, that is true knowledge.",
  "I want you to be everything that’s you, deep at the center of your being.",
  "The object of the superior man is truth.",
  "To go beyond is as wrong as to fall short.",
  "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?",
  "It does not matter how slowly you go as long as you do not stop.",
  "The superior man does not, even for the space of a single meal, act contrary to virtue. In moments of haste, he cleaves to it. In seasons of danger, he cleaves to it.",
  "The will to win, the desire to succeed, the urge to reach your full potential… these are the keys that will unlock the door to personal excellence.",
  "If we don’t know life, how can we know death?",
  "He who speaks without modesty will find it difficult to make his words good.",
  "What you do not want done to yourself, do not do to others.",
  "You cannot open a book without learning something.",
  "A gentleman would be ashamed should his deeds not match his words.",
  "Wherever you go, go with all your heart.",
  "It is more shameful to distrust our friends than to be deceived by them.",
  "Life is really simple, but we insist on making it complicated.",
  "Silence is a true friend who never betrays.",
  "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
  "Everything has beauty, but not everyone sees it.",
  "The more man meditates upon good thoughts, the better will be his world and the world at large.",
  "He who learns but does not think, is lost! He who thinks but does not learn is in great danger.",
  "If you don’t want to do something, don’t impose on others.",
  "It is easy to hate and it is difficult to love. This is how the whole scheme of things works. All good things are difficult to achieve; and bad things are very easy to get.",
  "The strength of a nation derives from the integrity of the home.",
  "The superior man understands what is right; the inferior man understands what will sell.",
  "Imagination is more important than knowledge.",
  "When you know a thing, to hold that you know it; and when you do not know a thing, to allow that you do not know it – this is knowledge",  
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
      }, 1000);
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
        <Text style={styles.headerStyle}>Confucius Quotes</Text>
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

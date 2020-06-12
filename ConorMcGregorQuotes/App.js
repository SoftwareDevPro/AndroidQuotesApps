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
  "Believe in yourself and you will be unstoppable.",
  "Be grateful with everything you have and you will be successful in everything you do.",
  "Nothing ever good comes from worrying or sitting there feeling sorry for yourself... Keep positive and keep pushing and things will turn good.",
  "Act the way you want to become, and then before you know it, it just happens.",
  "When you're about to quit, remember why you started.",
  "Excellence is not a skill, Excellence is an attitude.",
  "If you're not willing to go all the way, you won't go anywhere.",
  "The more you seek the uncomfortable,the more you will become comfortable.",
  "Be Passionate, Be Optimistic, Be Grateful.",
  "You can't fear success, and I think a lot of people do.  I think a lot of people fear really high heights, but I am not one of those people.",
  "I have never encountered a winner that held hate towards something.",
  "Know yourself to know others.",
  "All that matters is how you see yourself.",
  "My success isn't a result of arrogance, it's a result of belief.",
  "I'm just trying to be myself.  I'm not trying to be anyone else.",
  "When I say something's going to happen, it's going to happen.",
  "There is no talent here.  This is hard work, this is obsession.  Talent does not exist, we are all equals as human beings.  You could be anyone if you put in the time.  You will reach the top and that's that.  I am not talented.  I am obsessed.",
  "Great things never came from comfort zones.",
  "Doubt is only removed by action.  If you're not working, then that's when doubt comes in.",
  "If you can't start loving yourself, who else will do?",
  "When you truly don't care what anyone thinks of you, you have reached a dangerous awesome level of freedom.",
  "Life is about improving and getting better.",
  "Smart work pays best.  Trust it.",
  "I stay ready so I don't have to get ready.",
  "What defines us is how well we rise after falling.",
  "It’s not really that much big of a deal – you brush it off and you come back. Defeat is the secret ingredient to success.",
  "Approach everything with an open mind, with a learning mind. You will never stop learning as long as you keep the mind-set that everything works, because everything does work. There’s a time and a place for every single move. If you work on it enough, it will work.",
  "Always look to learn. Learning something new is a great feeling. The feeling of progress.",
  "I believe in myself so much that nothing is going to stop me.",
  "The thing about the truth is, not a lot of people can handle it.",
  "Life's a rollercoaster.  You're up one minute; you're down one minute.  But who doesn't like rollercoasters?",
  "People like to blame others.  I think a person should look at their own situation, look around them, find out what they wish to do, and seek and go do that.  And that's it.",
  "It's good to make your brain work more than your body."
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
        <Text style={styles.headerStyle}>Conor McGregor Quotes</Text>
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


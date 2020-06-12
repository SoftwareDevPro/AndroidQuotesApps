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
  ["Corey Taylor","Do what you do and mean it every second of the day. If you don't, you're living someone else's life."],
  ["Corey Taylor","The best friends you will ever have are the ones who don't make you feel like you owe them a damn thing."],
  ["Corey Taylor","You have incredible lives ahead of you. You have incredible things that you can accomplish. If you feel that, you will have an amazing life. Do not let anything build a wall too high for you to get over. And I know that might seem very cliche, but I've had alot of friends who had hurt themselves. And when you're younger, a lot of that stuff is so temporary. You can get through it. You're stronger than you think. You'll ALWAYS be stronger than you think. Feel with your heart and do what you want."],
  ["Corey Taylor","I don't mean to be overly sensitive or anything like that, but you just have to take a minute in every day, and just reflect on where you are, and just realise what you've got, because you just never know where the next huge change in your life is going to come from."],
  ["Corey Taylor","It's amazing and sad what we have to do to survive sometimes."],
  ["Corey Taylor","Life owes you nothing. You owe yourself everything."],
  ["Corey Taylor","The future is meant for those who are willing to let go of the worst parts of the past. When you cannot take two steps without turning around to inspect your footsteps, you are getting nowhere fast."],
  ["Corey Taylor","Sin is a matter of opinion. Sins are only sins if you are hurting other people."],
  ["Corey Taylor","If you feel like talking, you talk, if you don't, you don't."],
  ["Corey Taylor","You ever want to feel powerless? Watch the people you care about being hurt and know there is nothing you can do about it."],
  ["Corey Taylor","You can have the best intentions in the world but if you do nothing, you are nothing."],
  ["Corey Taylor","Live your life, no matter what that life is."],
  ["Corey Taylor","Some of the smartest people I know are metal fans."],
  ["Aaron Lewis", "I've never needed government to hold my hand."],
  ["Paul Gray","Cats were put into the world to disprove the dogma that all things were created to serve man."],
  ["Cliff Burton","We do what we want. We don't care what anyone else thinks."],
  ["Cliff Burton","You don't burn out from going too fast. You burn out from going too slow and getting bored."],
  ["Cliff Burton","Control your life through insanity."],
  ["Cliff Burton","Every once in a while we may fall on our face, but we insist on doing what we wanna do."],
  ["Peter Steel","Base not your joy on the deeds of others. For what has been given can be taken away."],
  ["Peter Steel","We live to avoid death, we exist to avoid unexistence."],
  ["Peter Steel","I think anyone who has an opinion, and voices it, will offend someone."],
  ["Peter Steel","It's a funny thing, when you talk to God, you're religious, but when he talks to you, you're a psychopath."],
  ["Peter Steel","I'm the product of 6 million years of evolution? Come on, man. I crawled out of a swamp yesterday."],
  ["Peter Steel","Have faith that when bad things happen to you, I belief in an after life, it is better to suffer here on Earth than what awaits you. That is why I pray for pain, and I get it. I do."],
  ["Peter Steel","I don't like the human race in general. We are the only species who hunt for sport, who kill due to emotional need."],
  ["Peter Steel","I'm a big fan of the effects of alcohol."],
  ["Peter Steel","Treat each other the way you would like to be treated."],
  ["Ozzy Osbourne","Maybe it's not too late to learn how to love and forget how to hate."],
  ["Ozzy Osbourne","Sometimes I'm scared of being Ozzy Osbourne. But it could have been worse. I could have been Sting."],
  ["Ozzy Osbourne","Of all the things I've lost I miss my mind the most."],
  ["Ozzy Osbourne","When you’re in love, it’s not just about the messing around in the sack, it’s about how empty you feel when they’re gone."],
  ["Ozzy Osbourne","You've got to believe in yourself, or no one will believe in you. Imagination is like a bird on the wing, flying free for you to use."],
  ["Ozzy Osbourne","If you can laugh at your mistakes, it's a good thing."],
  ["Ozzy Osbourne","It's all part of my journey - I've done a lot of stupid things, but you learn by your mistakes."],
  ["Ozzy Osbourne","Hating people isn’t a productive way of living. So what’s the point in hating anyone? There’s enough hate in the world as it is, without me adding to it."],
  ["Ozzy Osbourne","You learn who your friends are when the sh-t hits the fan."],
  ["Ozzy Osbourne","I used to get upset by people not understanding me, but I’ve made a career out of it now."],
  ["Zakk Wylde","The work these brave men and women do is extremely important, not only to our nation but to all the countries that our troops are stationed at around the world. I am grateful to the USO for having us and to all the troops who shared their day with us."],
  ["Zakk Wylde","Face your fear Accept your war it is what it is."],
  ["Zakk Wylde","Whatever it is you love, and whatever it is that you want to do, that's what you should be doing."],
  ["Zakk Wylde","Any guy that's not working with the same amount of intensity and passion that I do, I don't want to know."],
  ["Zakk Wylde","Every day you try to get better."],
  ["Zakk Wylde","You never toot your own horn."],
  ["Slash","You can't wait around for destiny to give you what you think you deserve, you have to earn it, even if you think you've paid your dues."],
  ["Slash","Rock n' roll is about attitude and rebellion. It's supposed to be fun and spontaneous."],
  ["Slash","Risk isn't a word in my vocabulary. It's my very existence."],
  ["Slash","A day doesn't go by where I don't get surprised by something."],
  ["Slash","I dont believe in having regrets."],
  ["Jimmy Page","So many people are frightened to take a chance in life and there's so many chances you have to take."],
  ["Jimmy Page","Music is the one thing that has been consistently there for me. It hasn’t let me down."],
  ["Jimmy Page","I may not believe in myself, but I believe in what I'm doing."],
  ["Robert Plant","The whole idea of music, from the beginning of time, was for people to be happy."],
  ["Robert Plant","There's still time to change the road you're on..."],
  ["Robert Plant","I think that passion and love and pain are all bearable, and they go to make love beautiful."],
  ["Robert Plant","Music is for every single person that walks the planet."],
  ["Robert Plant","Don't be hard on yourself. And take as many chances, risks, as you can."],
  ["Robert Plant","I like the idea of being alone. I like the idea of often being alone in all aspects of my life. I like to feel lonely. I like to need things."],
  ["Robert Plant","Boredom is the beginning of all destruction and everything that is negative."],
  ["Nikki Sixx","If you don’t deal with your demons, they will deal with you, and it’s gonna hurt."],
  ["Nikki Sixx","The trouble with asking questions is you sometimes get answers you don't wanna hear."],
  ["Nikki Sixx","When You've lost it all....thats when you realize that Life is Beautiful."],
  ["Nikki Sixx","Don't waste your death on a half assed life."],
  ["Nikki Sixx","Perfection is unattainable, so I like to live in imperfection."],
  ["Nikki Sixx","Addiction - When you can give up something any time, as long as it's next Tuesday."],
  ["Nikki Sixx","Life is like a long ride to nowhere in particular."],
  ["Nikki Sixx","Selling my soul would be a lot easier if I could just find it."],
  ["Nikki Sixx","Overconfidence comes from fear and doubt, and you boast an ego when you're feeling less than."],
  ["Nikki Sixx","Ego is the great enemy. Ego will hold you back every single time."],
  ["Nikki Sixx","Darkness can be funny. It can be quirky. There are different ways that that stuff comes out as a creative person. But the actual conflicted, twisted, decaying, rotting soul? That's not me. No more."],
  ["Nikki Sixx","I had to find the courage to turn my life around."],
  ["Vince Neil","I lost my faith in God when I lost my daughter to Cancer, the beast. I begged, I cried, I offered my life for hers, and day by day, I watched that beautiful little Angel slip off. So, excuse me for not taking my seat next to you on Sunday in Church, I feel too cheated to worship."],
  ["Sebastian Bach","What is music for? It's to make you feel good."],
  ["Kurt Cobain","Dreaming of the person you want to be is wasting the person you already are."],
  ["Kurt Cobain","You do learn things and one of them is that happiness has nothing to do with validation from other people, the important thing is being happy with yourself ... finding something that is important to you and sticking with it no matter what anyone says. The truth is you've got to really be tough because there are all kinds of forces that are always trying to get you to do things their way ... trying to tell you that you are throwing your life away if you don't follow their advice."],
  ["Kurt Cobain","I'd rather be hated for who I am, than loved for who I am not."],
  ["Kurt Cobain","Life is a waste of time and time is a waste of life, so let's all get wasted and have the time of our lives."],
  ["Kurt Cobain","Wanting to be someone else is a waste of who you are."],
  ["Kurt Cobain","Just because it's all you want, doesn't mean it's all you need."],
  ["Kurt Cobain","Humans are stupid. I'm ashamed to be human."],
  ["Kurt Cobain","If chasing cool is important to you, you're an idiot!"],
  ["Kurt Cobain","I don’t have the passion anymore, and so remember, it’s better to burn out than to fade away."],
  ["Kurt Cobain","I’m not mad. I’m in a perfectly happy mood, you a**hole."],
  ["Kurt Cobain","Rather be dead than cool."],
  ["Kurt Cobain","People think of life as being so sacred and they feel like this is their only chance and they have to do something with their life and make an impact As far as I'm concerned, it's just a pitstop for the afterlife. It's just a little test to see how you can handle reality."],
  ["Kurt Cobain","If you die you're completely happy and your soul somewhere lives on."],
  ["Kurt Cobain","If you're really a mean person you're going to come back as a fly and eat poop."],
  ["Kurt Cobain","The worst crime is faking it."],
  ["Kurt Cobain","Once you fall in love... It's different."],
  ["Kurt Cobain","None of you will ever know what I am thinking."],
  ["Kurt Cobain","I like to complain and do nothing to make things better."],
  ["Kurt Cobain","A friend is nothing but a known enemy."],
  ["Kurt Cobain","Life isn't nearly as sacred as the appreciation of passion."],
  ["Kurt Cobain","Oh well, whatever, nevermind."],
  ["Kurt Cobain","To be positive at all times is to ignore all that is important, sacred or valuable. To be negative at all times is to be threatened by ridiculousness and instant discredibility."],
  ["Kurt Cobain","You can't buy happiness."],
  ["Kurt Cobain","Practice makes perfect, but nobody's perfect, so why practice?"],
  ["Kurt Cobain","There is nothing I can say that I haven't thought before."],
  ["Kurt Cobain","all i want...is mac and cheese"],
  ["Frances Bean Cobain","I can count on one hand how many people I trust."],
  ["Frances Bean Cobain","If you're a big Nirvana fan, a big Hole fan, then I understand why you would want to get to know me, but I'm not my parents."],
  ["Dave Grohl","No one is you, and that is your power."],
  ["Dave Grohl","That’s one of the great things about music. You can sing a song to 85,000 people and they’ll sing it back for 85,000 different reasons."],
  ["Dave Grohl","You will only be great at things you love to do don't pursue a career in something you hate to do."],
  ["Dave Grohl","You look up to your heroes and you shouldn't be intimidated by them; you should be inspired by them."],
  ["Dave Grohl","How do I stay humble? Because I'm the best at being humble."],
  ["Dave Grohl","The human element of making music is what's most important."],
  ["Dave Grohl","I think people should feel encouraged to be themselves."],
  ["Dave Grohl","Don't look at the poster on your wall and think 'I could never do that.' Look at the poster on your wall and think 'I'm gonna do that!'"],
  ["Dave Grohl","Always have the highest bar for yourself."],
  ["Dave Grohl","I'm not into albums that are meant to sound perfect."],
  ["Dave Grohl","Who's to say what's a good voice and not a good voice?"],
  ["Dave Grohl","Develop that individuality by working as hard as you can at what you love."],
  ["Dave Grohl","Through Kurt I saw the beauty of minimalism and the importance of music that's stripped down."],
  ["Dave Grohl","Sharing music is not a crime. It shouldn't be. There should be a deeper meaning to making music than just selling downloads."],
  ["Dimebag Darrell","Music drives you. It wakes you up, it gets you pumping. And, at the end of the day, the correct tune will chill you down."]  

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
        <Text style={styles.headerStyle}>{quotes[this.state['currentQuote']][0]}</Text>
        <View>
          <Text style={styles.quoteText}>
            "{quotes[this.state['currentQuote']][1]}"
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



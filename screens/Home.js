import React, { Component } from "react";
import { StyleSheet, Text, View,SafeAreaView,Platform,StatusBar,ScrollView,Image} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Header } from 'react-native-elements';
export default class Home extends Component {
 
  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
               
      <Header
      backgroundColor={"#2089DC"}
      centerComponent={{text:'Anti-Bully app',
      style:{color:'white',fontSize:20,fontFamily:'elephant'}
      }}
      />
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
                source={require("../assets/bully.jpg")}
                style={styles.icon}
              ></Image>
        <Text style={styles.text}>
        <Text style ={styles.headingText}> Bullying</Text> <Text> refers to aggressive behavior so as to dominate the other person. It refers to the coercion of power over others so that one individual can dominate others. It is an act that is not one time, instead, it keeps on repeating over frequent intervals. The person(s) who bullies others can be termed as bullies, who make fun of others due to several reasons. Bullying is a result of someone’s perception of the imbalance of power.
{"\n"}
{"\n"}</Text>
<Text style ={styles.headingText}>Types of bullying:
{"\n"}
{"\t"}</Text>
<Text style ={styles.heading2Text}>There can be various types of bullying, like:
{"\n"}</Text>
<Text style ={styles.headingText}>Physical bullying:</Text>
<Text> When the bullies try to physically hurt or torture someone, or even touch someone without his/her consent can be termed as physical bullying.{"\n"}</Text>
<Text style ={styles.headingText}>Verbal bullying:</Text><Text> It is when a person taunts or teases the other person.{"\n"}</Text>
<Text style ={styles.headingText}>Psychological bullying:</Text><Text> When a person or group of persons gossip about another person or exclude them from being part of the group, can be termed as psychological bullying.{"\n"}</Text>

<Text style ={styles.headingText}>Cyber bullying:</Text><Text> When bullies make use of social media to insult or hurt someone. They may make comments bad and degrading comments on the person at the public forum and hence make the other person feel embarrassed. Bullies may also post personal information, pictures or videos on social media to deteriorate some one’s public image.{"\n"}
Bullying can happen at any stage of life, such as school bullying, College bullying, Workplace bullying, Public Place bullying, etc. Many times not only the other persons but the family members or parents also unknowingly bully an individual by making constant discouraging remarks. Hence the victim gradually starts losing his/her self-esteem, and may also suffer from psychological disorders.{"\n"}{"\n"}

A UNESCO report says that 32% of students are bullied at schools worldwide. In our country as well, bullying is becoming quite common. Instead, bullying is becoming a major problem worldwide. It has been noted that physical bullying is prevalent amongst boys and psychological bullying is prevalent amongst girls.
{"\n"}{"\n"}</Text>

<Text style ={styles.headingText}>Prevention strategies:
{"\n"}</Text>
<Text>{"\t"}In the case of school bullying, parents and teachers can play an important role. They should try and notice the early symptoms of children/students such as behavioral change, lack of self-esteem, concentration deficit, etc. Early recognition of symptoms, prompt action and timely counseling can reduce the after-effects of bullying on the victim.
        </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white"
  },
  fieldsContainer: {
    flex: 0.85,
  },
  text:{
    color: 'black',
    fontSize: 16,
    textAlign:"justify",
    marginLeft:10,
    marginRight:10,
  },
  headingText:{
    fontWeight:"bold",
    marginBottom:15,
    fontSize:18,
  },
  heading2Text:{
    fontWeight:"bold",
  },
  icon:{
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
    height:200,
    marginLeft:45,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
});

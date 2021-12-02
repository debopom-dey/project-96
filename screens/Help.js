import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView,ScrollView,Image,TextInput,Button,Platform,StatusBar,Alert,KeyboardAvoidingView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Header } from 'react-native-elements';
import firebase from 'firebase'

export default class Help extends Component {
  constructor(props) {
        super(props);
        this.state = {
            name: "",
            bullied_name: "",
            description: "",
            number: null,
        };
    }
    async submitQuery() {
        if (this.state.name && this.state.bullied_name && this.state.description
        && this.state.number) 
        {
            let postData = {
                name: this.state.name,
                bullied_name: this.state.bullied_name,
                description: this.state.description,
                number: this.state.number,
                created_on: new Date(),
            };
            await firebase
                .database()
                .ref(
                    "/queries/" +
                    Math.random()
                        .toString(36)
                        .slice(2)
                )
                .set(postData)
                .then(function (snapshot) { });
           // this.props.setUpdateToTrue();
            alert("Your query has been submitted successfully. We will approach you soon through a call!");
        } else {
            alert(
                "Error",
                "All fields are required!",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                { cancelable: false }
            );
        }
    }

  render() {
    return  (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
             <Header
    
      centerComponent={{text:'Anti-Bully app',
      style:{color:'white',fontSize:20,fontFamily:'elephant'}
      }}
      />
                <SafeAreaView style={styles.droidSafeArea} />
                  <View style = {styles.appIcon}>
                        <Image
                            source={require("../assets/user.png")}
                            style= {styles.iconImage}
                        ></Image>
                  </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                                              
                        <TextInput
                            style={styles.inputFont}
                            onChangeText={name => this.setState({ name })}
                            placeholder={"Your Name"}
                            placeholderTextColor={"white"}
                        />
                         <TextInput
                            style={styles.inputFont}
                            onChangeText={bullied_name => this.setState({ bullied_name })}
                            placeholder={"The Name who bullies you"}
                            placeholderTextColor={"white"}
                        />
                           <TextInput
                            style={styles.inputFontMultiLine}
                            onChangeText={description => this.setState({ description })}
                            placeholder={"How you are bullied"}
                            placeholderTextColor={"white"}
                            multiline={true}
                        />
                         <TextInput
                            style={styles.inputFont}
                            onChangeText={number => this.setState({ number })}
                            placeholder={"Your parent's mobile number"}
                            placeholderTextColor={"white"}
                            keyboardType="numeric"
                        />
                       

                        <View style={styles.submitButton}>
                            <Button
                                title="Submit"
                                onPress={()=>this.submitQuery()}
                      
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 0.08 }} />
            </KeyboardAvoidingView>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:"#ADD8E6",
  },
   droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
     fieldsContainer: {
        flex: 0.85,
        justifyContent: "center",
    alignItems: "center",
    },
   inputFont: {
        height: RFValue(40),
        borderColor: "darkblue",
        borderWidth: RFValue(2),
        borderRadius: RFValue(15),
        padding: RFValue(20),
        color: "white",
        marginTop: RFValue(20),
        width: 230,
        backgroundColor:"#2089DC",

    },
   
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
    iconImage:{
        width:80,
        height:80,
    },
     submitButton: {
        marginTop: RFValue(20),
        alignItems: "center",
        justifyContent: "center",
    },
    inputFontMultiLine:{
        height: RFValue(70),
        borderColor: "darkblue",
        borderWidth: RFValue(2),
        borderRadius: RFValue(15),
        padding: RFValue(20),
        color: "white",
        marginTop: RFValue(20),
        width: 230,
        backgroundColor:"#2089DC",
    },
   
  
});

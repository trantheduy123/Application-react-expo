import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

class ChatPage extends Component {
  state = {
    
    messages: [],
  };

  componentDidMount() {
    // Simulate initial messages
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello!",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
          username={props.user.username} // adam
          secret={props.user.secret} // pass1234
        />
      </View>
    );
  }
}

export default ChatPage;

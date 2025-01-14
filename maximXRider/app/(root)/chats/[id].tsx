import { ImageBackground, Text, View } from "react-native";
import { chatDummy, images } from "@/constants";
import { useState, useCallback, useEffect } from "react";
import {
  Bubble,
  GiftedChat,
  IMessage,
  Send,
  InputToolbar,
} from "react-native-gifted-chat";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";
import { ScrollView } from "react-native";

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState("");
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setMessages([
      ...chatDummy.map((message) => {
        return {
          _id: message.id,
          text: message.msg,
          createdAt: new Date(message.date),
          user: {
            _id: message.from,
            name: message.from ? "You" : "Abdul Migos",
          },
        };
      }),
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <ImageBackground
      source={images.chatBg}
      className="flex-1"
      style={{ marginBottom: insets.bottom }}
    >
      <GiftedChat
        messages={messages}
        onSend={(messages: never[]) => onSend(messages)}
        user={{
          _id: 1,
        }}
        onInputTextChanged={setText}
        bottomOffset={insets.bottom}
        renderAvatar={null}
        maxComposerHeight={100}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              textStyle={{
                right: {
                  color: "#ffffff",
                },
                left: {
                  color: "#000000",
                },
              }}
              wrapperStyle={{
                left: {
                  backgroundColor: "#E8E8E8",
                },
                right: {
                  backgroundColor: "#FEBE00",
                },
              }}
            />
          );
        }}
        renderSend={(props) => (
          <View className="flex flex-row h-12 items-center justify-center gap-3  px-3">
            {text.length > 0 && (
              <Send
                {...props}
                containerStyle={{
                  justifyContent: "center",
                }}
              >
                <Ionicons name="send" color={"#FEBE00"} size={28} />
              </Send>
            )}
            {text.length === 0 && (
              <>
                <Ionicons name="camera-outline" color={"#FEBE00"} size={28} />
                <Ionicons name="mic-outline" color={"#FEBE00"} size={28} />
              </>
            )}
          </View>
        )}
        textInputProps={{
          backgroundColor: "#F7F7F7",
          borderRadius: 15,
          borderWidth: 0.5,
          borderColor: "#151716",
          paddingHorizontal: 10,
          fontSize: 16,
        }}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: "white",
            }}
            renderActions={() => (
              <View
                style={{
                  height: 44,
                  justifyContent: "center",
                  alignItems: "center",
                  left: 5,
                }}
              >
                <Ionicons name="add" color={"#FEBE00"} size={28} />
              </View>
            )}
          />
        )}
      />
    </ImageBackground>
  );
};

export default Chat;

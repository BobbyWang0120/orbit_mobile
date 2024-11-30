import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import Header from '../components/Header';
import ChatInput from '../components/ChatInput';

// 定义导航属性类型
type ChatScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Chat'>;

interface ChatScreenProps {
  navigation: ChatScreenNavigationProp;
}

// 定义消息数据类型
interface Message {
  id: string;
  type: 'user' | 'ai';
  message: string;
  timestamp: string;
}

// 模拟的聊天消息数据
const mockMessages: Message[] = [
  {
    id: '1',
    type: 'user',
    message: 'I want to plan a 5-day trip to Tokyo.',
    timestamp: '10:30 AM',
  },
  {
    id: '2',
    type: 'ai',
    message: 'I\'d be happy to help you plan your Tokyo trip! To create the best itinerary for you, could you tell me what kind of activities you\'re most interested in? For example:\n\n- Cultural experiences\n- Food exploration\n- Shopping\n- Historical sites\n- Modern attractions',
    timestamp: '10:31 AM',
  },
  {
    id: '3',
    type: 'user',
    message: 'I\'m mainly interested in cultural experiences and food exploration.',
    timestamp: '10:32 AM',
  },
];

// 消息气泡组件
const MessageBubble: React.FC<Message> = ({ message, type, timestamp }) => (
  <View style={[styles.messageContainer, type === 'user' ? styles.userMessage : styles.aiMessage]}>
    {type === 'ai' && (
      <View style={styles.avatarContainer}>
        <Ionicons name="planet-outline" size={24} color="#FF5A5F" />
      </View>
    )}
    <View style={[
      styles.messageBubble,
      type === 'user' ? styles.userBubble : styles.aiBubble
    ]}>
      <Text style={[
        styles.messageText,
        type === 'user' ? styles.userText : styles.aiText
      ]}>{message}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  </View>
);

// 聊天界面组件
const ChatScreen: React.FC<ChatScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const handleSendMessage = (message: string) => {
    // 这里处理发送消息的逻辑
    console.log('Sending message:', message);
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Tokyo Trip Plan" 
        showBack 
        showMenu
        onBackPress={() => navigation.goBack()}
      />

      {/* 聊天消息列表 */}
      <FlatList
        data={mockMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble {...item} />
        )}
        contentContainerStyle={[
          styles.messagesList,
          { paddingBottom: 16 }
        ]}
      />

      {/* 底部输入框 */}
      <ChatInput onSendMessage={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  messagesList: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 24,
    paddingHorizontal: 16,
    minHeight: 44,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 20,
    paddingVertical: 10,
    color: '#222',
    marginRight: 8,
  },
  sendButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  aiMessage: {
    alignSelf: 'flex-start',
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  messageBubble: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxWidth: '100%',
  },
  userBubble: {
    backgroundColor: '#FF5A5F',
  },
  aiBubble: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: '#fff',
  },
  aiText: {
    color: '#222',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
});

export default ChatScreen;

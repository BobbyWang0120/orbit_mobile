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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

// 模拟的聊天消息数据
const mockMessages = [
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
const MessageBubble = ({ message, type, timestamp }: {
  message: string;
  type: 'user' | 'ai';
  timestamp: string;
}) => (
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

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#FF5A5F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tokyo Trip Plan</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* 聊天消息列表 */}
      <FlatList
        data={mockMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble
            message={item.message}
            type={item.type}
            timestamp={item.timestamp}
          />
        )}
        contentContainerStyle={styles.messagesList}
      />

      {/* 底部输入框 */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.inputContainer}
      >
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            multiline
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={24} color="#FF5A5F" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  menuButton: {
    padding: 4,
  },
  messagesList: {
    paddingHorizontal: 16,
    paddingVertical: 8,
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
  inputContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    padding: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    maxHeight: 100,
    color: '#222',
  },
  sendButton: {
    marginLeft: 12,
    padding: 4,
  },
});

export default ChatScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MessageBubbleProps {
  type: 'user' | 'ai';
  message: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ type, message }) => {
  const isUser = type === 'user';

  return (
    <View style={[
      styles.messageContainer,
      isUser ? styles.userMessageContainer : styles.aiMessageContainer
    ]}>
      {!isUser && (
        <View style={styles.avatarContainer}>
          <Ionicons name="planet-outline" size={24} color="#FF5A5F" />
        </View>
      )}
      <View style={[
        styles.messageBubble,
        isUser ? styles.userBubble : styles.aiBubble
      ]}>
        <Text style={[
          styles.messageText,
          isUser ? styles.userMessageText : styles.aiMessageText
        ]}>
          {message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'flex-start',
  },
  userMessageContainer: {
    justifyContent: 'flex-end',
  },
  aiMessageContainer: {
    justifyContent: 'flex-start',
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
    maxWidth: '80%',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  userBubble: {
    backgroundColor: '#FF5A5F',
  },
  aiBubble: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#FFFFFF',
  },
  aiMessageText: {
    color: '#222222',
  },
});

export default MessageBubble;

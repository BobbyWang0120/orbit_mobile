import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// 模拟的对话数据
const mockConversations = [
  {
    id: '1',
    title: 'Tokyo Adventure',
    lastMessage: 'Planning a 5-day trip to Tokyo',
    date: '2024-01-15',
  },
  {
    id: '2',
    title: 'Kyoto Exploration',
    lastMessage: 'Traditional temples and gardens tour',
    date: '2024-01-14',
  },
  {
    id: '3',
    title: 'Osaka Food Tour',
    lastMessage: 'Discovering the best street food spots',
    date: '2024-01-13',
  },
];

// 对话列表项组件
const ConversationItem = ({ title, lastMessage, date }: {
  title: string;
  lastMessage: string;
  date: string;
}) => (
  <TouchableOpacity style={styles.conversationItem}>
    <View style={styles.conversationContent}>
      <Text style={styles.conversationTitle}>{title}</Text>
      <Text style={styles.conversationMessage} numberOfLines={1}>
        {lastMessage}
      </Text>
    </View>
    <Text style={styles.conversationDate}>{date}</Text>
  </TouchableOpacity>
);

// 主页面组件
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Travel Plans</Text>
      </View>
      
      <FlatList
        data={mockConversations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ConversationItem
            title={item.title}
            lastMessage={item.lastMessage}
            date={item.date}
          />
        )}
        style={styles.list}
      />

      <TouchableOpacity style={styles.newChatButton}>
        <Ionicons name="add" size={24} color="white" />
        <Text style={styles.newChatButtonText}>New Plan</Text>
      </TouchableOpacity>
    </View>
  );
};

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#222',
  },
  list: {
    flex: 1,
  },
  conversationItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  conversationContent: {
    flex: 1,
    marginRight: 10,
  },
  conversationTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  conversationMessage: {
    fontSize: 15,
    color: '#666',
  },
  conversationDate: {
    fontSize: 14,
    color: '#999',
  },
  newChatButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#FF5A5F', // Airbnb的主题色
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  newChatButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default HomeScreen;

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// 获取屏幕宽度用于计算卡片宽度
const { width } = Dimensions.get('window');

// 模拟的对话数据
const mockConversations = [
  {
    id: '1',
    title: 'Tokyo Adventure',
    lastMessage: 'Planning a 5-day trip to Tokyo',
    date: '2024-01-15',
    destination: 'Tokyo, Japan',
  },
  {
    id: '2',
    title: 'Kyoto Exploration',
    lastMessage: 'Traditional temples and gardens tour',
    date: '2024-01-14',
    destination: 'Kyoto, Japan',
  },
  {
    id: '3',
    title: 'Osaka Food Tour',
    lastMessage: 'Discovering the best street food spots',
    date: '2024-01-13',
    destination: 'Osaka, Japan',
  },
];

// 对话列表项组件
const ConversationItem = ({ title, lastMessage, date, destination }: {
  title: string;
  lastMessage: string;
  date: string;
  destination: string;
}) => (
  <TouchableOpacity style={styles.conversationItem}>
    <View style={styles.cardIcon}>
      <Ionicons name="map-outline" size={24} color="#FF5A5F" />
    </View>
    <View style={styles.conversationContent}>
      <Text style={styles.conversationTitle}>{title}</Text>
      <Text style={styles.destinationText}>{destination}</Text>
      <Text style={styles.conversationMessage} numberOfLines={1}>
        {lastMessage}
      </Text>
      <Text style={styles.conversationDate}>{date}</Text>
    </View>
  </TouchableOpacity>
);

// 主页面组件
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orbit</Text>
      </View>
      
      <FlatList
        data={mockConversations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ConversationItem
            title={item.title}
            lastMessage={item.lastMessage}
            date={item.date}
            destination={item.destination}
          />
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
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
    backgroundColor: '#f8f8f8',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FF5A5F',
    letterSpacing: 0.5,
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  conversationItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    width: width - 32, // 屏幕宽度减去左右padding
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  conversationContent: {
    flex: 1,
  },
  conversationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  destinationText: {
    fontSize: 14,
    color: '#FF5A5F',
    marginBottom: 6,
    fontWeight: '500',
  },
  conversationMessage: {
    fontSize: 15,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  conversationDate: {
    fontSize: 13,
    color: '#999',
  },
  newChatButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#FF5A5F',
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

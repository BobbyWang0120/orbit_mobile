import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import Header from '../components/Header';

// 获取屏幕宽度用于计算卡片宽度
const { width } = Dimensions.get('window');

// 定义导航属性类型
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

// 定义对话数据类型
interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  date: string;
  destination: string;
}

// 模拟的对话数据
const mockConversations: Conversation[] = [
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
const ConversationItem: React.FC<Conversation> = ({ 
  title, 
  lastMessage, 
  date, 
  destination 
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
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleNewPlan = () => {
    navigation.navigate('Chat', { title: 'New Plan' });
  };

  const handlePlanPress = (title: string) => {
    navigation.navigate('Chat', { title });
  };

  return (
    <View style={styles.container}>
      <Header title="Orbit" />
      
      <FlatList
        data={mockConversations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.conversationItem}
            onPress={() => handlePlanPress(item.title)}
          >
            <View style={styles.cardIcon}>
              <Ionicons name="map-outline" size={24} color="#FF5A5F" />
            </View>
            <View style={styles.conversationContent}>
              <Text style={styles.conversationTitle}>{item.title}</Text>
              <Text style={styles.destinationText}>{item.destination}</Text>
              <Text style={styles.conversationMessage} numberOfLines={1}>
                {item.lastMessage}
              </Text>
              <Text style={styles.conversationDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />

      <TouchableOpacity 
        style={styles.newChatButton}
        onPress={handleNewPlan}
      >
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

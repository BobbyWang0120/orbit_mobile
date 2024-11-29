import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showMenu?: boolean;
  onBackPress?: () => void;
  onMenuPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  showMenu = false,
  onBackPress,
  onMenuPress,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.content}>
        {showBack ? (
          <TouchableOpacity style={styles.button} onPress={onBackPress}>
            <Ionicons name="chevron-back" size={28} color="#FF5A5F" />
          </TouchableOpacity>
        ) : (
          <View style={styles.button} />
        )}
        
        <Text style={[
          styles.title,
          !showBack && !showMenu && styles.titleCenter
        ]}>{title}</Text>
        
        {showMenu ? (
          <TouchableOpacity style={styles.button} onPress={onMenuPress}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#666" />
          </TouchableOpacity>
        ) : (
          <View style={styles.button} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  content: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    flex: 1,
    textAlign: 'center',
  },
  titleCenter: {
    color: '#FF5A5F',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default Header;

import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import theme from '../../resources/theme'

export default () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={theme.primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: '60%',
    width: '100%',
    height: '100%'
  },
});
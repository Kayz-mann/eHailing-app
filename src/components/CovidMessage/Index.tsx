import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';

const CovidMessage: React.FC = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Travel if only necessary</Text>
      <Text style={styles.text}>Upgrading this package often requires font linked to your projects as well. If the automasric linking works for you, running this again should update the focus ...</Text>
      <Text style={styles.baseText}>Learn more</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1065e9',
    padding: 15,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10
  },
  text: {
    color: '#bed9ff',
    fontSize: 15,
    marginBottom: 10
  },
  baseText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default CovidMessage;
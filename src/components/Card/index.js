import * as React from 'react';

import styled from 'styled-components/native'

import { View, Text } from 'react-native'

import themes from '../../resources/theme'

import {
  Card,
  Button,
} from 'react-native-elements'

import Ionicons from 'react-native-vector-icons/Ionicons';


// styled Componentes
const Icon = styled(Ionicons)``

export default (props) => {

  return (
    <View style={{ width: '50%' }}>
      <Card>
        <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
          {props.title}
        </Text>
        <Card.Divider />
        {props.image ? (
          <Card.Image style={{ height: 100 }} resizeMode="center" source={{ uri: props.image }} />
        ) : (
            <Card.Image style={{ height: 100 }} source={'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'} />
          )}
        <Text style={{ marginBottom: 5, marginTop: 10, textAlign: 'center' }}>
          <Icon name={'call-outline'} size={15} />  {props.text}
        </Text>
        <Text style={{ marginBottom: 10, textAlign: 'center' }}>
          <Icon name={'briefcase-outline'} size={15} /> {props.setor}
        </Text>
        <View>
          <Button
            buttonStyle={{ borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 10, paddingHorizontal: 15, backgroundColor: props.buttonBackground || themes.primaryColor }}
            title={props.titleButton}
            icon={<Icon name={'chatbubble-outline'} size={15} color='#ffffff' />}
            onPress={props.onPress}
          />
          <Button
            buttonStyle={{ borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0, paddingHorizontal: 15, backgroundColor: props.buttonBackground || themes.fourtColor }}
            title={props.titleButtonSms}
            icon={<Icon name={'chatbubble-outline'}  size={15} color='#ffffff' />}
            onPress={props.onPressSms}
          />
        </View>
      </Card>
    </View>
  )
}
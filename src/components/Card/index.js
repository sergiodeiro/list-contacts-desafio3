import * as React from 'react';
import { View, Text } from 'react-native'

import themes from '../../resources/theme'

import {
  Card,
  Button,
} from 'react-native-elements'

import {
  Icon,
  Diviser,
  Wrapper,
  styles,
} from '../styles'

export default (props) => {

  return (
    <Wrapper>
      <Card>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>
          {props.title}
        </Text>
        <Diviser />
        {props.image ? (
          <Card.Image style={styles.image} resizeMode="center" source={{ uri: props.image }} />
        ) : (
            <Card.Image style={styles.image} source={'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'} />
          )}
        <Text style={styles.texts}>
          <Icon name={'call-outline'} size={15} />  {props.text}
        </Text>
        <Text style={styles.setor}>
          <Icon name={'briefcase-outline'} size={15} /> {props.setor}
        </Text>
        <View>
          <Button
            buttonStyle={{ borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 10, paddingHorizontal: 15, backgroundColor: props.buttonBackground || themes.primaryColor }}
            title={props.titleButton}
            icon={<Icon name={'call-outline'} size={15} color={themes.secondColor} />}
            onPress={props.onPress}
          />
          <Button
            buttonStyle={{ borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0, paddingHorizontal: 15, backgroundColor: props.buttonBackgroundSms || themes.fourtColor }}
            title={props.titleButtonSms}
            icon={<Icon name={'chatbubble-outline'} size={15} color={themes.secondColor} />}
            onPress={props.onPressSms}
          />
        </View>
      </Card>
    </Wrapper>
  )
}
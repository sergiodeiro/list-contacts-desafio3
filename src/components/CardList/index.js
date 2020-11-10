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
  WrapperLann,
  styles,
} from '../styles'

export default (props) => {

  return (
    <WrapperLann style={styles.fundo}>
      <Card>
        {props.image ? (
          <Card.Image style={styles.avatar} resizeMode="center" source={{ uri: props.image }} />
        ) : (
            <Card.Image style={styles.avatar} source={'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'} />
          )}
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>
          {props.title}
        </Text>
        <Text style={styles.texts}>
          Tel: {props.text}
        </Text>
        <View>
          <Button
            buttonStyle={{ borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 10, paddingHorizontal: 15, backgroundColor: props.buttonBackgroundWath || themes.primaryColor }}
            title={"Whatsapp"}
            onPress={props.onPressWath}
          />
          <Button
            buttonStyle={{ borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 10, paddingHorizontal: 15, backgroundColor: "#FF1493" }}
            title={"Instagram"}
            onPress={props.onPressInsta}
          />
          <Button
            buttonStyle={{ borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 10, paddingHorizontal: 15, backgroundColor: themes.fourtColor }}
            title={"Facebook"}
            onPress={props.onPressFace}
          />
          <Button
            buttonStyle={{ borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 10, paddingHorizontal: 15, backgroundColor: "#778899" }}
            title={"Email"}
            onPress={props.onPressEmail}
          />
          <Button
            buttonStyle={{ borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0, paddingHorizontal: 15, backgroundColor: "#800080" }}
            title={"Ver tudo"}
            onPress={props.onModal}
          />
        </View>
      </Card>
    </WrapperLann>
  )
}
import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import {
  styles,
  Icon
} from '../styles'

export default (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
      >
        <View style={styles.centeredViewSocial}>
          <View style={styles.modalViewSocial}>
            <View style={styles.flexs}>
              <Text style={styles.modalText}>Redes sociais</Text>
              <TouchableOpacity
                style={styles.openButton}
                onPress={props.closeModal}
              >
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewImage}>
              <Image style={styles.avatarDetails} resizeMode="center" source={{ uri: props.image }} />
            </View>
            <View>
              <Text style={styles.titleModal}>{props.name}</Text>
              <Text>Nasc {props.Birthday}</Text>
            </View>
            <View style={{...styles.flexs, marginBottom: 10, padding: 10}}>
              <Text>Whatsapp: </Text>
              <Text>{props.whats}</Text>
            </View>
            <View style={{...styles.flexs, marginBottom: 10, padding: 10}}>
              <Text>Facebook: </Text>
              <Text>{props.facebook}</Text>
            </View>
            <View style={{...styles.flexs, marginBottom: 10, padding: 10}}>
              <Text>Instagram: </Text>
              <Text>{props.instagram}</Text>
            </View>
            <View style={{...styles.flexs, marginBottom: 10, padding: 10}}>
              <Text>Email: </Text>
              <Text>{props.email}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
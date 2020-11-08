import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import {
  styles
} from '../styles'

export default (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.flexs}>
              <Text style={styles.modalText}>Detalhes do Contato</Text>
              <TouchableOpacity
                style={styles.openButton}
                onPress={props.closeModal}
              >
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewImage}>
              <Image style={styles.images} resizeMode="center" source={{ uri: props.image }} />
            </View>
            <View style={{...styles.flexs, marginBottom: 10}}>
              <Text>Nome: </Text>
              <Text>{props.name}</Text>
            </View>
            <View style={{...styles.flexs, marginBottom: 10}}>
              <Text>Telefone: </Text>
              <Text>{props.phone}</Text>
            </View>
            <View style={{...styles.flexs, marginBottom: 10}}>
              <Text>Email: </Text>
              <Text>{props.email}</Text>
            </View>
            <View style={{...styles.flexs, marginBottom: 10}}>
              <Text>Setor: </Text>
              <Text>{props.setor}</Text>
            </View>
            <View style={{...styles.flexs, marginBottom: 10}}>
              <Text>Idade: </Text>
              <Text>{props.idade}</Text>
            </View>
            <View style={{...styles.flexs, marginBottom: 10}}>
              <Text>Data de criação: </Text>
              <Text>{props.data}</Text>
            </View>
            <View>
              <TouchableOpacity onPress={props.onShare} style={styles.shares}>
                <Text style={styles.primaryColor}>Compartilhe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

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
              <Image style={styles.image} resizeMode="center" source={{ uri: props.image }} />
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
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
    opacity: 0.86
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
    width: '65%',
    alignItems: "center",
  },
  openButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    width: '10%',
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 25,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -5,
    width: '90%',
  },
  flexs: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 70,
    width: 200,
  },
  viewImage: {
    marginBottom: 20,
  }
});
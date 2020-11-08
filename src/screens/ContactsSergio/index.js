import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Linking,
  Text,
} from 'react-native'

import {
  Container
} from './styles'

import { URL_SD } from '../../config/api'

import {
  Header,
  Card,
  Loading,
  Modal,
} from '../../components'

export default () => {

  const [isLoading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [element, setElement] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL_SD)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      <Header title="Contatos - Sérgio" />
      {isLoading ? <Loading /> : (
        <Container>
          {data && data.map((item, key) => {
            return (
              <>
                <Card
                  title={item.name}
                  text={item.phone}
                  image={item.urlBase + item.image}
                  setor={item.setor}
                  titleButton={" Ligar"}
                  titleButtonSms={" Mensagem"}
                  titleModal={'Detalhes'}
                  onPress={() => {
                    Linking.openURL(`tel: ${item.phone}`).catch((err) =>
                      console.error("Couldn't load page", err),
                    )
                  }}
                  onPressSms={() => {
                    Linking.openURL(`sms: ${item.phone}`).catch((err) =>
                      console.error("Couldn't load page", err),
                    )
                  }}
                  onModal={() => {
                    setElement(item);
                    setModalVisible(true);
                  }}
                />
              </>
            )
          })}
          {element ? (
            <Modal
              visible={modalVisible}
              name={element.name}
              phone={element.phone}
              setor={element.setor}
              image={element.urlBase+element.image}
              idade={element.idade}
              email={element.email}
              data={element.dataCreate}
              closeModal={() => {
                setModalVisible(!modalVisible);
              }}
            />
          ) : null}
        </Container>
      )}
    </ScrollView>
  )
}
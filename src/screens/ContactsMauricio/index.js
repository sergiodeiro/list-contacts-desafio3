import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Linking,
} from 'react-native'


import {
  Container
} from './styles'

import { URL_ML } from '../../config/api'

import { onShares } from '../../config/constants'

import {
  Header,
  CardList,
  Loading,
  ModalSocial,
} from '../../components'

export default () => {

  const [isLoading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [element, setElement] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL_ML)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      <Header title="Social Contact" />
      {isLoading ? <Loading /> : (
        <Container>
          {data && data.map((item, key) => {
            return (
              <CardList
                key={key}
                title={item.name}
                text={item.whatsapp}
                image={item.photo}
                buttonBackgroundWath={"#32CD32"}
                titleModal={'Ver tudo'}
                onPressWat={() => {
                  Linking.openURL(`https://api.whatsapp.com/send?phone= ${item.whatsapp} &text=ola`).catch((err) =>
                    console.error("Couldn't load page", err),
                  )
                }}
                onPressInsta={() => {
                  Linking.openURL(`${item.instagram}`).catch((err) =>
                    console.error("Couldn't load page", err),
                  )
                }}
                onPressFace={() => {
                  Linking.openURL(`${item.facebook}`).catch((err) =>
                    console.error("Couldn't load page", err),
                  )
                }}
                onPressEmail={() => {
                  Linking.openURL(`mailto: ${item.email}`).catch((err) =>
                    console.error("Couldn't load page", err),
                  )
                }}
                onModal={() => {
                  setElement(item);
                  setModalVisible(true);
                }}
              />
            )
          })}
          {element ? (
            <ModalSocial
              visible={modalVisible}
              name={element.name}
              whats={element.whatsapp}
              image={element.photo}
              instagram={element.instagram}
              email={element.email}
              Birthday={element.Birthday}
              facebook={element.facebook}
              closeModal={() => {
                setModalVisible(!modalVisible);
              }}
              onShare={() => {onShares(element.name, element.email, element.phone)}}
            />
          ) : null}
        </Container>
      )}
    </ScrollView>
  )
}
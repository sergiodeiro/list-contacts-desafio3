import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Linking,
} from 'react-native'

import {
  Container
} from './styles'

import { URL_SD } from '../../config/api'

import { 
  Header, 
  Card, 
  Loading, 
} from '../../components'

export default () => {

  const [isLoading, setLoading] = useState(true);
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
                  onPress={() => {
                    Linking.openURL(`tel: ${item.phone}`).catch((err) =>
                      console.error("Couldn't load page", err),
                    )
                  }
                  }
                  titleButton=" Ligar"
                  titleButtonSms=" Mensagem"
                  onPressSms={() => {
                    Linking.openURL(`sms: ${item.phone}`).catch((err) =>
                      console.error("Couldn't load page", err),
                    )
                  }
                  }
                />
              </>
            )
          })}
        </Container>
      )}
    </ScrollView>
  )
}
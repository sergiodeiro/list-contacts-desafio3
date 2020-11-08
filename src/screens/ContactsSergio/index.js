import * as React from 'react';
import {
  ScrollView,
  Linking,
  View
} from 'react-native'

import {
  Container
} from './styles'

import { URL_SD } from '../../config/api'

import { Header, Card } from '../../components'

export default class ContactsSergio extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  urlBase = async () => {
    fetch(URL_SD).then(
      res => res.json()
    ).then(res => {
      console.log(res)
      this.setState({
        data: res || []
      })
    })
  }

  componentDidMount() {
    this.urlBase();
  }

  render() {

    const { data } = this.state

    return (
      <ScrollView>
        <Header title="Contatos - Sérgio" />
        <Container>
          {data && data.map((item) => {
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
                  onPress={() => {
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
      </ScrollView>
    )
  }
}
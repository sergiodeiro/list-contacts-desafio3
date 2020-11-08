import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons';


// styled Componentes
export const Icon = styled(Ionicons)``

export const Wrapper = styled.View`
  width: 50%;
`

export const Diviser = styled.View`
  border-bottom-width: 0.8px;
  margin-bottom: 20px;
  border-color: gray
`

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  image: {
    height: 100,
  },
  texts: {
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'center'
  },
  setor: {
    marginBottom: 10,
    textAlign: 'center'
  }
})
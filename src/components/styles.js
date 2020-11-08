import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import themes from '../resources/theme'
import theme from '../resources/theme';


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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.threeColor,
    opacity: 0.86
  },
  modalView: {
    margin: 20,
    backgroundColor: theme.secondColor,
    borderRadius: 20,
    padding: 18,
    width: '65%',
    alignItems: "center",
  },
  openButton: {
    backgroundColor: theme.sixColor,
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
  images: {
    height: 70,
    width: 200,
  },
  viewImage: {
    marginBottom: 20,
  },
  shares: {
    borderColor: theme.primaryColor, 
    borderWidth: 1, 
    padding: 8, 
    borderRadius: 10
  },
  primaryColor: {
    color: theme.primaryColor
  }
})
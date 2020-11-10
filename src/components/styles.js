import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../resources/theme';


// styled Componentes
export const Icon = styled(Ionicons)`
${({colors}) => colors ? `color: `+theme.primaryColor : null}
`

export const Wrapper = styled.View`
  width: 50%;
`

export const WrapperLann = styled.View`
  width: 100%;
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
  avatar: {
    width: "100%",
    height: 120,
    borderRadius: 100,
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
  centeredViewSocial: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
  modalViewSocial: {
    backgroundColor: "#fff",
    padding: 18,
    width: '100%',
    height: '100%',
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
  flexsModal: {
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  images: {
    height: 70,
    width: 200,
  },
  avatarDetails: {
    height: 200,
    width: 200,
    borderRadius: 200,
  },
  viewImage: {
    marginBottom: 20,
  },
  shares: {
    borderColor: theme.primaryColor, 
    borderWidth: 1, 
    padding: 12, 
    borderRadius: 10
  },
  primaryColor: {
    color: theme.primaryColor
  },
  mt: {
    marginTop: 10,
  },
  fundo:{
    backgroundColor: '#8B008B',
  },
  titleModal:{
    fontSize: 20,
  }
})
import Share from 'react-native-share'


export const onShares = (name, email, phone) => {

  const shareOptions = {
    title: "Compartilhe o número do contato",
    subject: `Contato - ${name}`,
    email: email,
    url: phone,
  };
  Share.open(shareOptions);
}
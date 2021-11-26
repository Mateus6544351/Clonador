import * as React from 'react';
import { Text, View, StyleSheet , FlatList , Image } from 'react-native';
import Constants from 'expo-constants';

const dados = ([
  {
    id:1, 
    nome:'juliano',
    foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    ddd: '56',
    telefone: '45153434',
    email: 'juliano.original@gmail.com',
  },
  {
    id:2, 
    nome:'clone-juliano',
    foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    ddd: '56',
    telefone: '45153434',
    email: 'juliano.clone@gmail.com',
  },
  {
    id:3, 
    nome:'clone-juliano-2',
    foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    ddd: '56',
    telefone: '45153434',
    email: 'juliano.clone.2@gmail.com',
  },
  
]);

export default function App() {
  const renderItemAgenda = ({item})=>{
    return(
      <View style = {styles.item}>
          <Image 
            style={styles.containerFlatListImage}
            source={{uri:item.foto}}
          />
        <View>
        <Text>{item.nome}</Text>
        <Text>({item.ddd}) {item.telefone}</Text>
        <Text>{item.email}</Text>
        </View>
      </View>
      
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.agenda}>Agenda</Text>
      <FlatList 
        data={dados}
        keyExtractor={(item)=>item.id}
        renderItem={renderItemAgenda}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    
  },
  containerFlatListImage:{
    height:50,
    width:50,
    //backgroundColor:'blue',
    borderRadius:50,
    marginRight:5,

  },
  agenda: {
    fontSize: 30,
    fontWeight: '700',
  },
  item : {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#e5e5e5',
    marginTop: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
  }
});
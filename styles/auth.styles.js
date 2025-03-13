import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    Link:{
        marginTop: 30
    },
    stack:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{

        borderRadius: 100,
        width:200,
        objectFit: 'cover',
        height: 200,
        marginBottom: 20
    },
    button:{
        padding:8,
        marginBottom: 10,
        borderRadius: 5,
        boxShadow:'0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)',
        backgroundColor: 'skyblue',
    },
  
    text:{
      fontSize:24,
      color: 'skyblue',
    }
  })
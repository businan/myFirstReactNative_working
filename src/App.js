import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import MyComponent from './components/MyComponent';

// inline style={{ backgroundColor:'purple', margin: 10 padding: 5,}};

const App = () => {
  const my_name = 'Burak Sinan';

  const isAdmin = true;
  // function myFunction(){
  //   return (
  //     <View>
  //     <Text style={styles.hello}> Hello Clarusway!</Text>
  //     <Text style={styles.hello}> Hello Clarusway!</Text>
  //     </View>
  //   )
  // }

  // function myFunction(){
  //   const isAdmin = false;

  //   if(isAdmin) return <Text style={styles.hello}> Admin Paneline Hosgeldiniz</Text>
    
  //     return <Text style={styles.hello}> Kullanici panaline Hosgeldiniz</Text>
    
  // }

  function myFunction(){
    return isAdmin ? <Text style={styles.hello}> Admin Paneline Hosgeldiniz function </Text> : null
    }

    function myFunction2(){
      const myArray = ["Izmir", "istanbul", "Ankara", "Adana"]

      return myArray.map(city => {
      return <Text style={styles.hello}>{city} Sehri</Text>
      })
      
      }

  return (
    <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>CLARUSWAY!!!</Text>
        </View>

        {/* <View style={{backgroundColor:'cyan', padding: 15, margin:5,}}>
          <Text>Selamlar! </Text>
          <Text>FullStack Forever! </Text>
            <View>
              <Text>Hello!! </Text>
            </View>
        </View> */}
        {/* harici olarak component cagirdik */}
        <MyComponent />

        <Text style={styles.hello}> Hosgeldin {my_name} </Text>
        <Text style={styles.hello}> Sonuc {4+5} </Text>
        
        {myFunction()} 

        {myFunction2()}

        {isAdmin ? <Text style={styles.hello}> Admin Paneline Hosgeldiniz ternary</Text> : null}

        {isAdmin && <Text style={styles.hello}> Admin Paneline Hosgeldiniz or kullanimi</Text> }
          
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor:'purple',
      margin: 10,
      padding: 5,
      borderRadius: 15,
  },
  text: {
    color:'white',
    fontWeight:"bold",
    fontSize: 35,
    textAlign: "center",
  },
  hello: {
    margin:10,
    fontSize: 20,
  }
});


export default App;

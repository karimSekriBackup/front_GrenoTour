import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Authentification (): React.JSX.Element{
  const navigation = useNavigation()
  const [login, onChangeLogin] = React.useState('')
  const [mail, onChangeMail] = React.useState('')

  return (
    
    <SafeAreaView style={styles.container}>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeLogin}
        value={login}
        placeholder='Username'
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeMail}
        value={mail}
        placeholder='Mail'
      />

      <Button 
        title='Go' 
        onPress={() => Alert.alert('Button Go ok')}
        />
      <Button 
        title='Connexion' 
        onPress={() => Alert.alert('Button Connexion ok')}
        />
      {/* <Button title='Connexion' onPress={() => navigation.navigate("Connexion")}></Button> */}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#e0ffff',
  }
})

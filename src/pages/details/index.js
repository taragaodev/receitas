import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

// ICONES
import { AntDesign } from '@expo/vector-icons'

export function Details(){
  const route = useRoute()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
      headerRight: () => (
        <Pressable>
          <AntDesign 
            name='star'
            size={28}
            color='#ffd700'
          />
        </Pressable>
      )
    })
  }, [navigation, route.params?.data])

  return(
    <View style={styles.container}>      
      <Text>{route.params?.data.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000ff'
  }
})
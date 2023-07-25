import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useState, useEffect } from 'react'


// api
import api from '../../services/api'

// lista
import { FoodList } from '../../components/foodlist'

export function Search() {
  const route = useRoute()
  const [receipes, setReceipes] = useState([])

  useEffect(() => {
    async function fetchReceipes() {
      const response = await api.get(`/foods?name_like=${route.params?.name}`)
      setReceipes(response.data)
    }

    fetchReceipes()
  }, [route.params?.name])



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 14 }}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        ListEmptyComponent={() => <Text style={styles.text}>Não encontramos o que está buscando...</Text>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f9ff',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14
  },
  text: {
    fontSize: 16
  }
})
import { StyleSheet, SafeAreaView, View, TextInput, TouchableOpacity, Text } from "react-native";
import { Logo } from "../../components/logo";
import { useState } from "react";

import { Ionicons } from '@expo/vector-icons'

export function AddRecipe(){
  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <Text style={styles.title}>Adicione uma receita</Text>

      <Text style={styles.textContent}>Nome da receita</Text>
      <View style={styles.content}>
      <TextInput style={styles.text} placeholder="digite o nome da receita"/>
      </View>
     
      <Text style={styles.textContent}>Ingredientes</Text>     
      <View style={styles.area}>
        <View style={styles.content}>
          <TextInput 
            style={styles.text} 
            placeholder="adicione o ingrediente"
          />          
          <TouchableOpacity>
            <Ionicons
              name="add-circle"
              size={24}
              color='#000'
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput 
            style={styles.text} 
            placeholder="adicione a quantidade"
            keyboardType="numeric"
          />          
          <TouchableOpacity>
            <Ionicons
              name="add-circle"
              size={24}
              color='#000'
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.textContent}>Instruções</Text>     
      <View style={styles.area}>
        <View style={styles.content}>
          <TextInput 
            style={styles.text} 
            placeholder="adicione a instrução"
          />          
          <TouchableOpacity>
            <Ionicons
              name="add-circle"
              size={24}
              color='#000'
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput 
            style={styles.text} 
            placeholder="adicione a quantidade"
            keyboardType="numeric"
          />          
          <TouchableOpacity>
            <Ionicons
              name="add-circle"
              size={24}
              color='#000'
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de ingredientes */}
      {/* Lista de instruções */}
    </SafeAreaView>
  )
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f9ff",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#0e0e0e",
    marginBottom: 14
  },
  area: {    
    backgroundColor: '#f3f8ff'
  },
  content: {  
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderEndWidth: 1,
    borderColor: '#ececec',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    width: '90%',
    maxWidth: '90%',
    height: 54
  },
  textContent: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 500,    
  }
})
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackRoutes } from './stackRoutes'
import { Favorites } from '../pages/favorites'

//ICONES
import { Ionicons, AntDesign } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function Routes(){
  return(
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true, //quando tiver um  campo de texto esconde a tabBar
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",
        
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <Ionicons name="home" color="#335588" size={size}/>
            }
            return <Ionicons name="home-outline" color="#000" size={size}/>
          }
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <AntDesign name="star" color="#ffd700" size={size}/>
            }
            return <AntDesign name="staro" color="#000" size={size}/>
          }
        }}
      />
    </Tab.Navigator>
  )
}



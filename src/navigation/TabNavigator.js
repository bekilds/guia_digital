import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FilmesScreen from '../screens/FilmesScreen';
import SeriesScreen from '../screens/SeriesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#E50914',
      tabBarStyle: { backgroundColor: '#1E1E1E', borderTopWidth: 0 }
    }}>
      <Tab.Screen name="Filmes" component={FilmesScreen} options={{
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="movie-open" size={24} color={color} />
      }}/>
      <Tab.Screen name="Séries" component={SeriesScreen} options={{
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="television-classic" size={24} color={color} />
      }}/>
    </Tab.Navigator>
  );
}

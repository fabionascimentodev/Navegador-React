import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Inicial from "../screens/Relogio";
import Config from "../screens/Configuracao";
import Relogio from "../screens/Contador";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Relógio"
        component={Inicial}
        options={{
          tabBarIcon: () => <Feather name="watch" size={30} />,
        }}
      />
      <Tab.Screen
        name="Contador"
        component={Relogio}
        options={{
          tabBarIcon: () => <Feather name="play-circle" size={30} />,
        }}
      />
      <Tab.Screen
        name="Configuração"
        component={Config}
        options={{
          tabBarIcon: () => <Feather name="tool" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
}

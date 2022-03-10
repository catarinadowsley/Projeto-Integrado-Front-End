import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./src/screens/LoginScreen";
import CadastroScreen from "./src/screens/CadastroScreen";
import EsqueciScreen from "./src/screens/EsqueciScreen"
import PrincipalScreen from "./src/screens/PrincipalScreen"
import EditarPerfilScreen from "./src/screens/EditarPerfil";
import GraficoScreen from "./src/screens/GraficoScreen";


const navigator = createStackNavigator(
  {
   
    
    Login:LoginScreen,
    Cadastro:CadastroScreen,
    Esqueci: EsqueciScreen,
    Principal: PrincipalScreen,
    Editar: EditarPerfilScreen,
    Grafico: GraficoScreen,

  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "SVUV",
    },
  }
);

export default createAppContainer(navigator);

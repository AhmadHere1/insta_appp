import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens/Home';
import { Landing } from '../../screens/Landing';
import { NewPostScreen } from '../../screens/NewPostScreen';
// import { Register } from '../../screens/Register';
import { SignIn } from '../../screens/SignIn';
const NavContainer = () => {
    const screenOptions = {
        headerShown: false
    }
    // this will help us to register stack type screens
    const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={screenOptions}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="SignIn" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export { NavContainer }
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens/Home';
import { Landing } from '../../screens/Landing';
// import { Register } from '../../screens/Register';
import { SignIn } from '../../screens/SignIn';
const NavContainer = () => {
    // this will help us to register stack type screens
    const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="SignIn" component={SignIn} />
                {/* <Stack.Screen name="Register" component={Register} /> */}
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export { NavContainer }
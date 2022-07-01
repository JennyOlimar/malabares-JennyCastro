import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
// import Main from './stacks/index';
import Bottom from './tabs/index';
import AuthNavigation from './stacks/auth';
import { auth } from '../app/firebase';

// export default () => <NavigationContainer><Main /></NavigationContainer>
const Nav = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
      onAuthStateChanged( auth, user => {
        if(user){
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }})
    }, [])

    return (
        <NavigationContainer>
            {
                isLogged ? <Bottom /> : <AuthNavigation />
            }
        </NavigationContainer>
    )
}

export default Nav;
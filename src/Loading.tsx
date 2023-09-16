import { useState } from "react";
import { View } from "react-native"
import TabBarNavigator from "./navigations/TabBarNavigator";
import AuthNavigator from "./navigations/AuthNavigator";
import OnBoardingScreen from "./screens/onboardingscreens";
import { PersistStore } from "./stores/PersistStore";



const Loading = () => {
    const signedIn = false;
    const onBoardingDone = PersistStore((state : any) => state.onBoardingDone);
    const _hasHydrated = PersistStore((state : any) => state._hasHydrated);
    if(!_hasHydrated ) return;


    return (
        <View style={{flex : 1}}>
            {
                onBoardingDone
                    ?
                    <TabBarNavigator />
                    :
                    <OnBoardingScreen />
            }
        </View>
    )
}

export default Loading;
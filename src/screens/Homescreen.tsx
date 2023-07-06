import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator
} from 'react-native';
import { fetchUser, selectAll } from '../stores/reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../stores';
import { NavigationProp } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';




type SectionProps = PropsWithChildren<{
    navigation: NavigationProp<any>;
}>;
export const useAppDispatch: () => AppDispatch = useDispatch;

const HomeScreen = ({ navigation }: SectionProps) => {
    const dispatch = useAppDispatch()
    const users = useSelector(selectAll)
    const { isLoading } = useSelector((state: any) => state.members)
    useEffect(() => {
        console.log('Home screen logs---->', isLoading)
    }, [users])
    return (
        <View style={styles.container}>
            {
                isLoading ?
                    <ActivityIndicator />
                    : users.map((val: any) => {
                        return (
                            <View style={{ flex: 0.05, borderBottomWidth: 0.5, borderBottomColor: 'grey', width : '100%' }} key={val.id}><Text style={{ textAlign: 'center', marginTop: 5 }}>{val?.name}</Text></View>
                        )
                    })
            }
            <Button
                ViewComponent={LinearGradient} // Don't forget this!
                containerStyle={{width : '60%',justifyContent : 'center', marginTop : 10}}
                linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: { x: 0, y:1 },
                    end: { x: 1 , y: 0},
                }}
                onPress={()=>{
                    dispatch(fetchUser())
                }}
            >
                Go to Jane's profile
            </Button>

            {/* <Button
                    title="Go to Jane's profile"
                    onPress={() => {
                        // navigation.navigate('Profile', { name: 'Jane' })
                        dispatch(fetchUser())
                    }

                    }
                /> */}
        </View>
    );
};


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
    }
})

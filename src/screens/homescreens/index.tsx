import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    Button
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
// import { Button } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import { useUserStore } from '../../stores/usersStore';




type SectionProps = PropsWithChildren<{
    navigation: NavigationProp<any>;
}>;

const HomeScreen = ({ navigation }: SectionProps) => {
    const users = useUserStore((state : any) => state.users.data);
    const loading = useUserStore((state : any) => state.users.loading);
    const fetchuser = useUserStore((state : any) => state.getUsers);
    const deleteUsers = useUserStore((state : any) => state.removeAllUsers);


    useEffect(() => {
        console.log('Home screen logs---->',users)
    }, [users])
    return (
        <View style={styles.container}>
            {
                loading ?
                    <ActivityIndicator />
                    : users?.map((val: any) => {
                        return (
                            <View style={{ flex: 0.05, borderBottomWidth: 0.5, borderBottomColor: 'grey', width : '100%' }} key={val.id}><Text style={{ textAlign: 'center', marginTop: 5 }}>{val?.name}</Text></View>
                        )
                    })
            }
            
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

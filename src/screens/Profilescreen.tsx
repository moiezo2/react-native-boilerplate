import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    Text
} from 'react-native';


type SectionProps = PropsWithChildren<{
    navigation: any;
}>;

const ProfileScreen = ({ navigation }: SectionProps) => {
    return <Text>Profile</Text>;
};

export default ProfileScreen;
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { Header } from '../components/HomeScreen/Header';
import { Stories } from '../components/HomeScreen/Stories';
import { PostComponent } from '../components/HomeScreen/PostComponent';
// import { StackRouter } from '@react-navigation/native';
import { POSTS } from '../database/posts';
import { BottomTabs } from '../components/HomeScreen/BottomTabs';


const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Header />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (

                    <PostComponent post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTabs />
        </View>


    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})

export { Home }
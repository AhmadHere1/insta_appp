import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { AddNewPost } from '../components/NewPost/AddNewPost'

const NewPostScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
            <StatusBar />
            <AddNewPost />
        </SafeAreaView>
    )
}

export { NewPostScreen }
const styles = StyleSheet.create({

})
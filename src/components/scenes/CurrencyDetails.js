import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import SVGImage from 'react-native-svg-image'
3
import getIcon from '../../../icons/icons'

export default class CurrencyDetails extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.currency.name
    })

    render() {
        const { currency } = this.props.navigation.state.params
        return (
            <View style={{flex: 1}}>
                <View style={styles.iconStyle}>
                    <SVGImage source={{ uri: getIcon(currency.name)}} />
                </View>
                <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                    <View style={styles.containerStyle}>
                        <Text style={{marginTop: 40, flex: 1, justifyContent: 'space-around'}}>
                           Data to come!
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const color = '#555'

const window = Dimensions.get('window')
const iconSize = 300
const iconLeft = (window.width / 2) - (iconSize / 2)
const iconTop = (window.height / 2) - (iconSize / 1.5)

const styles = StyleSheet.create({
    iconStyle: {
        position: 'absolute',
        left: iconLeft,
        top: iconTop,
        height: iconSize,
        width: iconSize,
        opacity: 0.1
    },
    containerStyle: {
        flex: 1,
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    cursiveStyle: {
        color,
        color,
        fontWeight: 'normal',
        fontStyle: 'italic',
        fontSize: 9,
    },
    headerStyle: {
        color,
        paddingTop: 10,
        fontSize: 10,
        fontWeight: 'bold'
    },
    metaContainer: {
        padding: 10
    },
    imageStyle: {
        alignSelf: 'stretch',
        width: '100%',
        height: 200
    }
})

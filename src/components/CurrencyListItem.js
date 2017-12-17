import React, { Component } from 'React'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import SVGImage from 'react-native-svg-image'
import getIcon from '../../icons/icons'

class CurrencyListItem extends Component {

    renderValueProgress(trend) {
        const result = Math.round(trend)
        const color = result < 0 ? 'red' : 'green'
        const arrow = result < 0 ? 'downarrow' : 'uparrow'

        return (
            <View style={styles.statusContainer}>
                <View style={styles.statusIconContainer}>
                    <SVGImage style={styles.statusIcon} source={{uri: getIcon(arrow)}} />
                </View>
                <Text style={{color}}>{result}%</Text>
            </View>
        )
    }

    render() {
        const { currency, viewCurrency } = this.props
        const oldPrice = currency.oldPrice.price.close
        const newPrice = currency.latestPrice.price.close
        const oldSocial = currency.oldSocial.points
        const newSocial = currency.latestSocial.points
        return (
            <TouchableOpacity key={currency.name} onPress={() => viewCurrency({ currency })}>
                <View style={styles.containerStyle}>
                    <View style={styles.iconStyle}>
                        <SVGImage source={{uri: getIcon(currency.name)}} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>{currency.name}</Text>
                        {this.renderValueProgress(currency.priceTrend)}
                        {this.renderValueProgress(currency.socialTrend)}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    statusContainer: {
        flexGrow: 1,
        flexBasis: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 40
    },
    statusIconContainer: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusIcon: {
        width: 10,
        height: 10,
        transform: [{ translateY: -5 }]
    },
    containerStyle: {
        height: 51,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#555'
    },
    textStyle: {
        flexGrow: 1,
        flexBasis: 0,
        color: '#555',
        fontWeight: 'bold'
    },
    textContainer: {
        flex: 1,
        paddingRight: 20,
        alignItems: 'center',
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconStyle: {
        height: 30,
        width: 30,
        margin: 10
    }
})

const mapDispatchToProps = dispatch => ({
    viewCurrency: (params) => dispatch(NavigationActions.navigate({ routeName: 'CurrencyDetails', params }))
})

export default connect(null, mapDispatchToProps)(CurrencyListItem)

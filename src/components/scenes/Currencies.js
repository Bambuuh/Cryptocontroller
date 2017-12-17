import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableHighlight, ScrollView, Image, StyleSheet } from 'react-native'

import { fetchAllCurrencies } from '../../actions/currencyActions'

import CurrencyListItem from '../CurrencyListItem'

class Currencies extends Component {

    componentDidMount() {
        this.props.fetchAllCurrencies()
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Top currencies'
    })

    renderCurrencies() {
        return this.props.currencies.map(currency => <CurrencyListItem key={currency.name} currency={currency} />)
    }

    render() {
        return (
            <ScrollView>
                {this.renderCurrencies()}
            </ScrollView>
        )
    }
}

const mapStateToProps = ({ currencies }) => ({ currencies })

export default connect(mapStateToProps, { fetchAllCurrencies })(Currencies)
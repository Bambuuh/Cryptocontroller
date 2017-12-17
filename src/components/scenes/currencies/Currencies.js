import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableHighlight, ScrollView, Image, StyleSheet } from 'react-native'

import { fetchAllCurrencies } from '../../../actions/currencyActions'

import CurrencyListItem from '../../CurrencyListItem'

class Currencies extends Component {

    constructor(props) {
        super(props)

        this.state = { currencies: []}
    }

    componentDidMount() {
        fetch(`http://gurey.se:9988/api/v1/coin/top?days=${this.props.timeFrame}`)
            .then(response => response.json().then(data => this.setState({currencies: data})))
            .catch(error => console.error(error))
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Top currencies'
    })

    renderCurrencies() {
        return this.state.currencies.map(currency => <CurrencyListItem key={currency.name} currency={currency} />)
    }

    render() {
        return (
            <ScrollView>
                {this.renderCurrencies()}
            </ScrollView>
        )
    }
}

export default connect(null, { fetchAllCurrencies })(Currencies)
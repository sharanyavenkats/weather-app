import React from 'react'

import WeatherFormContainer from '../../containers/weather-form-container/weather-form-container'

import styles from './home.css'

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>Enter city, zipcode or place</h1>
                <WeatherFormContainer />
            </div>
        )
    }
}
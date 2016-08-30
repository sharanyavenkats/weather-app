import React from 'react'
import styles from './home.css'

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>Enter a City and State</h1>
            </div>
        )
    }
}
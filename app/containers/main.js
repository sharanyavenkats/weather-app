import React from 'react'
import styles from './main.css'

export default class Main extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>Weather Herald</h1>
                {this.props.children}
            </div>
        )
    }
}

Main.displayName = 'Main'
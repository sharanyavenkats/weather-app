import React from 'react'
import { reduxForm, Field } from 'redux-form'

import WeatherForm from '../../components/weather-form/weather-form'
import styles from './weather-form.css'

class WeatherFormContainer extends React.Component {
    submit() {
        // no-op
    }

    render() {
        const { handleSubmit, submitting } = this.props

        return (
            <form className={styles['weather-form']} onSubmit={handleSubmit(this.submit)}>
                <Field className={styles.weather}
                       name="weather" type="text" component={WeatherForm} />
                <button className={`btn ${styles['submit-btn']}`}
                        type="submit" disabled={submitting}>GO</button>
            </form>
        )
    }
}

const validate = values => {
    const errors = {}
    if (!values.weather) {
        errors.weather = 'Please enter a state, zipcode'
    }

    return errors
}

export default reduxForm({
    form: 'weatherForm',
    validate
})(WeatherFormContainer)


import React from 'react'

export default function WeatherForm({ className, input, type, meta: { touched, error } }) {
    return (
        <div className={className}>
            <input {...input} type={type} className="form-control" />
            {touched && error && <span>{error}</span>}
        </div>
    )
}

WeatherForm.displayName = 'WeatherForm'
WeatherForm.defaultProps = {
    className: '',
    type: '',
    input: {},
    meta: {}
}
WeatherForm.propTypes = {
    className: React.PropTypes.string,
    type: React.PropTypes.string,
    input: React.PropTypes.object,
    meta: React.PropTypes.object
}
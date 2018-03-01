import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPerson } from './actions'
import { Field, reduxForm } from 'redux-form';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


class FormComponent extends Component {


    renderInputField(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`;
        return (
            <div className={className}>
                <label>{field.myLabel}</label>
                <input type="text" {...field.input}/>
                <div className="error">
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }

    renderTextareaField(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`;
        return(
            <div className={className}>
                <label>{field.myLabel}</label>
                <textarea 
                    {...field.input}
                ></textarea>
                 <div className="error">
                    {field.meta.touched ? field.meta.error:''}
                </div>
            </div>
        )
    }

    renderDatePicker = ( {input, placeholder, defaultValue, meta: {touched, error} }) => (
        <div className="form-input">
        <label>Pick a date</label>
            <DatePicker {...input}
               dateForm="MM/DD/YYYY"
                selected={input.value ? moment(input.value) : null} 
                value={input.value ? moment(input.value).format("MM/DD/YYYY") : null}
               />
               <div className="error">
              {touched && error && <span>{error}</span>}
              </div>
        </div>
      );
      

    onSubmit(values){
        this.props.addPerson(values,()=>{
           this.props.history.push('/')
        })
    }

    render(){
        return(
            <div className="Form">
                <div className="top">
                    <h3>Add a Person</h3>
                    <Link to="/">Back</Link>
                </div>
                <form onSubmit={this.props.handleSubmit( (event)=>this.onSubmit(event) )}>

                    <Field
                        myLabel="Enter name"
                        name="firstName"
                        component={this.renderInputField}
                    />

                    <Field
                        myLabel="Enter second name"
                        name="secondName"
                        component={this.renderInputField}
                    />

                    <Field
                        myLabel="Enter email"
                        name="email"
                        component={this.renderTextareaField}
                    />

                    <Field
                        id="date-id"
                        name="date"
                        component={this.renderDatePicker}
                    />


                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {};

    if(!values.firstName){
        errors.firstName = "The field for first name is empty"
    }

    if(!values.secondName){
        errors.secondName = "The field for second name is empty"
    }

    if (!values.email) {
        errors.email = "The field for email is empty"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if(!values.date){
        errors.date = "The field for date name is empty"
    }

    return errors;
}

function mapStateToProps(state){
    console.log(state)
    return {
        success: state.data
        
    }
}


export default reduxForm({
    validate,
    form:'PostPerson',
})(
    connect(mapStateToProps,{addPerson})(FormComponent)
)
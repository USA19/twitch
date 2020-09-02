import React, { Component } from 'react'
import { Field, reduxForm, clearSubmitErrors} from 'redux-form';



export class StreamForm extends Component {
    renderError=({error,touched})=>{
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }

    }
    renderInput= ({input,label,meta})=>{
        const className=`field ${meta.touched && meta.error? 'error':' '}`;
        return (
            <div className={className}>
                <label>{label}</label>
                 <input {...input} autoComplete="off"/>
                 {this.renderError(meta)}
            </div>
            ); 
        //this basically copy all the props from
         //given by redux-form more on it is equal to 
         //<input onChange={formProps.input.onChange} and
         //vale={formProps.input.value} />
         //can further de-structure formProps to ({input})
     }

     onSubmit=formValues=>{
         this.props.onSubmit(formValues);
     }
    render() {
        
        return (
           
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            
               <Field name="title" component={this.renderInput} label="Enter Title"/>
               <Field name="description" component={this.renderInput} label="Enter Description"/>
               <button className="ui button primary" type="submit">submit</button>
            </form>
        )
    }
}

const validate=formValues=>{
    const errors={};
    if(!formValues.title){
        errors.title="You must enter a title";
    }
    if(!formValues.description){
        errors.description="You must enter a description";
    }
    return errors;
}
export default  reduxForm({
    form:'streamForm',
    validate
})(StreamForm); 

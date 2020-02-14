import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValue) {
    console.log(formValue);
  }
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primay">Submit</button>
      </form>
    );
  }
}

//validation form
const validate = formValue => {
  const errors = {};
  if (!formValue.title) {
    errors.title = "You must enter a title";
  }
};

//hookup reduxForm
export default reduxForm({
  form: "StreamCreate"
})(StreamCreate);

import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValue => {
    this.props.createStream(formValue);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
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
  if (!formValue.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

//hookup reduxForm
const formWrapped = reduxForm({
  form: "StreamCreate",
  validate
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapped);

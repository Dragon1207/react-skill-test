import React from 'react';
import { Formik, Field, Form } from 'formik';
import { addTodo } from './components/Todo/action/todoAction';
import { connect } from 'react-redux';

const BasicForm = ({ addTodo }) => (
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        todo: '',
      }}
      onSubmit={(todo) => {
        addTodo(todo);
      }}
    >
      <Form>
        <label htmlFor="todo">Add ToDo </label>
        <Field id="firstName" name="firstName" placeholder="First Name" />
        <Field id="lastName" name="lastName" placeholder="Last Name" />
        <Field id="email" name="email" type="email" placeholder="Email" />
        <Field id="todo" name="todo" placeholder="TextHere" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

const mapDispatchToProps = {
  addTodo,
}

export default connect(null, mapDispatchToProps)(BasicForm);

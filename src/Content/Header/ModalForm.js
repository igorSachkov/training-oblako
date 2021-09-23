import { Field, reduxForm } from 'redux-form'
import React from 'react';
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) => {
  
  return (
    <DatePicker
      onChange={onChange}
      format="DD MMM YYYY"
      // time={showTime}
     
      value={!value ? null : new Date(value)}
      placeholder={String(new Date)}
      includeTime
      
    />
    
  )
}

const SimpleForm = props => {

  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label >Дата</label>
        <div className="modal-label">
        <Field
          name="date"
          showTime={false}
          component={renderDateTimePicker}
        />
        </div>

      </div>


      <div>
        <label >Название</label>
        <div className="modal-label">
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Название"

          />
        </div>
      </div>
      <div>
        <label >Количество участников</label>
        <div className="modal-label">
          <Field
            name="members"
            component="input"
            type="text"
            placeholder="Участников"
          />
        </div>
      </div>


      <div>
        <label >Тренер</label>
        <div className="modal-label">
          <Field name="coach" component="select">
            <option />
            <option value="Georgiy">Георгий</option>
            <option value="Anastasia">Анастасия</option>
            <option value="Usuf">Юсуф</option>
          </Field>
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Отправить
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Очистить
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm);

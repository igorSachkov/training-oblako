import { Field, reduxForm } from 'redux-form'
import React from 'react';
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import ProgressSlider from './ProgressSlider/ProgressSlider';



const renderDateTimePicker = ({ input: { onChange, value }, showTime }) => {
  
  return (
    <DatePicker
      onChange={onChange}
      format="DD MMM YYYY"
      // time={showTime}
      value={!value ? null : new Date(value)}
      placeholder={String(new Date)}
    />
  )
}


const SimpleForm = (props, ) => {
  

  const { handleSubmit, pristine, reset, submitting, setProgress, progress } = props
  const { name, members } = props.item

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>Дата</label>
        <Field
          name="date"
          showTime={false}
          component={renderDateTimePicker}
        />
      </div>


      <div>
        <label>Название</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder={name}

          />
        </div>
      </div>
      <div>
        <label>Количество участников</label>
        <div>
          <Field
            name="members"
            component="input"
            type="text"
            placeholder={members}
          />
        </div>
      </div>


      <div>
        <label>Тренер</label>
        <div>
          <Field name="coach" component="select">
            <option />
            <option value="Georgiy">Георгий</option>
            <option value="Anastasia">Анастасия</option>
            <option value="Usuf">Юсуф</option>
          </Field>
        </div>
      </div>

      <div>
        <ProgressSlider progress={progress} setProgress={setProgress}/>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm);

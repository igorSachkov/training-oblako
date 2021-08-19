import 'date-fns';
import { Field, reduxForm } from 'redux-form'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import React from 'react';
const DateFNS = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          margin="normal"

          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

const SimpleForm = props => {

  const { handleSubmit, pristine, reset, submitting } = props




  return (
    <form onSubmit={handleSubmit}>


      <Field
        name="date"
        component={DateFNS}
        />

      <div>
        <label>Название</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Название"

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
            placeholder="Участников"
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
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
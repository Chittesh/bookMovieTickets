import React from 'react'
import { Grid, Paper, TextField, Button, FormControl, InputLabel } from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useHistory } from 'react-router-dom';


export default function Register({ addSubscriberHandler }) {


  const [addSubscriberForm, setAddSubscriberForm] = React.useState({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactno: ''
  });

  const [submitted, setSubmitted] = React.useState('');

  const history = useHistory();



  const inputChangedHandler = (e) => {
    const state = addSubscriberForm;
    state[e.target.name] = e.target.value;
    setAddSubscriberForm({ ...state })

  }

  const onFormSubmitted = (e) => {
    e.preventDefault();

    React.useEffect(() => {
        setSubmitted("Registration successful Please Login!")
    })

   
    setAddSubscriberForm({
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      contactno: ''
    });
    //history.push("/")
    
  }


  const { firstName, lastName, email, password, contactno } = addSubscriberForm;

  const { showSuccess } = submitted;

  const paperStyle = { padding: 20, height: '70vh', width: 280 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }
  return (

    <Grid align='center'>

      <Paper elevation={10} style={paperStyle}>
        <ValidatorForm className="subscriber-form" onSubmit={onFormSubmitted}>
          <TextField onChange={inputChangedHandler} id='firstName' name='firstName' label='First name' placeholder='Enter First name' fullWidth required helperText="Required" />
          <TextField onChange={inputChangedHandler} id='lastName' name='lastName' label='Last name' placeholder='Enter Last name' fullWidth required helperText="Required" />
          <TextField onChange={inputChangedHandler} id='email' name='email' label='Email' placeholder='Enter Email' type='email' fullWidth required helperText="Required" />
          <TextField onChange={inputChangedHandler} id='password' name='password' label='Password' placeholder='Enter Password' type='password' fullWidth required helperText="Required" />
          <TextField onChange={inputChangedHandler} id='contactno' name='contactno' label='Contact No' placeholder='Enter Contact Number' fullWidth required helperText="Required" />
          <br />
          <br />
          <Button type='submit' color='primary' variant="contained" style={btnstyle}>Register</Button>
         
        </ValidatorForm>
       
        <div class='success-message'>{showSuccess}</div>

      </Paper>
    </Grid>

  )
}

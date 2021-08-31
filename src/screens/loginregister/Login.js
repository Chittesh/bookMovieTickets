import React from 'react'
import { Grid, Paper, TextField, Button} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
const Login = () => {

  const [username, setusername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  const paperStyle = { padding: 20, height: '30vh', width: 280, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }
  return (
    <ValidatorForm className="subscriber-form" onSubmit={handleSubmit}>
    <Grid align='center'>
      <Paper elevation={10} style={paperStyle}>
        <TextField value={username} onChange={(e) => setusername(e.target.value)} label='Username' placeholder='Enter username' fullWidth required />
        <TextField value={password} onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required />
        <br/>
        <br/>
        <Button type='submit' color='primary' variant="contained" style={btnstyle}>Login</Button>
      </Paper>
    </Grid>
    </ValidatorForm>
  )
}

export default Login
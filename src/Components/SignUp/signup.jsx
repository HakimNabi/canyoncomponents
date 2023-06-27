import { Avatar, Grid, Paper, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const SignUp = () => {

    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#F4976C' }
    const marginTop = {marginTop: 5}

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>Please Fill this Form to create an Account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder='Enter Your Name' />
                    <TextField fullWidth label='Email' placeholder='Your@mail.com' />

                    <FormControl style={marginTop}>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Male"
                            name="radio-buttons-group"
                            style ={{display: 'initial'}}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <TextField fullWidth label='Phone No' placeholder='+00-000-0000' />
                    <TextField fullWidth label='Password' placeholder='Enter Password' />
                    <TextField fullWidth label='Confrim Password' placeholder='Confirm Password' />
                    <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp
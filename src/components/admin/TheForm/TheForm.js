import { Grid, TextField, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width:'80%',
            margin: theme.spacing(1)
        }
    }
}))

const initialValues ={
    id: 0,
    Fullname: "",
    Location: "",
    Description: "",
    picture: "",
    date: "",
    trancsaction: ""
} 

function TheForm() {
    const classes = useStyle()
    const [values, setValues] = useState({
        Fullname: "",
        Location: "",
        Description: "",
        picture: "",
        date: "",
        trancsaction: ""
    });

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <form className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            label="Full Name"
                            name='fullname'
                            value={values.Location}
                            onChange={onChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Location"
                            name='location'
                            value={values.Fullname}
                            onChange={onChange}
                        />
                    </Grid>

                </Grid>
            </form>
        </div>
    )
}

export default TheForm

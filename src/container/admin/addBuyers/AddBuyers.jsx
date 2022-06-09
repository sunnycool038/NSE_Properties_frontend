import { Paper } from '@material-ui/core'
import React from 'react'
//import TestForm from '../../../components/admin/AddBuyersForm/TestForm'
import { TheForm } from '../../../components/admin'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding:theme.spacing(3)
  }
}))

function AddBuyers() {
  const classes = useStyles()
  return (
    <div>
      <Paper className={classes.pageContent}>
        <TheForm />
      </Paper>

    </div>
  )
}

export default AddBuyers

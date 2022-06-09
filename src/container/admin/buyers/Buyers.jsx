import { collection, onSnapshot, orderBy, query, limit } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { db } from "../../../firebase/config";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function Buyers() {
  const classes = useStyles();
  const [buyers, setBuyers] = useState([]);
  const citiesRef = collection(db, "buyers");
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "buyers"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setBuyers(snapshot.docs);
      }
    )
  }, []);
  return (
    <>
      {buyers && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Date of meeting</TableCell>
                <TableCell align="right">Transaction</TableCell>
                <TableCell align="right">timestamp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buyers.map((row) => (
                <TableRow key={row?.data().userid}>
                  <TableCell component="th" scope="row">
                    <>{row?.data().Fullname}</>
                  </TableCell>
                  <TableCell align="right"><>{row?.data().Location}</></TableCell>
                  <TableCell align="right"><>{row?.data().Description}</></TableCell>
                  <TableCell align="right" ><>{row?.data().date}</></TableCell>
                  <TableCell align="right" ><>{row?.data().trancsaction}</></TableCell>
                  <TableCell align="right" ><>{JSON.stringify(row?.data().timestamp)}</></TableCell>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      </>
  )
}

export default Buyers

import React from "react";
import {connect} from "react-redux";
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow
} from "material-ui/Table";

const Results = ({settlements}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Period</TableCell>
        <TableCell>Income</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {settlements.map((v, i) => (
        <TableRow key={i}>
          <TableCell numeric>{i + 1}</TableCell>
          <TableCell numeric>{v.toFixed(2)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell numeric>{settlements.length}</TableCell>
        <TableCell numeric>{(settlements[settlements.length - 1] || 0).toFixed(2)}</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

const mapStateToProps = store => store.results;

export default connect(mapStateToProps, {})(Results);

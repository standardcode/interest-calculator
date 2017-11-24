import React from "react";
import {connect} from "react-redux";
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow
} from "material-ui/Table";

const currency = value => value.toFixed(2);

const last = (settlements, key) => currency(settlements[settlements.length - 1][key] || 0);

const Results = ({settlements, total}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Period</TableCell>
        <TableCell>Gross</TableCell>
        <TableCell>Fee</TableCell>
        <TableCell>Tax</TableCell>
        <TableCell>Net</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {settlements.map((v, i) => (
        <TableRow key={i}>
          <TableCell numeric>{i + 1}</TableCell>
          <TableCell numeric>{currency(v.gross)}</TableCell>
          <TableCell numeric>{currency(v.fee)}</TableCell>
          <TableCell numeric>{currency(v.tax)}</TableCell>
          <TableCell numeric>{currency(v.net)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell numeric>{settlements.length}</TableCell>
        <TableCell numeric>{last(settlements, "gross")}</TableCell>
        <TableCell numeric>{currency(total.fee)}</TableCell>
        <TableCell numeric>{currency(total.tax)}</TableCell>
        <TableCell numeric>{last(settlements, "net")}</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

const mapStateToProps = store => store.results;

export default connect(mapStateToProps, {})(Results);

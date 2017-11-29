import React from "react";
import {connect} from "react-redux";
import S from "sanctuary";
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow
} from "material-ui/Table";

const currency = value => value.toFixed(2);

const last = (settlements, key) => currency(S.fromMaybe(0, S.map(S.prop(key), S.last(settlements))));

const Results = ({settlements, total}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Period</TableCell>
        <TableCell>Gross</TableCell>
        <TableCell>Fee</TableCell>
        <TableCell>Tax</TableCell>
        <TableCell>Net</TableCell>
        <TableCell>Gain</TableCell>
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
          <TableCell numeric>{currency(v.gain)}</TableCell>
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
        <TableCell numeric>{currency(total.gain)}</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

const mapStateToProps = store => store.results;

export default connect(mapStateToProps, {})(Results);

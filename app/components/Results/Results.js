import React from "react";
import {connect} from "react-redux";
import Table, {
  TableCell,
  TableFooter,
  TableHead,
  TableRow
} from "material-ui/Table";

const Results = ({interest}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Income</TableCell>
      </TableRow>
    </TableHead>
    <TableFooter>
      <TableRow>
        <TableCell numeric>{interest}</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

const mapStateToProps = store => store.results;

export default connect(mapStateToProps, {})(Results);

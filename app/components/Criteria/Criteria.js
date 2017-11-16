import React from "react";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import {InputAdornment} from "material-ui/Input";
import {handleInput} from "./actions";

const Criteria = ({amount, rate, handleInput}) => (
  <div>
    <TextField
      id="amount"
      label="Amount"
      value={amount}
      onChange={handleInput}
      type="number"
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>
      }}
    />
    <TextField
      id="rate"
      label="Rate"
      value={rate}
      onChange={handleInput}
      type="number"
      InputProps={{
        endAdornment: <InputAdornment position="end">%</InputAdornment>
      }}
    />
  </div>
);

const mapStateToProps = store => store;

const mapDispatchToProps = {
  handleInput
};

export default connect(mapStateToProps, mapDispatchToProps)(Criteria);

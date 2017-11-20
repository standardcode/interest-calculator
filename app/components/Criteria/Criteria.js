import React from "react";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import InputAdornment from "material-ui/Input/InputAdornment";
import {handleInput} from "./actions";

const Criteria = ({amount, rate, period, duration, handleInput}) => (
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
    <TextField
      id="period"
      label="Period"
      value={period}
      onChange={handleInput}
      type="number"
      InputProps={{
        endAdornment: <InputAdornment position="end">Days</InputAdornment>
      }}
    />
    <TextField
      id="duration"
      label="Duration"
      value={duration}
      onChange={handleInput}
      type="number"
      InputProps={{
        endAdornment: <InputAdornment position="end">Periods</InputAdornment>
      }}
    />
  </div>
);

const mapStateToProps = store => store.criteria;

const mapDispatchToProps = {
  handleInput
};

export default connect(mapStateToProps, mapDispatchToProps)(Criteria);

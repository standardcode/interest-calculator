import React from "react";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import InputAdornment from "material-ui/Input/InputAdornment";
import Grid from "material-ui/Grid";
import {withStyles} from "material-ui/styles";
import {handleInput} from "./actions";

const styles = () => ({
  field: {
    width: "8rem"
  },
  input: {
    textAlign: "right"
  },
  adornment: {
    whiteSpace: "nowrap"
  }
});

const Numeric = ({startAdornment, endAdornment, handleInput, classes, ...rest}) => (
  <TextField
    onChange={handleInput}
    type="number"
    margin="normal"
    className={classes.field}
    InputProps={{
      startAdornment,
      endAdornment,
      inputProps: {className: classes.input}
    }}
    {...rest}
  />
);

const Criteria = ({amount, interestRate, period, duration, feeRate, taxRate, ...rest}) => (
  <div>
    <Grid container justify="center" spacing={16}>
      {[
        <Numeric
          id="amount"
          label="Amount"
          value={amount}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          {...rest}/>,
        <Numeric
          id="interestRate"
          label="Interest rate"
          value={interestRate}
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
          {...rest}/>,
        <Numeric
          id="period"
          label="Period"
          value={period}
          endAdornment={<InputAdornment position="end">days</InputAdornment>}
          {...rest}/>,
        <Numeric
          id="duration"
          label="Duration"
          value={duration}
          endAdornment={<InputAdornment position="end">periods</InputAdornment>}
          {...rest}/>,
        <Numeric
          id="feeRate"
          label="Fee"
          value={feeRate}
          endAdornment={<InputAdornment className={rest.classes.adornment} position="end">% of total</InputAdornment>}
          {...rest}/>,
        <Numeric
          id="taxRate"
          label="Tax"
          value={taxRate}
          endAdornment={<InputAdornment className={rest.classes.adornment} position="end">% of profit</InputAdornment>}
          {...rest}/>
      ].map((child, i) => (
        <Grid key={i} item>
          {child}
        </Grid>
      ))}
    </Grid>
  </div>
);

const mapStateToProps = store => store.criteria;

const mapDispatchToProps = {
  handleInput
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Criteria));

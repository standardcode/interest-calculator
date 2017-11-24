import S from "sanctuary";
import * as R from "ramda";

const step = (rate, feeRate, taxRate) => ({gross: amount}) => {
  const gross = amount * (1 + rate);
  const fee = gross * feeRate;
  const afterFee = gross - fee;
  const tax = (afterFee - amount) * taxRate;
  const net = afterFee - tax;

  return {
    gross,
    fee,
    tax,
    net
  };
};

export default ({amount, rate, period, duration, tax, fee}) => {
  const rateConvert = S.mult(S.div(period, 360 * 100));
  const steps = R.scan(step(rateConvert(rate), rateConvert(fee), rateConvert(tax)), {gross: amount}, S.range(0, duration));
  const settlements = S.fromMaybe([], S.tail(steps));
  const sum = S.compose(S.sum, S.pluck(S.__, settlements));
  const keys = ["tax", "fee"];
  const total = R.zipObj(keys, R.map(sum, keys));
  return {
    settlements,
    total
  };
};

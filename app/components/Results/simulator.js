import S from "sanctuary";
import * as R from "ramda";

const step = ({interestRate, feeRate, taxRate}) => ({net: amount}) => {
  const gross = amount * (1 + interestRate);
  const fee = gross * feeRate;
  const afterFee = gross - fee;
  const tax = Math.max(afterFee - amount, 0) * taxRate;
  const net = afterFee - tax;
  const gain = net - amount;

  return {
    gross,
    fee,
    tax,
    net,
    gain
  };
};

export default ({amount, interestRate, period, duration, taxRate, feeRate}) => {
  const rateConvert = S.mult(S.div(period, 360 * 100));
  const steps = R.scan(step(S.map(rateConvert, {
    interestRate,
    feeRate,
    taxRate
  })), {net: amount}, S.range(0, duration));
  const settlements = S.fromMaybe([], S.tail(steps));
  const sum = S.compose(S.sum, S.pluck(S.__, settlements));
  const keys = ["tax", "fee", "gain"];
  const total = R.zipObj(keys, R.map(sum, keys));
  return {
    settlements,
    total
  };
};

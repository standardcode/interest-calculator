import S from "sanctuary";
import * as R from "ramda";

export default ({amount, rate, period, duration}) => {
  const ratePerPeriod = 1 + S.mult(S.div(rate, 100), S.div(period, 360));
  const settlements = R.scan(S.mult, amount, S.map(S.K(ratePerPeriod), S.range(0, duration)));
  return {
    settlements: S.fromMaybe([], S.tail(settlements))
  };
};

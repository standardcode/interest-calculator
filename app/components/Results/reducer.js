import {INPUT} from "../Criteria/actions";
import {reducer as criteriaReducer} from "../Criteria";

export default (state = {}, {type, ...rest}) => {
  if (type === INPUT) {
    const criteria = criteriaReducer(state.criteria, {type, ...rest});
    return {
      criteria,
      results: simulation(criteria)
    };
  } else {
    return state;
  }
};

const simulation = ({amount, rate}) => ({
  interest: amount * rate / 100
});

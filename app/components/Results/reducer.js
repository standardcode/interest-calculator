import {INPUT} from "../Criteria/actions";
import {reducer as criteriaReducer} from "../Criteria";
import simulate from "./simulator";

export default (state = {}, {type, ...rest}) => {
  if (type === INPUT) {
    const criteria = criteriaReducer(state.criteria, {type, ...rest});
    return {
      criteria,
      results: simulate(criteria)
    };
  } else {
    return state;
  }
};

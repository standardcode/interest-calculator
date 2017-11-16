import {INPUT} from "./actions";

export default (state = {}, {type, ...rest}) => type === INPUT ? {
  ...state,
  ...rest
} : state;


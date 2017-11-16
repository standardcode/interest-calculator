import {connect} from "react-redux";

const mapStateToProps = store => store;

export const wrap = Component => connect(mapStateToProps)(Component);

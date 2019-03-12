import { connect } from 'react-redux';
import Players from './Players';
import { actions } from './playersReducer';

const mapStateToProps = ({ players }) => ({
  players,
});

const mapActionsToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapActionsToProps)(Players);

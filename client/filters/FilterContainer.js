import { connect } from 'react-redux';
import Filters from './Filters';
import { actions } from '../players/playersReducer';

const mapStateToProps = ({ players }) => ({
  players,
});

const mapActionsToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapActionsToProps)(Filters);

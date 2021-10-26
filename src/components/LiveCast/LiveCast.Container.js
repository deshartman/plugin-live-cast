import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions } from '../../states/LiveCastState';
import LiveCast from './LiveCast';

const mapStateToProps = (state) => ({
  isOpen: state['live-cast'].liveCast.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  dismissBar: bindActionCreators(Actions.dismissBar, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveCast);

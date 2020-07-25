import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Search } from '../../components/Search';
import { injectSaga } from '../../utils/injectSaga';
import { injectReducer } from '../../utils/injectReducer';
import { searchBindActions } from './actions';
import { searchReducer } from './reducer';
import { searchSaga } from './saga';
import * as searchSelectors from './selectors';

const mapStateToProps = state => ({
  search: searchSelectors.searchSelector(state),
  inputValue: searchSelectors.inputValueSelector(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(searchBindActions, dispatch)
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'search', reducer: searchReducer });

const withSaga = injectSaga({ key: 'search', saga: searchSaga });

export const SearchContainer = compose(
  withReducer,
  withSaga,
  withConnect
)(Search);

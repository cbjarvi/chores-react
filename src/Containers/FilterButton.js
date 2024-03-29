import Button from 'Components/Footer/Button';
import { connect } from 'react-redux';
import setVisibilityFilter from 'Actions/setVisibilityFilter';

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter === ownProps.filter,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    },
  };
};

const FilterButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default FilterButton;

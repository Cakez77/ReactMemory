import { connect } from "react-redux";
import { selectCard } from "../Redux/actions";
import { Card } from "../Presentational Components/Card";

const mapStateToProps = state => ({
  name: state.card,
  selected: state.card === state.selected
})

const mapDispatchToProps = dispatch => {
  return {
    onClickSelect: id => {
      dispatch(selectCard(id))
    }
  }
};

export const SelectCard = connect(
  mapStateToProps,
  mapDispatchToProps
) (Card)
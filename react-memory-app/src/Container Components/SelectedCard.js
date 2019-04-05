import { connect } from "react-redux";
import { SelectedCardField } from "../Presentational Components/SelectedCardField";


const mapStateToProps = state => ({
    selectedCard: state.selected
});

export const SelectedCard = connect(
    mapStateToProps
) (SelectedCardField)
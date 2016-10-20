/*
 This is a container component around the CellGrid.

 This component is responsible for subscribing to the Redux state.
 (For the size of the grid.)
 */
import { connect } from 'react-redux'

import { LifeState } from '../data/LifeState';
import { CellGrid, CellGridProps } from './CellGrid';

function mapStateToProps(state:LifeState):CellGridProps {
    return { size: state.size }
}

export const CellGridContainer = connect(mapStateToProps)(CellGrid);

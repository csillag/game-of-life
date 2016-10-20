/*
 This is a container component around the Controls.

 This component is responsible for subscribing to the Redux state,
 and for dispatching the required actions.
 */
import { connect } from 'react-redux'

import { LifeState } from '../data/LifeState';
import { setSize, reset, evolve } from '../data/actions';
import { Controls, ControlsProps } from './Controls';

function mapStateToProps(state:LifeState):ControlsProps {
    return { size: state.size }
}

function mapDispatchToProps(dispatch):ControlsProps {
    return {
        reset: () => { dispatch(reset()) },
        evolve: () => { dispatch(evolve()) },
        setSize: (value:number) => { dispatch(setSize(value)) },
    }
}

export const ControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);

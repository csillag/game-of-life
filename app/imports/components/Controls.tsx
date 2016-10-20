/*
 This React component represents the controls. (The buttons and input above the cell grid.)

 This is purely a presentational component. (See also the ControlsContainer.)
*/

import * as React from 'react';
const NumericInput = require('react-numeric-input');

export interface ControlsProps {
    size?: number;
    evolve?():void;
    reset?():void;
    setSize?(value:number):void;
}

export class Controls extends React.Component<ControlsProps,{}> {

    static propTypes: React.ValidationMap<ControlsProps> = {
        size: React.PropTypes.number.isRequired,
        evolve: React.PropTypes.func.isRequired,
        reset: React.PropTypes.func.isRequired,
        setSize: React.PropTypes.func.isRequired,
    };

    protected renderEvolve() {
        return (<button onClick={this.props.evolve}>
            Evolve!
        </button>)
    }

    protected renderReset() {
        return (<button onClick={this.props.reset}>
            Reset
        </button>)
    }

    protected onSizeChange(value:number) {
        this.props.setSize(value);
    }

    protected renderSize() {
        return (<NumericInput
            className="grid-size"
            min={3}
            max={20}
            value={this.props.size}
            onChange={this.onSizeChange.bind(this)}
        />)
    }

    render() {
        return (<div id="controls">
            { this.renderEvolve() }
            { this.renderReset() }
            <span>Size:</span>
            { this.renderSize() }
        </div>);
    }

}

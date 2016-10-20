/*
 This React component represents one cell in the grid.

 This is purely a presentational component. (See also the LifeCellContainer.)
 */
import * as React from 'react';
import * as classNames from 'classnames';

export interface LifeCellProps {
    populated?: boolean;
    switch?():void;
}

export class LifeCell extends React.Component<LifeCellProps,{}> {

    static propTypes: React.ValidationMap<LifeCellProps> = {
        switch: React.PropTypes.func.isRequired,
        populated: React.PropTypes.bool.isRequired,
    };

    private onClick() {
        this.props.switch();
    }

    public render() {

        const classes = classNames({
            "cell": true,
            "alive": this.props.populated
        });
        return <td
            className={classes}
            onClick={this.onClick.bind(this)}
        />;
    }
}

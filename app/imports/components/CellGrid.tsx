/*
 This React component represents the Cell Grid, displaying the state of the callular automaton.

 This is purely a presentational component. (See also the CellGridContainer.)
 */
import * as React from 'react';

import { LifeCellContainer } from './LifeCellContainer';

export interface CellGridProps {
    size: number;
}

// The current implementation simply uses and HTML table, with tr and td tags.
export class CellGrid extends React.Component<CellGridProps,{}> {

    static propTypes: React.ValidationMap<CellGridProps> = {
        size: React.PropTypes.number.isRequired,
    };

    private renderCell(x:number, y:number) {
        return (
            <LifeCellContainer
                key={"col-"+x}
                x={x}
                y={y}
            />
        )
    }
    
    private renderRow(y:number) {
        const cols = []
        for (let x = 0; x < this.props.size; x++) {
            cols.push(this.renderCell(x,y));
        }        
        return (
            <tr key={"row-"+y}>
                { cols }
            </tr>
        );
    }

    private renderTable() {
        const rows = [];
        for (let y = 0; y < this.props.size; y++) {
            rows.push(this.renderRow(y));
        }
        return (
            <table className="cell-grid"><tbody>
                { rows }
            </tbody></table>
        );
    }
    
    public render() {
        return this.renderTable();
    }
}

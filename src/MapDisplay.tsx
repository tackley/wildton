import * as React from "react";
import {MAP} from "./map";


class MapCell extends React.Component<{cellType: number}> {
    render() {
        const {cellType} = this.props;

        let style = "cell ";
        let char = " ";

        switch (cellType) {
            case 1: 
                style += "bridge";
                break;

            case 32:
                style += "sea";
                break;
        
            case 34:
                style += "forest";
                break;

            case 35:
                style += "desert";
                break;

            case 33:
                style += "plains";
                break;

            case 36:
                style += "mountains";
                break;

            case 0:
                break;

            default:
                char = cellType.toString()
                break;
        }
        
        return (
            <div className={style}>
                {char}
            </div>
        )
    }
}

class MapRowDisplay extends React.Component<{data: number[]}> {
    render() {
        return (
            <div className="row">
                {
                    this.props.data.map((cell, idx) => <MapCell key={idx} cellType={cell} />)
                }
            </div>
        )
    }
}

export class MapDisplay extends React.Component {
    render() {
        return (
            <div className="map">
                {MAP.map((row, idx) => <MapRowDisplay key={idx} data={row} />)}
            </div>
        )
    }
}
import React, { Component } from "react";
import classes from "./BuildControls.module.css"
import BuildContorl from './BuildControl/BuildControl'
import Aux from "../../../HOC/Auxulliary";
const Controls = [
    { Label: "Salad", type: "salad" },
    { Label: "Bacon", type: "bacon" },
    { Label: "Meat", type: "meat" },
    { Label: "Cheese", type: "cheese" },
]
class BuildContorls extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.BuildControls}>
                    <p> Current Price :<strong>{this.props.price.toFixed(2)}</strong> $ </p>
                    {Controls.map(ctrl => <BuildContorl
                        key={ctrl.Label}
                        Label={ctrl.Label}
                        add={this.props.add.bind(this, ctrl.type)}
                        remove={this.props.remove.bind(this, ctrl.type)}
                        disabled={this.props.disabledInfo[ctrl.type]}
                    />
                    )}
                    <button
                        className={classes.OrderButton}
                        disabled={this.props.orderButton}
                        onClick={this.props.setModal}> ORDER NOW </button>
                </div>
            </Aux>
        )
    }
}
export default BuildContorls
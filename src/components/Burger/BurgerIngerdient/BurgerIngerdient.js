import React, { Component } from "react";
import classes from "./BurgerIngredient.module.css"
import propTypes from "prop-types"
import Aux from "../../../HOC/Auxulliary"
class BurgerIngerdient extends Component {
    render() {
        let Ingredient = null;
        switch (this.props.type) {
            case ("bread-bottom"): {
                Ingredient = <div className={classes.BreadBottom}></div>
                break;
            }
            case ("bread-top"): {
                Ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                )
                break;
            }
            case ("meat"): {
                Ingredient = <div className={classes.Meat}></div>
                break;
            }
            case ("cheese"): {
                Ingredient = <div className={classes.Cheese}></div>
                break;
            }
            case ("salad"): {
                Ingredient = <div className={classes.Salad}></div>
                break;
            }
            case ("bacon"): {
                Ingredient = <div className={classes.Bacon}></div>
                break;
            }
            default: {
                Ingredient = null;
            }
        }
        
        return (
            <Aux>
                {Ingredient}
            </Aux>
        )
    }

}
BurgerIngerdient.propTypes = {
    type: propTypes.string.isRequired
}
export default BurgerIngerdient;
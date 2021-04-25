import React from "react";
import classes from "./Burger.module.css"
import BurgerIngerdient from "./BurgerIngerdient/BurgerIngerdient"
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, index) => {
            return <BurgerIngerdient type = {igKey} key = {igKey + index}/>
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Please Add ingredients </p>
    }
    console.log("the transformedIngredients"  , transformedIngredients)
    return(
        <div className= {classes.Burger}>
            <BurgerIngerdient type="bread-top" />
            {transformedIngredients}
            <BurgerIngerdient type = "bread-bottom"/>
        </div>
    );
}
export default burger;
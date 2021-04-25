import React, { Component } from "react";
import Aux from "../../HOC/Auxulliary"
import Burger from "../../components/Burger/Burger"
import BuidlControlles from "../../components/Burger/BuildControls/BuildControls"
import { Modal, Button } from 'antd';
// import { arrayOf } from "prop-types";
import axios from "../../axiosOrders";
import Spinner from "../../components/UI/Spinner/Spinner"
import ErrorHandler from "../../HOC/ErrorHandler/ErrorHandler"
const INGREDIENTS_PRICES = {
    salad: .5,
    cheese: .4,
    bacon: 0.7,
    meat: 1.3,
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {}, 
        price: 4,
        orderButton: true,
        Modal: false,
        Loading : false , 
    }
    componentDidMount() {
        axios.get("/ingredients.json").then(response => {
            console.log("The Response of the Request", response)
            this.setState({
                ingredients : response.data ,  
            })
        }).catch(error => {
            console.log("The Error of the GET request", error);
        })
    }
    setModal = () => {
        this.setState(prevState => {
            return {
                Modal: !prevState.Modal
            }
        });
    }
    addIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = newCount;
        const Price = this.state.price + INGREDIENTS_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            price: Price,
            orderButton: false
        })
    }
    removeIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1,
              updatedIngredients = { ...this.state.ingredients };
              updatedIngredients[type] = newCount;
        const price = this.state.price - INGREDIENTS_PRICES[type];
        this.setState({ ingredients: updatedIngredients, price: price, orderButton: price == 4 })
    }
    Purchase = () => {
        this.setState(prevState => {
            return {
                Loading : !prevState.Loading
            }
        })
        let Data = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer: {
                name: "Mohamed Ahmed ", 
                address: "Egypt",
                email : "mohamedharoon286@gmail.com"
            },
            delievryMethod : "Fastest" ,
        }
        axios.post("/orders.json   ", Data).then(response => {
            this.setModal(false);
            this.setState(prevState=>{ return{ Loading : !prevState.Loading}})
        }).catch(Error => {
            console.log("The Error of the Request" , Error )
        })
    }
    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        const ingredientsSummary = Object.keys(this.state.ingredients).map(igKey => {
            return <li><span style={{textTransform:"capitalize"}}>{igKey}</span>: {this.state.ingredients[igKey]}</li>
        })
        let OrderSummary = (
            <Aux> <h3> Your Order </h3>
                <p> A delicious burger with the following ingredients :</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                    <p><strong>the Total price : {this.state.price.toFixed(2)} $</strong></p></Aux>
        )
        if (this.state.Loading) {
            OrderSummary = <Spinner/>
        }
        return (
            <Aux>
                <div> <Burger ingredients={this.state.ingredients} /> </div>
                <BuidlControlles
                    add={this.addIngredients}
                    remove={this.removeIngredients}
                    disabledInfo={disabledInfo}
                    price={this.state.price}
                    orderButton={this.state.orderButton}
                    setModal = {this.setModal}
                />
                <Modal
                    title=" Your Order Summary" 
                    centered
                    visible={this.state.Modal}
                    onOk={() => this.Purchase()}
                    onCancel={() => this.setModal(false)}
                >
                    {OrderSummary}
                </Modal>
            </Aux>
        )
    }
}
export default ErrorHandler (BurgerBuilder , axios );
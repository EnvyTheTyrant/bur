import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/General/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import {} from "react-router-dom";

const DEFAULT_PRICE = 1000;
const INGREDIENT_NAMES = {
  Cheese: "Cheese",
  Tomato: "Tomato",
  Patty: "Patty",
  Lettuce: "Lettuce",
};

const INGREDIENT_PRICES = {
  Lettuce: 300,
  Cheese: 250,
  Patty: 800,
  Tomato: 300,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      Patty: 0,
      Cheese: 0,
      Lettuce: 0,
      Tomato: 0,
    },

    confirmOrder: false,
    totalPrice: DEFAULT_PRICE,
  };

  componentDidMount = () => {};

  continueOrder = () => {
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   address: {
    //     firstname: "Babin",
    //     city: "UB",
    //     strees: "Hurshiinhuu hajuud",
    //   },
    // };
    // this.setState({ Loading: true });
    // axios
    //   .post("/orders.json", order)
    //   .then((response) => {})
    //   .finally(() => this.setState({ Loading: false }));
    const params = [];
    for (let ingredients in this.state.ingredients) {
      params.push(ingredients + "=" + this.state.ingredients[ingredients]);
    }
    const query = params.join("&");
    console.log(query);
    this.props.history.push({
      pathname: "/shipping",
      search: query,
    });
    this.hideConfirmModal();
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  hideConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  addIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients: newIngredients });
    this.setState({ totalPrice: newPrice });
  };

  removeIngredient = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({ ingredients: newIngredients });
      this.setState({ totalPrice: newPrice });
    }
  };

  render() {
    const disabled = { ...this.state.ingredients };
    let orderButtonDisabled = false;
    for (let key in disabled) {
      disabled[key] = disabled[key] <= 0;
    }
    if (this.state.totalPrice === DEFAULT_PRICE) orderButtonDisabled = true;
    return (
      <div>
        <Modal
          hideConfirmModal={this.hideConfirmModal}
          show={this.state.confirmOrder}
        >
          <OrderSummary
            onCancel={this.hideConfirmModal}
            onContinue={this.continueOrder}
            totalPrice={this.state.totalPrice}
            controls={INGREDIENT_NAMES}
            ingredients={this.state.ingredients}
          />
        </Modal>

        <Burger
          ingredients={this.state.ingredients}
          choose={this.props.choose}
        />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          hideConfirmModal={this.hideConfirmModal}
          controls={INGREDIENT_NAMES}
          orderButtonDisabled={orderButtonDisabled}
          price={this.state.totalPrice}
          disabled={disabled}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
        />
      </div>
    );
  }
}

export default BurgerBuilder;

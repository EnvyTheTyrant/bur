import React, { Component } from "react";
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";
import css from "./style.module.css";

export class ShippingPage extends Component {
  state = {
    ingredients: {
      Patty: 1,
      Cheese: 0,
      Lettuce: 0,
      Tomato: 0,
    },
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = param[1];
    }
    this.setState({ ingredients });
  }
  goBack = () => {
    this.props.history.goBack();
  };
  showContactData = () => {
    this.props.history.push("/shipping/contact");
  };
  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "28px" }}>
          <strong>Your order will be good...</strong>
        </p>
        <Burger ingredients={this.state.ingredients} />
        <Button clicked={this.goBack} type="Danger" text="Cancel" />
        <Button
          clicked={this.showContactData}
          type="Success"
          text="Enter delivery informations"
        />
        <Route path="/shipping/contact" component={ContactData} />
      </div>
    );
  }
}

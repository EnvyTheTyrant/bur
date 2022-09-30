import React from "react";
import css from "./style.module.css";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";

class OrderPage extends React.Component {
  state = {
    Orders: [],
    Loading: false,
  };

  componentDidMount() {
    this.setState({ Loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        this.setState({ Orders: Object.entries(response.data).reverse() });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({ Loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.Loading ? (
          <Spinner />
        ) : (
          this.state.Orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

export default OrderPage;

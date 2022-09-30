import React, { Component } from "react";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";
import SideBar from "../../components/Sidebar";
import OrderPage from "../OrderPage";
import { Route, Switch } from "react-router-dom";
import { ShippingPage } from "../ShippingPage";

class App extends Component {
  state = {
    showSidebar: false,
    favourite: "",
  };

  toggleSidebar = () => {
    this.setState((prev) => {
      return { showSidebar: !prev.showSidebar };
    });
  };

  choose = (ing) => {
    this.setState({ favourite: ing });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSidebar={this.toggleSidebar} />
        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <main className={css.Content}>
          <p>Chosen ingredient: {this.state.favourite}</p>
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <BurgerBuilder choose={this.choose} {...props} />
              )}
              exact
            />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/orders" component={OrderPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

import React from "react";
import Button from "../General/Button";
import css from "./style.module.css";

class ContactData extends React.Component {
  state = {
    price: 0,
    address: {
      firstname: null,
      strees: null,
      city: null,
    },
  };
  render() {
    return (
      <div className={css.contactData}>
        <input type="text" name="name" placeholder="Firstname" />
        <input type="text" name="strees" placeholder="Address" />
        <input type="text" name="city" placeholder="City" />
        <Button text="SEND" type="Success" />
      </div>
    );
  }
}

export default ContactData;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class UserButton extends React.Component {
  constructor(props) {
    super(props);
    this.value = "username";
  }
  render() {
    return (
      <button className="UserButton">
        {this.props.value}
      </button>
    );
  }
}

class UserTable extends React.Component {
  renderUserButton(i) {
    return <UserButton value={"username" + i} />;
  }

  render() {
    return (
      <div className="usertable">
        {this.renderUserButton(0)}
        {this.renderUserButton(1)}
        {this.renderUserButton(2)}
        {this.renderUserButton(3)}
      </div>
    );
  }
}

class All extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="UserTable">
          <UserTable />
        </div>
        <div className="PurchaseView">
          <PurchaseView />
        </div>
      </div>
    );
  }
}

class Icon extends React.Component {
  render() {
    return (
      <img src={`${process.env.PUBLIC_URL}/image/icon.png`} alt="icon" width={80} height={80} objectFit="contain" />
    )
  }
}

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.value = "username";
  }
  render() {
    return (
      this.value
    )
  }
}

class Fee extends React.Component {
  constructor(props) {
    super(props);
    this.value = "使用料金 " + 99999 + "円";
  }
  render() {
    return (
      this.value
    )
  }
}

class UserInfo extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="Icon">
          <Icon />
        </div>
        <div className="NameandFee">
          <div>
            <Name />
          </div>
          <div>
            <Fee />
          </div>
        </div>
      </div>
    );
  }
}

class PurchaseView extends React.Component {
  render() {
    return (
      <div>
        <div className="UserInfo">
          <UserInfo />
        </div>
        <div>
          <FoodAndDrinkInfo />
        </div>
      </div>
    );
  }
}

class FoodAndDrinkInfo extends React.Component {
  render() {
    return (
      <div className="FoodAndDrinkInfo">
        <div>
          {"飲料"}
          <DrinkInfo />
        </div>
        <div>
          {"食品"}
          <FoodInfo />
        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.value = "ItemName";
    this.icon = `${process.env.PUBLIC_URL}/image/icon.png`;
  }
  render() {
    return (
      <button className="ItemButton">
        <div>
          <img src={this.icon} alt="item" width={120} height={120} objectFit="contain" />
        </div>
        {this.props.value}
      </button>
    );
  }
}

class DrinkInfo extends React.Component {
  renderDrinkButton(i) {
    return <Item value={i} />;
  }
  render() {
    return (
      <div className="Scroll">
        <div className="DrinkInfo">
          {this.renderDrinkButton("飲み物")}
          {this.renderDrinkButton("飲み物2")}
          {this.renderDrinkButton("飲み物3")}
          {this.renderDrinkButton("飲み物4")}
          {this.renderDrinkButton("飲み物5")}
          {this.renderDrinkButton("飲み物6")}
          {this.renderDrinkButton("飲み物4")}
          {this.renderDrinkButton("飲み物5")}
          {this.renderDrinkButton("飲み物6")}
        </div>
      </div>
    );
  }
}

class FoodInfo extends React.Component {
  renderFoodButton(i) {
    return <Item value={i} />;
  }
  render() {
    return (
      <div className="Scroll">
        <div className="FoodInfo">
          {this.renderFoodButton("食べ物")}
          {this.renderFoodButton("食べ物2")}
          {this.renderFoodButton("食べ物3")}
          {this.renderFoodButton("食べ物4")}
          {this.renderFoodButton("食べ物5")}
          {this.renderFoodButton("食べ物6")}
          {this.renderFoodButton("食べ物4")}
          {this.renderFoodButton("食べ物5")}
          {this.renderFoodButton("食べ物6")}
        </div>
      </div>
    );
  }
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<All />);


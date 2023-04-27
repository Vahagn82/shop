import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Chair Lori",
          img: "chair1.jpg",
          desc: "chair lori",
          category: "chairs",
          price: "29.99",
        },
        {
          id: 2,
          title: "Chair",
          img: "chair2.jpg",
          desc: "chair 10167/dca",
          category: "chairs",
          price: "39.99",
        },
        {
          id: 3,
          title: "Complect",
          img: "complect.jpg",
          desc: "classic",
          category: "tables",
          price: "499.99",
        },
        {
          id: 4,
          title: "Bedroom Metropolitan",
          img: "bed1.jpg",
          desc: "collection metropolitan",
          category: "bedroom",
          price: "499.99",
        },
        {
          id: 5,
          title: "Bedroom Grand",
          img: "bed2.jpg",
          desc: "grand",
          category: "bedroom",
          price: "539.99",
        },
        {
          id: 6,
          title: "Polka",
          img: "guest.jpg",
          desc: "polka",
          category: "guest",
          price: "79.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;

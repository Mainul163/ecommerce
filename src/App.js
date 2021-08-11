import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductList from "./Container/ProductList";
import ProductDetaile from "./Container/ProductDetaile";
import Header from "./Container/Header";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:productId" component={ProductDetaile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

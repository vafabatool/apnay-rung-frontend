import "./styles.css";
import AdminSettings from "./AdminSettings";
// import ViewSellers from "./ViewSellers";
// import CustomerNavBar from "./CustomerNavbar";
import ViewSellers from "./ViewSellers";
import CustomerNavBar from "./CustomerNavbar";
// import SellerNavbar from "./SellerNavbar";
// import Notifications from "./Notifications";
// import QueryForms from "./QueryForms";
// import ViewOrders from "./ViewOrders";
// import ViewAllProducts from "./ViewAllProducts";
import Notifications from "./Notifications";
import QueryForms from "./QueryForms";
import ViewOrders from "./ViewOrders";
import ViewAllProducts from "./ViewAllProducts";
// import Inventory from "./Inventory";
// import ApproveSellers from "./ApproveSellers";
// import Tutorials from "./Tutorials";
import ApproveSellers from "./ApproveSellers";
import Tutorials from "./Tutorials";
// import UpdateProduct from "./UpdateProduct";
// import AddProduct from "./AddProduct";
// import Product from "./Product";
// import ViewCustomers from "./ViewCustomers";
// import ShoppingCart from "./ShoppingCart";
// import Checkout from "./Checkout";
// import CustomerSettings from "./CustomerSettings";
import SignUp from "./SignUp";

export default function App() {
  return (
    <div className="App">
      {/* <AdminSettings /> */}
      <SignUp />
      {/* <CustomerSettings /> */}
      {/* <CustomerSettings /> */}
      {/* <ShoppingCart /> */}
      {/* <Notifications /> */}
      {/* <QueryForms /> */}
      {/* <Inventory /> */}
      {/* <ApproveSellers /> */}
      {/* <Tutorials /> */}
      {/* <ViewOrders />  */}
      {/* <CustomerNavBar /> */}
      {/* <AdminSettings /> */}
      {/* <ViewAllProducts /> */}
      {/* <UpdateProduct /> */}
      {/* <ViewSellers /> */}
      {/* <ViewCustomers /> */}
      {/* <Product /> */}
      {/* <AddProduct /> */}
      {/* <Checkout /> */}
    </div>
  );
}

import OrderConfirmation from "./OrderConfirmation";
import ViewCustomers from "./ViewCustomers";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import Catalog from "./Catalog";
import CustomerSettings from "./CustomerSettings";
import CustomerPanel from "./CustomerPanel";
import SellerPanel from "./SellerPanel";
import AdminPanel from "./AdminPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/AdminSettings" exact component={AdminSettings} />
          <Route path="/CustomerSettings" exact component={CustomerSettings} />
          <Route path="/ApproveSellers" exact component={ApproveSellers} />
          <Route path="/Tutorials" exact component={Tutorials} />
          <Route path="/Notifications" exact component={Notifications} />
          <Route path="/ViewAllProducts" exact component={ViewAllProducts} />
          <Route path="/ViewOrders" exact component={ViewOrders} />
          <Route path="/ViewSellers" exact component={ViewSellers} />
          <Route path="/ViewCustomers" exact component={ViewCustomers} />
          <Route path="/ShoppingCart" exact component={ShoppingCart} />
          <Route path="/Checkout" exact component={Checkout} />
          <Route path="/Catalog" exact component={Catalog} />
          <Route
            path="/OrderConfirmation"
            exact
            component={OrderConfirmation}
          />
          <Route path="/AdminPanel" exact component={AdminPanel} />
          <Route exact path="/SellerPanel" component={SellerPanel} />
          <Route path="/" exact component={CustomerPanel} />
        </div>
      </Switch>
    </Router>
  );
}

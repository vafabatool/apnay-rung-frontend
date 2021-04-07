import "./styles.css";
import AdminSettings from "./AdminSettings";
import ViewSellers from "./ViewSellers";
import CustomerNavBar from "./CustomerNavbar";
// import SellerNavbar from "./SellerNavbar";
import Notifications from "./Notifications";
import QueryForms from "./QueryForms";
import ViewOrders from "./ViewOrders";
import ViewAllProducts from "./ViewAllProducts";
// import Inventory from "./Inventory";
import ApproveSellers from "./ApproveSellers";
import Tutorials from "./Tutorials";
// import UpdateProduct from "./UpdateProduct";
// import AddProduct from "./AddProduct";
// import Product from "./Product";
import ViewCustomers from "./ViewCustomers";
import ShoppingCart from "./ShoppingCart";
// import Checkout from "./Checkout";
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
          {/* <AdminSettings /> */}
          <Route path="/CustomerSettings" exact component={CustomerSettings} />
          {/* <CustomerSettings /> */}
          {/* <CustomerSettings /> */}
          {/* <ShoppingCart /> */}
          {/* <Notifications /> */}
          {/* <QueryForms /> */}
          {/* <Inventory /> */}
          {/* <ApproveSellers /> */}
          <Route path="/ApproveSellers" exact component={ApproveSellers} />
          {/* <Tutorials /> */}
          <Route path="/Tutorials" exact component={Tutorials} />
          <Route path="/Notifications" exact component={Notifications} />
          {/* <ViewOrders />  */}
          {/* <CustomerNavBar /> */}
          {/* <AdminSettings /> */}
          {/* <UpdateProduct /> */}
          <Route path="/ViewAllProducts" exact component={ViewAllProducts} />
          <Route path="/ViewOrders" exact component={ViewOrders} />
          <Route path="/ViewSellers" exact component={ViewSellers} />
          <Route path="/ViewCustomers" exact component={ViewCustomers} />
          {/* <Product /> */}
          {/* <AddProduct /> */}
          {/* <Checkout /> */}
          <Route path="/AdminPanel" exact component={AdminPanel} />
          <Route exact path="/" component={SellerPanel} />
          <Route path="/CustomerPanel" exact component={CustomerPanel} />
        </div>
      </Switch>
    </Router>
  );
}

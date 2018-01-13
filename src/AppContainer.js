import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts, loadProducts, loadVehicles, loadComments} from "./actions";


function mapDispatchToProps(dispatch) {
  return {
    loadContacts: function() {
      let action = loadContacts();
      dispatch(action);
    },
    loadProducts: function() {
      let action = loadProducts();
      dispatch(action);
    },
    loadVehicles: function() {
      let action = loadVehicles();
      dispatch(action);
    },
    loadComments: function() {
      let action = loadComments();
      dispatch(action);
    }
  };
}


export default connect(null,mapDispatchToProps)(App);

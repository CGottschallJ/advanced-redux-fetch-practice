//Action to retrieve all Contacts from API

export function loadContacts() {
  return function(dispatch) {
    dispatch({
      type: "LOAD_CONTACTS"
    });
    fetch("/contacts")
    .then((response) => {
      return response.json();
    }).then((contacts) => {
      return dispatch(contactsLoaded(contacts))
    });
  };
}

//Action to handle the completion of the Contacts AJAX call

export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  }
}

//Action to retrieve all Products from API

export function loadProducts() {
  return function(dispatch) {
    dispatch({
      type: "LOAD_PRODUCTS"
    });
    fetch("/products")
    .then((response) => {
      return response.json();
    }).then((products) => {
      dispatch(productsLoaded(products))
    });
  }
}

//Action to handle the completion of the Products AJAX call


export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}

//Action to retrieve all Vehicles from API

export function loadVehicles() {
  return function(dispatch) {
    dispatch({
      type: "LOAD_VEHICLES"
    });
    fetch("/vehicles")
    .then((response) => {
      return response.json();
    }).then((vehicles) => {
      return dispatch(vehiclesLoaded(vehicles));
    });
  }
}

//Action to handle the completion of the Vehicles AJAX call

export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  }
}

//Action to retrieve all Comments from API

export function loadComments() {
  return function(dispatch) {
    dispatch({
      type: "LOAD_COMMENTS"
    });
    fetch("/comments")
    .then((response) => {
      return response.json();
    }).then((comments) => {
      return dispatch(commentsLoaded(comments));
    });
  }
}

//Action to handle the completion of the Comments AJAX call

export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  }
}

//Action to Create a Product

export function createProduct(product) {
  return function(dispatch) {
    fetch("/products", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
    })
    .then((response) => {
      dispatch(loadProducts());
    });
  };
}

//Action to Create a Contact

export function createContact(contact) {
  return function(dispatch) {
    fetch("/contacts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(contact)
    })
    .then((response) => {
      dispatch(loadContacts());
    });
  };
}

//Action to Create a Vehicles

export function createVehicle(vehicle) {
  return function(dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(vehicle)
    })
    .then((response) => {
      dispatch(loadVehicles);
    });
  };
}

//Action to Create a Comment

export function createComment(comment) {
  return function(dispatch) {
    fetch("/comments", {
      type: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(comment)
    })
    .then((response) => {
      dispatch(loadComments())
    });
  };
}

export const productsAction = () => async (dispatch) => {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  dispatch({ type: "GET_PRODUCTS", payload: data });
};

export const productsActionDetails = (id) => async (dispatch) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );
  dispatch({ type: "GET_DETAİLS", payload: data });
};

export const cardAction = (id) => async (dispatch) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );
  dispatch({ type: "ADD_CARD", payload: data });
};

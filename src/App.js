import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/CartActions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
   // const sendCartData = async () => {
      // dispatch(
      //   uiActions.showNotification({
      //     status: "Pending",
      //     title: "Sending..",
      //     message: "Sending cart data!!",
      //   })
      // );
      // const response = await fetch(
      //   "https://react-35dc8-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      //   {
      //     method: "PUT",
      //     body: JSON.stringify(cart),
      //   }
      // );
      // if (!response.ok) {
      //   throw new Error("Sending cart data failed..!!");
      // }
      // dispatch(
      //   uiActions.showNotification({
      //     status: "success",
      //     title: "Success..!!",
      //     message: "Sent cart data successfully!!",
      //   })
      // );
    // };

    if(isInitial) {
       isInitial = false;
       return;
    }
    if(cart.changed) {
      dispatch(sendCartData(cart)); 
    }
      
    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "error",
    //       title: "Error..",
    //       message: "Sending cart data failed!!",
    //     })
    //   );
    // });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

import MyNav from "../components/MyNav";
import Store from "../components/Store";
import { Provider } from "react-redux";

import store from "../redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <MyNav />
      <Store />
    </Provider>
  );
}

import { createRoot } from "react-dom/client";
import Cart from "./components/cart/cart";
import NewCart from "./components/cart/newCart";
import Counter from "./components/counter/newCounter";
import NewCounter from "./components/counter/newCounter";
import Form from "./components/form/form";
import Password from "./components/form/password";
import Login from "./components/form/login";
import Ternary from "./components/other/ternary";
import Update from "./components/other/update";
import Students from "./components/students/students";
import "./index.css";
import StudentManager from "./components/students/studentmanager";
import EffectCounter from "./components/effects/effectCounter";
import Title from "./components/effects/title";
import Countdown from "./components/effects/countdown";
import Comments from "./components/products/comments";

function App() {
  return (
    <div>
      <h1>1.1</h1>
      <Cart />
      <hr />
      <h1>1.2</h1>
      <NewCart />
      <hr />
      <h1>2.1</h1>
      <Counter />
      <hr />
      <h1>2.2</h1>
      <NewCounter />
      <hr />
      <h1>3.1</h1>
      <Form />
      <hr />
      <h1>3.2</h1>
      <Password />
      <hr />
      <h1>3.3</h1>
      <Login />
      <hr />
      <h1>4.1</h1>
      <Ternary />
      <hr />
      <h1>4.2</h1>
      <Update />
      <hr />
      <h1>5.1</h1>
      <Students />
      <hr />
      <h1>5.2</h1>
      <StudentManager />
      <hr />
      <h1>6.1</h1>
      <EffectCounter />
      <hr />
      <h1>6.2</h1>
      <Title />
      <hr />
      <h1>6.3</h1>
      <Countdown />
      <hr />
      <h1>7.2</h1>
      <Comments />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(App());

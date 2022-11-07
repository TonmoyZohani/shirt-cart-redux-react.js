import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modals";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

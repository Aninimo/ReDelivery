import { CartContextProvider } from "./contexts/CartContext" 
import { Home } from "./pages/Home"

export default function App() {
  return (
    <CartContextProvider>
      <Home/>
    </CartContextProvider>
  )
}

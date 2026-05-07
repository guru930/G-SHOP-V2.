import { Switch, Route } from "wouter";
import { CartProvider } from "./lib/cart-context";
import Home from "./pages/home";
import AdminLogin from "./pages/admin-login";

function App() {
  return (
    <CartProvider>
      <Switch>
        {/* Ye rasta seedha Home page par le jayega */}
        <Route path="/" component={Home} />
        
        {/* Ye rasta Admin login par le jayega */}
        <Route path="/admin-login" component={AdminLogin} />
        
        {/* Agar koi galat link khole toh ye dikhega */}
        <Route>404 | Page Not Found</Route>
      </Switch>
    </CartProvider>
  );
}

export default App;


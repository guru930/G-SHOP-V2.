import { Switch, Route } from "wouter";
import { CartProvider } from "@/lib/cart-context";
import Home from "@/pages/home";
import AdminLogin from "@/pages/admin-login";

function App() {
  return (
    <CartProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route>404 | Page Not Found</Route>
      </Switch>
    </CartProvider>
  );
}
export default App;


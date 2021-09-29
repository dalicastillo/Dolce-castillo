import * as React from "react";

const CartContext= React.createContext("");
export default CartContext;

export const CartProvider =({ children }) =>{
    const [cart, setCart] = React.useState("Usuario");


function saludar(){

console.log(`Bienvenidx ${cart}!`); 
}
 return <CartContext.Provider value={{cart, setCart, saludar}}>{children}</CartContext.Provider>;
 };

 
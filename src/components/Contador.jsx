import * as React from "react";




const InputCount = ({onConfirm, maxQuantity}) =>{

};
const ButtonCount = ({onConfirm, maxQuantity}) => {

};

export default function ItemDetail({item, inputType = 'input'}){
    const Count = inputType === 'button' ?
    ButtonCount : InputCount ;


    function addToCart(quantity) {
        if(item.inStock) {
            console.log(`Agregar al cart el item: ${item.id} 
                          con cantidad: ${quantity}`);
        }
    }

   return (
       <div>
           <label>descripcion</label>
           <Count onConfirm={addToCart} maxQuantity={item.max}></Count>

           </div>
   );

}

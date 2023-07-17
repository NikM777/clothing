import { useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.slice";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartDropdownRef = useRef<HTMLDivElement | null>(null);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(e.target as Node)
      ) {
        dispatch(setIsCartOpen(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartDropdownRef, dispatch]);

  return (
    <CartDropdownContainer ref={cartDropdownRef}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

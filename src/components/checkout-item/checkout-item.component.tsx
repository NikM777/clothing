import { useDispatch } from "react-redux";

import {
  clearCartItem,
  addItemToCart,
  removeCartItem,
} from "../../store/cart/cart.slice";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";
import { CartItemType } from "../../types/store.types";

type CheckoutItemProps = {
  cartItem: CartItemType;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearCartItem(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeCartItem(cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

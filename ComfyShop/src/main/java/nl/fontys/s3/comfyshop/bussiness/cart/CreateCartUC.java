package nl.fontys.s3.comfyshop.bussiness.cart;

import nl.fontys.s3.comfyshop.dto.cart.CartDTO;

public interface CreateCartUC {
    CartDTO createCart(CartDTO request);
}

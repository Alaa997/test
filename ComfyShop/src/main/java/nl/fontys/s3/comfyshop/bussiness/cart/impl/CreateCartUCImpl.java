package nl.fontys.s3.comfyshop.bussiness.cart.impl;

import lombok.AllArgsConstructor;
import nl.fontys.s3.comfyshop.bussiness.cart.CreateCartUC;
import nl.fontys.s3.comfyshop.dto.cart.CartDTO;
import nl.fontys.s3.comfyshop.persistence.CartRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CreateCartUCImpl implements CreateCartUC {
    private final CartRepository cartRepository;
    @Override
    public CartDTO createCart(CartDTO request) {
        return null;
    }
}

package nl.fontys.s3.comfyshop.persistence.entity;

import lombok.*;

import javax.persistence.*;
@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cart_item")
public class CartItemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private CartEntity cart;

    @OneToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;

    private int quantity;
}


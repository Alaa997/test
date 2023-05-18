package nl.fontys.s3.comfyshop.persistence;

import nl.fontys.s3.comfyshop.persistence.entity.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<CartEntity, Long> {
}

package ug.unigo.UniGo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ug.unigo.UniGo.model.UniversityItem;

@Repository
public interface ItemRepository extends CrudRepository<UniversityItem, String> {
}

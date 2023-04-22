package ug.unigo.UniGo.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ug.unigo.UniGo.model.UniversityItem;
import ug.unigo.UniGo.repository.ItemRepository;

import java.util.Optional;

@Service
public class ItemService {
    private final ItemRepository universityItemRepository;


    public ItemService(ItemRepository universityItemRepository) {
        this.universityItemRepository = universityItemRepository;
    }

    public ResponseEntity<UniversityItem> getItemById(String id) {
        Optional<UniversityItem> item = universityItemRepository.findById(id);
        return item.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    public Iterable<UniversityItem> findAllItems() {
        return universityItemRepository.findAll();
    }

    public UniversityItem createItem(UniversityItem item) {
        return universityItemRepository.save(item);
    }

    public UniversityItem editItem(String id, UniversityItem editedItem) {
        UniversityItem universityItem = universityItemRepository.findById(id).orElse(null);

        if (universityItem == null) {
            return null;
        }

        universityItem.setUniversity(editedItem.getUniversity());
        universityItem.setCity(editedItem.getCity());
        universityItem.setFaculty(editedItem.getFaculty());
        universityItem.setFieldOfStudy(editedItem.getFieldOfStudy());
        universityItem.setTitle(editedItem.getTitle());
        universityItem.setWebsite(editedItem.getWebsite());
        universityItem.setInterests(editedItem.getInterests());
        universityItem.setLogoURL(editedItem.getLogoURL());

        return universityItemRepository.save(universityItem);
    }

    public void deleteItemById(String id) {
        universityItemRepository.deleteById(id);
    }
}

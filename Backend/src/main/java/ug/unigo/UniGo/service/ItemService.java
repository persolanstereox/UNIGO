package ug.unigo.UniGo.service;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ug.unigo.UniGo.model.SearchItem;
import ug.unigo.UniGo.model.UniversityItem;
import ug.unigo.UniGo.repository.ItemRepository;

import java.util.Optional;

@Service
public class ItemService {
    private final ItemRepository universityItemRepository;
    private final MongoTemplate mongoTemplate;
    private Query dbQuery;


    public ItemService(ItemRepository universityItemRepository, MongoTemplate mongoTemplate) {
        this.universityItemRepository = universityItemRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public ResponseEntity<UniversityItem> getItemById(String id) {
        Optional<UniversityItem> item = universityItemRepository.findById(id);
        return item
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound()
                        .build());
    }

    public Iterable<UniversityItem> filterItems(SearchItem searchItem) {
        dbQuery = new Query();
        if(searchItem.getCities() != null && !searchItem.getCities().isEmpty()) {
            dbQuery.addCriteria(Criteria.where("city").in(searchItem.getCities()));
        }
        if(searchItem.getTitle() != null) {
            dbQuery.addCriteria(Criteria.where("title").is(searchItem.getTitle()));
        }
        if(searchItem.getInterests() != null && !searchItem.getInterests().isEmpty()) {
            dbQuery.addCriteria(Criteria.where("interests").in(searchItem.getInterests()));
        }
        return mongoTemplate.find(dbQuery, UniversityItem.class);
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

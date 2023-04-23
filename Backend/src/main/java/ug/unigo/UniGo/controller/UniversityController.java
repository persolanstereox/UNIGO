package ug.unigo.UniGo.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ug.unigo.UniGo.model.SearchItem;
import ug.unigo.UniGo.model.UniversityItem;
import ug.unigo.UniGo.service.ItemService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UniversityController {

    private final ItemService universityService;
    private final MongoTemplate mongoTemplate;

    public UniversityController(ItemService universityService, MongoTemplate mongoTemplate) {
        this.universityService = universityService;
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping("/universities")
    public Iterable<UniversityItem> getAllItems() {
        return universityService.findAllItems();
    }

    @GetMapping("/university/{id}")
    public ResponseEntity<UniversityItem> getItemById(@PathVariable String id) {
        return universityService.getItemById(id);
    }

    @GetMapping("/universities/filter")
    public Iterable<UniversityItem> filterUniversities(@RequestBody SearchItem searchItem) {
        Query query = new Query();
        if(searchItem.getCities() != null && !searchItem.getCities().isEmpty()) {
            query.addCriteria(Criteria.where("city").in(searchItem.getCities()));
        }
        if(searchItem.getTitle() != null) {
            query.addCriteria(Criteria.where("title").is(searchItem.getTitle()));
        }
        if(searchItem.getInterests() != null && !searchItem.getInterests().isEmpty()) {
            query.addCriteria(Criteria.where("interests").in(searchItem.getInterests()));
        }
        return mongoTemplate.find(query, UniversityItem.class);
    }

    @PostMapping("/universities")
    public ResponseEntity<UniversityItem> createUniversityItem(@RequestBody UniversityItem universityItem) {
        UniversityItem returnUniversityItem = universityService.createItem(universityItem);
        return new ResponseEntity<>(returnUniversityItem, HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteUniversity/{id}")
    public ResponseEntity<UniversityItem> deleteUniversityItem(@RequestBody UniversityItem universityItem) {
        universityService.deleteItemById(universityItem.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/editUniversity")
    public ResponseEntity<UniversityItem> editUniversityItem(@RequestBody UniversityItem universityItem) {
        UniversityItem returnUniversityItem = universityService.editItem(universityItem.getId(), universityItem);
        return new ResponseEntity<>(returnUniversityItem, HttpStatus.OK);
    }
}

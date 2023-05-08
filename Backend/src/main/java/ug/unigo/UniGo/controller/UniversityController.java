package ug.unigo.UniGo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ug.unigo.UniGo.model.SearchItem;
import ug.unigo.UniGo.model.UniversityItem;
import ug.unigo.UniGo.model.UniversityItemDto;
import ug.unigo.UniGo.service.ItemService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UniversityController {

    private final ItemService universityService;

    public UniversityController(ItemService universityService) {
        this.universityService = universityService;
    }

    @GetMapping("/universities")
    public List<UniversityItem> getAllUniversityItems() {
        return (List<UniversityItem>) universityService.findAllItems();
    }

    @GetMapping("/university/{id}")
    public ResponseEntity<UniversityItem> getUniversityItemById(@PathVariable String id) {
        UniversityItem universityItem = universityService.getItemById(id).getBody();
        if (universityItem == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(universityItem);
    }

    @PostMapping("/universities/filter")
    public Iterable<UniversityItemDto> filterUniversities(@RequestBody SearchItem searchItem) {
        return universityService.filterItems(searchItem);
    }

    @PostMapping("/universities")
    public ResponseEntity<UniversityItem> createUniversityItem(@RequestBody UniversityItem universityItem) {
        UniversityItem createdUniversityItem = universityService.createItem(universityItem);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUniversityItem);
    }

    @DeleteMapping("/university/{id}")
    public ResponseEntity<Void> deleteUniversityItem(@PathVariable String id) {
        universityService.deleteItemById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/university/{id}")
    public ResponseEntity<UniversityItem> editUniversityItem(@PathVariable String id, @RequestBody UniversityItem universityItem) {
        UniversityItem updatedUniversityItem = universityService.editItem(id, universityItem);
        if (updatedUniversityItem == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(updatedUniversityItem);
    }
}

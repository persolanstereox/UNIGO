package ug.unigo.UniGo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ug.unigo.UniGo.model.UniversityItem;
import ug.unigo.UniGo.service.ItemService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UniversityController {

    private final ItemService universityService;

    public UniversityController(ItemService universityService) {
        this.universityService=universityService;
    }

    @GetMapping("/universities")
    public Iterable<UniversityItem> getAllItems() {
        return universityService.findAllItems();
    }

    @PostMapping("/universities")
    public ResponseEntity<UniversityItem> createUniversityItem(@RequestBody UniversityItem universityItem) {
        UniversityItem returnUniversityItem = universityService.createItem(universityItem);
        return new ResponseEntity<>(returnUniversityItem, HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteUniversity")
    public  ResponseEntity<UniversityItem> deleteUniversityItem(@RequestBody UniversityItem universityItem) {
        universityService.deleteItemById(universityItem.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/editUniversity")
    public ResponseEntity<UniversityItem> editUniversityItem(@RequestBody UniversityItem universityItem) {
        UniversityItem returnUniversityItem = universityService.editItem(universityItem.getId(), universityItem);
        return new ResponseEntity<>(returnUniversityItem, HttpStatus.OK);
    }
}

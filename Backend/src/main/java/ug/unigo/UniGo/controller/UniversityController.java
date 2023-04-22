package ug.unigo.UniGo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ug.unigo.UniGo.model.UniversityItem;
import ug.unigo.UniGo.service.ItemService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UniversityController {

    private final ItemService universityService;

    public UniversityController(ItemService universityService) {
        this.universityService=universityService;
    }

    @GetMapping("/items")
    public List<UniversityItem> getAllItems() {
        return universityService.findAllItems();
    }

    @PostMapping("/items")
    public ResponseEntity<UniversityItem> createUniversityItem(@RequestBody UniversityItem universityItem) {
        UniversityItem returnUniversityItem = universityService.createItem(universityItem);
        return new ResponseEntity<UniversityItem>(returnUniversityItem, HttpStatus.CREATED);
    }
}

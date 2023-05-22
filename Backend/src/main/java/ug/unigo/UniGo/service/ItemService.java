package ug.unigo.UniGo.service;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import ug.unigo.UniGo.model.SearchItem;
import ug.unigo.UniGo.model.SearchData;
import ug.unigo.UniGo.model.UniversityItem;
import ug.unigo.UniGo.model.UniversityItemDto;
import ug.unigo.UniGo.repository.ItemRepository;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ItemService {
    private final ItemRepository universityItemRepository;
    private final MongoTemplate mongoTemplate;


    public ItemService(ItemRepository universityItemRepository, MongoTemplate mongoTemplate) {
        this.universityItemRepository = universityItemRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public ResponseEntity<UniversityItem> getItemById(String id) {
        Optional<UniversityItem> item = universityItemRepository.findById(id);
        return item
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity
                        .notFound()
                        .build()
                );
    }

    public Iterable<UniversityItemDto> filterItems(SearchData searchData) {
        Query dbQuery = new Query();

        Optional.ofNullable(searchData.getCities())
                .filter(cities -> !cities.isEmpty())
                .ifPresent(cities -> dbQuery.addCriteria(Criteria.where("city").in(cities)));

        Optional.ofNullable(searchData.getTitle())
                .ifPresent(title -> dbQuery.addCriteria(Criteria.where("title").is(title)));

        return mongoTemplate.find(dbQuery, UniversityItem.class)
                .stream()
                .map((UniversityItem university) -> mapToUniversityItemDto(university, searchData))
                .filter(university -> university.matchingInterests() > 0)
                .sorted(Comparator.comparingInt(UniversityItemDto::matchingInterests).reversed())
                .collect(Collectors.toList());
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

    public List<SearchItem> getAllCities() {
        List<SearchItem> cities = new ArrayList<>();

        Iterable<UniversityItem> universityItems = universityItemRepository.findAll();
        Set<String> cityNames = new HashSet<>();
        for(UniversityItem university : universityItems) {
            cityNames.add(university.getCity());
        }

        int id = 1;
        for (String cityName : cityNames) {
            SearchItem searchItem = new SearchItem();
            searchItem.setId(id++);
            searchItem.setName(cityName);
            searchItem.setType("city");
            cities.add(searchItem);
        }

        return cities;
    }

    public List<SearchItem> getAllInterests() {
        List<SearchItem> interests = new ArrayList<>();

        Iterable<UniversityItem> universityItems = universityItemRepository.findAll();
        Set<String> interestsNames = new HashSet<>();
        for(UniversityItem university : universityItems) {
            for(String interest : university.getInterests()) {
                interestsNames.add(interest.toLowerCase());
            }
        }

        int id = 1;
        for (String interestName : interestsNames) {
            SearchItem interest = new SearchItem();
            interest.setId(id++);
            interest.setName(interestName);
            interest.setType("interest");
            interests.add(interest);
        }

        return interests;
    }

    private UniversityItemDto mapToUniversityItemDto(UniversityItem university, SearchData searchData) {
        int matchingInterests = getMatchingInterestCount(university.getInterests(), searchData.getInterests());

        return new UniversityItemDto(
                university.getId(),
                university.getUniversity(),
                university.getCity(),
                university.getFaculty(),
                university.getFieldOfStudy(),
                university.getTitle(),
                university.getWebsite(),
                university.getLogoURL(),
                matchingInterests
        );
    }

    private int getMatchingInterestCount(List<String> interests, List<String> searchInterests) {
        if (interests == null || searchInterests == null) {
            return 0;
        }

        int count = 0;

        for(String interest : searchInterests) {
            if (interests.contains(interest)) {
                count++;
            }
        }

        return count;
    }
}

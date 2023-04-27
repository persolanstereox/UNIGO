package ug.unigo.UniGo;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import ug.unigo.UniGo.model.UniversityItem;
import ug.unigo.UniGo.repository.ItemRepository;

import java.util.Arrays;

@DataMongoTest
public class UniversityItemRepositoryTest {

    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    private ItemRepository universityItemRepository;

    @Test
    void shouldConnectToDatabase() {
        String universityId = "6444e8c1e252512e82b0f90d";

        UniversityItem item = mongoTemplate.findById(universityId, UniversityItem.class);

        assertNotNull(item);
        assertEquals("Uniwersytet Gdański", item.getUniversity());
        assertEquals("Sopot", item.getCity());
        assertEquals("Management", item.getFaculty());
        assertEquals("Computer Science and Econometrics", item.getFieldOfStudy());
        assertEquals("Bachelor", item.getTitle());
        assertEquals("https://wzr.ug.edu.pl/studia/index.php?str=449&spec=50", item.getWebsite());
        assertEquals(Arrays.asList("Computer Science", "Economics", "Entrepreneurship", "Programming", "Databases"), item.getInterests());
        assertEquals("https://i.ytimg.com/vi/pEzhR56rYqY/maxresdefault.jpg", item.getLogoURL());
    }

    @Test
    public void testFindUniversityItemById() {
        String expectedUniversity = "Uniwersytet Gdański";
        String id = "6444e8c1e252512e82b0f90d";

        UniversityItem actualItem = mongoTemplate.findById(id, UniversityItem.class);

        assertNotNull(actualItem);
        assertEquals(expectedUniversity, actualItem.getUniversity());
    }


    @Test
    void testAddAndDeleteUniversityItem() {
        UniversityItem item = new UniversityItem();
        item.setUniversity("Uniwersytet Gdański");
        item.setCity("Gdańsk");
        item.setFaculty("Management");
        item.setFieldOfStudy("Computer Science and Econometrics");
        item.setTitle("Bachelor");
        item.setWebsite("https://wzr.ug.edu.pl/studia/index.php?str=449&spec=50");
        item.setInterests(Arrays.asList("Computer Science", "Economics", "Entrepreneurship", "Programming", "Databases"));
        item.setLogoURL("https://i.ytimg.com/vi/pEzhR56rYqY/maxresdefault.jpg");

        universityItemRepository.save(item);
        System.out.println(item.getId());
        long countBeforeDelete = universityItemRepository.count();
        System.out.println(countBeforeDelete);
        universityItemRepository.delete(item);
        long countAfterDelete = universityItemRepository.count();
        System.out.println(countAfterDelete);

        assertEquals(1, countBeforeDelete - countAfterDelete);
    }


}

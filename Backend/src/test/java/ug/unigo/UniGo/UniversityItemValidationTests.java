package ug.unigo.UniGo;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import org.junit.jupiter.api.Test;
import ug.unigo.UniGo.model.UniversityItem;

import java.util.Arrays;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class UniversityItemValidationTests {

    private final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

    @Test
    void shouldPassValidationWhenAllFieldsArePopulated() {

        UniversityItem item = new UniversityItem();
        item.setUniversity("Example University");
        item.setCity("Example City");
        item.setFaculty("Example Faculty");
        item.setFieldOfStudy("Example Field of Study");
        item.setTitle("Example Title");
        item.setWebsite("https://example.com");
        item.setInterests(Arrays.asList("Interest 1", "Interest 2"));
        item.setLogoURL("https://example.com/logo.jpg");

        Set<ConstraintViolation<UniversityItem>> violations = validator.validate(item);

        assertTrue(violations.isEmpty());
    }

    @Test
    void shouldFailValidationWhenFieldsAreEmpty() {
        UniversityItem item = new UniversityItem();

        Set<ConstraintViolation<UniversityItem>> violations = validator.validate(item);
        assertEquals(7, violations.size());
    }

    @Test
    void shouldFailValidationWhenLogoURLIsInvalid() {

        UniversityItem item = new UniversityItem();
        item.setUniversity("Example University");
        item.setCity("Example City");
        item.setFaculty("Example Faculty");
        item.setFieldOfStudy("Example Field of Study");
        item.setTitle("Example Title");
        item.setWebsite("https://example.com");
        item.setInterests(Arrays.asList("Interest 1", "Interest 2"));
        item.setLogoURL("not-a-url");

        Set<ConstraintViolation<UniversityItem>> violations = validator.validate(item);

        assertEquals("Logo URL is not valid", violations.iterator().next().getMessage());
    }
}

package ug.unigo.UniGo.model;

public record UniversityItemDto(String id,
        String university,
        String city,
        String faculty,
        String fieldOfStudy,
        String title,
        String website,
        String logoURL,
        int matchingInterests) {

}

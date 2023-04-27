package ug.unigo.UniGo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class UniversityItemDto {
    private String university;
    private String city;
    private String faculty;
    private String fieldOfStudy;
    private String title;
    private String website;
    private List<String> interests;
    private String logoURL;
    private int matchingInterests;
}

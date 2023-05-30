package ug.unigo.UniGo.model;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;

import java.util.List;

@Data
public class SearchData {
    @NotEmpty(message = "Cities are required! Provide at least 1 city")
    private List<String> cities;
    private String title;
    @NotEmpty(message = "Interests are required! Provide at least 1 interest")
    private List<String> interests;
}

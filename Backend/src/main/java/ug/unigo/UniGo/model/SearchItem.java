package ug.unigo.UniGo.model;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SearchItem {
    @NotEmpty(message = "Cities are required! Provide at least 1 city")
    private List<String> cities;
    private String title;
    @NotEmpty(message = "Interests are required! Provide at least 1 interest")
    private List<String> interests;
}

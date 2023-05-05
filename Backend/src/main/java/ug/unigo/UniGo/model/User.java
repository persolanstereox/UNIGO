package ug.unigo.UniGo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Data
@AllArgsConstructor
@Document(collection = "users")
public class User {
    @MongoId
    private String id;
    private String username;
    @JsonIgnore
    private String password;
    private List<String> roles;
}

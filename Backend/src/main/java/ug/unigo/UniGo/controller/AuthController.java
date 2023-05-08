package ug.unigo.UniGo.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ug.unigo.UniGo.model.User;
import ug.unigo.UniGo.model.UserLoginDto;
import ug.unigo.UniGo.model.UserRegistrationDto;
import ug.unigo.UniGo.service.AuthService;
import ug.unigo.UniGo.service.UserService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;
    private final UserService userService;

    public AuthController(AuthService authService, UserService userService) {
        this.authService = authService;
        this.userService = userService;
    }

    @PostMapping("login")
    public ResponseEntity<Map<String, String>> login(@RequestBody UserLoginDto request) {
        Map<String, String> tokens = authService.login(request);
        return ResponseEntity.ok().body(tokens);
    }

    @PostMapping("refresh")
    public ResponseEntity<Map<String, String>> refresh(HttpServletRequest request) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
       if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
           String refreshToken = authorizationHeader.substring("Bearer ".length());
           Map<String, String> tokens = authService.refreshToken(refreshToken);
           if (tokens != null) {
               return ResponseEntity.ok().body(tokens);
           }
       }

        return ResponseEntity.badRequest().body(null);
    }

    @PostMapping("register")
    public User register(@RequestBody UserRegistrationDto request) {
        return userService.create(request);
    }

}

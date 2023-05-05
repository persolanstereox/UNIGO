package ug.unigo.UniGo.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import ug.unigo.UniGo.config.JwtTokenUtil;
import ug.unigo.UniGo.model.User;
import ug.unigo.UniGo.model.UserLoginDto;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtTokenUtil jwtTokenUtil;

    public AuthService(AuthenticationManager authenticationManager, UserService userService, JwtTokenUtil jwtTokenUtil) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    public Map<String, String> login(UserLoginDto request) {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(request.username(), request.password());
        Authentication authentication = authenticationManager.authenticate(token);

        org.springframework.security.core.userdetails.User userDetails = (org.springframework.security.core.userdetails.User) authentication.getPrincipal();
        User user = userService.getByUsername(userDetails.getUsername());

        String accessToken = jwtTokenUtil.generateAccessToken(user);
        String refreshToken = jwtTokenUtil.generateRefreshToken(user);

        Map<String, String> tokens = new HashMap<>();
        tokens.put("access_token", accessToken);
        tokens.put("refresh_token", refreshToken);

        return tokens;
    }

    public Map<String, String> refreshToken(String refreshToken) {
        if (!jwtTokenUtil.validate(refreshToken)) {
            return null;
        }

        org.springframework.security.core.userdetails.User userDetails = (org.springframework.security.core.userdetails.User) userService.loadUserByUsername(jwtTokenUtil.getUserName(refreshToken));
        User user = userService.getByUsername(userDetails.getUsername());

        String accessToken = jwtTokenUtil.generateAccessToken(user);

        Map<String, String> tokens = new HashMap<>();
        tokens.put("access_token", accessToken);

        return tokens;
    }
}

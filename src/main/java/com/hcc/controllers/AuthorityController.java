package com.hcc.controllers;

import com.hcc.entities.User;
import com.hcc.filters.JwtFilter;
import com.hcc.services.UserDetailServiceImpl;
import com.hcc.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthorityController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailServiceImpl userDetailServiceImpl;

    // Assuming you have a class to handle JWT creation
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        SecurityContextHolder.getContext().setAuthentication(authentication); //saves output

        UserDetails userDetails = userDetailServiceImpl.loadUserByUsername(username);
        String jwtToken = jwtUtil.generateToken((User) userDetails);

        return ResponseEntity.status(HttpStatus.OK).body(jwtToken);
    }

    @PostMapping("/validate")
    public ResponseEntity<String> validateToken(@RequestParam String token) {
        String username = jwtUtil.getUsernameFromToken(token);
        UserDetails userDetails = userDetailServiceImpl.loadUserByUsername(username);


        if (jwtUtil.validateToken(token, userDetails)) {
            return ResponseEntity.status(HttpStatus.OK).body("Token " + token + "is valid for user: " + username);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token " + token + "is invalid for user: " + username);
        }
    }
}

package com.sprintboot.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.sprintboot.springboot.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

import com.sprintboot.springboot.entity.User;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000") // Allow requests from this origin
    @PostMapping("/login")
    public LoginResponse login(@RequestBody User user, HttpSession session) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            session.setAttribute("loggedInUser", existingUser); // Store user in session
            return new LoginResponse("Login successful", existingUser);
        } else {
            return new LoginResponse("Invalid username or password", null);
        }
    }

    @PostMapping("/logout")

    public String logout(HttpSession session) {
        session.removeAttribute("loggedInUser");
        session.invalidate();
        return "Logout successful";
    }

    // DTO for Login Response
    private static class LoginResponse {
        private String message;
        private User user;

        public LoginResponse(String message, User user) {
            this.message = message;
            this.user = user;
        }

        public String getMessage() {
            return message;
        }

        public User getUser() {
            return user;
        }
    }
}

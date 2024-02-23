package com.example.budgetmanagementsystem.service;

import com.example.budgetmanagementsystem.model.User;

import jakarta.transaction.Transactional;

import com.example.budgetmanagementsystem.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserDao udao;
    
    public boolean validateCredentials(String username, String password) {
        return udao.validateUser(username, password);
    }

    public List<User> getAllUsers() {
        return udao.findAll();
    }

    public User getUserById(int id) {
        return udao.findById(id);
    }

    public User addUser(@NonNull User user) {
        return udao.save(user);
    }

    public User updateUser(@NonNull User user) {
        return udao.save(user);
    }

    public void deleteUser(int id) {
    	udao.deleteById(id);
    }
}
package com.example.budgetmanagementsystem.service;

import com.example.budgetmanagementsystem.model.User;

import jakarta.transaction.Transactional;

import com.example.budgetmanagementsystem.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserDao udao;

    public List<User> getAllUsers() {
        return udao.findAll();
    }

    public User getUserById(Long id) {
        return udao.findById(id).orElse(null);
    }

    public User addUser(User user) {
        return udao.save(user);
    }

    public User updateUser(User user) {
        return udao.save(user);
    }

    public void deleteUser(Long id) {
    	udao.deleteById(id);
    }
}
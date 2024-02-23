package com.example.budgetmanagementsystem.dao;

import java.util.List;

import com.example.budgetmanagementsystem.model.User;

public interface UserDao {

    User findById(int id);

    List<User> findAll();

    User save(User user);

    void deleteById(int id);

    boolean validateUser(String username, String password);
}
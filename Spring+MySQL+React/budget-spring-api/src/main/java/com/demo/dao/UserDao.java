package com.demo.dao;

import java.util.List;

import com.demo.model.User;

public interface UserDao {

    User findById(int id);

    List<User> findAll();

    User save(User user);

    void deleteById(int id);

    User validateUser(String username, String password);

	User update(User user);
}
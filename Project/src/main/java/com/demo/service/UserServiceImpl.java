package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.UserDao;
import com.demo.model.User;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserDao userDao;

    public User userValidation(String username, String password) {
        return userDao.userValidation(username, password);
    }
    
    public List<User> getAllUsers() {
        return userDao.getAllUsers();
    }

    public User getUserById(Long id) {
        return userDao.getUserById(id);
    }

    public User createUser(User user) {
        userDao.createUser(user);
        return user;
    }

    public User updateUser(Long id, User updatedUser) {
        User user = userDao.getUserById(id);
        if (user != null) {
            user.setName(updatedUser.getName());
            user.setUsername(updatedUser.getUsername());
            user.setPassword(updatedUser.getPassword());
            user.setAddress(updatedUser.getAddress());
            user.setEmail(updatedUser.getEmail());
            userDao.updateUser(user);
        }
        return user;
    }

    public void deleteUser(Long id) {
        userDao.deleteUser(id);
    }

}
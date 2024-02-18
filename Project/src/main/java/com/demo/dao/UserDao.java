package com.demo.dao;

import java.util.List;

import com.demo.model.User;

public interface UserDao {
	
	User userValidation(String username, String password);
	
    List<User> getAllUsers();
    
    User getUserById(Long id);
    
    void createUser(User user);
    
    void updateUser(User user);
    
    void deleteUser(Long id);

}
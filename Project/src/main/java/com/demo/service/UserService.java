package com.demo.service;

import java.util.List;

import com.demo.model.User;

public interface UserService {
	
	User userValidation(String username, String password);
	
	public List<User> getAllUsers();

    public User getUserById(Long id);
    
    public User createUser(User user);
    
    public User updateUser(Long id, User updatedUser);
    
    public void deleteUser(Long id);

}
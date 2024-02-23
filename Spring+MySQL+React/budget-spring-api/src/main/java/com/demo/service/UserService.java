package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.UserDao;
import com.demo.model.User;
@Service
public class UserService {
	@Autowired
    private UserDao udao;

    public UserService(UserDao udao) {
        this.udao = udao;
    }

    public User validateCredentials(String username, String password) {
        return udao.validateUser(username, password);
    }

    public List<User> getAllUsers() {
        return udao.findAll();
    }

    public User getUserById(int id) {
        return udao.findById(id);
    }

    public User addUser(User user) {
        return udao.save(user);
    }

    public User updateUser(User user) {
        return udao.update(user);
    }

    public void deleteUser(int id) {
        udao.deleteById(id);
    }
}
package com.example.budgetmanagementsystem.dao;

import com.example.budgetmanagementsystem.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Long> {
	
	@Query("SELECT u FROM User u WHERE u.username = :username AND u.password = :password")
    User findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

    default User validateUser(String username, String password) {
        User user = findByUsernameAndPassword(username, password);
        return user;
    }
}
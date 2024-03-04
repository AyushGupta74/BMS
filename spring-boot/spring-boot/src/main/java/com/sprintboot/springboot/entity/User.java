package com.sprintboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "admin_login")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int admin_login_id;

    private String username;
    private String password;

    // Getters and setters
    public int getId() {
        return admin_login_id;
    }

    public void setId(int admin_login_id) {
        this.admin_login_id = admin_login_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

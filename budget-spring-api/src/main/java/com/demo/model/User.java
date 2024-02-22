package com.demo.model;

import java.util.HashSet;
import java.util.Set;

public class User {
    private int id;
    private String name;
    private String username;
    private String password;
    private String email;
    private String address;
    private int role;
    private Set<Category> categories;
    
    
    public User(int id, String name, String username, String password, String email,String address, int role,
			Set<Category> categories) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.password = password;
		this.email = email;
		this.address=address;
		this.role = role;
		this.categories = categories;
	}

	public User() {
        this.categories = new HashSet<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }
}
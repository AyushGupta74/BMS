package com.demo.model;

import java.util.HashSet;
import java.util.Set;

public class Category {

    private int id;
    private String name;
    private Set<Expense> expenses = new HashSet<>();
    private Set<User> users = new HashSet<>();

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
		return id;
	}
    
    public void setName(String name) {
    	this.name = name;
    }

    public String getName() {
    	return name;
    }

	public Set<Expense> getExpenses() {
        return expenses;
    }

    public void setExpenses(Set<Expense> expenses) {
        this.expenses = expenses;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public double getTotalPrice() {
        return expenses.stream()
                .mapToDouble(Expense::getAmount)
                .sum();
    }

}
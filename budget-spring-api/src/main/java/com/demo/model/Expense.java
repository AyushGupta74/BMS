package com.demo.model;

public class Expense {

    private int id;
    private String name;
    private double amount;
    private Category category;

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

    public double getAmount() {
    	return amount;
    }
    public void setAmount(double amount) {
    	this.amount = amount;
    }
    
    public Category getCategory() {
        return category;
    }
	public void setCategory(Category category) {
        this.category = category;
    }
}
package com.sprintboot.springboot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "monthly_salary")
public class Salery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int monthly_salary_id;

    @Column(name = "salaryYear")
    private int salaryYear;

    @Column(name = "salaryMonth")
    private int salaryMonth;

    @Column(name = "amount")
    private double amount;

    // Default constructor
    public Salery() {
    }

    // Parameterized constructor
    public Salery(int monthly_salary_id, int salaryYear, int salaryMonth, double amount) {
        this.monthly_salary_id = monthly_salary_id;
        this.salaryYear = salaryYear;
        this.salaryMonth = salaryMonth;
        this.amount = amount;
    }

    // Getters and setters
    public int getMonthly_salary_id() {
        return monthly_salary_id;
    }

    public void setMonthly_salary_id(int monthly_salary_id) {
        this.monthly_salary_id = monthly_salary_id;
    }

    public int getSalaryYear() {
        return salaryYear;
    }

    public void setSalaryYear(int salaryYear) {
        this.salaryYear = salaryYear;
    }

    public int getSalaryMonth() {
        return salaryMonth;
    }

    public void setSalaryMonth(int salaryMonth) {
        this.salaryMonth = salaryMonth;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    // toString method
}

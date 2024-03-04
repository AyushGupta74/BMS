package com.sprintboot.springboot.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "expenditure")
public class Expenditure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int expenditure_id;

    @Column(name = "expenditure_date")
    private Date expenditure_date;

    @Column(name = "expenditure_type")
    private String expenditure_type;

    @Column(name = "expenditure_amount")
    private int expenditure_amount;

    public int getExpenditure_id() {
        return expenditure_id;
    }

    public Expenditure() {

    }

    // Parameterized constructor
    public Expenditure(Date expenditure_date, String expenditure_type, int expenditure_amount) {
        this.expenditure_date = expenditure_date;
        this.expenditure_type = expenditure_type;
        this.expenditure_amount = expenditure_amount;
    }

    public void setExpenditure_id(int expenditure_id) {
        this.expenditure_id = expenditure_id;
    }

    public Date getExpenditure_date() {
        return expenditure_date;
    }

    public void setExpenditure_date(Date expenditure_date) {
        this.expenditure_date = expenditure_date;
    }

    public String getExpenditure_type() {
        return expenditure_type;
    }

    public void setExpenditure_type(String expenditure_type) {
        this.expenditure_type = expenditure_type;
    }

    public int getExpenditure_amount() {
        return expenditure_amount;
    }

    public void setExpenditure_amount(int expenditure_amount) {
        this.expenditure_amount = expenditure_amount;
    }

    @Override
    public String toString() {
        return "Expenditure{" +
                "expenditure_id=" + expenditure_id +
                ", expenditure_date=" + expenditure_date +
                ", expenditure_type='" + expenditure_type + '\'' +
                ", expenditure_amount=" + expenditure_amount +
                '}';
    }

}

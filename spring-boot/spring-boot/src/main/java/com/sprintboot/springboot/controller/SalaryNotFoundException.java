package com.sprintboot.springboot.controller;

public class SalaryNotFoundException extends RuntimeException {

    public SalaryNotFoundException(String message) {
        super(message);
    }
}

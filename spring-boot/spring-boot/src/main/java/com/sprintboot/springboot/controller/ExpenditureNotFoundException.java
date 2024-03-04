package com.sprintboot.springboot.controller;

public class ExpenditureNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public ExpenditureNotFoundException(String message) {
        super(message);
    }

    public ExpenditureNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}

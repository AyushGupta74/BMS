package com.sprintboot.springboot.controller;

import com.sprintboot.springboot.entity.Expenditure;
import com.sprintboot.springboot.repository.ExpenditureRepository;

import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ExpenditureController {

    @Autowired
    ExpenditureRepository repo;

    @GetMapping("/expenditure")
    public List<Expenditure> getExpenditureByMonthAndYear(
            @RequestParam(required = false) Integer month,
            @RequestParam(required = false) Integer year) {

        if (month != null && year != null) {
            List<Expenditure> expenditures = repo.findByMonthAndYear(month, year);
            if (expenditures.isEmpty()) {
                return Collections.emptyList();
            }
            return expenditures;
        } else {
            return repo.findAll();
        }
    }

    @GetMapping("/expenditure/{id}")
    public Expenditure getExpenditure(@PathVariable int id) {
        return repo.findById(id)
                .orElseThrow(() -> new ExpenditureNotFoundException("Expenditure with id " + id + " not found"));
    }

    @PostMapping("/expenditure/add")
    public void createExpenditure(@RequestBody Expenditure expenditure) {
        repo.save(expenditure);
    }

    // Define a logger for the class
    private static final Logger logger = LoggerFactory.getLogger(ExpenditureController.class);

    @PutMapping("/expenditure/{id}")
    public void updateExpenditure(@PathVariable int id, @RequestBody Expenditure updatedExpenditure) {
        Expenditure expenditure = repo.findById(id)
                .orElseThrow(() -> new ExpenditureNotFoundException("Expenditure with id " + id + " not found"));

        if (updatedExpenditure != null) {
            expenditure.setExpenditure_date(updatedExpenditure.getExpenditure_date());
            expenditure.setExpenditure_type(updatedExpenditure.getExpenditure_type());
            expenditure.setExpenditure_amount(updatedExpenditure.getExpenditure_amount());
        }

        repo.save(expenditure);
    }

    @DeleteMapping("/expenditure/{id}")
    public void deleteExpenditure(@PathVariable int id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new ExpenditureNotFoundException("Expenditure with id " + id + " not found");
        }
    }
}

package com.sprintboot.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sprintboot.springboot.entity.Salery;
import com.sprintboot.springboot.repository.SaleryRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SaleryController {

    @Autowired
    private final SaleryRepository repo;

    public SaleryController(SaleryRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/salery")
    public List<Salery> getAllSalery() {
        List<Salery> salaries = repo.findAll();
        return salaries;
    }

    @GetMapping("/salery/{id}")
    public Salery getSalery(@PathVariable int id) {
        Salery salery = repo.findById(id).orElse(null);
        if (salery == null) {
            throw new SalaryNotFoundException("Invalid Payload");
        }
        return salery;
    }

    @PostMapping("/salery/add")
    public void createSalery(@RequestBody Salery salery) {
        repo.save(salery);
    }

    @DeleteMapping("/salery/{id}")
    public void deleteSalery(@PathVariable int id) {
        repo.deleteById(id);
    }
}

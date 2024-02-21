package com.example.budgetmanagementsystem.controller;

import com.example.budgetmanagementsystem.model.FamilyMember;
import com.example.budgetmanagementsystem.service.FamilyMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/family-members")
public class FamilyMemberController {

    @Autowired
    private FamilyMemberService familyMemberService;

    @GetMapping
    public List<FamilyMember> findAll() {
        return familyMemberService.findAll();
    }

    @GetMapping("/{id}")
    public FamilyMember findById(@PathVariable Long id) {
        return familyMemberService.findById(id);
    }

    @PostMapping
    public FamilyMember save(@RequestBody FamilyMember familyMember) {
        return familyMemberService.save(familyMember);
    }

    @PutMapping("/{id}")
    public FamilyMember update(@PathVariable Long id, @RequestBody FamilyMember familyMember) {
        familyMember.setId(id);
        return familyMemberService.save(familyMember);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        familyMemberService.deleteById(id);
    }
}
package com.example.budgetmanagementsystem.service;

import com.example.budgetmanagementsystem.model.FamilyMember;
import com.example.budgetmanagementsystem.dao.FamilyMemberDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FamilyMemberService {

    @Autowired
    private FamilyMemberDao fdao;

    public List<FamilyMember> findAll() {
        return fdao.findAll();
    }

    public FamilyMember findById(Long id) {
        return fdao.findById(id).orElse(null);
    }

    public FamilyMember save(FamilyMember familyMember) {
        return fdao.save(familyMember);
    }

    public void deleteById(Long id) {
    	fdao.deleteById(id);
    }
}
package com.example.budgetmanagementsystem.dafault;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.budgetmanagementsystem.dao.RoleDao;
import com.example.budgetmanagementsystem.model.Role;
import com.example.budgetmanagementsystem.service.RoleService;

@Component
public class DefaultRoleInitializer implements ApplicationRunner {

    @Autowired
    private RoleService roleService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Role userRole = new Role();
        userRole.setId(1);
        userRole.setRole("user");
        roleService.create(userRole);
    }
}
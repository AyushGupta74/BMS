package com.example.budgetmanagementsystem.service;

import com.example.budgetmanagementsystem.model.Role;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RoleService extends GenericService<Role, Integer> {
	
}
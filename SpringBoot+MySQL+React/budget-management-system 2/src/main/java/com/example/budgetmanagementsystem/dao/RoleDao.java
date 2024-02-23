package com.example.budgetmanagementsystem.dao;

import com.example.budgetmanagementsystem.model.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleDao extends JpaRepository<Role, Integer> {
	
}
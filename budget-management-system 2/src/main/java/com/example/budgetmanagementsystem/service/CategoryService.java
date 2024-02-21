package com.example.budgetmanagementsystem.service;

import com.example.budgetmanagementsystem.model.Category;

import java.math.BigDecimal;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CategoryService extends GenericService<Category, Long> {

	public Category findById(Long id) {
        return entityManager.find(Category.class, id);
    }

    public List<Category> findAll() {
        return entityManager.createQuery("select * from categories", Category.class).getResultList();
    }

	public BigDecimal getTotalPrice(Long categoryId) {
		// TODO Auto-generated method stub
		return null;
	}
}
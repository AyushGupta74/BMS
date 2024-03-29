package com.example.budgetmanagementsystem.service;

import com.example.budgetmanagementsystem.model.Expense;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ExpenseService extends GenericService<Expense, Integer> {

    public List<Expense> findAll() {
        return entityManager.createQuery("select * from expenses", Expense.class).getResultList();
    }
}
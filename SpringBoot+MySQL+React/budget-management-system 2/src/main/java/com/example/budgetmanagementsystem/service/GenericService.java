package com.example.budgetmanagementsystem.service;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityManager;

@Service
public class GenericService<T, ID extends Serializable> {

    @Autowired
	protected EntityManager entityManager;

    public T create(T entity) {
        entityManager.persist(entity);
        return entity;
    }

    public T read(ID id) {
        return entityManager.find(getEntityClass(), id);
    }

    public T update(T entity) {
        return entityManager.merge(entity);
    }

    public void delete(ID id) {
        T entity = read(id);
        entityManager.remove(entity);
    }

    @SuppressWarnings("unchecked")
    private Class<T> getEntityClass() {
        return (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
    }
}
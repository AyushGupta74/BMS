package com.sprintboot.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

import com.sprintboot.springboot.entity.Expenditure;

public interface ExpenditureRepository extends JpaRepository<Expenditure, Integer> {
    @Query("SELECT e FROM Expenditure e WHERE MONTH(e.expenditure_date) = :month AND YEAR(e.expenditure_date) = :year")
    List<Expenditure> findByMonthAndYear(@Param("month") int month, @Param("year") int year);
}

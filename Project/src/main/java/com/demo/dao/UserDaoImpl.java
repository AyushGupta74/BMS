package com.demo.dao;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.demo.model.User;

@Repository
public class UserDaoImpl implements UserDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    String sql;
    
    @SuppressWarnings("deprecation")
	public User userValidation(String username, String password) {
    	try {
    		String string= "select * from users where username=? and password=?";
    		return jdbcTemplate.queryForObject(string, new Object[] {username,password}, BeanPropertyRowMapper.newInstance(User.class));
    	} catch (Exception e) {
    		System.out.println("Not Found "+ e.getMessage());
    		return null;
    	}
    }
    
    @Override
    public List<User> getAllUsers() {
        sql = "select * from users";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(User.class));
    }

    @SuppressWarnings("deprecation")
	@Override
    public User getUserById(Long id) {
    	try {
        sql = "select * from users where id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{id}, BeanPropertyRowMapper.newInstance(User.class));
    	} catch (Exception e) {
    		System.out.println("Id not found "+ e.getMessage());
    		return null;
    	}
    }

    @Override
    public void createUser(User user) {
        sql = "insert into users (name, username, password, address, email) values (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, user.getName(), user.getUsername(), user.getPassword(), user.getAddress(), user.getEmail());
    }

    @Override
    public void updateUser(User user) {
        sql = "update users set name = ?, username = ?, password = ?, address = ?, email = ? where id = ?";
        jdbcTemplate.update(sql, user.getName(), user.getUsername(), user.getPassword(), user.getAddress(), user.getEmail(), user.getId());
    }

    @Override
    public void deleteUser(Long id) {
    	try {
        sql = "delete from users where id = ?";
        jdbcTemplate.update(sql, id);
    	} catch (Exception e) {
    		System.out.println("Id not found"+ e.getMessage());
    	}
    }
}
package com.demo.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.demo.model.User;

@Repository
public class UserDaoImpl implements UserDao {

    private static final String FIND_BY_ID = "SELECT * FROM users WHERE id = ?";
    private static final String FIND_ALL = "SELECT * FROM users";
    private static final String SAVE = "INSERT INTO users (id, name, username, password, email, address, role_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
    private static final String UPDATEBYID = "UPDATE users SET name = ?, username = ?, password = ?, email = ?, address = ? where id = ?";
    private static final String DELETE_BY_ID = "DELETE FROM users WHERE id = ?";
    private static final String VALIDATE_USER = "SELECT * FROM users WHERE username = ? AND password = ?";

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public User findById(int id) {
        return jdbcTemplate.queryForObject(FIND_BY_ID, new Object[]{id}, BeanPropertyRowMapper.newInstance(User.class));
    }

    @Override
    public List<User> findAll() {
        return jdbcTemplate.query(FIND_ALL, new UserMapper());
    }

    @Override
    public User save(User user) {
        jdbcTemplate.update(SAVE, user.getId(), user.getName(), user.getUsername(), user.getPassword(), user.getEmail(),user.getAddress(), user.getRole_id());
        return user;
    }
    @Override
    public User update(User user) {
        jdbcTemplate.update(UPDATEBYID, new Object[] { user.getName(), user.getUsername(), user.getPassword(), user.getEmail(),user.getAddress(), user.getId() });
        return user;
    }

    @Override
    public void deleteById(int id) {
        jdbcTemplate.update(DELETE_BY_ID, id);
    }

    @Override
    public User validateUser(String username, String password) {
        return jdbcTemplate.queryForObject(VALIDATE_USER, new Object[]{username, password}, new UserMapper());
    }

    private static final class UserMapper implements RowMapper<User> {

        @Override
        public User mapRow(ResultSet rs, int rowNum) throws SQLException {
            User user = new User();
            user.setId(rs.getInt("id"));
            user.setName(rs.getString("name"));
            user.setUsername(rs.getString("username"));
            user.setPassword(rs.getString("password"));
            user.setEmail(rs.getString("email"));
            user.setEmail(rs.getString("address"));
            user.setRole_id(rs.getInt("role_id"));
            return user;
        }
    }
}
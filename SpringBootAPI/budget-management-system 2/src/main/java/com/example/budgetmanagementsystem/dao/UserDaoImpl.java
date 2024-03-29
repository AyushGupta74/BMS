package com.example.budgetmanagementsystem.dao;

import com.example.budgetmanagementsystem.model.User;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {
	
    private static final String FIND_BY_ID = "SELECT * FROM users WHERE id = ?";
    private static final String FIND_ALL = "SELECT * FROM users";
    private static final String SAVE = "INSERT INTO users (name, username, password, email, address, role_id) VALUES (?, ?, ?, ?, ?, ?)";
    private static final String DELETE_BY_ID = "DELETE FROM users WHERE id = ?";
    private static final String VALIDATE_USER = "SELECT * FROM users WHERE username = ? AND password = ?";

	private JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @SuppressWarnings("deprecation")
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
        jdbcTemplate.update(SAVE, user.getName(), user.getUsername(), user.getPassword(), user.getEmail(),user.getAddress(), user.getRole());
        return user;
    }

    @Override
    public void deleteById(int id) {
        jdbcTemplate.update(DELETE_BY_ID, id);
    }

    @SuppressWarnings("deprecation")
	@Override
    public boolean validateUser(String username, String password) {
        return jdbcTemplate.queryForObject(VALIDATE_USER, new Object[]{username, password}, new UserMapper()) != null;
    }

    private static final class UserMapper implements RowMapper<User> {

        @Override
        public User mapRow(@NonNull ResultSet rs, int rowNum) throws SQLException {
            User user = new User();
            user.setId(rs.getInt("id"));
            user.setName(rs.getString("name"));
            user.setUsername(rs.getString("username"));
            user.setPassword(rs.getString("password"));
            user.setEmail(rs.getString("email"));
            user.setEmail(rs.getString("address"));
            user.setRole(rs.getInt("role_id"));
            return user;
        }
    }
}
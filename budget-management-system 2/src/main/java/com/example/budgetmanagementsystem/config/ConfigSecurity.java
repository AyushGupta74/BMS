package com.example.budgetmanagementsystem.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
public class ConfigSecurity extends WebSecurityConfiguration {
    @SuppressWarnings({ "deprecation", "removal" })
	protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().anyRequest().permitAll().and().csrf().disable();
    }
}
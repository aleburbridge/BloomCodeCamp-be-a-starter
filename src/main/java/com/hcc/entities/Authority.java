package com.hcc.entities;
import com.hcc.entities.User;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

// need to update, only creating to not cause errors with User
@Entity
@Table(name = "greetings")
public class Authority implements GrantedAuthority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String authority;
    private User user;

    public Authority(String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return null;
    }
}

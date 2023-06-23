package com.hcc.entities;

import javax.persistence.*;

// need to update, only creating to not cause errors with User
@Entity
@Table(name = "greetings")
public class Authority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Authority(Long id) {
        this.id = id;
    }

}

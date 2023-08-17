package com.hcc.entities;

import javax.persistence.*;

@Entity
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "branch")
    private String branch;

    @Column(name = "code_review_video_url")
    private String reviewVideoUrl;

    @Column(name = "github_url")
    private String githubUrl;

    @Column(name = "number")
    private int number;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "code_reviewer_id")
    private int codeReviewerId;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", insertable = false, updatable = false)
    private User user;

    public Assignment() {}

    public Assignment(Long id, String branch, String reviewVideoUrl, String githubUrl, int number, int userId, int codeReviewerId, User user) {
        this.id = id;
        this.branch = branch;
        this.reviewVideoUrl = reviewVideoUrl;
        this.githubUrl = githubUrl;
        this.number = number;
        this.userId = userId;
        this.codeReviewerId = codeReviewerId;
        this.user = user;
    }

    public void setId(Long id) {
    }
}
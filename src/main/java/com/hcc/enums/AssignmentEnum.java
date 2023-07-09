package com.hcc.enums;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum AssignmentEnum {
    QUIZ(100),
    MASTERY_TASK(200),
    PROJECT(50);

    private String assignmentType;
    private int points;

    AssignmentEnum(int points) {
        this.points = points;
    }
}

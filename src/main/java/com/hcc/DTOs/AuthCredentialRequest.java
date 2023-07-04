package com.hcc.DTOs;
import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)

public enum AddCredentialRequest {
    CREDENTIAL_1("abc");

    private String securityKey;

    AddCredentialRequest(String securityKey) {
        this.securityKey = securityKey;
    }
}

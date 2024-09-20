package com.kareemabdo.Customer;

public record CustomerRegistrationRequest(String name,
                                          String email,
                                          Integer age,
                                          Gender gender
) {

}

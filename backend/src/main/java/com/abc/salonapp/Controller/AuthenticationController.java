package com.abc.salonapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
import com.abc.salonapp.Payload.LoginReqPayload;
import com.abc.salonapp.Payload.LoginResponse;
import com.abc.salonapp.Service.AuthenticationService;
 
@CrossOrigin(origins = "http://localhost:3000")
@RestController

@RequestMapping("/auth")
public class AuthenticationController {
 
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> doLogin(@RequestBody LoginReqPayload loginPayload) {

        LoginResponse loginResponse = authenticationService.login(loginPayload.getUserName(), loginPayload.getUserPassword());

        return new ResponseEntity<>(loginResponse,HttpStatus.OK);
    }
    
}
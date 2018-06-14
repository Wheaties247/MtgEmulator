package com.example.websocketapi;

import com.example.websocketapi.models.Card;
import com.example.websocketapi.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class WebsocketApi {

	@RequestMapping("/")
	public String home(){
		return "Request mapping working";
	}

	public static void main(String[] args) {
		SpringApplication.run(WebsocketApi.class, args);
	}
}

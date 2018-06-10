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

	@Autowired
	private CardRepository cardRepository;
	@GetMapping("/")
	public Iterable <Card> findAllCards(){
		System.out.println("GET CARDS!");
		return cardRepository.findAll();
	}
	//this route will create a new card for a user
	@PostMapping("/")
	public Card createNewCard(@RequestBody Card newCard){
		System.out.println("POST TO CARD HIT");
		return  cardRepository.save(newCard);
	}
	@DeleteMapping("/{cardId}")
	public HttpStatus deleteCardById(@PathVariable Long cardId) {
//        cardRepository.deleteById(cardId);
		cardRepository.delete(cardId);

		return HttpStatus.OK;
	}
	@PatchMapping("/{cardId}")
	public Card updateCardById(@PathVariable Long cardId, @RequestBody Card cardRequest) {

//        Card cardFromDb = cardRepository.findById(cardId).get();
		Card cardFromDb = cardRepository.findOne(cardId);

		cardFromDb.setCardId(cardRequest.getCardId());
		cardFromDb.setDeckId(cardRequest.getDeckId());
		cardFromDb.setUserId(cardRequest.getUserId());

		return cardRepository.save(cardFromDb);
	}

	public static void main(String[] args) {
		SpringApplication.run(WebsocketApi.class, args);
	}
}

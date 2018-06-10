package com.example.websocketapi.repositories;

import com.example.websocketapi.models.Deck;
import org.springframework.data.repository.CrudRepository;

public interface DeckRepository extends CrudRepository<Deck, Long> {
}
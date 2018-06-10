package com.example.websocketapi.repositories;

import com.example.websocketapi.models.Card;
import org.springframework.data.repository.CrudRepository;

public interface CardRepository extends CrudRepository<Card, Long> {
}
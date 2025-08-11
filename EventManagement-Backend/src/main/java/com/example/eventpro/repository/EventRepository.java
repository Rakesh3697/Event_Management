package com.example.eventpro.repository;

import com.example.eventpro.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {
    

	List<Event> findByNameContainingIgnoreCase(String name);
}

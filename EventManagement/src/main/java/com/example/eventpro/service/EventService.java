package com.example.eventpro.service;

import com.example.eventpro.model.Event;
import com.example.eventpro.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepository repository;

    public List<Event> getAllEvents() {
        return repository.findAll();
    }

    public Event getEventById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Event createEvent(Event event) {
        return repository.save(event);
    }

    public Event updateEvent(Long id, Event event) {
        Optional<Event> existing = repository.findById(id);
        if (existing.isPresent()) {
            Event e = existing.get();
            e.setName(event.getName());
            e.setLocation(event.getLocation());
            e.setDate(event.getDate());
            e.setTime(event.getTime());
            return repository.save(e);
        }
        return null;
    }

    public void deleteEvent(Long id) {
        repository.deleteById(id);
    }

    public List<Event> searchByName(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }
}

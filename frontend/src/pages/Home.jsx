import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";
import TopBar from "../components/TopBar";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/events/${id}`, { method: "DELETE" })
      .then(() => setEvents(events.filter((event) => event.id !== id)))
      .catch((err) => console.error(err));
  };

  const handleEdit = (event) => {
    setIsEditing(true);
    setEditId(event.id);
    setFormData(event);
    setShowForm(true);
  };

  const handleSubmit = () => {
    const url = isEditing
      ? `http://localhost:8080/api/events/${editId}`
      : "http://localhost:8080/api/events";
    const method = isEditing ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedEvents = isEditing
          ? events.map((e) => (e.id === editId ? data : e))
          : [...events, data];
        setEvents(updatedEvents);
        setFormData({ name: "", description: "", date: "", time: "", location: "" });
        setShowForm(false);
        setIsEditing(false);
        setEditId(null);
      })
      .catch((err) => console.error(err));
  };

  const filteredEvents = events
    .filter((e) => e.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <div className="app">
      <h1 className="title">Event Manager</h1>
      <TopBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setShowForm={setShowForm}
        setIsEditing={setIsEditing}
        setFormData={setFormData}
      />
      {showForm && (
        <EventForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          isEditing={isEditing}
          setShowForm={setShowForm}
          setIsEditing={setIsEditing}
        />
      )}
      <div className="card-grid">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

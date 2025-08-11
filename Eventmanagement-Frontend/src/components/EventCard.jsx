import React from "react";
import { Edit, Trash } from "lucide-react";

const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-actions">
        <Edit color="green" onClick={() => onEdit(event)} />
        <Trash color="red" onClick={() => onDelete(event.id)} />
      </div>
      <h2 className="event-name">{event.name}</h2>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p>
        <strong>Time:</strong>{" "}
        {new Date(`1970-01-01T${event.time}`).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </p>
      <p><strong>Location:</strong> {event.location}</p>
    </div>
  );
};

export default EventCard;

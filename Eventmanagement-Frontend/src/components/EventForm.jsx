import React from "react";

const EventForm = ({
  formData,
  setFormData,
  handleSubmit,
  isEditing,
  setShowForm,
  setIsEditing,
}) => {
  const resetForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setFormData({
      name: "",
      description: "",
      date: "",
      time: "",
      location: "",
    });
  };

  return (
    <div className="event-form">
      <input
        type="text"
        placeholder="Event Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <input
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={formData.location}
        onChange={(e) =>
          setFormData({ ...formData, location: e.target.value })
        }
      />
      <button onClick={handleSubmit}>
        {isEditing ? "Update Event" : "Create Event"}
      </button>
      <button onClick={resetForm}>Cancel</button>
    </div>
  );
};

export default EventForm;

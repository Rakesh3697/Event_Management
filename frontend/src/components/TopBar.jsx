import React from "react";
import { Plus, SlidersHorizontal } from "lucide-react";

const TopBar = ({
  searchQuery,
  setSearchQuery,
  sortOrder,
  setSortOrder,
  setShowForm,
  setIsEditing,
  setFormData,
}) => {
  return (
    <div className="top-bar">
      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search"
      />

      <button
        onClick={() =>
          setSortOrder(sortOrder === "newest" ? "oldest" : "newest")
        }
        className="sort"
      >
        <SlidersHorizontal size={16} />
        <span className="sort-text">
          {sortOrder === "newest" ? "Newest" : "Oldest"}
        </span>
      </button>

      <button
        className="new-event"
        onClick={() => {
          setFormData({
            name: "",
            description: "",
            date: "",
            time: "",
            location: "",
          });
          setIsEditing(false);
          setShowForm(true);
        }}
      >
        <Plus size={16} />
        <span>New Event</span>
      </button>
    </div>
  );
};

export default TopBar;

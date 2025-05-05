"use client";
import React, { useEffect, useState } from "react";

export default function Form() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const fetchUsers = async () => {
    const response = await fetch("/users");
    const data = await response.json();
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await fetch("/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name }),
      });
    } else {
      await fetch("/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
    }
    setName("");
    setId("");
    fetchUsers();
  };

  const handleDelete = async (userId) => {
    await fetch("/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: userId }),
    });
    fetchUsers();
  };

  const handleEdit = (user) => {
    setName(user.name);
    setId(user.id);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">User Management</h2>

      <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {id ? "Update" : "Add"}
        </button>
      </form>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50"
          >
            <span className="font-medium text-gray-800">{user.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(user)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition m-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Controls from "./Controls";
import sampleUsers from "./sampleUsers";
import UserList from "./UserList";
import { useState, useEffect } from "react";

function UserDirectoryPage() {
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState("id");
  const [viewMode, setViewMode] = useState("grid");

  const ENDPOINT = "https://69a1e0212e82ee536fa27172.mockapi.io/users_api";

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    }
    fetchUsers();
  }, []);

  function handleDeleteClick(userId) {
    async function deleteUser(userId) {
      try {
        await fetch(`${ENDPOINT}/${userId}`, {
          method: "DELETE",
        });
        setUsers(users.filter((user) => user.id !== userId));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
    deleteUser(userId);
  }

  function handleSortByGroupClick() {
    setSortBy("group");
    setUsers(users.sort((a, b) => a.user_group - b.user_group));
  }

  function handleSortByIdClick() {
    setSortBy("id");
    setUsers(users.sort((a, b) => a.id - b.id));
  }

  function handleViewToggleClick() {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  }

  return (
    <>
      <section className="panel">
        <h1>User Directory</h1>
      </section>

      <section className="panel">
        <h2>Controls</h2>
        <Controls
          onDeleteClick={handleDeleteClick}
          onSortByGroupClick={handleSortByGroupClick}
          onSortByIdClick={handleSortByIdClick}
          onViewToggleClick={handleViewToggleClick}
        />
      </section>

      <section className="panel">
        <h2>All Users</h2>
        <UserList users={users} viewMode={viewMode} />
      </section>
    </>
  );
}

export default UserDirectoryPage;

const userGrid = document.getElementById("userGrid");
const viewToggleBtn = document.getElementById("viewToggleBtn");
const deleteIdInput = document.getElementById("deleteIdInput");
const deleteBtn = document.getElementById("deleteBtn");
const sortByGroupBtn = document.getElementById("sortByGroupBtn");
const sortByIdBtn = document.getElementById("sortByIdBtn");

let users = [];

async function retrieveData() {
  try {
    const response = await fetch(
      "https://69a1e0212e82ee536fa27172.mockapi.io/users_api",
    );
    const data = await response.json();
    users.push(...data);
    console.log("Fetched users:", users);
    render(users);
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
}

function render(users) {
  userGrid.innerHTML = "";
  users.forEach((user) => {
    userGrid.innerHTML += `<article class="user-card">
<h3>${user.first_name ?? ""}</h3>
<p>first_name: ${user.first_name ?? ""}</p>
<p>user_group: ${user.user_group ?? ""}</p>
<p>id: ${user.id ?? ""}</p>
</article>
`;
  });
}

viewToggleBtn.addEventListener("click", () => {
  if (userGrid.classList.contains("grid-view")) {
    userGrid.classList.remove("grid-view");
    userGrid.classList.add("list-view");
  } else {
    userGrid.classList.remove("list-view");
    userGrid.classList.add("grid-view");
  }
});

sortByGroupBtn.addEventListener("click", () => {
  users.sort((a, b) => a.user_group - b.user_group);
  render(users);
});

sortByIdBtn.addEventListener("click", () => {
  users.sort((a, b) => a.id - b.id);
  render(users);
});

deleteBtn.addEventListener("click", async () => {
  const id = deleteIdInput.value;
  console.log(id);
  try {
    await fetch(`https://69a1e0212e82ee536fa27172.mockapi.io/users_api/${id}`, {
      method: "DELETE",
    });
    users = users.filter((user) => user.id !== id);
    render(users);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
});

fetch("data/portal-data.json")
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById("tableBody");

    data.portal.sections.forEach(section => {
      section.items.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${section.category}</td>
          <td>${item.title}</td>
          <td>${item.info.date}</td>
          <td>${item.info.room}</td>
        `;

        tableBody.appendChild(row);
      });
    });
  })
  .catch(error => {
    console.log("Error loading JSON:", error);
  });
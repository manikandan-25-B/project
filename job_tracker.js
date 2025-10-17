<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Job Application Tracker</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 2rem;
      background: #f9f9f9;
    }
    h1 {
      text-align: center;
    }
    form {
      background: #fff;
      padding: 1rem;
      border-radius: 8px;
      max-width: 500px;
      margin: 0 auto 2rem auto;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    label {
      display: block;
      margin-top: 1rem;
    }
    input[type="text"], select, textarea {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.3rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    button {
      margin-top: 1rem;
      padding: 0.7rem 1.5rem;
      background: #007bff;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
    .job-list {
      max-width: 700px;
      margin: 0 auto;
      border-collapse: collapse;
      width: 100%;
    }
    .job-list th, .job-list td {
      border: 1px solid #ddd;
      padding: 0.8rem;
      text-align: left;
    }
    .job-list th {
      background-color: #f2f2f2;
    }
    .status-applied {
      color: green;
      font-weight: bold;
    }
    .status-pending {
      color: orange;
      font-weight: bold;
    }
    .status-rejected {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Job Application Tracker</h1>
  <form id="jobForm">
    <label for="position">Position</label>
    <input type="text" id="position" name="position" required />
    
    <label for="company">Company</label>
    <input type="text" id="company" name="company" required />
    
    <label for="status">Status</label>
    <select id="status" name="status" required>
      <option value="Applied">Applied</option>
      <option value="Pending">Pending</option>
      <option value="Rejected">Rejected</option>
    </select>
    
    <label for="notes">Notes</label>
    <textarea id="notes" name="notes" rows="3"></textarea>
    
    <button type="submit">Add Job</button>
  </form>

  <table class="job-list" id="jobListTable">
    <thead>
      <tr>
        <th>Position</th>
        <th>Company</th>
        <th>Status</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody id="jobList">
    </tbody>
  </table>

  <script>
    const form = document.getElementById('jobForm');
    const jobList = document.getElementById('jobList');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const position = form.position.value.trim();
      const company = form.company.value.trim();
      const status = form.status.value;
      const notes = form.notes.value.trim();

      if (!position || !company) {
        alert("Position and Company are required!");
        return;
      }

      const tr = document.createElement('tr');

      const tdPosition = document.createElement('td');
      tdPosition.textContent = position;
      tr.appendChild(tdPosition);

      const tdCompany = document.createElement('td');
      tdCompany.textContent = company;
      tr.appendChild(tdCompany);

      const tdStatus = document.createElement('td');
      tdStatus.textContent = status;
      tdStatus.className = `status-${status.toLowerCase()}`;
      tr.appendChild(tdStatus);

      const tdNotes = document.createElement('td');
      tdNotes.textContent = notes;
      tr.appendChild(tdNotes);

      jobList.appendChild(tr);

      form.reset();
    });
  </script>
</body>
</html>
// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'London'
  };
  
  const studentsList: Student[] = [student1, student2];
  
  function renderTable(students: Student[]): void {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    
    const headerRow = document.createElement('tr');
    const header1 = document.createElement('th');
    header1.textContent = 'First Name';
    const header2 = document.createElement('th');
    header2.textContent = 'Location';
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    tbody.appendChild(headerRow);
    
    students.forEach(student => {
      const row = document.createElement('tr');
      
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = student.firstName;
      
      const locationCell = document.createElement('td');
      locationCell.textContent = student.location;
      
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    // document.body.appendChild(table);
  }
  
  // Call the function to render the table
  renderTable(studentsList);
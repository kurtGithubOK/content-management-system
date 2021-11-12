-- Seed data that creates:
-- 1 department
-- 2 roles (employee role & manager role)
-- 2 employees (kurt & Mr. Manager)

INSERT INTO department (name)
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES 
    ("Sales Lead", 100000, 1),
    ("SalesPerson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Account Manager", 160000, 3),
    ("Accountant", 125000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("John", "Doe", 1, null),
    ("Mike", "Chan", 2, 1),
    ("Ashley", "Rodriguez", 3, null),
    ("Kevin", "Tupik", 4, 3),
    ("Kunal", "Singh", 5, null),
    ("Malia", "Brown", 6, 5);


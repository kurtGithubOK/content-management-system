-- Seed data that creates:
-- 1 department
-- 2 roles (employee role & manager role)
-- 2 employees (kurt & Mr. Manager)

INSERT INTO department (name)
VALUES ("kurt's deparment");

INSERT INTO role (title, salary, department_id)
VALUES ("employee role", "10000", 1),
("manager role", "50000", 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mr.", "Manager", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kurt", "Heimerman", 1, 1);


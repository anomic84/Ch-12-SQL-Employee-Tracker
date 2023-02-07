USE employees_db;

INSERT INTO department (name)
VALUES ('Front of House'),
('Back of House'),
('Coorperate');

INSERT INTO role (title, salary, department_id)
VALUES ('Server', 80000, 1),
    ('General Manager', 80000, 1),
    ('Busser', 50000, 1),
    ('Expediter', 55000, 1),
    ('Host', 35000, 1),
    ('Bartender', 100000, 1),
    ('Head Chef', 80000, 2),
    ('Sous Chef', 55000, 2),
    ('Food Prep', 40000, 2),
    ('Dishwasher', 38000, 2),
    ('Human Resources', 750000, 3),
    ('Public Relations', 70000, 3),
    ('Beverage Manager', 68000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('John', 'Doe', 2,null),
('Jane', 'Doe', 2,null),
('Jeremy', 'Crane', 2,null),
('Bart', 'Simpson', 5,1),
('Steven', 'Rainn', 6,3),
('Granpa', 'Willie', 7,2);

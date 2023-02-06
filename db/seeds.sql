INSERT INTO department (name)
VALUES
('Front of House'),
('Back of House'),
('Coorperate'),

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Server', 80000, 1),
    ('Manager', 80000, 1),
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
VALUES
('John', 'Doe', 1,null),
('Jane', 'Doe', 2,null),
('Jeremy', 'Crane', 1,1),
('Bart', 'Simpson', 3,3),
('Steven', 'Rainn', 1,1),
('Granpa', 'Willie', 2,2)

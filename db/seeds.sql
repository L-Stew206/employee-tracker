INSERT INTO departments (department_name)
VALUES ("Marketing"),
       ("Finance"),
       ("Human Resources"),
       ("Sales");

INSERT INTO roles (job_title, salary, department_id)
VALUES ("Head of Marketing", 120000, 4),
       ("Accountant", 100000, 2),
       ("Software Engineer", 130000, 1),
       ("Photographer", 90000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_name)
VALUES ("Chris", "Noll", 1, 3),
       ("Caden", "Smith", 2, 2),
       ("Vince", "White", 3, 4), 
       ("Sophie", "Stewart", 4, 1);
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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Noll", 1, NULL),
       ("Caden", "Smith", 2, NULL),
       ("Vince", "White", 3, NULL), 
       ("Sophie", "Stewart", 4, NULL);
INSERT INTO departments (department_name)
VALUES ("Marketing"),
       ("Finance"),
       ("Human Resources"),
       ("Sales");

INSERT INTO roles (job_title, department_id, salary)
VALUES ("Head of Marketing", 4, 120000),
       ("Accountant", 2, 100000),
       ("Software Engineer", 1, 130000),
       ("Photographer", 3, 90000);

INSERT INTO employee (first_name, last_name, role_id, department_id, manager_id)
VALUES ("Chris", "Noll", 1, 3),
       ("Caden", "Smith", 2, 2),
       ("Vince", "White", 3, 4), 
       ("Sophie", "Stewart", 4, 1);
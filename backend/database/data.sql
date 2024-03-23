INSERT INTO public.roles(name) VALUES ('Administrador');
INSERT INTO public.roles(name) VALUES ('Vendedor');
INSERT INTO public.roles(name) VALUES ('Proveedor');

INSERT INTO public.users(name, "idNumber", password, "roleId", "createdAt", "updatedAt", phone, mail)
	VALUES ('Rogger', '1', 'MTIz', '1', '2024-03-22', '2024-03-22', '3123456789', 'rogger@mail.com');
INSERT INTO public.users(name, "idNumber", password, "roleId", "createdAt", "updatedAt", phone, mail)
	VALUES ('Thomas', '2', 'MTIz', '2', '2024-03-22', '2024-03-22', '3123456788', 'thomas@mail.com');
INSERT INTO public.users(name, "idNumber", password, "roleId", "createdAt", "updatedAt", phone, mail)
	VALUES ('Samuel', '3', 'MTIz', '3', '2024-03-22', '2024-03-22', '3123456787', 'samuel@mail.com');
INSERT INTO public.users(name, "idNumber", password, "roleId", "createdAt", "updatedAt", phone, mail)
	VALUES ('Patricia', '4', 'MTIz', '2', '2024-03-22', '2024-03-22', '3123456786', 'patricia@mail.com');
INSERT INTO public.users(name, "idNumber", password, "roleId", "createdAt", "updatedAt", phone, mail)
	VALUES ('Gabriel', '5', 'MTIz', '2', '2024-03-22', '2024-03-22', '3123456785', 'gabriel@mail.com');
INSERT INTO public.users(name, "idNumber", password, "roleId", "createdAt", "updatedAt", phone, mail)
	VALUES ('Rafael', '6', 'MTIz', '3', '2024-03-22', '2024-03-22', '3123456784', 'rafael@mail.com');

INSERT INTO public.products(name, quantity, price, "createdAt", "updatedAt", description, model)
	VALUES ('Aceite motor', '1000', '31250', '2024-03-22', '2024-03-22', 'Aceite para motor de carro', '2022');
INSERT INTO public.products(name, quantity, price, "createdAt", "updatedAt", description, model)
	VALUES ('Sello de valvula', '100', '15163', '2024-03-22', '2024-03-22', 'Sello de valvula negro', '2024');
INSERT INTO public.products(name, quantity, price, "createdAt", "updatedAt", description, model)
	VALUES ('Oring aceite', '5000', '14350', '2024-03-22', '2024-03-22', 'Oring para aceite x6', '2019');
INSERT INTO public.products(name, quantity, price, "createdAt", "updatedAt", description, model)
	VALUES ('Camisa de cilindro', '9000', '268837', '2024-03-22', '2024-03-22', 'Camise de cilinfro metalico', '2022');
INSERT INTO public.products(name, quantity, price, "createdAt", "updatedAt", description, model)
	VALUES ('Correa para motor', '4560', '234591', '2024-03-22', '2024-03-22', 'Correa para vehiculo', '2021');
INSERT INTO public.products(name, quantity, price, "createdAt", "updatedAt", description, model)
	VALUES ('Tornillo soporte compresor', '1000', '31250', '2024-03-22', '2024-03-22', 'Tornillo soporte compresor para carro', '2017');
INSERT INTO public.products(name, quantity, price, "createdAt", "updatedAt", description, model)
	VALUES ('Empaquetadura inferior', '92', '1184347', '2024-03-22', '2024-03-22', 'Empaquetadura inferior para motor pesado', '2018');
INSERT INTO public.products(name, quantity, price, "createdAt", "updatedAt", description, model)
	VALUES ('Motor de arranque', '11', '6392155', '2024-03-22', '2024-03-22', 'Motor pequeno de arranque manual', '2023');
INSERT INTO public.products(name, quantity, price, "createdAt", "updatedAt", description, model)
	VALUES ('Kit enfriador de aceite', '1120', '2514219', '2024-03-22', '2024-03-22', 'Kit proteccion aceite', '2022');
INSERT INTO public.products(name, quantity, price, "createdAt", "updatedAt", description, model)
	VALUES ('Overhoul Kit', '991', '194182', '2024-03-22', '2024-03-22', 'Kit overhoul para carro', '2024');

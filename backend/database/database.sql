CREATE DATABASE company;

-- This script was generated by the ERD tool in pgAdmin 4.
BEGIN;


CREATE TABLE IF NOT EXISTS public.log
(
    id integer NOT NULL DEFAULT nextval('"Log_id_seq"'::regclass),
    "userId" integer NOT NULL,
    action text COLLATE pg_catalog."default" NOT NULL,
    date date NOT NULL,
    CONSTRAINT "Log_pkey" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.logs
(
    id serial NOT NULL,
    action character varying(255) COLLATE pg_catalog."default",
    date timestamp with time zone,
    CONSTRAINT logs_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.products
(
    id integer NOT NULL DEFAULT nextval('"Products_id_seq"'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    quantity numeric NOT NULL,
    price numeric NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL,
    description text COLLATE pg_catalog."default",
    model text COLLATE pg_catalog."default",
    CONSTRAINT "Products_pkey" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.roles
(
    id integer NOT NULL DEFAULT nextval('"Roles_id_seq"'::regclass),
    name text COLLATE pg_catalog."default",
    CONSTRAINT "Roles_pkey" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.sales
(
    id serial NOT NULL,
    "userId" integer NOT NULL,
    "productId" integer NOT NULL,
    quantity numeric NOT NULL,
    date date NOT NULL,
    CONSTRAINT sales_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    "idNumber" text COLLATE pg_catalog."default",
    password text COLLATE pg_catalog."default",
    "roleId" integer NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL,
    phone numeric,
    mail text COLLATE pg_catalog."default",
    CONSTRAINT "Users_pkey" PRIMARY KEY (id),
    CONSTRAINT "users_idNumber_key" UNIQUE ("idNumber")
);

ALTER TABLE IF EXISTS public.log
    ADD CONSTRAINT "Log_idUser_fkey" FOREIGN KEY ("userId")
    REFERENCES public.users (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.sales
    ADD CONSTRAINT "sales_productId_fkey" FOREIGN KEY ("productId")
    REFERENCES public.products (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.sales
    ADD CONSTRAINT "sales_userId_fkey" FOREIGN KEY ("userId")
    REFERENCES public.users (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.users
    ADD CONSTRAINT "Users_role_fkey" FOREIGN KEY ("roleId")
    REFERENCES public.roles (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;
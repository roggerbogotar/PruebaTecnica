PGDMP       $                |            company    16.2    16.2 ?    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    company    DATABASE     }   CREATE DATABASE company WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE company;
                postgres    false            �            1259    16561    log    TABLE     �   CREATE TABLE public.log (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    action text NOT NULL,
    date date NOT NULL
);
    DROP TABLE public.log;
       public         heap    postgres    false            �            1259    16560    Log_idUser_seq    SEQUENCE     �   CREATE SEQUENCE public."Log_idUser_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Log_idUser_seq";
       public          postgres    false    224            �           0    0    Log_idUser_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Log_idUser_seq" OWNED BY public.log."userId";
          public          postgres    false    223            �            1259    16559 
   Log_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Log_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public."Log_id_seq";
       public          postgres    false    224            �           0    0 
   Log_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public."Log_id_seq" OWNED BY public.log.id;
          public          postgres    false    222            �            1259    16538    products    TABLE     �   CREATE TABLE public.products (
    id integer NOT NULL,
    name text NOT NULL,
    quantity numeric NOT NULL,
    price numeric NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL,
    description text,
    model text
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16537    Products_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Products_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Products_id_seq";
       public          postgres    false    221            �           0    0    Products_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Products_id_seq" OWNED BY public.products.id;
          public          postgres    false    220            �            1259    16518    roles    TABLE     F   CREATE TABLE public.roles (
    id integer NOT NULL,
    name text
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    16517    Roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Roles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Roles_id_seq";
       public          postgres    false    216            �           0    0    Roles_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Roles_id_seq" OWNED BY public.roles.id;
          public          postgres    false    215            �            1259    16528    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    "idNumber" text,
    password text,
    "roleId" integer NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL,
    phone numeric,
    mail text
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16526    Users_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Users_id_seq";
       public          postgres    false    219            �           0    0    Users_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Users_id_seq" OWNED BY public.users.id;
          public          postgres    false    217            �            1259    16527    Users_role_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_role_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Users_role_seq";
       public          postgres    false    219            �           0    0    Users_role_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Users_role_seq" OWNED BY public.users."roleId";
          public          postgres    false    218            �            1259    16676    logs    TABLE     |   CREATE TABLE public.logs (
    id integer NOT NULL,
    action character varying(255),
    date timestamp with time zone
);
    DROP TABLE public.logs;
       public         heap    postgres    false            �            1259    16675    logs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.logs_id_seq;
       public          postgres    false    230            �           0    0    logs_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.logs_id_seq OWNED BY public.logs.id;
          public          postgres    false    229            �            1259    16655    sales    TABLE     �   CREATE TABLE public.sales (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "productId" integer NOT NULL,
    quantity numeric NOT NULL,
    date date NOT NULL
);
    DROP TABLE public.sales;
       public         heap    postgres    false            �            1259    16652    sales_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.sales_id_seq;
       public          postgres    false    228            �           0    0    sales_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.sales_id_seq OWNED BY public.sales.id;
          public          postgres    false    225            �            1259    16654    sales_productId_seq    SEQUENCE     �   CREATE SEQUENCE public."sales_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."sales_productId_seq";
       public          postgres    false    228            �           0    0    sales_productId_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."sales_productId_seq" OWNED BY public.sales."productId";
          public          postgres    false    227            �            1259    16653    sales_userId_seq    SEQUENCE     �   CREATE SEQUENCE public."sales_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."sales_userId_seq";
       public          postgres    false    228            �           0    0    sales_userId_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."sales_userId_seq" OWNED BY public.sales."userId";
          public          postgres    false    226            :           2604    16564    log id    DEFAULT     b   ALTER TABLE ONLY public.log ALTER COLUMN id SET DEFAULT nextval('public."Log_id_seq"'::regclass);
 5   ALTER TABLE public.log ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    222    224            <           2604    16679    logs id    DEFAULT     b   ALTER TABLE ONLY public.logs ALTER COLUMN id SET DEFAULT nextval('public.logs_id_seq'::regclass);
 6   ALTER TABLE public.logs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229    230            9           2604    16541    products id    DEFAULT     l   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public."Products_id_seq"'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            7           2604    16521    roles id    DEFAULT     f   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public."Roles_id_seq"'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            ;           2604    16658    sales id    DEFAULT     d   ALTER TABLE ONLY public.sales ALTER COLUMN id SET DEFAULT nextval('public.sales_id_seq'::regclass);
 7   ALTER TABLE public.sales ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    225    228            8           2604    16531    users id    DEFAULT     f   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    217    219            �          0    16561    log 
   TABLE DATA           9   COPY public.log (id, "userId", action, date) FROM stdin;
    public          postgres    false    224   �A       �          0    16676    logs 
   TABLE DATA           0   COPY public.logs (id, action, date) FROM stdin;
    public          postgres    false    230   �A       �          0    16538    products 
   TABLE DATA           k   COPY public.products (id, name, quantity, price, "createdAt", "updatedAt", description, model) FROM stdin;
    public          postgres    false    221   B       �          0    16518    roles 
   TABLE DATA           )   COPY public.roles (id, name) FROM stdin;
    public          postgres    false    216   �C       �          0    16655    sales 
   TABLE DATA           J   COPY public.sales (id, "userId", "productId", quantity, date) FROM stdin;
    public          postgres    false    228   �C       �          0    16528    users 
   TABLE DATA           p   COPY public.users (id, name, "idNumber", password, "roleId", "createdAt", "updatedAt", phone, mail) FROM stdin;
    public          postgres    false    219   �C       �           0    0    Log_idUser_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Log_idUser_seq"', 1, false);
          public          postgres    false    223            �           0    0 
   Log_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Log_id_seq"', 1, false);
          public          postgres    false    222                        0    0    Products_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Products_id_seq"', 14, true);
          public          postgres    false    220                       0    0    Roles_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Roles_id_seq"', 8, true);
          public          postgres    false    215                       0    0    Users_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Users_id_seq"', 53, true);
          public          postgres    false    217                       0    0    Users_role_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Users_role_seq"', 10, true);
          public          postgres    false    218                       0    0    logs_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.logs_id_seq', 1, false);
          public          postgres    false    229                       0    0    sales_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.sales_id_seq', 8, true);
          public          postgres    false    225                       0    0    sales_productId_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."sales_productId_seq"', 4, true);
          public          postgres    false    227                       0    0    sales_userId_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."sales_userId_seq"', 4, true);
          public          postgres    false    226            F           2606    16569    log Log_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.log
    ADD CONSTRAINT "Log_pkey" PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.log DROP CONSTRAINT "Log_pkey";
       public            postgres    false    224            D           2606    16545    products Products_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.products
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.products DROP CONSTRAINT "Products_pkey";
       public            postgres    false    221            >           2606    16525    roles Roles_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT "Roles_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.roles DROP CONSTRAINT "Roles_pkey";
       public            postgres    false    216            @           2606    16536    users Users_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.users DROP CONSTRAINT "Users_pkey";
       public            postgres    false    219            J           2606    16681    logs logs_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.logs DROP CONSTRAINT logs_pkey;
       public            postgres    false    230            H           2606    16664    sales sales_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.sales DROP CONSTRAINT sales_pkey;
       public            postgres    false    228            B           2606    16683    users users_idNumber_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_idNumber_key" UNIQUE ("idNumber");
 D   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_idNumber_key";
       public            postgres    false    219            L           2606    16585    log Log_idUser_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.log
    ADD CONSTRAINT "Log_idUser_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) NOT VALID;
 ?   ALTER TABLE ONLY public.log DROP CONSTRAINT "Log_idUser_fkey";
       public          postgres    false    224    219    4672            K           2606    16570    users Users_role_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "Users_role_fkey" FOREIGN KEY ("roleId") REFERENCES public.roles(id) NOT VALID;
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT "Users_role_fkey";
       public          postgres    false    219    4670    216            M           2606    16670    sales sales_productId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sales
    ADD CONSTRAINT "sales_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) NOT VALID;
 F   ALTER TABLE ONLY public.sales DROP CONSTRAINT "sales_productId_fkey";
       public          postgres    false    228    4676    221            N           2606    16665    sales sales_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sales
    ADD CONSTRAINT "sales_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) NOT VALID;
 C   ALTER TABLE ONLY public.sales DROP CONSTRAINT "sales_userId_fkey";
       public          postgres    false    219    4672    228            �      x������ � �      �      x������ � �      �   o  x����N�0�קO��酡K3qe&�Х��ؤP,���`0hĸ#�����4ܗ���ױ�	0�2�(t"�Ƀ�ϛ���.�/mJqR	�Ó!NG�!��Pc.w,�q��N�#\�o��α���P����\݂����ѰN�������7e��O�E!�;�3侠�y�z|yk��)���f$�tN�Ri�{�fto���3x����L���D=��n�����}v	[W�G�uk����s�S��X(����;����u���
���P�m� ȥ��N���C�&nQ^�f�a�J�}�m�S�����)iT�NƄ�)��,}lVp�+*��.��!p���]�QX�?��J|�5���c��3�      �   5   x�3�tL����,.)JL�/�2�K�KI1�9���R�lSN��t��=... ���      �      x������ � �      �   �   x���?�0������k˟͍8�dt9	bL��O/)&t��ny�ܩ����C�Ks�.�RQ"#��*S�JgyQ���d�q;Z�
4���Z�3
�>�7��n�\�g�|�:��ggZ�P/���'����3�1� �ѯE�j~�d?Rp>،{,����f|     
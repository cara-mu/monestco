--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

-- Started on 2021-11-24 22:15:08 EST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16422)
-- Name: auth_group; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO monest;

--
-- TOC entry 215 (class 1259 OID 16421)
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO monest;

--
-- TOC entry 3882 (class 0 OID 0)
-- Dependencies: 215
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- TOC entry 218 (class 1259 OID 16431)
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.auth_group_permissions (
    id bigint NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO monest;

--
-- TOC entry 217 (class 1259 OID 16430)
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO monest;

--
-- TOC entry 3883 (class 0 OID 0)
-- Dependencies: 217
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- TOC entry 214 (class 1259 OID 16415)
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO monest;

--
-- TOC entry 213 (class 1259 OID 16414)
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO monest;

--
-- TOC entry 3884 (class 0 OID 0)
-- Dependencies: 213
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- TOC entry 220 (class 1259 OID 16438)
-- Name: auth_user; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(150) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO monest;

--
-- TOC entry 222 (class 1259 OID 16447)
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.auth_user_groups (
    id bigint NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO monest;

--
-- TOC entry 221 (class 1259 OID 16446)
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO monest;

--
-- TOC entry 3885 (class 0 OID 0)
-- Dependencies: 221
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- TOC entry 219 (class 1259 OID 16437)
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO monest;

--
-- TOC entry 3886 (class 0 OID 0)
-- Dependencies: 219
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- TOC entry 224 (class 1259 OID 16454)
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.auth_user_user_permissions (
    id bigint NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO monest;

--
-- TOC entry 223 (class 1259 OID 16453)
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO monest;

--
-- TOC entry 3887 (class 0 OID 0)
-- Dependencies: 223
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- TOC entry 226 (class 1259 OID 16513)
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO monest;

--
-- TOC entry 225 (class 1259 OID 16512)
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO monest;

--
-- TOC entry 3888 (class 0 OID 0)
-- Dependencies: 225
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- TOC entry 212 (class 1259 OID 16406)
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO monest;

--
-- TOC entry 211 (class 1259 OID 16405)
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO monest;

--
-- TOC entry 3889 (class 0 OID 0)
-- Dependencies: 211
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- TOC entry 210 (class 1259 OID 16397)
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.django_migrations (
    id bigint NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO monest;

--
-- TOC entry 209 (class 1259 OID 16396)
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO monest;

--
-- TOC entry 3890 (class 0 OID 0)
-- Dependencies: 209
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- TOC entry 227 (class 1259 OID 16542)
-- Name: django_session; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO monest;

--
-- TOC entry 229 (class 1259 OID 16552)
-- Name: monest_citations; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_citations (
    id bigint NOT NULL,
    title character varying(100) NOT NULL,
    author character varying(40) NOT NULL,
    date character varying(40) NOT NULL,
    pages character varying(40) NOT NULL,
    publisher character varying(50) NOT NULL,
    url character varying(200) NOT NULL
);


ALTER TABLE public.monest_citations OWNER TO monest;

--
-- TOC entry 228 (class 1259 OID 16551)
-- Name: monest_citations_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.monest_citations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monest_citations_id_seq OWNER TO monest;

--
-- TOC entry 3891 (class 0 OID 0)
-- Dependencies: 228
-- Name: monest_citations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.monest_citations_id_seq OWNED BY public.monest_citations.id;


--
-- TOC entry 230 (class 1259 OID 16558)
-- Name: monest_company; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_company (
    name character varying(30) NOT NULL,
    description character varying(200) NOT NULL,
    parent_company character varying(30) NOT NULL,
    category character varying(10) NOT NULL,
    logo character varying(200) NOT NULL,
    similar_company_1 character varying(30) NOT NULL,
    similar_company_2 character varying(30) NOT NULL,
    similar_company_3 character varying(30) NOT NULL,
    similar_company_4 character varying(30) NOT NULL,
    industry_id character varying(10) NOT NULL
);


ALTER TABLE public.monest_company OWNER TO monest;

--
-- TOC entry 241 (class 1259 OID 16601)
-- Name: monest_facts; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_facts (
    id bigint NOT NULL,
    heading character varying(100) NOT NULL,
    summary character varying(1000) NOT NULL,
    company_id character varying(30) NOT NULL
);


ALTER TABLE public.monest_facts OWNER TO monest;

--
-- TOC entry 243 (class 1259 OID 16655)
-- Name: monest_facts_citation; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_facts_citation (
    id bigint NOT NULL,
    facts_id bigint NOT NULL,
    citations_id bigint NOT NULL
);


ALTER TABLE public.monest_facts_citation OWNER TO monest;

--
-- TOC entry 242 (class 1259 OID 16654)
-- Name: monest_facts_citation_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.monest_facts_citation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monest_facts_citation_id_seq OWNER TO monest;

--
-- TOC entry 3892 (class 0 OID 0)
-- Dependencies: 242
-- Name: monest_facts_citation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.monest_facts_citation_id_seq OWNED BY public.monest_facts_citation.id;


--
-- TOC entry 240 (class 1259 OID 16600)
-- Name: monest_facts_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.monest_facts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monest_facts_id_seq OWNER TO monest;

--
-- TOC entry 3893 (class 0 OID 0)
-- Dependencies: 240
-- Name: monest_facts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.monest_facts_id_seq OWNED BY public.monest_facts.id;


--
-- TOC entry 231 (class 1259 OID 16565)
-- Name: monest_industry; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_industry (
    name character varying(10) NOT NULL
);


ALTER TABLE public.monest_industry OWNER TO monest;

--
-- TOC entry 239 (class 1259 OID 16594)
-- Name: monest_industrystandards; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_industrystandards (
    id bigint NOT NULL,
    total double precision NOT NULL,
    low double precision NOT NULL,
    high double precision NOT NULL,
    industry_id character varying(10) NOT NULL,
    metric_id character varying(100)
);


ALTER TABLE public.monest_industrystandards OWNER TO monest;

--
-- TOC entry 238 (class 1259 OID 16593)
-- Name: monest_industrystandards_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.monest_industrystandards_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monest_industrystandards_id_seq OWNER TO monest;

--
-- TOC entry 3894 (class 0 OID 0)
-- Dependencies: 238
-- Name: monest_industrystandards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.monest_industrystandards_id_seq OWNED BY public.monest_industrystandards.id;


--
-- TOC entry 250 (class 1259 OID 16682)
-- Name: monest_metrics; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_metrics (
    name character varying(100) NOT NULL,
    parent_id character varying(100),
    description character varying(200) NOT NULL,
    types character varying(10)
);


ALTER TABLE public.monest_metrics OWNER TO monest;

--
-- TOC entry 237 (class 1259 OID 16585)
-- Name: monest_news; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_news (
    id bigint NOT NULL,
    title character varying(100) NOT NULL,
    summary character varying(1000) NOT NULL,
    year integer NOT NULL,
    category character varying(40) NOT NULL,
    photo character varying(200) NOT NULL,
    issue_addressed character varying(5) NOT NULL,
    issue_addressed_text character varying(1000) NOT NULL,
    responsibility_taken character varying(5) NOT NULL,
    responsibility_taken_text character varying(1000) NOT NULL,
    company_id character varying(30) NOT NULL
);


ALTER TABLE public.monest_news OWNER TO monest;

--
-- TOC entry 245 (class 1259 OID 16662)
-- Name: monest_news_citation; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_news_citation (
    id bigint NOT NULL,
    news_id bigint NOT NULL,
    citations_id bigint NOT NULL
);


ALTER TABLE public.monest_news_citation OWNER TO monest;

--
-- TOC entry 244 (class 1259 OID 16661)
-- Name: monest_news_citation_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.monest_news_citation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monest_news_citation_id_seq OWNER TO monest;

--
-- TOC entry 3895 (class 0 OID 0)
-- Dependencies: 244
-- Name: monest_news_citation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.monest_news_citation_id_seq OWNED BY public.monest_news_citation.id;


--
-- TOC entry 236 (class 1259 OID 16584)
-- Name: monest_news_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.monest_news_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monest_news_id_seq OWNER TO monest;

--
-- TOC entry 3896 (class 0 OID 0)
-- Dependencies: 236
-- Name: monest_news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.monest_news_id_seq OWNED BY public.monest_news.id;


--
-- TOC entry 235 (class 1259 OID 16578)
-- Name: monest_politicalassociation; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_politicalassociation (
    id bigint NOT NULL,
    year integer NOT NULL,
    rep double precision NOT NULL,
    dem double precision NOT NULL,
    individual_percentage double precision NOT NULL,
    company_id character varying(30) NOT NULL
);


ALTER TABLE public.monest_politicalassociation OWNER TO monest;

--
-- TOC entry 247 (class 1259 OID 16669)
-- Name: monest_politicalassociation_citation; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_politicalassociation_citation (
    id bigint NOT NULL,
    politicalassociation_id bigint NOT NULL,
    citations_id bigint NOT NULL
);


ALTER TABLE public.monest_politicalassociation_citation OWNER TO monest;

--
-- TOC entry 246 (class 1259 OID 16668)
-- Name: monest_politicalassociation_citation_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.monest_politicalassociation_citation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monest_politicalassociation_citation_id_seq OWNER TO monest;

--
-- TOC entry 3897 (class 0 OID 0)
-- Dependencies: 246
-- Name: monest_politicalassociation_citation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.monest_politicalassociation_citation_id_seq OWNED BY public.monest_politicalassociation_citation.id;


--
-- TOC entry 234 (class 1259 OID 16577)
-- Name: monest_politicalassociation_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.monest_politicalassociation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monest_politicalassociation_id_seq OWNER TO monest;

--
-- TOC entry 3898 (class 0 OID 0)
-- Dependencies: 234
-- Name: monest_politicalassociation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.monest_politicalassociation_id_seq OWNED BY public.monest_politicalassociation.id;


--
-- TOC entry 233 (class 1259 OID 16571)
-- Name: monest_scores; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_scores (
    id bigint NOT NULL,
    score integer NOT NULL,
    long_text character varying(400) NOT NULL,
    company_id character varying(30) NOT NULL,
    metric_id character varying(100),
    short_text character varying(200) NOT NULL
);


ALTER TABLE public.monest_scores OWNER TO monest;

--
-- TOC entry 249 (class 1259 OID 16676)
-- Name: monest_scores_citation; Type: TABLE; Schema: public; Owner: monest
--

CREATE TABLE public.monest_scores_citation (
    id bigint NOT NULL,
    scores_id bigint NOT NULL,
    citations_id bigint NOT NULL
);


ALTER TABLE public.monest_scores_citation OWNER TO monest;

--
-- TOC entry 248 (class 1259 OID 16675)
-- Name: monest_scores_citation_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.monest_scores_citation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monest_scores_citation_id_seq OWNER TO monest;

--
-- TOC entry 3899 (class 0 OID 0)
-- Dependencies: 248
-- Name: monest_scores_citation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.monest_scores_citation_id_seq OWNED BY public.monest_scores_citation.id;


--
-- TOC entry 232 (class 1259 OID 16570)
-- Name: monest_scores_id_seq; Type: SEQUENCE; Schema: public; Owner: monest
--

CREATE SEQUENCE public.monest_scores_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.monest_scores_id_seq OWNER TO monest;

--
-- TOC entry 3900 (class 0 OID 0)
-- Dependencies: 232
-- Name: monest_scores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: monest
--

ALTER SEQUENCE public.monest_scores_id_seq OWNED BY public.monest_scores.id;


--
-- TOC entry 3539 (class 2604 OID 16425)
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- TOC entry 3540 (class 2604 OID 16434)
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- TOC entry 3538 (class 2604 OID 16418)
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- TOC entry 3541 (class 2604 OID 16441)
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- TOC entry 3542 (class 2604 OID 16450)
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- TOC entry 3543 (class 2604 OID 16457)
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- TOC entry 3544 (class 2604 OID 16516)
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- TOC entry 3537 (class 2604 OID 16409)
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- TOC entry 3536 (class 2604 OID 16400)
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- TOC entry 3546 (class 2604 OID 16555)
-- Name: monest_citations id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_citations ALTER COLUMN id SET DEFAULT nextval('public.monest_citations_id_seq'::regclass);


--
-- TOC entry 3551 (class 2604 OID 16604)
-- Name: monest_facts id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_facts ALTER COLUMN id SET DEFAULT nextval('public.monest_facts_id_seq'::regclass);


--
-- TOC entry 3552 (class 2604 OID 16658)
-- Name: monest_facts_citation id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_facts_citation ALTER COLUMN id SET DEFAULT nextval('public.monest_facts_citation_id_seq'::regclass);


--
-- TOC entry 3550 (class 2604 OID 16597)
-- Name: monest_industrystandards id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_industrystandards ALTER COLUMN id SET DEFAULT nextval('public.monest_industrystandards_id_seq'::regclass);


--
-- TOC entry 3549 (class 2604 OID 16588)
-- Name: monest_news id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_news ALTER COLUMN id SET DEFAULT nextval('public.monest_news_id_seq'::regclass);


--
-- TOC entry 3553 (class 2604 OID 16665)
-- Name: monest_news_citation id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_news_citation ALTER COLUMN id SET DEFAULT nextval('public.monest_news_citation_id_seq'::regclass);


--
-- TOC entry 3548 (class 2604 OID 16581)
-- Name: monest_politicalassociation id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_politicalassociation ALTER COLUMN id SET DEFAULT nextval('public.monest_politicalassociation_id_seq'::regclass);


--
-- TOC entry 3554 (class 2604 OID 16672)
-- Name: monest_politicalassociation_citation id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_politicalassociation_citation ALTER COLUMN id SET DEFAULT nextval('public.monest_politicalassociation_citation_id_seq'::regclass);


--
-- TOC entry 3547 (class 2604 OID 16574)
-- Name: monest_scores id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_scores ALTER COLUMN id SET DEFAULT nextval('public.monest_scores_id_seq'::regclass);


--
-- TOC entry 3555 (class 2604 OID 16679)
-- Name: monest_scores_citation id; Type: DEFAULT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_scores_citation ALTER COLUMN id SET DEFAULT nextval('public.monest_scores_citation_id_seq'::regclass);


--
-- TOC entry 3842 (class 0 OID 16422)
-- Dependencies: 216
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- TOC entry 3844 (class 0 OID 16431)
-- Dependencies: 218
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- TOC entry 3840 (class 0 OID 16415)
-- Dependencies: 214
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add user	4	add_user
14	Can change user	4	change_user
15	Can delete user	4	delete_user
16	Can view user	4	view_user
17	Can add content type	5	add_contenttype
18	Can change content type	5	change_contenttype
19	Can delete content type	5	delete_contenttype
20	Can view content type	5	view_contenttype
21	Can add session	6	add_session
22	Can change session	6	change_session
23	Can delete session	6	delete_session
24	Can view session	6	view_session
25	Can add citations	7	add_citations
26	Can change citations	7	change_citations
27	Can delete citations	7	delete_citations
28	Can view citations	7	view_citations
29	Can add political association	8	add_politicalassociation
30	Can change political association	8	change_politicalassociation
31	Can delete political association	8	delete_politicalassociation
32	Can view political association	8	view_politicalassociation
33	Can add facts	9	add_facts
34	Can change facts	9	change_facts
35	Can delete facts	9	delete_facts
36	Can view facts	9	view_facts
37	Can add scores	10	add_scores
38	Can change scores	10	change_scores
39	Can delete scores	10	delete_scores
40	Can view scores	10	view_scores
41	Can add industry standards	11	add_industrystandards
42	Can change industry standards	11	change_industrystandards
43	Can delete industry standards	11	delete_industrystandards
44	Can view industry standards	11	view_industrystandards
45	Can add industry	12	add_industry
46	Can change industry	12	change_industry
47	Can delete industry	12	delete_industry
48	Can view industry	12	view_industry
49	Can add news	13	add_news
50	Can change news	13	change_news
51	Can delete news	13	delete_news
52	Can view news	13	view_news
53	Can add company	14	add_company
54	Can change company	14	change_company
55	Can delete company	14	delete_company
56	Can view company	14	view_company
57	Can add metrics	15	add_metrics
58	Can change metrics	15	change_metrics
59	Can delete metrics	15	delete_metrics
60	Can view metrics	15	view_metrics
\.


--
-- TOC entry 3846 (class 0 OID 16438)
-- Dependencies: 220
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$260000$NbY7OQBXpsIluQbCGoanKE$J6FCGDqb88FOoVrcQnHs+Gz4IbCvSOTGub+cmoJeveQ=	2021-11-13 14:46:51.120897-05	t	admin				t	t	2021-11-03 21:05:41.076572-04
\.


--
-- TOC entry 3848 (class 0 OID 16447)
-- Dependencies: 222
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- TOC entry 3850 (class 0 OID 16454)
-- Dependencies: 224
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- TOC entry 3852 (class 0 OID 16513)
-- Dependencies: 226
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2021-11-12 16:10:28.390911-05	Apparel	Industry object (Apparel)	1	[{"added": {}}]	12	1
2	2021-11-12 16:12:27.848832-05	1	IndustryStandards object (1)	1	[{"added": {}}]	11	1
3	2021-11-12 16:15:24.324874-05	Adidas	Company object (Adidas)	1	[{"added": {}}]	14	1
4	2021-11-13 11:46:31.498086-05	Diversity & Inclusion	Metrics object (Diversity & Inclusion)	1	[{"added": {}}]	15	1
5	2021-11-13 11:47:02.354346-05	WORKER EXPLOITATION	Metrics object (WORKER EXPLOITATION)	1	[{"added": {}}]	15	1
6	2021-11-13 11:47:14.960011-05	WASTE & POLLUTION	Metrics object (WASTE & POLLUTION)	1	[{"added": {}}]	15	1
7	2021-11-13 11:47:27.828534-05	ETHICAL SOURCING	Metrics object (ETHICAL SOURCING)	1	[{"added": {}}]	15	1
8	2021-11-13 11:47:57.602966-05	Discrimination	Metrics object (Discrimination)	1	[{"added": {}}]	15	1
9	2021-11-13 11:48:39.298872-05	Prohibits discrimination throughout the organization	Metrics object (Prohibits discrimination throughout the organization)	1	[{"added": {}}]	15	1
10	2021-11-13 11:48:57.93987-05	Actively works to identify and respond to discrimination concerns	Metrics object (Actively works to identify and respond to discrimination concerns)	1	[{"added": {}}]	15	1
11	2021-11-13 11:49:27.933856-05	Actively works to identify and respond to discrimination concerns	Metrics object (Actively works to identify and respond to discrimination concerns)	2	[{"changed": {"fields": ["Level"]}}]	15	1
12	2021-11-13 11:49:47.262304-05	1	IndustryStandards object (1)	2	[{"changed": {"fields": ["Metric"]}}]	11	1
13	2021-11-13 11:50:28.45794-05	2	IndustryStandards object (2)	1	[{"added": {}}]	11	1
14	2021-11-13 11:51:04.018415-05	3	IndustryStandards object (3)	1	[{"added": {}}]	11	1
15	2021-11-13 11:51:23.081992-05	4	IndustryStandards object (4)	1	[{"added": {}}]	11	1
16	2021-11-13 11:56:02.170448-05	1	Scores object (1)	1	[{"added": {}}]	10	1
17	2021-11-13 11:56:27.060975-05	2	Scores object (2)	1	[{"added": {}}]	10	1
18	2021-11-13 11:56:54.561579-05	3	Scores object (3)	1	[{"added": {}}]	10	1
19	2021-11-13 11:57:22.155179-05	3	Scores object (3)	2	[]	10	1
20	2021-11-13 11:58:23.757723-05	3	Scores object (3)	2	[{"changed": {"fields": ["Long text"]}}]	10	1
21	2021-11-13 11:58:54.902975-05	4	Scores object (4)	1	[{"added": {}}]	10	1
22	2021-11-13 12:01:56.398537-05	1	Citations object (1)	1	[{"added": {}}]	7	1
23	2021-11-13 12:02:47.975057-05	2	Citations object (2)	1	[{"added": {}}]	7	1
24	2021-11-13 12:03:11.663975-05	3	Citations object (3)	1	[{"added": {}}]	7	1
25	2021-11-13 12:05:50.259914-05	3	Scores object (3)	2	[{"changed": {"fields": ["Citation"]}}]	10	1
26	2021-11-13 13:09:53.299277-05	3	Scores object (3)	2	[{"changed": {"fields": ["Short text"]}}]	10	1
27	2021-11-13 13:10:15.476272-05	4	Scores object (4)	2	[{"changed": {"fields": ["Short text"]}}]	10	1
28	2021-11-13 13:24:37.993535-05	1	Facts object (1)	1	[{"added": {}}]	9	1
29	2021-11-13 13:26:10.296186-05	1	News object (1)	1	[{"added": {}}]	13	1
30	2021-11-16 14:31:22.898553-05	Abercrombie & Fitch	Company object (Abercrombie & Fitch)	1	[{"added": {}}]	14	1
31	2021-11-16 19:53:27.014678-05	Gender Equality	Metrics object (Gender Equality)	1	[{"added": {}}]	15	1
32	2021-11-16 19:53:43.731246-05	Cultural Diversity	Metrics object (Cultural Diversity)	1	[{"added": {}}]	15	1
33	2021-11-16 19:54:05.417095-05	Inclusivity	Metrics object (Inclusivity)	1	[{"added": {}}]	15	1
34	2021-11-16 19:55:18.38856-05	Commits to increasing gender diversity throughout the organization	Metrics object (Commits to increasing gender diversity throughout the organization)	1	[{"added": {}}]	15	1
35	2021-11-16 19:55:42.509011-05	Maintains strong female representation at all levels of leadership	Metrics object (Maintains strong female representation at all levels of leadership)	1	[{"added": {}}]	15	1
36	2021-11-16 19:55:58.127311-05	Ensures employees are receiving equal pay for equal work	Metrics object (Ensures employees are receiving equal pay for equal work)	1	[{"added": {}}]	15	1
37	2021-11-16 19:56:25.482397-05	Commits to increasing cultural diversity throughout the organization	Metrics object (Commits to increasing cultural diversity throughout the organization)	1	[{"added": {}}]	15	1
38	2021-11-16 19:56:38.884626-05	Maintains diverse ethnic representation at all levels of leadership	Metrics object (Maintains diverse ethnic representation at all levels of leadership)	1	[{"added": {}}]	15	1
39	2021-11-16 19:56:51.079802-05	Actively supports BIPOC and underrepresented communities	Metrics object (Actively supports BIPOC and underrepresented communities)	1	[{"added": {}}]	15	1
40	2021-11-16 19:57:13.731005-05	Fosters an inclusive workplace culture for LGBTQ+ employees	Metrics object (Fosters an inclusive workplace culture for LGBTQ+ employees)	1	[{"added": {}}]	15	1
41	2021-11-16 19:57:31.881959-05	Fosters an inclusive workplace culture for employees with disabilities	Metrics object (Fosters an inclusive workplace culture for employees with disabilities)	1	[{"added": {}}]	15	1
42	2021-11-16 19:57:44.357205-05	Promotes body positivity and messages of inclusivity to consumers	Metrics object (Promotes body positivity and messages of inclusivity to consumers)	1	[{"added": {}}]	15	1
43	2021-11-16 19:58:46.325486-05	Child Labour	Metrics object (Child Labour)	1	[{"added": {}}]	15	1
44	2021-11-16 19:58:57.880358-05	Forced Labour	Metrics object (Forced Labour)	1	[{"added": {}}]	15	1
45	2021-11-16 19:59:08.86512-05	Living Wage	Metrics object (Living Wage)	1	[{"added": {}}]	15	1
46	2021-11-16 19:59:24.204486-05	Working Conditions	Metrics object (Working Conditions)	1	[{"added": {}}]	15	1
47	2021-11-16 20:00:08.473468-05	Prohibits the use of child labour throughout the value chain	Metrics object (Prohibits the use of child labour throughout the value chain)	1	[{"added": {}}]	15	1
48	2021-11-16 20:00:25.379227-05	Actively works to identify and prevent child labour violations	Metrics object (Actively works to identify and prevent child labour violations)	1	[{"added": {}}]	15	1
49	2021-11-16 20:00:43.856409-05	Enrolls child labour victims in school after discovering violations	Metrics object (Enrolls child labour victims in school after discovering violations)	1	[{"added": {}}]	15	1
50	2021-11-16 20:01:25.166584-05	Prohibits the use of forced labour throughout the value chain	Metrics object (Prohibits the use of forced labour throughout the value chain)	1	[{"added": {}}]	15	1
51	2021-11-16 20:01:37.732871-05	Actively works to identify and prevent forced labour violations	Metrics object (Actively works to identify and prevent forced labour violations)	1	[{"added": {}}]	15	1
52	2021-11-16 20:01:51.065528-05	Supports the recovery of forced labour victims after discovering violations	Metrics object (Supports the recovery of forced labour victims after discovering violations)	1	[{"added": {}}]	15	1
53	2021-11-16 20:02:15.870157-05	Ensures all factory workers are paid a living wage	Metrics object (Ensures all factory workers are paid a living wage)	1	[{"added": {}}]	15	1
98	2021-11-18 19:25:01.780702-05	9	Scores object (9)	1	[{"added": {}}]	10	1
99	2021-11-18 19:25:37.377282-05	10	Scores object (10)	1	[{"added": {}}]	10	1
54	2021-11-16 20:02:36.71252-05	Works to increase wages and advocate for fair compensation in the industry	Metrics object (Works to increase wages and advocate for fair compensation in the industry)	1	[{"added": {}}]	15	1
55	2021-11-16 20:02:50.884617-05	Ensures wages and benefits are being paid on time and in full	Metrics object (Ensures wages and benefits are being paid on time and in full)	1	[{"added": {}}]	15	1
56	2021-11-16 20:03:24.372041-05	Guarantees the right to freedom of association and collective bargaining	Metrics object (Guarantees the right to freedom of association and collective bargaining)	1	[{"added": {}}]	15	1
57	2021-11-16 20:04:09.373063-05	Actively works to improve factory health and safety conditions	Metrics object (Actively works to improve factory health and safety conditions)	1	[{"added": {}}]	15	1
58	2021-11-16 20:04:23.410759-05	Ensures workers are not forced to work excessive hours	Metrics object (Ensures workers are not forced to work excessive hours)	1	[{"added": {}}]	15	1
59	2021-11-16 20:04:36.157238-05	Prohibits all forms of harassment or abuse towards workers	Metrics object (Prohibits all forms of harassment or abuse towards workers)	1	[{"added": {}}]	15	1
60	2021-11-16 20:04:50.888616-05	Compensates mistreated workers after discovering violations	Metrics object (Compensates mistreated workers after discovering violations)	1	[{"added": {}}]	15	1
61	2021-11-16 20:07:57.892784-05	Air Pollution	Metrics object (Air Pollution)	1	[{"added": {}}]	15	1
62	2021-11-16 20:08:11.583862-05	Water Pollution & Waste	Metrics object (Water Pollution & Waste)	1	[{"added": {}}]	15	1
63	2021-11-16 20:08:22.529884-05	Packaging Waste	Metrics object (Packaging Waste)	1	[{"added": {}}]	15	1
64	2021-11-16 20:08:37.301208-05	Material Waste	Metrics object (Material Waste)	1	[{"added": {}}]	15	1
65	2021-11-16 20:09:26.325453-05	Commits to using less energy throughout the value chain	Metrics object (Commits to using less energy throughout the value chain)	1	[{"added": {}}]	15	1
66	2021-11-16 20:09:37.513177-05	Commits to reducing greenhouse gas emissions throughout the value chain	Metrics object (Commits to reducing greenhouse gas emissions throughout the value chain)	1	[{"added": {}}]	15	1
67	2021-11-16 20:09:48.865873-05	Works towards reducing the operational carbon footprint	Metrics object (Works towards reducing the operational carbon footprint)	1	[{"added": {}}]	15	1
68	2021-11-16 20:10:00.092306-05	Works with suppliers to reduce manufacturing carbon footprints	Metrics object (Works with suppliers to reduce manufacturing carbon footprints)	1	[{"added": {}}]	15	1
69	2021-11-16 20:10:15.443298-05	Commits to using less water throughout the value chain	Metrics object (Commits to using less water throughout the value chain)	1	[{"added": {}}]	15	1
70	2021-11-16 20:10:29.302314-05	Works with suppliers to recycle water and reduce usage	Metrics object (Works with suppliers to recycle water and reduce usage)	1	[{"added": {}}]	15	1
71	2021-11-16 20:10:40.341295-05	Eliminates use of toxic chemicals in the production of products	Metrics object (Eliminates use of toxic chemicals in the production of products)	1	[{"added": {}}]	15	1
72	2021-11-16 20:10:57.081395-05	Filters wastewater to avoid contaminating fresh water	Metrics object (Filters wastewater to avoid contaminating fresh water)	1	[{"added": {}}]	15	1
73	2021-11-16 20:11:13.784099-05	Reduces use of plastic packaging and shopping bags	Metrics object (Reduces use of plastic packaging and shopping bags)	1	[{"added": {}}]	15	1
74	2021-11-16 20:11:25.125736-05	Uses recycled plastics and paper packaging materials	Metrics object (Uses recycled plastics and paper packaging materials)	1	[{"added": {}}]	15	1
75	2021-11-16 20:11:37.113311-05	Ensures all used packaging can be reused, recycled or composted	Metrics object (Ensures all used packaging can be reused, recycled or composted)	1	[{"added": {}}]	15	1
76	2021-11-16 20:11:47.830033-05	Works with suppliers to reduce, reuse and recycle all packaging waste	Metrics object (Works with suppliers to reduce, reuse and recycle all packaging waste)	1	[{"added": {}}]	15	1
77	2021-11-16 20:12:04.421568-05	Uses recycled materials in the production of products	Metrics object (Uses recycled materials in the production of products)	1	[{"added": {}}]	15	1
78	2021-11-16 20:12:15.617995-05	Repurposes or donates damaged and excess products	Metrics object (Repurposes or donates damaged and excess products)	1	[{"added": {}}]	15	1
79	2021-11-16 20:12:26.826335-05	Offers an effective take-back or repair program for customers	Metrics object (Offers an effective take-back or repair program for customers)	1	[{"added": {}}]	15	1
80	2021-11-16 20:13:12.11174-05	Works with suppliers to reduce, reuse and recycle all material waste	Metrics object (Works with suppliers to reduce, reuse and recycle all material waste)	1	[{"added": {}}]	15	1
81	2021-11-16 20:15:59.358037-05	Cotton Farming	Metrics object (Cotton Farming)	1	[{"added": {}}]	15	1
82	2021-11-16 20:16:08.727366-05	Deforestation	Metrics object (Deforestation)	1	[{"added": {}}]	15	1
83	2021-11-16 20:16:19.022121-05	Animal Welfare	Metrics object (Animal Welfare)	1	[{"added": {}}]	15	1
84	2021-11-16 20:16:32.011468-05	Sources sustainable cotton from certified farms	Metrics object (Sources sustainable cotton from certified farms)	1	[{"added": {}}]	15	1
85	2021-11-16 20:16:41.136821-05	Actively works to prevent unethical cotton farming practices	Metrics object (Actively works to prevent unethical cotton farming practices)	1	[{"added": {}}]	15	1
86	2021-11-16 20:16:57.400824-05	Sources sustainable forest-based fabrics from certified suppliers	Metrics object (Sources sustainable forest-based fabrics from certified suppliers)	1	[{"added": {}}]	15	1
87	2021-11-16 20:17:08.186301-05	Uses paper packaging materials from sustainable sources	Metrics object (Uses paper packaging materials from sustainable sources)	1	[{"added": {}}]	15	1
88	2021-11-16 20:17:18.03878-05	Actively works to protect forests and stop deforestation	Metrics object (Actively works to protect forests and stop deforestation)	1	[{"added": {}}]	15	1
89	2021-11-16 20:17:34.913396-05	Prohibits animal cruelty throughout the value chain	Metrics object (Prohibits animal cruelty throughout the value chain)	1	[{"added": {}}]	15	1
90	2021-11-16 20:17:44.939218-05	Sources sustainable leather or prohibits use	Metrics object (Sources sustainable leather or prohibits use)	1	[{"added": {}}]	15	1
91	2021-11-16 20:17:54.918636-05	Sources sustainable fur or prohibits use	Metrics object (Sources sustainable fur or prohibits use)	1	[{"added": {}}]	15	1
92	2021-11-16 20:18:18.322905-05	Sources sustainable wool from non-mulesed sheep	Metrics object (Sources sustainable wool from non-mulesed sheep)	1	[{"added": {}}]	15	1
93	2021-11-16 20:18:33.421798-05	Sources sustainable down from birds that were never force fed or live plucked	Metrics object (Sources sustainable down from birds that were never force fed or live plucked)	1	[{"added": {}}]	15	1
94	2021-11-18 19:22:43.407091-05	5	Scores object (5)	1	[{"added": {}}]	10	1
95	2021-11-18 19:23:28.532431-05	6	Scores object (6)	1	[{"added": {}}]	10	1
96	2021-11-18 19:24:00.220122-05	7	Scores object (7)	1	[{"added": {}}]	10	1
97	2021-11-18 19:24:33.943264-05	8	Scores object (8)	1	[{"added": {}}]	10	1
100	2021-11-18 19:26:08.274344-05	11	Scores object (11)	1	[{"added": {}}]	10	1
101	2021-11-18 19:26:37.121013-05	12	Scores object (12)	1	[{"added": {}}]	10	1
102	2021-11-18 19:27:07.545956-05	13	Scores object (13)	1	[{"added": {}}]	10	1
103	2021-11-18 19:27:42.154952-05	14	Scores object (14)	1	[{"added": {}}]	10	1
104	2021-11-18 19:28:21.595209-05	15	Scores object (15)	1	[{"added": {}}]	10	1
105	2021-11-18 19:28:56.870652-05	16	Scores object (16)	1	[{"added": {}}]	10	1
106	2021-11-18 19:56:18.601172-05	Discrimination	Metrics object (Discrimination)	2	[{"changed": {"fields": ["Types"]}}]	15	1
107	2021-11-18 19:56:39.534214-05	Gender Equality	Metrics object (Gender Equality)	2	[{"changed": {"fields": ["Types"]}}]	15	1
108	2021-11-18 19:57:06.423842-05	Cultural Diversity	Metrics object (Cultural Diversity)	2	[{"changed": {"fields": ["Types"]}}]	15	1
109	2021-11-18 19:57:19.784678-05	Inclusivity	Metrics object (Inclusivity)	2	[{"changed": {"fields": ["Types"]}}]	15	1
110	2021-11-18 19:57:53.633335-05	Prohibits discrimination throughout the organization	Metrics object (Prohibits discrimination throughout the organization)	2	[{"changed": {"fields": ["Types"]}}]	15	1
111	2021-11-18 19:58:19.995213-05	Actively works to identify and respond to discrimination concerns	Metrics object (Actively works to identify and respond to discrimination concerns)	2	[{"changed": {"fields": ["Types"]}}]	15	1
112	2021-11-18 19:59:02.591784-05	Commits to increasing gender diversity throughout the organization	Metrics object (Commits to increasing gender diversity throughout the organization)	2	[{"changed": {"fields": ["Types"]}}]	15	1
113	2021-11-18 19:59:31.90103-05	Maintains strong female representation at all levels of leadership	Metrics object (Maintains strong female representation at all levels of leadership)	2	[{"changed": {"fields": ["Types"]}}]	15	1
114	2021-11-18 19:59:50.172411-05	Ensures employees are receiving equal pay for equal work	Metrics object (Ensures employees are receiving equal pay for equal work)	2	[{"changed": {"fields": ["Types"]}}]	15	1
115	2021-11-18 20:00:19.958462-05	Commits to increasing cultural diversity throughout the organization	Metrics object (Commits to increasing cultural diversity throughout the organization)	2	[{"changed": {"fields": ["Types"]}}]	15	1
116	2021-11-18 20:00:39.840087-05	Maintains diverse ethnic representation at all levels of leadership	Metrics object (Maintains diverse ethnic representation at all levels of leadership)	2	[{"changed": {"fields": ["Types"]}}]	15	1
117	2021-11-18 20:01:20.642393-05	Actively supports BIPOC and underrepresented communities	Metrics object (Actively supports BIPOC and underrepresented communities)	2	[{"changed": {"fields": ["Types"]}}]	15	1
118	2021-11-18 20:01:50.869526-05	Fosters an inclusive workplace culture for LGBTQ+ employees	Metrics object (Fosters an inclusive workplace culture for LGBTQ+ employees)	2	[{"changed": {"fields": ["Types"]}}]	15	1
119	2021-11-18 20:02:08.375098-05	Fosters an inclusive workplace culture for employees with disabilities	Metrics object (Fosters an inclusive workplace culture for employees with disabilities)	2	[{"changed": {"fields": ["Types"]}}]	15	1
120	2021-11-18 20:14:46.606943-05	Diversity & Inclusion	Metrics object (Diversity & Inclusion)	2	[{"changed": {"fields": ["Types"]}}]	15	1
121	2021-11-18 20:15:42.888274-05	WORKER EXPLOITATION	Metrics object (WORKER EXPLOITATION)	2	[{"changed": {"fields": ["Types"]}}]	15	1
122	2021-11-18 20:16:01.070213-05	Child Labour	Metrics object (Child Labour)	2	[{"changed": {"fields": ["Types"]}}]	15	1
123	2021-11-18 20:16:14.47049-05	Forced Labour	Metrics object (Forced Labour)	2	[{"changed": {"fields": ["Types"]}}]	15	1
124	2021-11-18 20:16:28.063882-05	Living Wage	Metrics object (Living Wage)	2	[{"changed": {"fields": ["Types"]}}]	15	1
125	2021-11-18 20:16:56.414506-05	Working Conditions	Metrics object (Working Conditions)	2	[{"changed": {"fields": ["Types"]}}]	15	1
126	2021-11-18 20:17:46.60967-05	Prohibits the use of child labour throughout the value chain	Metrics object (Prohibits the use of child labour throughout the value chain)	2	[{"changed": {"fields": ["Types"]}}]	15	1
127	2021-11-18 20:18:01.174874-05	Actively works to identify and prevent child labour violations	Metrics object (Actively works to identify and prevent child labour violations)	2	[{"changed": {"fields": ["Types"]}}]	15	1
128	2021-11-18 20:18:19.331273-05	Enrolls child labour victims in school after discovering violations	Metrics object (Enrolls child labour victims in school after discovering violations)	2	[{"changed": {"fields": ["Types"]}}]	15	1
129	2021-11-18 20:18:46.651049-05	Prohibits the use of forced labour throughout the value chain	Metrics object (Prohibits the use of forced labour throughout the value chain)	2	[{"changed": {"fields": ["Types"]}}]	15	1
130	2021-11-18 20:19:01.413106-05	Actively works to identify and prevent forced labour violations	Metrics object (Actively works to identify and prevent forced labour violations)	2	[{"changed": {"fields": ["Types"]}}]	15	1
131	2021-11-18 20:19:17.667358-05	Supports the recovery of forced labour victims after discovering violations	Metrics object (Supports the recovery of forced labour victims after discovering violations)	2	[{"changed": {"fields": ["Types"]}}]	15	1
132	2021-11-18 20:19:44.517093-05	Ensures all factory workers are paid a living wage	Metrics object (Ensures all factory workers are paid a living wage)	2	[{"changed": {"fields": ["Types"]}}]	15	1
133	2021-11-18 20:20:24.010136-05	Works to increase wages and advocate for fair compensation in the industry	Metrics object (Works to increase wages and advocate for fair compensation in the industry)	2	[{"changed": {"fields": ["Types"]}}]	15	1
134	2021-11-18 20:20:46.389161-05	Ensures wages and benefits are being paid on time and in full	Metrics object (Ensures wages and benefits are being paid on time and in full)	2	[{"changed": {"fields": ["Types"]}}]	15	1
135	2021-11-18 20:21:03.352563-05	Guarantees the right to freedom of association and collective bargaining	Metrics object (Guarantees the right to freedom of association and collective bargaining)	2	[{"changed": {"fields": ["Types"]}}]	15	1
136	2021-11-18 20:21:45.570478-05	Actively works to improve factory health and safety conditions	Metrics object (Actively works to improve factory health and safety conditions)	2	[{"changed": {"fields": ["Types"]}}]	15	1
137	2021-11-18 20:22:12.685915-05	Ensures workers are not forced to work excessive hours	Metrics object (Ensures workers are not forced to work excessive hours)	2	[{"changed": {"fields": ["Types"]}}]	15	1
138	2021-11-18 20:22:41.267461-05	Prohibits all forms of harassment or abuse towards workers	Metrics object (Prohibits all forms of harassment or abuse towards workers)	2	[{"changed": {"fields": ["Types"]}}]	15	1
139	2021-11-18 20:23:00.588982-05	Compensates mistreated workers after discovering violations	Metrics object (Compensates mistreated workers after discovering violations)	2	[{"changed": {"fields": ["Types"]}}]	15	1
140	2021-11-18 20:23:25.272303-05	WASTE & POLLUTION	Metrics object (WASTE & POLLUTION)	2	[{"changed": {"fields": ["Types"]}}]	15	1
141	2021-11-18 20:23:43.832646-05	Air Pollution	Metrics object (Air Pollution)	2	[{"changed": {"fields": ["Types"]}}]	15	1
186	2021-11-18 20:54:34.980119-05	27	Scores object (27)	1	[{"added": {}}]	10	1
142	2021-11-18 20:24:15.207834-05	Water Pollution & Waste	Metrics object (Water Pollution & Waste)	2	[{"changed": {"fields": ["Types"]}}]	15	1
143	2021-11-18 20:24:26.472213-05	Packaging Waste	Metrics object (Packaging Waste)	2	[{"changed": {"fields": ["Types"]}}]	15	1
144	2021-11-18 20:25:11.030748-05	Material Waste	Metrics object (Material Waste)	2	[{"changed": {"fields": ["Types"]}}]	15	1
145	2021-11-18 20:26:09.751265-05	Commits to using less energy throughout the value chain	Metrics object (Commits to using less energy throughout the value chain)	2	[{"changed": {"fields": ["Types"]}}]	15	1
146	2021-11-18 20:26:23.019581-05	Commits to reducing greenhouse gas emissions throughout the value chain	Metrics object (Commits to reducing greenhouse gas emissions throughout the value chain)	2	[{"changed": {"fields": ["Types"]}}]	15	1
147	2021-11-18 20:26:54.201061-05	Works towards reducing the operational carbon footprint	Metrics object (Works towards reducing the operational carbon footprint)	2	[{"changed": {"fields": ["Types"]}}]	15	1
148	2021-11-18 20:27:14.116786-05	Works with suppliers to reduce manufacturing carbon footprints	Metrics object (Works with suppliers to reduce manufacturing carbon footprints)	2	[{"changed": {"fields": ["Types"]}}]	15	1
149	2021-11-18 20:27:42.973457-05	Commits to using less water throughout the value chain	Metrics object (Commits to using less water throughout the value chain)	2	[{"changed": {"fields": ["Types"]}}]	15	1
150	2021-11-18 20:28:08.175096-05	Works with suppliers to recycle water and reduce usage	Metrics object (Works with suppliers to recycle water and reduce usage)	2	[{"changed": {"fields": ["Types"]}}]	15	1
151	2021-11-18 20:28:27.553887-05	Eliminates use of toxic chemicals in the production of products	Metrics object (Eliminates use of toxic chemicals in the production of products)	2	[{"changed": {"fields": ["Types"]}}]	15	1
152	2021-11-18 20:28:44.717547-05	Filters wastewater to avoid contaminating fresh water	Metrics object (Filters wastewater to avoid contaminating fresh water)	2	[{"changed": {"fields": ["Types"]}}]	15	1
153	2021-11-18 20:29:25.697684-05	Reduces use of plastic packaging and shopping bags	Metrics object (Reduces use of plastic packaging and shopping bags)	2	[{"changed": {"fields": ["Types"]}}]	15	1
154	2021-11-18 20:29:48.729782-05	Uses recycled plastics and paper packaging materials	Metrics object (Uses recycled plastics and paper packaging materials)	2	[{"changed": {"fields": ["Types"]}}]	15	1
155	2021-11-18 20:30:10.649352-05	Ensures all used packaging can be reused, recycled or composted	Metrics object (Ensures all used packaging can be reused, recycled or composted)	2	[{"changed": {"fields": ["Types"]}}]	15	1
156	2021-11-18 20:30:28.586293-05	Works with suppliers to reduce, reuse and recycle all packaging waste	Metrics object (Works with suppliers to reduce, reuse and recycle all packaging waste)	2	[{"changed": {"fields": ["Types"]}}]	15	1
157	2021-11-18 20:31:07.832908-05	Uses recycled materials in the production of products	Metrics object (Uses recycled materials in the production of products)	2	[{"changed": {"fields": ["Types"]}}]	15	1
158	2021-11-18 20:31:30.644231-05	Repurposes or donates damaged and excess products	Metrics object (Repurposes or donates damaged and excess products)	2	[{"changed": {"fields": ["Types"]}}]	15	1
159	2021-11-18 20:31:58.125573-05	Offers an effective take-back or repair program for customers	Metrics object (Offers an effective take-back or repair program for customers)	2	[{"changed": {"fields": ["Types"]}}]	15	1
160	2021-11-18 20:32:13.834583-05	Works with suppliers to reduce, reuse and recycle all material waste	Metrics object (Works with suppliers to reduce, reuse and recycle all material waste)	2	[{"changed": {"fields": ["Types"]}}]	15	1
161	2021-11-18 20:32:30.765863-05	ETHICAL SOURCING	Metrics object (ETHICAL SOURCING)	2	[{"changed": {"fields": ["Types"]}}]	15	1
162	2021-11-18 20:32:46.964994-05	Cotton Farming	Metrics object (Cotton Farming)	2	[{"changed": {"fields": ["Types"]}}]	15	1
163	2021-11-18 20:33:00.082646-05	Deforestation	Metrics object (Deforestation)	2	[{"changed": {"fields": ["Types"]}}]	15	1
164	2021-11-18 20:33:12.430194-05	Animal Welfare	Metrics object (Animal Welfare)	2	[{"changed": {"fields": ["Types"]}}]	15	1
165	2021-11-18 20:33:43.720202-05	Sources sustainable cotton from certified farms	Metrics object (Sources sustainable cotton from certified farms)	2	[{"changed": {"fields": ["Types"]}}]	15	1
166	2021-11-18 20:33:56.708166-05	Actively works to prevent unethical cotton farming practices	Metrics object (Actively works to prevent unethical cotton farming practices)	2	[{"changed": {"fields": ["Types"]}}]	15	1
167	2021-11-18 20:34:16.872049-05	Sources sustainable forest-based fabrics from certified suppliers	Metrics object (Sources sustainable forest-based fabrics from certified suppliers)	2	[{"changed": {"fields": ["Types"]}}]	15	1
168	2021-11-18 20:34:40.195966-05	Uses paper packaging materials from sustainable sources	Metrics object (Uses paper packaging materials from sustainable sources)	2	[{"changed": {"fields": ["Types"]}}]	15	1
169	2021-11-18 20:34:52.071509-05	Actively works to protect forests and stop deforestation	Metrics object (Actively works to protect forests and stop deforestation)	2	[{"changed": {"fields": ["Types"]}}]	15	1
170	2021-11-18 20:35:22.417365-05	Prohibits animal cruelty throughout the value chain	Metrics object (Prohibits animal cruelty throughout the value chain)	2	[{"changed": {"fields": ["Types"]}}]	15	1
171	2021-11-18 20:35:40.663313-05	Sources sustainable leather or prohibits use	Metrics object (Sources sustainable leather or prohibits use)	2	[{"changed": {"fields": ["Types"]}}]	15	1
172	2021-11-18 20:36:14.336314-05	Sources sustainable fur or prohibits use	Metrics object (Sources sustainable fur or prohibits use)	2	[{"changed": {"fields": ["Types"]}}]	15	1
173	2021-11-18 20:36:33.723957-05	Sources sustainable wool from non-mulesed sheep	Metrics object (Sources sustainable wool from non-mulesed sheep)	2	[{"changed": {"fields": ["Types"]}}]	15	1
174	2021-11-18 20:36:56.814535-05	Sources sustainable down from birds that were never force fed or live plucked	Metrics object (Sources sustainable down from birds that were never force fed or live plucked)	2	[{"changed": {"fields": ["Types"]}}]	15	1
175	2021-11-18 20:37:35.038807-05	Promotes body positivity and messages of inclusivity to consumers	Metrics object (Promotes body positivity and messages of inclusivity to consumers)	2	[{"changed": {"fields": ["Types"]}}]	15	1
176	2021-11-18 20:47:38.773516-05	17	Scores object (17)	1	[{"added": {}}]	10	1
177	2021-11-18 20:48:01.218529-05	18	Scores object (18)	1	[{"added": {}}]	10	1
178	2021-11-18 20:48:46.966601-05	19	Scores object (19)	1	[{"added": {}}]	10	1
179	2021-11-18 20:49:22.501084-05	20	Scores object (20)	1	[{"added": {}}]	10	1
180	2021-11-18 20:50:31.493548-05	21	Scores object (21)	1	[{"added": {}}]	10	1
181	2021-11-18 20:50:51.089227-05	22	Scores object (22)	1	[{"added": {}}]	10	1
182	2021-11-18 20:51:41.95241-05	23	Scores object (23)	1	[{"added": {}}]	10	1
183	2021-11-18 20:52:25.463054-05	24	Scores object (24)	1	[{"added": {}}]	10	1
184	2021-11-18 20:53:14.244881-05	25	Scores object (25)	1	[{"added": {}}]	10	1
185	2021-11-18 20:53:31.958702-05	26	Scores object (26)	1	[{"added": {}}]	10	1
187	2021-11-18 20:55:32.67046-05	28	Scores object (28)	1	[{"added": {}}]	10	1
188	2021-11-18 20:56:21.217236-05	29	Scores object (29)	1	[{"added": {}}]	10	1
189	2021-11-18 20:57:04.051428-05	30	Scores object (30)	1	[{"added": {}}]	10	1
190	2021-11-18 20:57:28.032364-05	31	Scores object (31)	1	[{"added": {}}]	10	1
191	2021-11-18 20:58:26.060336-05	32	Scores object (32)	1	[{"added": {}}]	10	1
192	2021-11-18 20:59:22.795623-05	33	Scores object (33)	1	[{"added": {}}]	10	1
193	2021-11-18 21:00:05.047666-05	34	Scores object (34)	1	[{"added": {}}]	10	1
194	2021-11-18 21:01:08.168844-05	35	Scores object (35)	1	[{"added": {}}]	10	1
195	2021-11-19 20:50:30.816776-05	2	Facts object (2)	1	[{"added": {}}]	9	1
196	2021-11-19 20:50:43.764148-05	3	Facts object (3)	1	[{"added": {}}]	9	1
197	2021-11-19 20:50:54.404359-05	4	Facts object (4)	1	[{"added": {}}]	9	1
198	2021-11-19 20:58:57.244478-05	2	News object (2)	1	[{"added": {}}]	13	1
199	2021-11-21 19:59:46.360195-05	36	Scores object (36)	1	[{"added": {}}]	10	1
200	2021-11-21 20:00:17.799179-05	37	Scores object (37)	1	[{"added": {}}]	10	1
201	2021-11-21 20:01:44.984558-05	38	Scores object (38)	1	[{"added": {}}]	10	1
202	2021-11-21 20:03:19.118831-05	39	Scores object (39)	1	[{"added": {}}]	10	1
203	2021-11-21 20:06:33.819725-05	40	Scores object (40)	1	[{"added": {}}]	10	1
204	2021-11-21 20:07:25.291473-05	41	Scores object (41)	1	[{"added": {}}]	10	1
205	2021-11-21 20:07:58.6776-05	42	Scores object (42)	1	[{"added": {}}]	10	1
206	2021-11-21 20:27:07.106944-05	43	Scores object (43)	1	[{"added": {}}]	10	1
207	2021-11-21 20:27:38.825586-05	44	Scores object (44)	1	[{"added": {}}]	10	1
208	2021-11-21 20:28:16.87522-05	45	Scores object (45)	1	[{"added": {}}]	10	1
209	2021-11-21 20:28:37.241615-05	46	Scores object (46)	1	[{"added": {}}]	10	1
210	2021-11-21 20:28:51.71911-05	47	Scores object (47)	1	[{"added": {}}]	10	1
211	2021-11-21 20:29:20.612559-05	48	Scores object (48)	1	[{"added": {}}]	10	1
212	2021-11-21 20:29:42.729629-05	49	Scores object (49)	1	[{"added": {}}]	10	1
213	2021-11-21 20:30:06.179125-05	50	Scores object (50)	1	[{"added": {}}]	10	1
214	2021-11-21 20:30:40.382141-05	51	Scores object (51)	1	[{"added": {}}]	10	1
215	2021-11-21 20:30:59.340611-05	52	Scores object (52)	1	[{"added": {}}]	10	1
216	2021-11-21 20:31:15.685569-05	53	Scores object (53)	1	[{"added": {}}]	10	1
217	2021-11-21 20:31:33.567694-05	54	Scores object (54)	1	[{"added": {}}]	10	1
218	2021-11-21 20:31:57.073949-05	55	Scores object (55)	1	[{"added": {}}]	10	1
219	2021-11-21 20:32:22.379473-05	56	Scores object (56)	1	[{"added": {}}]	10	1
220	2021-11-21 20:32:54.465317-05	57	Scores object (57)	1	[{"added": {}}]	10	1
221	2021-11-21 21:02:15.108384-05	4	Corporate Equality Index 2021, page 32, Human Rights Campaign, 2020	1	[{"added": {}}]	7	1
222	2021-11-21 21:02:28.857921-05	1	Facts object (1)	2	[{"changed": {"fields": ["Citation"]}}]	9	1
223	2021-11-21 21:34:05.027682-05	5	"China: 83 Major Brands Implicated in Report on Forced Labour of Ethnic Minorities from Xinjiang Ass, , Business & Human Rights Resource Center, March 2020	1	[{"added": {}}]	7	1
224	2021-11-21 21:34:48.283381-05	6	"Apple, Nike and other major companies implicated in Muslim forced labour in China", , ABC News, March 2020	1	[{"added": {}}]	7	1
225	2021-11-21 21:35:11.441432-05	7	"Adidas' Response", , Business & Human Rights Resource Center, September 2020	1	[{"added": {}}]	7	1
226	2021-11-21 21:35:46.940473-05	1	News object (1)	2	[{"changed": {"fields": ["Citation"]}}]	13	1
227	2021-11-22 19:37:02.905449-05	5	IndustryStandards object (5)	1	[{"added": {}}]	11	1
228	2021-11-22 19:37:33.568523-05	6	IndustryStandards object (6)	1	[{"added": {}}]	11	1
229	2021-11-22 19:37:51.080763-05	7	IndustryStandards object (7)	1	[{"added": {}}]	11	1
230	2021-11-22 19:38:09.192028-05	8	IndustryStandards object (8)	1	[{"added": {}}]	11	1
231	2021-11-22 19:38:28.975429-05	9	IndustryStandards object (9)	1	[{"added": {}}]	11	1
232	2021-11-22 19:38:47.90057-05	10	IndustryStandards object (10)	1	[{"added": {}}]	11	1
233	2021-11-22 19:39:06.361061-05	11	IndustryStandards object (11)	1	[{"added": {}}]	11	1
234	2021-11-22 19:39:23.47875-05	12	IndustryStandards object (12)	1	[{"added": {}}]	11	1
235	2021-11-22 19:39:40.293605-05	13	IndustryStandards object (13)	1	[{"added": {}}]	11	1
236	2021-11-22 19:39:59.620413-05	14	IndustryStandards object (14)	1	[{"added": {}}]	11	1
237	2021-11-22 19:40:18.4729-05	15	IndustryStandards object (15)	1	[{"added": {}}]	11	1
238	2021-11-22 19:40:43.143655-05	16	IndustryStandards object (16)	1	[{"added": {}}]	11	1
239	2021-11-22 19:54:02.403832-05	8	Adidas Pledges to Increase Diversity. Some Employees Want More, , The New York Times, 2020	1	[{"added": {}}]	7	1
240	2021-11-22 19:54:43.061563-05	4	Scores object (4)	2	[{"changed": {"fields": ["Citation"]}}]	10	1
241	2021-11-22 20:11:14.502205-05	17	IndustryStandards object (17)	1	[{"added": {}}]	11	1
242	2021-11-22 20:12:00.483782-05	18	IndustryStandards object (18)	1	[{"added": {}}]	11	1
243	2021-11-23 16:13:42.425856-05	1	PoliticalAssociation object (1)	1	[{"added": {}}]	8	1
244	2021-11-23 16:13:58.786618-05	2	PoliticalAssociation object (2)	1	[{"added": {}}]	8	1
245	2021-11-23 16:14:23.674194-05	3	PoliticalAssociation object (3)	1	[{"added": {}}]	8	1
246	2021-11-23 16:26:54.156669-05	9	Adidas, , OpenSecrets, 2021	1	[{"added": {}}]	7	1
247	2021-11-23 16:27:16.150201-05	1	PoliticalAssociation object (1)	2	[{"changed": {"fields": ["Citation"]}}]	8	1
248	2021-11-24 15:59:32.597082-05	Reebok	Company object (Reebok)	1	[{"added": {}}]	14	1
\.


--
-- TOC entry 3838 (class 0 OID 16406)
-- Dependencies: 212
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	monest	citations
8	monest	politicalassociation
9	monest	facts
10	monest	scores
11	monest	industrystandards
12	monest	industry
13	monest	news
14	monest	company
15	monest	metrics
\.


--
-- TOC entry 3836 (class 0 OID 16397)
-- Dependencies: 210
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2021-11-03 21:00:40.817667-04
2	auth	0001_initial	2021-11-03 21:00:41.28633-04
3	admin	0001_initial	2021-11-03 21:00:41.328933-04
4	admin	0002_logentry_remove_auto_add	2021-11-03 21:00:41.339619-04
5	admin	0003_logentry_add_action_flag_choices	2021-11-03 21:00:41.35441-04
6	contenttypes	0002_remove_content_type_name	2021-11-03 21:00:41.390755-04
7	auth	0002_alter_permission_name_max_length	2021-11-03 21:00:41.417214-04
8	auth	0003_alter_user_email_max_length	2021-11-03 21:00:41.429856-04
9	auth	0004_alter_user_username_opts	2021-11-03 21:00:41.441685-04
10	auth	0005_alter_user_last_login_null	2021-11-03 21:00:41.50214-04
11	auth	0006_require_contenttypes_0002	2021-11-03 21:00:41.506394-04
12	auth	0007_alter_validators_add_error_messages	2021-11-03 21:00:41.521575-04
13	auth	0008_alter_user_username_max_length	2021-11-03 21:00:41.552237-04
14	auth	0009_alter_user_last_name_max_length	2021-11-03 21:00:41.566112-04
15	auth	0010_alter_group_name_max_length	2021-11-03 21:00:41.582024-04
16	auth	0011_update_proxy_permissions	2021-11-03 21:00:41.592878-04
17	auth	0012_alter_user_first_name_max_length	2021-11-03 21:00:41.605173-04
18	sessions	0001_initial	2021-11-03 21:00:41.629948-04
19	monest	0001_initial	2021-11-12 15:57:41.266701-05
20	monest	0002_auto_20211113_1642	2021-11-13 11:43:52.135803-05
21	monest	0003_auto_20211113_1643	2021-11-13 11:43:52.209296-05
22	monest	0004_alter_scores_long_text	2021-11-13 11:54:47.494391-05
23	monest	0005_alter_scores_long_text	2021-11-13 11:57:56.204175-05
24	monest	0006_auto_20211113_1701	2021-11-13 12:01:14.814621-05
25	monest	0007_scores_short_text	2021-11-13 13:08:14.259561-05
26	monest	0008_auto_20211113_1820	2021-11-13 13:20:42.68674-05
27	monest	0009_metrics_description	2021-11-13 13:59:11.519085-05
28	monest	0010_auto_20211119_0053	2021-11-18 19:55:19.06415-05
29	monest	0011_alter_metrics_types	2021-11-18 20:13:39.450328-05
\.


--
-- TOC entry 3853 (class 0 OID 16542)
-- Dependencies: 227
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
hgjq14fzdfnsjakuit5gyrmwowzrqmm1	.eJxVjMsOwiAQRf-FtSG8OoBL934DGWCQqoGktCvjv2uTLnR7zzn3xQJuaw3boCXMmZ2ZZKffLWJ6UNtBvmO7dZ56W5c58l3hBx382jM9L4f7d1Bx1G8dLSCBANRCZZ1RF-eBUtHFmgSWnEw4leStcXGKKHTWHlwxliQoEIq9P_SJN-A:1miRCO:niie2CDfo0rmjMDtCCWRyVZ9CzMoTdzgKm2oBIykt-0	2021-11-17 20:05:48.440737-05
nil4sx3d97jjx5y7q9rgc4lxdzrswdyq	.eJxVjMsOwiAQRf-FtSG8OoBL934DGWCQqoGktCvjv2uTLnR7zzn3xQJuaw3boCXMmZ2ZZKffLWJ6UNtBvmO7dZ56W5c58l3hBx382jM9L4f7d1Bx1G8dLSCBANRCZZ1RF-eBUtHFmgSWnEw4leStcXGKKHTWHlwxliQoEIq9P_SJN-A:1mlxww:bX_ceOOAGv5iBiSix9iu50_uhAa9HywiQaTv_SWZ-SU	2021-11-27 13:40:26.002944-05
kkzgvns2a8i0lldj45yjgnycvjcvh5s0	.eJxVjMsOwiAQRf-FtSG8OoBL934DGWCQqoGktCvjv2uTLnR7zzn3xQJuaw3boCXMmZ2ZZKffLWJ6UNtBvmO7dZ56W5c58l3hBx382jM9L4f7d1Bx1G8dLSCBANRCZZ1RF-eBUtHFmgSWnEw4leStcXGKKHTWHlwxliQoEIq9P_SJN-A:1mlyzD:nRVkBAW474Uf__eyIjlqLFVV37j-0dle8ADA9EtbipE	2021-11-27 14:46:51.139073-05
\.


--
-- TOC entry 3855 (class 0 OID 16552)
-- Dependencies: 229
-- Data for Name: monest_citations; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_citations (id, title, author, date, pages, publisher, url) FROM stdin;
1	Fair Play: Code of Conduct		2020	page 24	Adidas AG	
2	Annual Report 2019		December 2019		Adidas AG	
3	Guidelines on Employment		2013	page 16	Adidas AG	
4	Corporate Equality Index 2021		2020	page 32	Human Rights Campaign	
5	"China: 83 Major Brands Implicated in Report on Forced Labour of Ethnic Minorities from Xinjiang Ass		March 2020		Business & Human Rights Resource Center	https://www.business-humanrights.org/en/latest-news/china-83-major-brands-implicated-in-report-on-forced-labour-of-ethnic-minorities-from-xinjiang-assigned-to-factories-across-provinces-includes-compa
6	"Apple, Nike and other major companies implicated in Muslim forced labour in China"	Walden, Max	March 2020		ABC News	https://www.abc.net.au/news/2020-03-02/aspi-uyghur-china-forced-labour-report/12017650
7	"Adidas' Response"		September 2020		Business & Human Rights Resource Center	https://media.business-humanrights.org/media/documents/adidas_Response_BHHRC_21_Sept2020_Cebu.pdf
8	Adidas Pledges to Increase Diversity. Some Employees Want More		2020		The New York Times	
9	Adidas		2021		OpenSecrets	https://www.opensecrets.org/orgs/adidas-ag/totals?id=D000042006
\.


--
-- TOC entry 3856 (class 0 OID 16558)
-- Dependencies: 230
-- Data for Name: monest_company; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_company (name, description, parent_company, category, logo, similar_company_1, similar_company_2, similar_company_3, similar_company_4, industry_id) FROM stdin;
Adidas	is a sportswear brand with over 1,000 stores worldwide and headquartered in Herzogenaurach, Germany.		Sportswear	https://github.com/sophiasharifi/monestco/blob/main/images/logos/adidas%20logo.png?raw=true	Nike	Under Armour	Reebok	New Balance	Apparel
Abercrombie & Fitch	is a unisex apparel brand with over 800 stores worldwide and headquartered in New Albany, USA.		Unisex	https://github.com/sophiasharifi/monestco/blob/main/images/logos/ABERCROMBIE.png?raw=true	American Eagle	H&M	Levi's	Boohoo	Apparel
Reebok	is a sportswear brand with over 300 stores worldwide and headquartered in Boston, USA	Adidas	Sportswear	https://github.com/sophiasharifi/monestco/blob/main/images/logos/REEBOK.png?raw=true	New Balance	Nike	Under Armour	Champion	Apparel
\.


--
-- TOC entry 3867 (class 0 OID 16601)
-- Dependencies: 241
-- Data for Name: monest_facts; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_facts (id, heading, summary, company_id) FROM stdin;
2	Adidas breaks record for amount of shoes produced from plastic waste.	In 2019, Adidas produced eleven million pairs of shoes containing plastic waste collected from beaches and coastal regions. This was more than double the amount produced the year before.	Adidas
3	Adidas launches first performance shoe made from 100% recyclable materials.	Futurecraft Loop is Adidas' first 100% recyclable performance shoe made entirely from one material (TPU), using no glue or solvent. The shoe was first rolled out in April 2019, where consumers were asked to test and return the shoes for recycling. Futurecraft Loop was recognized by Time Magazine as one of the 'Best Inventions 2019'.	Adidas
4	Adidas launches sustainable offers for investors.	In September 2020, the Adidas sustainability bond amounting to €500M was issued and five times oversubscribed. Proceeds will be used to procure recycled materials, invest in renewable energy production, and support underrepresented communities.	Adidas
1	Adidas designated as a best place to work for the LGBTQ+ community.	In 2021, Adidas was one of 767 businesses to receive a 100% score on the Human Rights Campaign's 2020 Corporate Equality Index (CEI). To achieve this score, Adidas had comprehensive corporate policies and practices to ensure greater equity for LGBTQ+ workers and their families.	Adidas
\.


--
-- TOC entry 3869 (class 0 OID 16655)
-- Dependencies: 243
-- Data for Name: monest_facts_citation; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_facts_citation (id, facts_id, citations_id) FROM stdin;
1	1	4
\.


--
-- TOC entry 3857 (class 0 OID 16565)
-- Dependencies: 231
-- Data for Name: monest_industry; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_industry (name) FROM stdin;
Apparel
\.


--
-- TOC entry 3865 (class 0 OID 16594)
-- Dependencies: 239
-- Data for Name: monest_industrystandards; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_industrystandards (id, total, low, high, industry_id, metric_id) FROM stdin;
1	100	64.67	44.97	Apparel	Diversity & Inclusion
2	16	8.94	12.71	Apparel	Discrimination
3	6	3.87	5.6	Apparel	Prohibits discrimination throughout the organization
4	10	4.82	7.36	Apparel	Actively works to identify and respond to discrimination concerns
5	32	14.09	20.97	Apparel	Gender Equality
6	6	3.01	5.01	Apparel	Commits to increasing gender diversity throughout the organization
7	16	7.69	11.37	Apparel	Maintains strong female representation at all levels of leadership
8	10	2.71	5.88	Apparel	Ensures employees are receiving equal pay for equal work
9	32	11.08	19.57	Apparel	Cultural Diversity
10	8	2.16	5.19	Apparel	Commits to increasing cultural diversity throughout the organization
11	14	1.86	7.01	Apparel	Maintains diverse ethnic representation at all levels of leadership
12	10	7.01	9.01	Apparel	Actively supports BIPOC and underrepresented communities
13	20	9.24	13.05	Apparel	Inclusivity
14	6	3.01	5.01	Apparel	Fosters an inclusive workplace culture for LGBTQ+ employees
15	8	1.2	4.01	Apparel	Fosters an inclusive workplace culture for employees with disabilities
16	6	4.01	5.46	Apparel	Promotes body positivity and messages of inclusivity to consumers
17	100	34.64	50.81	Apparel	WORKER EXPLOITATION
18	18	7.16	10.54	Apparel	Child Labour
\.


--
-- TOC entry 3876 (class 0 OID 16682)
-- Dependencies: 250
-- Data for Name: monest_metrics; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_metrics (name, parent_id, description, types) FROM stdin;
Maintains strong female representation at all levels of leadership	Gender Equality		A2.2
Diversity & Inclusion	\N		A
WORKER EXPLOITATION	\N		B
Child Labour	WORKER EXPLOITATION		B1
Forced Labour	WORKER EXPLOITATION		B2
Living Wage	WORKER EXPLOITATION		B3
Working Conditions	WORKER EXPLOITATION		B4
Prohibits the use of child labour throughout the value chain	Child Labour		B1.1
Actively works to identify and prevent child labour violations	Child Labour		B1.2
WASTE & POLLUTION	\N		C
Air Pollution	WASTE & POLLUTION		C1
ETHICAL SOURCING	\N		D
Promotes body positivity and messages of inclusivity to consumers	Inclusivity		A4.3
Discrimination	Diversity & Inclusion		A1
Gender Equality	Diversity & Inclusion		A2
Cultural Diversity	Diversity & Inclusion		A3
Inclusivity	Diversity & Inclusion		A4
Prohibits discrimination throughout the organization	Discrimination		A1.1
Actively works to identify and respond to discrimination concerns	Discrimination		A1.2
Commits to increasing gender diversity throughout the organization	Gender Equality		A2.1
Ensures employees are receiving equal pay for equal work	Gender Equality		A2.3
Commits to increasing cultural diversity throughout the organization	Cultural Diversity		A3.1
Maintains diverse ethnic representation at all levels of leadership	Cultural Diversity		A3.2
Actively supports BIPOC and underrepresented communities	Cultural Diversity		A3.3
Fosters an inclusive workplace culture for LGBTQ+ employees	Inclusivity		A4.1
Fosters an inclusive workplace culture for employees with disabilities	Inclusivity		A4.2
Enrolls child labour victims in school after discovering violations	Child Labour		B1.3
Prohibits the use of forced labour throughout the value chain	Forced Labour		B2.1
Actively works to identify and prevent forced labour violations	Forced Labour		B2.2
Ensures all factory workers are paid a living wage	Living Wage		B3.1
Ensures wages and benefits are being paid on time and in full	Living Wage		B3.3
Actively works to improve factory health and safety conditions	Working Conditions		B4.1
Prohibits all forms of harassment or abuse towards workers	Working Conditions		B4.3
Compensates mistreated workers after discovering violations	Working Conditions		B4.4
Packaging Waste	WASTE & POLLUTION		C3
Material Waste	WASTE & POLLUTION		C4
Commits to using less energy throughout the value chain	Air Pollution		C1.1
Works with suppliers to reduce manufacturing carbon footprints	Air Pollution		C1.4
Commits to using less water throughout the value chain	Water Pollution & Waste		C2.1
Eliminates use of toxic chemicals in the production of products	Water Pollution & Waste		C2.3
Filters wastewater to avoid contaminating fresh water	Water Pollution & Waste		C2.4
Reduces use of plastic packaging and shopping bags	Packaging Waste		C3.1
Uses recycled plastics and paper packaging materials	Packaging Waste		C3.2
Ensures all used packaging can be reused, recycled or composted	Packaging Waste		C3.3
Works with suppliers to reduce, reuse and recycle all packaging waste	Packaging Waste		C3.4
Uses recycled materials in the production of products	Material Waste		C4.1
Repurposes or donates damaged and excess products	Material Waste		C4.2
Offers an effective take-back or repair program for customers	Material Waste		C4.3
Works with suppliers to reduce, reuse and recycle all material waste	Material Waste		C4.4
Cotton Farming	ETHICAL SOURCING		D1
Deforestation	ETHICAL SOURCING		D2
Animal Welfare	ETHICAL SOURCING		D3
Sources sustainable forest-based fabrics from certified suppliers	Deforestation		D2.1
Uses paper packaging materials from sustainable sources	Deforestation		D2.2
Actively works to protect forests and stop deforestation	Deforestation		D2.3
Prohibits animal cruelty throughout the value chain	Animal Welfare		D3.1
Sources sustainable leather or prohibits use	Animal Welfare		D3.2
Sources sustainable fur or prohibits use	Animal Welfare		D3.3
Sources sustainable wool from non-mulesed sheep	Animal Welfare		D3.4
Sources sustainable down from birds that were never force fed or live plucked	Animal Welfare		D3.5
Supports the recovery of forced labour victims after discovering violations	Forced Labour		B2.3
Works to increase wages and advocate for fair compensation in the industry	Living Wage		B3.2
Guarantees the right to freedom of association and collective bargaining	Living Wage		B3.4
Ensures workers are not forced to work excessive hours	Working Conditions		B4.2
Water Pollution & Waste	WASTE & POLLUTION		C2
Commits to reducing greenhouse gas emissions throughout the value chain	Air Pollution		C1.2
Works towards reducing the operational carbon footprint	Air Pollution		C1.3
Works with suppliers to recycle water and reduce usage	Water Pollution & Waste		C2.2
Sources sustainable cotton from certified farms	Cotton Farming		D1.1
Actively works to prevent unethical cotton farming practices	Cotton Farming		D1.2
\.


--
-- TOC entry 3863 (class 0 OID 16585)
-- Dependencies: 237
-- Data for Name: monest_news; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_news (id, title, summary, year, category, photo, issue_addressed, issue_addressed_text, responsibility_taken, responsibility_taken_text, company_id) FROM stdin;
2	Workers in Vietnam Allege that Adidas Used the Pandemic to Fire Them	Workers at Nike and Adidas claim that the company used the pandemic as an excuse to fire them. Specifically, this accusation was made by more than 150 Chinese workers against the manufacturing firm, Pou Chen. Pou Chen stated it had to do so to make up for losses incurred by a lack of sales during the pandemic.	2020	Covid	https://github.com/sophiasharifi/monestco/blob/main/images/adidas/Workers%20in%20Vietnam%20Allege%20that%20Adidas%20Used%20the%20Pandemic%20to%20Fire%20Them.jpeg?raw=true	Yes	Adidas has publicly commented on the issue and launched an internal investigation in response.	No	Adidas reached out to Pou Chen to investigate the layoffs. The company determined that there was no evidence that compensation payments given during layoffs were below the legal standard, and the firm still received the necessary approvals from the Vietnamese labour authority.	Adidas
1	Adidas Implicated in the Use of Forced Labour of Uyghur Minorities	In March 2020, the Australian Strategic Policy Institute (ASPI) identified 83 foreign and Chinese companies, including Adidas, as allegedly directly or indirectly benefiting from the use of Uyghur workers outside Xinjiang through potentially abusive labour transfer programs. These Uyghur workers, graduated from "re-education" camps in Xinjiang, were forced to transfer away from home and work under unethical conditions.	2020	WE	https://github.com/sophiasharifi/monestco/blob/main/images/adidas/Adidas%20Implicated%20in%20Use%20of%20Forced%20Labour%20of%20Uyghur%20Minority.jpg?raw=true	Yes	Adidas has publicly commented on the issue and pledged to cease all activity with the suppliers involved.	Yes	In 2020, Adidas agreed to cease all activity with suppliers and subcontractors associated with Uighur forced labor, forcibly cutting out the Xinjiang region from the company's supply chain.	Adidas
\.


--
-- TOC entry 3871 (class 0 OID 16662)
-- Dependencies: 245
-- Data for Name: monest_news_citation; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_news_citation (id, news_id, citations_id) FROM stdin;
1	1	5
2	1	6
3	1	7
\.


--
-- TOC entry 3861 (class 0 OID 16578)
-- Dependencies: 235
-- Data for Name: monest_politicalassociation; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_politicalassociation (id, year, rep, dem, individual_percentage, company_id) FROM stdin;
2	2018	4150	0	1	Adidas
3	2016	1100	100	1	Adidas
1	2020	7160	0	1	Adidas
\.


--
-- TOC entry 3873 (class 0 OID 16669)
-- Dependencies: 247
-- Data for Name: monest_politicalassociation_citation; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_politicalassociation_citation (id, politicalassociation_id, citations_id) FROM stdin;
1	1	9
\.


--
-- TOC entry 3859 (class 0 OID 16571)
-- Dependencies: 233
-- Data for Name: monest_scores; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_scores (id, score, long_text, company_id, metric_id, short_text) FROM stdin;
1	59		Adidas	Diversity & Inclusion	
2	13		Adidas	Discrimination	
20	8	Adidas performs unannounced factory audits and listens to worker complaints through a confidential hotline to identify violations. Adidas prohibits unauthorized subcontractors and traces its supply chain. However, Adidas does not take additional measures to prevent bias when auditing suppliers.	Adidas	Actively works to identify and prevent child labour violations	Effectively monitors suppliers and worker feedback.
21	3	Adidas requires suppliers to pay for schooling and the continued payment of wages upon discovering child labour violations. In past incidences, the company has worked with NGOs to identify education options. However, Adidas does not describe specific remediation for children above the minimum age in dangerous situations.	Adidas	Enrolls child labour victims in school after discovering violations	Requires suppliers to provide remediation for children under the minimum age.
22	14		Adidas	Forced Labour	
3	6	Adidas does not tolerate any form of discrimination, including microaggressions, stating non-discriminatory policies for hiring, promotion, training and remuneration. Adidas has a Global Anti-Discrimination and provides employee training to combat stereotyping bias.	Adidas	Prohibits discrimination throughout the organization	Prohibits discrimination and provides training to prevent stereotyping bias.
5	16		Adidas	Gender Equality	
6	5	In 2019, Adidas achieved its goal to increase female management representation to 32% by 2020. Adidas has a vague strategy to increase female recruitment and retention, but has established three internal groups to increase female advancement: Women's Networking Group, Global High Potential Group, and Going for Gold.	Adidas	Commits to increasing gender diversity throughout the organization	Has female advancement goals and internal leadership initiatives.
7	7	Women make up 52% of Adidas' global operations. In senior management, 34% of positions were represented by women. In top leadership, 17% (1/6) of executive officers and 31% (5/16) of the board are women.	Adidas	Maintains strong female representation at all levels of leadership	34% of management, 31% of the board and 17% of the executive team are women.
8	4	Adidas only reports wage gap information for its UK operations. On average, women are paid 15% less (8% median) for hourly wages and 54% less (-2% median) for bonus pay. Adidas states a vague commitment towards decreasing the wage gap in senior roles.	Adidas	Ensures employees are receiving equal pay for equal work	In the UK, women are paid 15% less on average (8% median).
9	18		Adidas	Cultural Diversity	
10	8	Adidas aims to increase Black and Latin representation to 50% of new hires, 12% of leadership in the US, and 20-30% of corporate roles by 2025. The company also has a strategy to hire through a scholarship program for Black and Latin students.	Adidas	Commits to increasing cultural diversity throughout the organization	Has specific goals and actions to increase cultural diversity.
11	0	Adidas does not disclose its ethnic breakdown across the general workforce, management levels, or executive levels.	Adidas	Maintains diverse ethnic representation at all levels of leadership	Does not disclose ethnic breakdown of employees.
12	10	Adidas offers extensive training on diversity and stereotyping bias and as well as the importance of many cultural holidays. Adidas has signed the Juneteenth Pledge and pledged to invest $20M into Black communities to fund sports and career development programs.	Adidas	Actively supports BIPOC and underrepresented communities	Provides extensive D&I training and pledges to invest $20M into Black communities.
13	12		Adidas	Inclusivity	
14	6	Adidas supports LGBTQ+ communities through its 2020 Pride Collection and efforts taken to ensure athletes can come out without fear of losing their contracts. Adidas also provides LGBTQ+ education training, inclusive benefits and resource groups to support employees.	Adidas	Fosters an inclusive workplace culture for LGBTQ+ employees	Offers inclusive benefits, firm-wide training and supports the LGBTQ+ community.
15	0	Adidas does not describe actions taken to increase accessibility in its store operations. Adidas does not have strategies to increase hiring employees with disabilities or initiatives to provide internal support beyond basic accommodations.	Adidas	Fosters an inclusive workplace culture for employees with disabilities	Lacks employee accessibility training and inclusive hiring strategies.
16	6	Adidas' marketing efforts show a diverse representation of models. It also offers inclusive sizing up to 4XL in partnership with the Universal Standard. In 2020, Adidas launched its "Reimagine Sport" campaign showcasing female athletes from different cultural backgrounds.	Adidas	Promotes body positivity and messages of inclusivity to consumers	Has diverse representation, inclusive sizing and targeted campaigns.
17	65		Adidas	WORKER EXPLOITATION	
18	15		Adidas	Child Labour	
19	4	Adidas prohibits direct and indirect suppliers from using child labour. Adidas vets suppliers for child labour before entering contracts and takes corrective action if violations are found.	Adidas	Prohibits the use of child labour throughout the value chain	Prohibits child labour and refuses to work with at-risk suppliers.
23	4	Adidas prohibits direct and indirect suppliers from using forced labour. Adidas vets suppliers for forced labour before entering contracts and takes corrective action if violations are found.	Adidas	Prohibits the use of forced labour throughout the value chain	Prohibits forced labour and refuses to work with at-risk suppliers.
24	8	Adidas performs unannounced factory audits and listens to worker complaints through a confidential hotline to identify violations. Adidas prohibits unauthorized subcontractors and traces its supply chain. However, Adidas does not take additional measures to prevent bias when auditing suppliers.	Adidas	Actively works to identify and prevent forced labour violations	Effectively monitors suppliers and worker feedback.
25	2	Adidas has faced and denied past forced labour allegations. Adidas requires suppliers bear responsibility of providing remediation, but has not implemented processes to ensure such policies are implemented.	Adidas	Supports the recovery of forced labour victims after discovering violations	Works with suppliers to develop remediation plans for victims.
26	18		Adidas	Living Wage	
27	3	Adidas states that it does not determine worker wages and asks suppliers to pay the legal wage. Adidas safeguards wages in price negotiations by adjusting prices to reflect the cost of production, paying suppliers on time and eliminating recruitment fees. However, there is no evidence factory workers are currently paid a living wage.	Adidas	Ensures all factory workers are paid a living wage	Adjusts purchasing prices to reflect the cost of production.
28	9	Adidas makes vague commitments to improve wages in the supply chain. Adidas deploys wage assessment tools and benchmarks wages, but does not trace its entire supply chain. Adidas aligns with the FLA to promote fair compensation and has signed three letters to the Cambodian government advocating for fair wages.	Adidas	Works to increase wages and advocate for fair compensation in the industry	Calculates wage levels and works with external organizations.
29	2	Adidas requires suppliers to pay wages and benefits on time and in full, but does not mention publishing wage information for workers. Adidas states that its suppliers are monitored but does not mention how this is achieved.	Adidas	Ensures wages and benefits are being paid on time and in full	Only requires suppliers to pay workers on time and lacks wage transparency.
30	4	Adidas requires all suppliers to respect the right to freedom of association and collective bargaining. Adidas vets suppliers for compliance before entering contracts and takes corrective action if violations are found.	Adidas	Guarantees the right to freedom of association and collective bargaining	Ensures worker rights are respected and refuses to work with at-risk suppliers.
31	18		Adidas	Working Conditions	
32	8	Adidas sets clear health and safety requirements and refuses to work with at-risk suppliers. Adidas has a machine safety project, has signed the Accord on Fire and Safety in Bangladesh, and also invested in reducing VOC use from 100g per pair in 1999 to 11g in 2019. However, initiatives do not extend to indirect suppliers	Adidas	Actively works to improve factory health and safety conditions	Has a machine safety program and works to reduce VOCs.
33	6	Adidas prohibits all suppliers from enforcing excessive working hours. Adidas vaguely commits to minimise late order changes and provide suppliers with advance notice of production orders, but implementation of such policies are questionable.	Adidas	Ensures workers are not forced to work excessive hours	Gives suppliers advance notice of orders to mitigate risks.
34	4	Adidas prohibits direct and indirect suppliers from abusing workers. Adidas vets suppliers for compliance before entering contracts and takes corrective action if violations are found.	Adidas	Prohibits all forms of harassment or abuse towards workers	Prohibits worker mistreatment and refuses to work with at-risk suppliers.
35	0	Adidas has not implemented processes to specifically remediate worker mistreatment violations. Adidas does not describe remediation provided to support and compensate victims if future violations were to occur.	Adidas	Compensates mistreated workers after discovering violations	Does not provide remediation for mistreated workers.
36	64		Adidas	WASTE & POLLUTION	
37	23		Adidas	Air Pollution	
38	4	Adidas commits to reducing energy consumption by 20% for direct and indirect suppliers, and surpassed the goal with a 23% reduction in 2020. Adidas uses Environmental Key Performance Indicator tools to track and manage energy across its supply chain.	Adidas	Commits to using less energy throughout the value chain	Achieved a 23% energy use reduction in 2020.
39	6	From 2015-2020, Adidas reduced net emissions by 55% and aims to achieve carbon neutrality for its owned operations by 2025. Adidas also plans to reduce 30% emissions by 2030 and become climate neutral by 2050 for the value chain. Adidas tracks emissions data for its suppliers, but does not publish emissions data for the supply chain.	Adidas	Commits to reducing greenhouse gas emissions throughout the value chain	Aims to reduce emissions by 30% by 2030 across the value chain.
40	7	Adidas operates 14 LEED-certified locations and uses photovoltaic panels to produce green electricity for its headquarters and largest distribution center. Adidas purchases renewable energy certificates, but lacks goals to increase renewable energy use. In 2019, Adidas accumulated a 52% absolute net energy use reduction in its owned and operated facilities.	Adidas	Works towards reducing the operational carbon footprint	Achieved a 52% absolute energy reduction in 2019.
41	6	Adidas mobilized over 40 suppliers who identified 400+ saving opportunities with annual projections to save 350M MJ of energy. Adidas aims for all strategic suppliers to adopt renewable energy by 2025 and as of 2019, 20% has adopted rooftop solar photovoltaic and biomass. Adidas also offers intensive supplier training events on meeting its the carbon footprint reduction goals.	Adidas	Works with suppliers to reduce manufacturing carbon footprints	Actively works with suppliers to reduce energy use and emissions.
42	17		Adidas	Water Pollution & Waste	
43	4	Adidas aims to reduce water use by 20% for strategic suppliers that represent 80% of all manufacturing facilities and by 50% for suppliers that specialize in printing and dyeing. Adidas uses a E-KPI tool to track and manage water consumption across the supply chain, but progress is unknown.	Adidas	Commits to using less water throughout the value chain	Aims to reduce water by 20% for key suppliers and 50% for printing and dyeing.
44	4	In 2018, Adidas implemented a Water Investment Plan with facilities in five main sourcing locations, saving over 4M m2 of water. Adidas also launched a wastewater recycling program with a facility in China, achieving a 30% water recycling rate.	Adidas	Works with suppliers to recycle water and reduce usage	Has a water investment plan which has saved over 4M m2 of water.
45	6	Adidas requires suppliers to publish all chemicals used in production and as a member of ZDHC, it restricts the use of PAHs, Phthalates, APs and APEOs. Adidas has been investing in R&D to reduce PFCs and find friendlier alternatives. In 2017, over 99% of Adidas's products were PFC-free.	Adidas	Eliminates use of toxic chemicals in the production of products	Has eliminated PFCs in 99% of products and restricts use of other chemicals.
46	3	Adidas requires suppliers to follow ZDHC Wastewater guidelines and report wastewater test results bi-annually. In 2019, 234 test assessments where conducted and the majority of its facilities met local wastewater requirements, but the percentage is unknown. Adidas lacks specific strategies and initiatives taken to address wastewater management.	Adidas	Filters wastewater to avoid contaminating fresh water	Tests and reports supplier wastewater compliance bi-annually.
47	10		Adidas	Packaging Waste	
48	4	Adidas eliminated plastic shopping bags and single-use plastics worldwide in 2018, avoiding 40 tonnes of plastic waste annually. Adidas still uses plastic polybags in ecommerce shipments, but donated $1.5M EUR to Fashion for Good to explore polybag innovations for reducing plastic waste in the supply chain.	Adidas	Reduces use of plastic packaging and shopping bags	Has eliminated plastic shopping bags and single-use plastics in 2018.
49	4	Adidas aims to transition to 100% recycled LDPE polybags by 2021 for product packaging, but does not commit towards sourcing recycled paper packaging. Adidas uses recycled polybag materials in plastic packaging, but does not currently use recycled paper.	Adidas	Uses recycled plastics and paper packaging materials	Aims to use 100% recycled LDPE polybags by 2021 for product packaging.
50	1	Adidas's cardboard shoeboxes can be recycled, but no other information is disclosed for other packaging materials. Adidas does not make efforts to encourage consumers to reduce, reuse or recycle packaging.	Adidas	Ensures all used packaging can be reused, recycled or composted	Cardboard shoeboxes can be recycled.
51	1	Adidas describes vague efforts to reduce plastic use across the supply chain, including a recycling loop for transport packaging in Spain, but specific actions taken and results achieved are unknown.	Adidas	Works with suppliers to reduce, reuse and recycle all packaging waste	Implemented a recycling loop for transport packaging in Spain, but no other initiatives.
52	14		Adidas	Material Waste	
53	7	Adidas currently uses 66% recycled polyester in its products. Adidas commits to using 100% recycled polyester by 2024 but does not commit towards sourcing recycled viscose or other synthetic materials.	Adidas	Uses recycled materials in the production of products	Uses 66% recycled polyester and aims to use 100% by 2024.
54	1	Adidas recycles and redirects pre-market products that fail to meet quality standards, but details of such initiatives are unclear. Adidas does not describe additional actions taken to recycle or repurpose damaged, returned, and excess products. No efforts are made to increase material circularity.	Adidas	Repurposes or donates damaged and excess products	Redirects pre-market products that fail quality standards, but details are vague.
55	1	Adidas has an Infinite Play program for consumers in the UK to donate used items in exchange for gift cards. However, the results of this program are unknown and providing gift cards encourages further consumption. No additional efforts are taken to extend the first life of products.	Adidas	Offers an effective take-back or repair program for customers	Collects and donates used items in the UK, with questionable efficacy.
56	5	Adidas uses E-KPI tracking systems to track supplier waste, although details are vague. From 2016-2019, Adidas achieved a 30% reduction in waste volume at strategic direct and indirect supplier facilities, successfully surpassing its original 20% goal for 2020. No initiatives are taken to increase material circularity across the supply chain.	Adidas	Works with suppliers to reduce, reuse and recycle all material waste	Achieved a 30% waste reduction in strategic supplier facilities from 2016-2019.
57	34		Adidas	ETHICAL SOURCING	
4	7	Adidas provides accessible reporting channels for employees and prohibits retaliation, but does not describe a process for resolving allegations. Adidas has faced discrimination complaints in recent years and implemented training for leadership to respond to allegations.	Adidas	Actively works to identify and respond to discrimination concerns	Has accessible reporting hotlines and vague processes to address complaints.
\.


--
-- TOC entry 3875 (class 0 OID 16676)
-- Dependencies: 249
-- Data for Name: monest_scores_citation; Type: TABLE DATA; Schema: public; Owner: monest
--

COPY public.monest_scores_citation (id, scores_id, citations_id) FROM stdin;
1	3	1
2	3	2
3	3	3
4	4	8
5	4	1
\.


--
-- TOC entry 3901 (class 0 OID 0)
-- Dependencies: 215
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- TOC entry 3902 (class 0 OID 0)
-- Dependencies: 217
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- TOC entry 3903 (class 0 OID 0)
-- Dependencies: 213
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 60, true);


--
-- TOC entry 3904 (class 0 OID 0)
-- Dependencies: 221
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- TOC entry 3905 (class 0 OID 0)
-- Dependencies: 219
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 1, true);


--
-- TOC entry 3906 (class 0 OID 0)
-- Dependencies: 223
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- TOC entry 3907 (class 0 OID 0)
-- Dependencies: 225
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 248, true);


--
-- TOC entry 3908 (class 0 OID 0)
-- Dependencies: 211
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 15, true);


--
-- TOC entry 3909 (class 0 OID 0)
-- Dependencies: 209
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 29, true);


--
-- TOC entry 3910 (class 0 OID 0)
-- Dependencies: 228
-- Name: monest_citations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.monest_citations_id_seq', 9, true);


--
-- TOC entry 3911 (class 0 OID 0)
-- Dependencies: 242
-- Name: monest_facts_citation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.monest_facts_citation_id_seq', 1, true);


--
-- TOC entry 3912 (class 0 OID 0)
-- Dependencies: 240
-- Name: monest_facts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.monest_facts_id_seq', 4, true);


--
-- TOC entry 3913 (class 0 OID 0)
-- Dependencies: 238
-- Name: monest_industrystandards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.monest_industrystandards_id_seq', 18, true);


--
-- TOC entry 3914 (class 0 OID 0)
-- Dependencies: 244
-- Name: monest_news_citation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.monest_news_citation_id_seq', 3, true);


--
-- TOC entry 3915 (class 0 OID 0)
-- Dependencies: 236
-- Name: monest_news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.monest_news_id_seq', 2, true);


--
-- TOC entry 3916 (class 0 OID 0)
-- Dependencies: 246
-- Name: monest_politicalassociation_citation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.monest_politicalassociation_citation_id_seq', 1, true);


--
-- TOC entry 3917 (class 0 OID 0)
-- Dependencies: 234
-- Name: monest_politicalassociation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.monest_politicalassociation_id_seq', 3, true);


--
-- TOC entry 3918 (class 0 OID 0)
-- Dependencies: 248
-- Name: monest_scores_citation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.monest_scores_citation_id_seq', 5, true);


--
-- TOC entry 3919 (class 0 OID 0)
-- Dependencies: 232
-- Name: monest_scores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: monest
--

SELECT pg_catalog.setval('public.monest_scores_id_seq', 57, true);


--
-- TOC entry 3569 (class 2606 OID 16540)
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- TOC entry 3574 (class 2606 OID 16470)
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- TOC entry 3577 (class 2606 OID 16436)
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 3571 (class 2606 OID 16427)
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- TOC entry 3564 (class 2606 OID 16461)
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- TOC entry 3566 (class 2606 OID 16420)
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- TOC entry 3585 (class 2606 OID 16452)
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- TOC entry 3588 (class 2606 OID 16485)
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- TOC entry 3579 (class 2606 OID 16443)
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- TOC entry 3591 (class 2606 OID 16459)
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 3594 (class 2606 OID 16499)
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- TOC entry 3582 (class 2606 OID 16535)
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- TOC entry 3597 (class 2606 OID 16521)
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- TOC entry 3559 (class 2606 OID 16413)
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- TOC entry 3561 (class 2606 OID 16411)
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3557 (class 2606 OID 16404)
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3601 (class 2606 OID 16548)
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- TOC entry 3604 (class 2606 OID 16557)
-- Name: monest_citations monest_citations_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_citations
    ADD CONSTRAINT monest_citations_pkey PRIMARY KEY (id);


--
-- TOC entry 3609 (class 2606 OID 16564)
-- Name: monest_company monest_company_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_company
    ADD CONSTRAINT monest_company_pkey PRIMARY KEY (name);


--
-- TOC entry 3641 (class 2606 OID 16700)
-- Name: monest_facts_citation monest_facts_citation_facts_id_citations_id_a2cb59b5_uniq; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_facts_citation
    ADD CONSTRAINT monest_facts_citation_facts_id_citations_id_a2cb59b5_uniq UNIQUE (facts_id, citations_id);


--
-- TOC entry 3643 (class 2606 OID 16660)
-- Name: monest_facts_citation monest_facts_citation_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_facts_citation
    ADD CONSTRAINT monest_facts_citation_pkey PRIMARY KEY (id);


--
-- TOC entry 3637 (class 2606 OID 16608)
-- Name: monest_facts monest_facts_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_facts
    ADD CONSTRAINT monest_facts_pkey PRIMARY KEY (id);


--
-- TOC entry 3612 (class 2606 OID 16569)
-- Name: monest_industry monest_industry_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_industry
    ADD CONSTRAINT monest_industry_pkey PRIMARY KEY (name);


--
-- TOC entry 3631 (class 2606 OID 16688)
-- Name: monest_industrystandards monest_industrystandards_metric_id_key; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_industrystandards
    ADD CONSTRAINT monest_industrystandards_metric_id_key UNIQUE (metric_id);


--
-- TOC entry 3633 (class 2606 OID 16599)
-- Name: monest_industrystandards monest_industrystandards_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_industrystandards
    ADD CONSTRAINT monest_industrystandards_pkey PRIMARY KEY (id);


--
-- TOC entry 3666 (class 2606 OID 16686)
-- Name: monest_metrics monest_metrics_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_metrics
    ADD CONSTRAINT monest_metrics_pkey PRIMARY KEY (name);


--
-- TOC entry 3669 (class 2606 OID 16779)
-- Name: monest_metrics monest_metrics_types_4f498583_uniq; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_metrics
    ADD CONSTRAINT monest_metrics_types_4f498583_uniq UNIQUE (types);


--
-- TOC entry 3646 (class 2606 OID 16714)
-- Name: monest_news_citation monest_news_citation_news_id_citations_id_03f824e7_uniq; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_news_citation
    ADD CONSTRAINT monest_news_citation_news_id_citations_id_03f824e7_uniq UNIQUE (news_id, citations_id);


--
-- TOC entry 3649 (class 2606 OID 16667)
-- Name: monest_news_citation monest_news_citation_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_news_citation
    ADD CONSTRAINT monest_news_citation_pkey PRIMARY KEY (id);


--
-- TOC entry 3626 (class 2606 OID 16592)
-- Name: monest_news monest_news_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_news
    ADD CONSTRAINT monest_news_pkey PRIMARY KEY (id);


--
-- TOC entry 3651 (class 2606 OID 16728)
-- Name: monest_politicalassociation_citation monest_politicalassociat_politicalassociation_id__0bb708c4_uniq; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_politicalassociation_citation
    ADD CONSTRAINT monest_politicalassociat_politicalassociation_id__0bb708c4_uniq UNIQUE (politicalassociation_id, citations_id);


--
-- TOC entry 3655 (class 2606 OID 16674)
-- Name: monest_politicalassociation_citation monest_politicalassociation_citation_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_politicalassociation_citation
    ADD CONSTRAINT monest_politicalassociation_citation_pkey PRIMARY KEY (id);


--
-- TOC entry 3622 (class 2606 OID 16583)
-- Name: monest_politicalassociation monest_politicalassociation_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_politicalassociation
    ADD CONSTRAINT monest_politicalassociation_pkey PRIMARY KEY (id);


--
-- TOC entry 3658 (class 2606 OID 16681)
-- Name: monest_scores_citation monest_scores_citation_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_scores_citation
    ADD CONSTRAINT monest_scores_citation_pkey PRIMARY KEY (id);


--
-- TOC entry 3661 (class 2606 OID 16742)
-- Name: monest_scores_citation monest_scores_citation_scores_id_citations_id_049c53ac_uniq; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_scores_citation
    ADD CONSTRAINT monest_scores_citation_scores_id_citations_id_049c53ac_uniq UNIQUE (scores_id, citations_id);


--
-- TOC entry 3618 (class 2606 OID 16576)
-- Name: monest_scores monest_scores_pkey; Type: CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_scores
    ADD CONSTRAINT monest_scores_pkey PRIMARY KEY (id);


--
-- TOC entry 3567 (class 1259 OID 16541)
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- TOC entry 3572 (class 1259 OID 16481)
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- TOC entry 3575 (class 1259 OID 16482)
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- TOC entry 3562 (class 1259 OID 16467)
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- TOC entry 3583 (class 1259 OID 16497)
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- TOC entry 3586 (class 1259 OID 16496)
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- TOC entry 3589 (class 1259 OID 16511)
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- TOC entry 3592 (class 1259 OID 16510)
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- TOC entry 3580 (class 1259 OID 16536)
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- TOC entry 3595 (class 1259 OID 16532)
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- TOC entry 3598 (class 1259 OID 16533)
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- TOC entry 3599 (class 1259 OID 16550)
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- TOC entry 3602 (class 1259 OID 16549)
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- TOC entry 3605 (class 1259 OID 16651)
-- Name: monest_company_industry_id_082bc5d7; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_company_industry_id_082bc5d7 ON public.monest_company USING btree (industry_id);


--
-- TOC entry 3606 (class 1259 OID 16652)
-- Name: monest_company_industry_id_082bc5d7_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_company_industry_id_082bc5d7_like ON public.monest_company USING btree (industry_id varchar_pattern_ops);


--
-- TOC entry 3607 (class 1259 OID 16614)
-- Name: monest_company_name_b2f54502_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_company_name_b2f54502_like ON public.monest_company USING btree (name varchar_pattern_ops);


--
-- TOC entry 3638 (class 1259 OID 16712)
-- Name: monest_facts_citation_citations_id_3b722a79; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_facts_citation_citations_id_3b722a79 ON public.monest_facts_citation USING btree (citations_id);


--
-- TOC entry 3639 (class 1259 OID 16711)
-- Name: monest_facts_citation_facts_id_981de362; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_facts_citation_facts_id_981de362 ON public.monest_facts_citation USING btree (facts_id);


--
-- TOC entry 3634 (class 1259 OID 16649)
-- Name: monest_facts_company_id_cc07df33; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_facts_company_id_cc07df33 ON public.monest_facts USING btree (company_id);


--
-- TOC entry 3635 (class 1259 OID 16650)
-- Name: monest_facts_company_id_cc07df33_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_facts_company_id_cc07df33_like ON public.monest_facts USING btree (company_id varchar_pattern_ops);


--
-- TOC entry 3610 (class 1259 OID 16615)
-- Name: monest_industry_name_3481c80c_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_industry_name_3481c80c_like ON public.monest_industry USING btree (name varchar_pattern_ops);


--
-- TOC entry 3627 (class 1259 OID 16642)
-- Name: monest_industrystandards_industry_id_5c608032; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_industrystandards_industry_id_5c608032 ON public.monest_industrystandards USING btree (industry_id);


--
-- TOC entry 3628 (class 1259 OID 16643)
-- Name: monest_industrystandards_industry_id_5c608032_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_industrystandards_industry_id_5c608032_like ON public.monest_industrystandards USING btree (industry_id varchar_pattern_ops);


--
-- TOC entry 3629 (class 1259 OID 16763)
-- Name: monest_industrystandards_metric_id_a97c9e05_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_industrystandards_metric_id_a97c9e05_like ON public.monest_industrystandards USING btree (metric_id varchar_pattern_ops);


--
-- TOC entry 3662 (class 1259 OID 16760)
-- Name: monest_metrics_name_82c1f005_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_metrics_name_82c1f005_like ON public.monest_metrics USING btree (name varchar_pattern_ops);


--
-- TOC entry 3663 (class 1259 OID 16761)
-- Name: monest_metrics_parent_id_cea14a08; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_metrics_parent_id_cea14a08 ON public.monest_metrics USING btree (parent_id);


--
-- TOC entry 3664 (class 1259 OID 16762)
-- Name: monest_metrics_parent_id_cea14a08_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_metrics_parent_id_cea14a08_like ON public.monest_metrics USING btree (parent_id varchar_pattern_ops);


--
-- TOC entry 3667 (class 1259 OID 16780)
-- Name: monest_metrics_types_4f498583_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_metrics_types_4f498583_like ON public.monest_metrics USING btree (types varchar_pattern_ops);


--
-- TOC entry 3644 (class 1259 OID 16726)
-- Name: monest_news_citation_citations_id_0012719b; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_news_citation_citations_id_0012719b ON public.monest_news_citation USING btree (citations_id);


--
-- TOC entry 3647 (class 1259 OID 16725)
-- Name: monest_news_citation_news_id_e8e52c76; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_news_citation_news_id_e8e52c76 ON public.monest_news_citation USING btree (news_id);


--
-- TOC entry 3623 (class 1259 OID 16635)
-- Name: monest_news_company_id_e1bb50ba; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_news_company_id_e1bb50ba ON public.monest_news USING btree (company_id);


--
-- TOC entry 3624 (class 1259 OID 16636)
-- Name: monest_news_company_id_e1bb50ba_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_news_company_id_e1bb50ba_like ON public.monest_news USING btree (company_id varchar_pattern_ops);


--
-- TOC entry 3652 (class 1259 OID 16739)
-- Name: monest_politicalassociatio_politicalassociation_id_09303e9d; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_politicalassociatio_politicalassociation_id_09303e9d ON public.monest_politicalassociation_citation USING btree (politicalassociation_id);


--
-- TOC entry 3653 (class 1259 OID 16740)
-- Name: monest_politicalassociation_citation_citations_id_a94c7392; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_politicalassociation_citation_citations_id_a94c7392 ON public.monest_politicalassociation_citation USING btree (citations_id);


--
-- TOC entry 3619 (class 1259 OID 16628)
-- Name: monest_politicalassociation_company_id_1e854419; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_politicalassociation_company_id_1e854419 ON public.monest_politicalassociation USING btree (company_id);


--
-- TOC entry 3620 (class 1259 OID 16629)
-- Name: monest_politicalassociation_company_id_1e854419_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_politicalassociation_company_id_1e854419_like ON public.monest_politicalassociation USING btree (company_id varchar_pattern_ops);


--
-- TOC entry 3656 (class 1259 OID 16754)
-- Name: monest_scores_citation_citations_id_a979f2ac; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_scores_citation_citations_id_a979f2ac ON public.monest_scores_citation USING btree (citations_id);


--
-- TOC entry 3659 (class 1259 OID 16753)
-- Name: monest_scores_citation_scores_id_b8f0eda4; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_scores_citation_scores_id_b8f0eda4 ON public.monest_scores_citation USING btree (scores_id);


--
-- TOC entry 3613 (class 1259 OID 16621)
-- Name: monest_scores_company_id_7ed5b13d; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_scores_company_id_7ed5b13d ON public.monest_scores USING btree (company_id);


--
-- TOC entry 3614 (class 1259 OID 16622)
-- Name: monest_scores_company_id_7ed5b13d_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_scores_company_id_7ed5b13d_like ON public.monest_scores USING btree (company_id varchar_pattern_ops);


--
-- TOC entry 3615 (class 1259 OID 16764)
-- Name: monest_scores_metric_id_2c3ba331; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_scores_metric_id_2c3ba331 ON public.monest_scores USING btree (metric_id);


--
-- TOC entry 3616 (class 1259 OID 16765)
-- Name: monest_scores_metric_id_2c3ba331_like; Type: INDEX; Schema: public; Owner: monest
--

CREATE INDEX monest_scores_metric_id_2c3ba331_like ON public.monest_scores USING btree (metric_id varchar_pattern_ops);


--
-- TOC entry 3672 (class 2606 OID 16476)
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3671 (class 2606 OID 16471)
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3670 (class 2606 OID 16462)
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3674 (class 2606 OID 16491)
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3673 (class 2606 OID 16486)
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3676 (class 2606 OID 16505)
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3675 (class 2606 OID 16500)
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3677 (class 2606 OID 16522)
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3678 (class 2606 OID 16527)
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3679 (class 2606 OID 16609)
-- Name: monest_company monest_company_industry_id_082bc5d7_fk_monest_industry_name; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_company
    ADD CONSTRAINT monest_company_industry_id_082bc5d7_fk_monest_industry_name FOREIGN KEY (industry_id) REFERENCES public.monest_industry(name) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3688 (class 2606 OID 16706)
-- Name: monest_facts_citation monest_facts_citatio_citations_id_3b722a79_fk_monest_ci; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_facts_citation
    ADD CONSTRAINT monest_facts_citatio_citations_id_3b722a79_fk_monest_ci FOREIGN KEY (citations_id) REFERENCES public.monest_citations(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3687 (class 2606 OID 16701)
-- Name: monest_facts_citation monest_facts_citation_facts_id_981de362_fk_monest_facts_id; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_facts_citation
    ADD CONSTRAINT monest_facts_citation_facts_id_981de362_fk_monest_facts_id FOREIGN KEY (facts_id) REFERENCES public.monest_facts(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3686 (class 2606 OID 16644)
-- Name: monest_facts monest_facts_company_id_cc07df33_fk_monest_company_name; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_facts
    ADD CONSTRAINT monest_facts_company_id_cc07df33_fk_monest_company_name FOREIGN KEY (company_id) REFERENCES public.monest_company(name) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3684 (class 2606 OID 16637)
-- Name: monest_industrystandards monest_industrystand_industry_id_5c608032_fk_monest_in; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_industrystandards
    ADD CONSTRAINT monest_industrystand_industry_id_5c608032_fk_monest_in FOREIGN KEY (industry_id) REFERENCES public.monest_industry(name) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3685 (class 2606 OID 16689)
-- Name: monest_industrystandards monest_industrystand_metric_id_a97c9e05_fk_monest_me; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_industrystandards
    ADD CONSTRAINT monest_industrystand_metric_id_a97c9e05_fk_monest_me FOREIGN KEY (metric_id) REFERENCES public.monest_metrics(name) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3695 (class 2606 OID 16755)
-- Name: monest_metrics monest_metrics_parent_id_cea14a08_fk_monest_metrics_name; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_metrics
    ADD CONSTRAINT monest_metrics_parent_id_cea14a08_fk_monest_metrics_name FOREIGN KEY (parent_id) REFERENCES public.monest_metrics(name) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3690 (class 2606 OID 16720)
-- Name: monest_news_citation monest_news_citation_citations_id_0012719b_fk_monest_ci; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_news_citation
    ADD CONSTRAINT monest_news_citation_citations_id_0012719b_fk_monest_ci FOREIGN KEY (citations_id) REFERENCES public.monest_citations(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3689 (class 2606 OID 16715)
-- Name: monest_news_citation monest_news_citation_news_id_e8e52c76_fk_monest_news_id; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_news_citation
    ADD CONSTRAINT monest_news_citation_news_id_e8e52c76_fk_monest_news_id FOREIGN KEY (news_id) REFERENCES public.monest_news(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3683 (class 2606 OID 16630)
-- Name: monest_news monest_news_company_id_e1bb50ba_fk_monest_company_name; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_news
    ADD CONSTRAINT monest_news_company_id_e1bb50ba_fk_monest_company_name FOREIGN KEY (company_id) REFERENCES public.monest_company(name) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3692 (class 2606 OID 16734)
-- Name: monest_politicalassociation_citation monest_politicalasso_citations_id_a94c7392_fk_monest_ci; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_politicalassociation_citation
    ADD CONSTRAINT monest_politicalasso_citations_id_a94c7392_fk_monest_ci FOREIGN KEY (citations_id) REFERENCES public.monest_citations(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3682 (class 2606 OID 16623)
-- Name: monest_politicalassociation monest_politicalasso_company_id_1e854419_fk_monest_co; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_politicalassociation
    ADD CONSTRAINT monest_politicalasso_company_id_1e854419_fk_monest_co FOREIGN KEY (company_id) REFERENCES public.monest_company(name) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3691 (class 2606 OID 16729)
-- Name: monest_politicalassociation_citation monest_politicalasso_politicalassociation_09303e9d_fk_monest_po; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_politicalassociation_citation
    ADD CONSTRAINT monest_politicalasso_politicalassociation_09303e9d_fk_monest_po FOREIGN KEY (politicalassociation_id) REFERENCES public.monest_politicalassociation(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3694 (class 2606 OID 16748)
-- Name: monest_scores_citation monest_scores_citati_citations_id_a979f2ac_fk_monest_ci; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_scores_citation
    ADD CONSTRAINT monest_scores_citati_citations_id_a979f2ac_fk_monest_ci FOREIGN KEY (citations_id) REFERENCES public.monest_citations(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3693 (class 2606 OID 16743)
-- Name: monest_scores_citation monest_scores_citation_scores_id_b8f0eda4_fk_monest_scores_id; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_scores_citation
    ADD CONSTRAINT monest_scores_citation_scores_id_b8f0eda4_fk_monest_scores_id FOREIGN KEY (scores_id) REFERENCES public.monest_scores(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3680 (class 2606 OID 16616)
-- Name: monest_scores monest_scores_company_id_7ed5b13d_fk_monest_company_name; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_scores
    ADD CONSTRAINT monest_scores_company_id_7ed5b13d_fk_monest_company_name FOREIGN KEY (company_id) REFERENCES public.monest_company(name) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3681 (class 2606 OID 16694)
-- Name: monest_scores monest_scores_metric_id_2c3ba331_fk_monest_metrics_name; Type: FK CONSTRAINT; Schema: public; Owner: monest
--

ALTER TABLE ONLY public.monest_scores
    ADD CONSTRAINT monest_scores_metric_id_2c3ba331_fk_monest_metrics_name FOREIGN KEY (metric_id) REFERENCES public.monest_metrics(name) DEFERRABLE INITIALLY DEFERRED;


-- Completed on 2021-11-24 22:15:09 EST

--
-- PostgreSQL database dump complete
--


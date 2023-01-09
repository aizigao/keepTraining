SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Accounts
-- ----------------------------
DROP TABLE IF EXISTS `Accounts`;
create table Accounts (
    account_id serial primary key ,
    account_name varchar(20),
    first_name varchar(20),
    last_name varchar(20),
    email varchar(100),
    password_hash char(64),
    portrait_image blob,
    hourly_rate numeric(9,2)
);

DROP TABLE IF EXISTS `BugStatus`;
create table BugStatus (
    status varchar(20) primary key
);

DROP TABLE IF EXISTS `Bugs`;
create table Bugs (
    bug_id  serial primary key ,
    date_reported date not null ,
    summary varchar(80),
    description varchar(1000),
    resolution varchar(1000),
    reported_by bigint unsigned not null ,
    assigned_to bigint unsigned,
    verified_by bigint unsigned,
    status varchar(20) not null default 'NEW',
    priority varchar(20),
    hours numeric(9,2),
    foreign key (reported_by) references Accounts(account_id),
    foreign key (assigned_to) references Accounts(account_id),
    foreign key (verified_by) references Accounts(account_id),
    foreign key (status) references BugStatus(status)
);

DROP TABLE IF EXISTS `Comment`;
create table Comment(
    comment_id serial primary key ,
    bug_id bigint unsigned not null ,
    author bigint unsigned not null ,
    comment_date datetime not null ,
    comment text not null ,
    foreign key (bug_id) references Bugs(bug_id),
    foreign key (author) references Accounts(account_id)
);

DROP TABLE IF EXISTS `Screenshots`;
create table Screenshots (
    bug_id bigint unsigned not null,
    image_id bigint unsigned not null,
    screenshot_image blob,
    caption varchar(100),
    primary key (bug_id,image_id),
    foreign key (bug_id) references Bugs(bug_id)
);

create table Tags(
    bug_id bigint unsigned not null,
    tag varchar(20) not null ,
    primary key (bug_id,tag),
    foreign key (bug_id) references Bugs(bug_id)
);

create table Products(
    product_id serial primary key ,
    product_time varchar(50)
);

create table BugsProducts(
    bug_id bigint unsigned not null ,
    product_id bigint unsigned not null ,
    primary key (bug_id,product_id),
    foreign key (bug_id) references Bugs(bug_id),
    foreign key (product_id) references Products(product_id)

);

SET FOREIGN_KEY_CHECKS = 1;

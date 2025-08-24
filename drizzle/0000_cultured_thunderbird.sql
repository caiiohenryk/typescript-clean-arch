CREATE TABLE `tasks` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`full_description` varchar(1000),
	`status` boolean,
	`created_at` datetime(0),
	`completed_at` datetime(0),
	CONSTRAINT `tasks_id` PRIMARY KEY(`id`)
);

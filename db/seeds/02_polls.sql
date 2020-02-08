INSERT INTO polls (question, admin_email)
VALUES ('What movie should we go see?', 'billyjenkins@hotrod.swam');
INSERT INTO polls (question, admin_email)
VALUES ('Where should we eat dinner?', 'batman@robin.gov');
INSERT INTO polls (question, admin_email)
VALUES ('Which one is my dad?', 'basketballGuy55@hoops.edu');

INSERT INTO choices (poll_id, title, description)
VALUES (1, 'Star Wars', 'space stuff!');
INSERT INTO choices (poll_id, title, description)
VALUES (1, 'Batman', 'bad guys!');
INSERT INTO choices (poll_id, title, description)
VALUES (1, 'Superman', 'disguises!');

INSERT INTO choices (poll_id, title, description)
VALUES (2, 'No where', 'anorexia!');
INSERT INTO choices (poll_id, title, description)
VALUES (2, 'Jimbo n Fools', 'rowdy dining.');
INSERT INTO choices (poll_id, title, description)
VALUES (2, 'the liquor store', 'We alcoholics.');

INSERT INTO choices (poll_id, title, description)
VALUES (3, 'Frank', 'Handsom');
INSERT INTO choices (poll_id, title, description)
VALUES (3, 'David', 'Very Rich');
INSERT INTO choices (poll_id, title, description)
VALUES (3, 'Clive', 'fancy accent');

INSERT INTO votes (choice_id, rank)
VALUES (1, 1);
INSERT INTO votes (choice_id, rank)
VALUES (1, 2);
INSERT INTO votes (choice_id, rank)
VALUES (1, 3);

INSERT INTO votes (choice_id, rank)
VALUES (2, 1);
INSERT INTO votes (choice_id, rank)
VALUES (2, 2);
INSERT INTO votes (choice_id, rank)
VALUES (2, 3);

INSERT INTO votes (choice_id, rank)
VALUES (3, 1);
INSERT INTO votes (choice_id, rank)
VALUES (3, 2);
INSERT INTO votes (choice_id, rank)
VALUES (3, 3);

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255), -- Only used if logging in with email and password
    google_id VARCHAR(255), -- Store Google ID if logging in with Google
    discord_id VARCHAR(255), -- Store Discord ID if logging in with Discord
    github_id VARCHAR(255), -- Store GitHub ID if logging in with GitHub
    twitter_id VARCHAR(255), -- Store Twitter ID if logging in with Twitter
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
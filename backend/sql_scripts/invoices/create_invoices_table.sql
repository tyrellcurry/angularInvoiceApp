CREATE TABLE invoices (
    invoice_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    invoice_number VARCHAR(20) NOT NULL,
    recipient_name VARCHAR(100) NOT NULL,
    recipient_email VARCHAR(100) NOT NULL,
    recipient_street VARCHAR(255) NOT NULL,
    recipient_city VARCHAR(100) NOT NULL,
    recipient_province_state VARCHAR(100),
    recipient_postal_code VARCHAR(20) NOT NULL,
    recipient_country VARCHAR(100) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    invoice_date DATE NOT NULL, 
    payment_due_date DATE NOT NULL, 
    status ENUM('draft', 'pending', 'paid') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
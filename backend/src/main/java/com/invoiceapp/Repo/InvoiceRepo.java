package com.invoiceapp.Repo;

import com.invoiceapp.Models.Invoices;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepo extends JpaRepository<Invoices, Long> {
}

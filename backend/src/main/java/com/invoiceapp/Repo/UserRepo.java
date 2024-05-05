package com.invoiceapp.Repo;

import com.invoiceapp.Models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepo extends JpaRepository<Users, Long> {
}

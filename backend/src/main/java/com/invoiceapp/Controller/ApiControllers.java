package com.invoiceapp.Controller;

import com.invoiceapp.Models.Invoices;
import com.invoiceapp.Models.Users;
import com.invoiceapp.Repo.InvoiceRepo;
import com.invoiceapp.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApiControllers {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private InvoiceRepo invoiceRepo;
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/")
    public String getPage() {
        return "Welcome";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/users")
    public List<Users> getUsers() {
        return userRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/save")
    public String saveUser(@RequestBody Users user) {
        userRepo.save(user);
        return "Saved...";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(value = "/update/{userId}")
    public String updateUser(@PathVariable long userId, @RequestBody Users user) {
        Users updatedUser = userRepo.findById(userId).get();
        updatedUser.setUserName(user.getUserName());
        updatedUser.setEmail(user.getEmail());
        userRepo.save(updatedUser);
        return "Updated...";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(value = "/delete/{userId}")
    public String deleteUser(@PathVariable long userId) {
        Users deleteUser = userRepo.findById(userId).get();
        userRepo.delete(deleteUser);
        return "Deleted...";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/invoices") // Endpoint to get all invoices
    public List<Invoices> getInvoices() {
        return invoiceRepo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/invoices/save") // Endpoint to save an invoice
    public String saveInvoice(@RequestBody Invoices invoice) {
        invoiceRepo.save(invoice);
        return "Invoice saved...";
    }
}

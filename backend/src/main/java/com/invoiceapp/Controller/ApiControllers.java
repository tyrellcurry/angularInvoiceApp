package com.invoiceapp.Controller;

import com.invoiceapp.Models.Users;
import com.invoiceapp.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApiControllers {

    @Autowired
    private UserRepo userRepo;
    @GetMapping(value = "/")
    public String getPage() {
        return "Welcome";
    }

    @GetMapping(value = "/users")
    public List<Users> getUsers() {
        return userRepo.findAll();
    }

    @PostMapping(value = "/save")
    public String saveUser(@RequestBody Users user) {
        userRepo.save(user);
        return "Saved...";
    }

    @PutMapping(value = "/update/{id}")
    public String updateUser(@PathVariable long id, @RequestBody Users user) {
        Users updatedUser = userRepo.findById(id).get();
        updatedUser.setUserName(user.getUserName());
        updatedUser.setEmail(user.getEmail());
        userRepo.save(updatedUser);
        return "Updated...";
    }

    @DeleteMapping(value = "/delete/{id}")
    public String deleteUser(@PathVariable long id) {
        Users deleteUser = userRepo.findById(id).get();
        userRepo.delete(deleteUser);
        return "Deleted...";
    }
}

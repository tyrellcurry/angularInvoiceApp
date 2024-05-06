package com.invoiceapp.Models;

import jakarta.persistence.*;

@Entity
public class Invoices {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long invoiceId;

  @Column
  private Integer invoiceNumber;

  @Column 
  private String recipientName;

  @Column
  private String recipientEmail;

  @ManyToOne
  @JoinColumn(name = "userId", referencedColumnName = "userId")
  private Users userId;

  public long getInvoiceId() {
    return invoiceId;
  }

  public Integer getInvoiceNumber() {
    return invoiceNumber;
  }

  public String getRecipientName() {
    return recipientName;
  }

  public String getRecipientEmail() {
    return recipientEmail;
  }

  public Users getUser() {
    return userId;
  }

  public void setInvoiceId(long invoiceId) {
    this.invoiceId = invoiceId;
  }

  public void setInvoiceNumber(Integer invoiceNumber) {
    this.invoiceNumber = invoiceNumber;
  }

  public void setRecipientName(String recipientName) {
    this.recipientName = recipientName;
  }

  public void setRecipientEmail(String recipientEmail) {
    this.recipientEmail = recipientEmail;
  }

  public void setUser(Users userId) {
    this.userId = userId;
  }
}

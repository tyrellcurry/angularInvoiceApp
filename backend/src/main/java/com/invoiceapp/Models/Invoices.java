package com.invoiceapp.Models;

import jakarta.persistence.*;

import java.sql.Date;
import java.sql.Timestamp;

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

  @Column
  private String recipientStreet;

  @Column
  private String recipientCity;

  @Column
  private String recipientProvinceState;

  @Column
  private String recipientPostalCode;

  @Column
  private String recipientCountry;

  @Column
  private float amount;

  @Column
  private Date invoiceDate;

  @Column
  private Date paymentDueDate;

  public enum ENUM {draft, pending, paid}
  @Column
  private ENUM status;

  @Column
  private Timestamp createdAt;

  @Column
  private Timestamp updatedAt;

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

  public String getRecipientStreet() {
    return recipientStreet;
  }

  public void setRecipientStreet(String recipientStreet) {
    this.recipientStreet = recipientStreet;
  }

  public String getRecipientCity() {
    return recipientCity;
  }

  public void setRecipientCity(String recipientCity) {
    this.recipientCity = recipientCity;
  }

  public String getRecipientProvinceState() {
    return recipientProvinceState;
  }

  public void setRecipientProvinceState(String recipientProvinceState) {
    this.recipientProvinceState = recipientProvinceState;
  }

  public String getRecipientPostalCode() {
    return recipientPostalCode;
  }

  public void setRecipientPostalCode(String recipientPostalCode) {
    this.recipientPostalCode = recipientPostalCode;
  }

  public String getRecipientCountry() {
    return recipientCountry;
  }

  public void setRecipientCountry(String recipientCountry) {
    this.recipientCountry = recipientCountry;
  }

  public float getAmount() {
    return amount;
  }

  public void setAmount(float amount) {
    this.amount = amount;
  }

  public Date getInvoiceDate() {
    return invoiceDate;
  }

  public void setInvoiceDate(Date invoiceDate) {
    this.invoiceDate = invoiceDate;
  }

  public Date getPaymentDueDate() {
    return paymentDueDate;
  }

  public void setPaymentDueDate(Date paymentDueDate) {
    this.paymentDueDate = paymentDueDate;
  }

  public ENUM getStatus() {
    return status;
  }

  public void setStatus(ENUM status) {
    this.status = status;
  }

  public Timestamp getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(Timestamp createdAt) {
    this.createdAt = createdAt;
  }

  public Timestamp getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(Timestamp updatedAt) {
    this.updatedAt = updatedAt;
  }

  public Users getUserId() {
    return userId;
  }

  public void setUserId(Users userId) {
    this.userId = userId;
  }

}

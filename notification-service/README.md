## Notification Service

> Service for send notifications (Email, SMS, Whatsapp... whatever)

## Routes:

- Send Email for payment success

> POST /api/payment/success
> Request Body:

```js
{
  "userData": {
    "email": "example@lsdev.com",
    "username": "Example Example"
  },
  "paymentData": {
    "totalAmount": 145.65
    "currency": "brl",
    "items": [
      {
        "name": "Camisa Lagoste Tamanho G Verde",
        "price": 50.30,
        "quantity": 2,
        "url": "http://localhost:3000/products/1355"
      },
      {
        "name": "Bermuda Cyccclone Tamanho M Rosa",
        "price": 45.05,
        "quantity": 1,
        "url": "http://localhost:3000/products/1756"
      }
    ]
  }
}
```

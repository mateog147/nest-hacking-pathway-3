
## Endpoint test

#### Get all customers

```http
  GET /customer
```
```
[
	{
		"uuid": "b146b149-bd56-4877-a518-5abbdac01557",
		"name": "customerOne",
		"email": "customer1@mail.com",
		"nit": "900123456"
	},
	{
		"uuid": "f3689626-8b1d-439c-9696-5bcad7e5fe75",
		"name": "customerTwo",
		"email": "customer2@mail.com",
		"nit": "901987654"
	}
]
```

#### Get customer by id
```http
  GET /customer/${id}
```
```
{
	"uuid": "c7250bbd-2045-49a1-8f3d-e8f1743425f6",
	"name": "Newcustomer",
	"email": "customer.new@mail.com",
	"nit": "111222333",
	"date": "Thu Nov 10 2022 16:07:56 GMT-0500 (hora estándar de Colombia)"
}
```
#### Create new customer
```http
  POST /customer
```
Body:
```
	{
		"name": "Newcustomer",
		"email": "customer.new@mail.com",
		"nit": "111222333"
	}
```
Response:
```
{
	"uuid": "1ddc64c0-56c0-40e0-83ee-16da62a4042f",
	"name": "Newcustomer",
	"email": "customer.new@mail.com",
	"nit": "111222333"
}
```

#### Edit specifics fields in customer
```http
  PATCH /customer/${id}
```
Body:
```
	{
		"name": "Updated Patch"
	}
```
Response:
```
{
	"uuid": "1ddc64c0-56c0-40e0-83ee-16da62a4042f",
	"name": "Updated Patch",
	"email": "customer.new@mail.com",
	"nit": "111222333"
}
```

#### Edit all customer´s data
```http
  PUT /customer/${id}
```
Body:
```
	{
		"name": "Updatedcustomer",
		"email": "customer.PUT@mail.com",
		"nit": "444555666"
	}
```
Response:
```
{
	"uuid": "8fd1a8e3-5147-473f-840f-62981b808a0c",
	"name": "Updatedcustomer",
	"email": "customer.PUT@mail.com",
	"nit": "444555666"
}
```

#### Remove customer by id
```http
  DELETE /customer/${id}
```
```
{
	"response": true,
	"date": "Thu Nov 10 2022 16:08:19 GMT-0500 (hora estándar de Colombia)"
}
```
### Note: All the request for invoice enpoints must to have a Bearer token
#### Get all invoices

```http
  GET /invoice
```
```
[
	{
		"uuid": "9aff5186-8754-421c-9470-1617abe56562",
		"userUuid": "03fe624b-3972-4791-bcbf-347506d6d2cf",
		"detail": {
			"amount": 350,
			"description": "Servicios y varios"
		}
	},
	{
		"uuid": "0b20457e-3c46-4795-9dc5-1d0c4951b4ec",
		"userUuid": "27076dbb-0a04-4c7f-985a-108c47251ba3",
		"detail": {
			"amount": 120,
			"description": "Cacharros"
		}
	}
]
```

#### Get invoice by id
```http
  GET /invoice/${id}
```
```
	{
		"uuid": "0b20457e-3c46-4795-9dc5-1d0c4951b4ec",
		"userUuid": "27076dbb-0a04-4c7f-985a-108c47251ba3",
		"detail": {
			"amount": 120,
			"description": "Cacharros"
		}
	}
```
#### Create new invoice
```http
  POST /invoice
```
Body:
```
{
	"userUuid": "ec85e513-08e9-49bc-ba63-45f73f0b55a4",
	"detail": {
		"amount": 3600,
		"description": "Desarrollo de API REST en Nest"
	}
}
```
Response:
```
{
	"uuid": "f8786315-cead-4330-aa31-000654378a3e",
	"userUuid": "ec85e513-08e9-49bc-ba63-45f73f0b55a4",
	"detail": {
		"amount": 3600,
		"description": "Desarrollo de API REST en Nest"
	}
}
```

#### Edit specifics fields in invoice
  PATCH /invoice/${id}
```
Body:
```
	{
		"userUuid": "1ddc64c0-56c0-40e0-83ee-16da62a4042f"
	}
```
Response:
```
{
	"uuid": "f8786315-cead-4330-aa31-000654378a3e",
	"userUuid": "1ddc64c0-56c0-40e0-83ee-16da62a4042f",
	"detail": {
		"amount": 3600,
		"description": "Desarrollo de API REST en Nest"
	}
}
```

#### Edit all invoice´s data
```http
  PUT /invoice/${id}
```
Body:
```
	{
	"userUuid": "ec85e513-08e9-49bc-ba63-45f73f0b55a4",
	"detail": {
		"amount": 123,
		"description": "Inoive actualizada con PUT"
		}
	}
```
Response:
```
{
	"uuid": "bd8aea3c-8975-40dd-a66d-7f05e3f77e89",
	"userUuid": "ec85e513-08e9-49bc-ba63-45f73f0b55a4",
	"detail": {
		"amount": 123,
		"description": "Inoive actualizada con PUT"
	}
}
```

#### Remove invoice by id
```http
  DELETE /invoice/${id}
```
```
{
	"response": true,
	"date": "Thu Nov 10 2022 16:08:19 GMT-0500 (hora estándar de Colombia)"
}
```
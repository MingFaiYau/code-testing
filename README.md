# Code testing

```
In index.ts
```

# Q & A

## 1. Explain what RESTful API is

RESTful API is an interface which use different http method ( GET / POST / PUT / DELETE..) to exchange data between two parties and each api url represent one resource.

## 2. How do you form an api endpoint to query with below resources

-   Page: 10
-   Book: odyssey
-   Library: GreatLibaray

Assume id of GreatLibaray is 2222 and id of odyssey is 1001

GET - ${domain}/api/library/2222/book/1001?page=10

## 3. Explain what MVC is

MVC stands for Modal View Controller, it is a software architecture.

MVC has three layers:

1. "View", it means UI / layout shown to clients, eg. webpage
2. "Modal", it means the core data / configuration in the system , eg. database
3. "Controller", it receives clients' requests via "View" and then ask "Modal" to process the calculation to general response, for further update/output via "View" to clients.

These three layers are closely linked, but independent of each other, and changes within each layer do not affect other layers

## 4. Explain what OOP is

OPP stands for Object Oriented Programming, is a programming modal.
It use Object ( Class instance ) as the base unit, and encapsulates the program and data in it to improve the reusability, flexibility and extensibility of the software.

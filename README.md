# Part-0
Examples
```mermaid
sequenceDiagram
    autonumber
    Usuario->>+Frontend: Login
    Frontend->>+Backend: POST /api/login
    alt Credenciales válidas
        Backend->>+DB: SELECT user
        DB-->>-Backend: Datos usuario
        Backend-->>-Frontend: 200 OK (JWT)
        Frontend-->>-Usuario: "Bienvenido"
    else Error
        Backend-->>-Frontend: 401 Unauthorized
        Frontend-->>-Usuario: "Credenciales inválidas"
    end
```

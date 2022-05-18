const jwt = require('jsonwebtoken');
const express = require('express');

module.exports = (request, response, next) => {
    const headerAuth = request.headers.authorization;

    if (!headerAuth) {
        return response.status(401).send({ error: 'Sem token fornecido' });
    }
    
    const parts = headerAuth.split(' ');

    if (parts.length != 2) {
        return response.status(401).send({ error: 'Erro de token' });
    }
    
    const [prefix, token] = parts;

    if (!/^Bearer$/i.test(prefix)) {
        return response.status(401).send({ error: 'Formato de token inválido' });
    }
    
    jwt.verify(token, "private_key", (error, decoded) => {
        if (error) {
            return response.status(403).send({ error: 'Token inválido' });
        }
        
        decoded.client_id != undefined && (request.body.client_id = decoded.client_id) 
        request.body.employee_id = decoded.employee_id;
        request.body.employee_rule = decoded.roule.description;
        
        console.log(request.body)
        return next();
    })
}
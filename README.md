# SSL-server
Generate and use a SSL certificate in NodeJS
- Generate a private key, cmd : openssl genrsa -out client-key.pem 2048
- Create a CSR, cmd : openssl req -new -key client-key.pem -out mykey.pem
- Generate the SSL certification from CSR, cmd : openssl x509 -req -in mykey.pem -signkey client-key.pem -out cert.pem

# To solve the error
WARNING: can't open config file: /etc/ssl/openssl.cnf
Unable to load config info from /etc/ssl/openssl.cnf

- use cmd openssl req -new -config /path/to/your/openssl.cnf -key client-key.pem -out mykey.pem

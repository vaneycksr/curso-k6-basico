# para executar: ./test.sh
curl --request POST \
    --url http://localhost:3333/signup \
    --header 'Content-Type: application/json' \
    --data '{"email": "eyck@gmail.com", "password": "1234"}'
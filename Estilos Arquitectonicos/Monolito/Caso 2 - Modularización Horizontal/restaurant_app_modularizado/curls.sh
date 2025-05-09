curl --location 'http://127.0.0.1:5000/reservations' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Joel Ibaceta",
    "date_time": "2025-05-10 19:30",
    "people_count": 4
}'

curl --location --request GET 'http://127.0.0.1:5000/reservations' \
--header 'Content-Type: application/json' \

curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{
    "author": "Joel",
    "content": "Hola, este es mi primer post"
  }'


  curl -X POST http://localhost:3000/reactions \
  -H "Content-Type: application/json" \
  -d '{
    "postId": 1,
    "type": "like"
  }'
# app.py
from flask import Flask, request
app = Flask(__name__)

users = []

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    users.append(data)
    return {"status": "ok"}
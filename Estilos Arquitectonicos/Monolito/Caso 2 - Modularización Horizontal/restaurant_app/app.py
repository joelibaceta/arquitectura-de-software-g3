from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)
conn = sqlite3.connect("restaurant.db", check_same_thread=False)
cursor = conn.cursor()

# Creamos la tabla al iniciar (anti-patrón típico en principiantes)
cursor.execute("""
CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date_time TEXT NOT NULL,
    people_count INTEGER NOT NULL
)
""")

@app.route("/reservations", methods=["POST"])
def add_reservation():
    data = request.json
    cursor.execute("""
        INSERT INTO reservations (name, date_time, people_count)
        VALUES (?, ?, ?)
    """, (data["name"], data["date_time"], int(data["people_count"])))
    conn.commit()
    return jsonify({"message": "Reservation added"})

@app.route("/reservations", methods=["GET"])
def get_reservations():
    cursor.execute("SELECT name, date_time, people_count FROM reservations")
    rows = cursor.fetchall()
    return jsonify([
        {"name": r[0], "date_time": r[1], "people_count": r[2]} for r in rows
    ])

if __name__ == "__main__":
    app.run(debug=True)
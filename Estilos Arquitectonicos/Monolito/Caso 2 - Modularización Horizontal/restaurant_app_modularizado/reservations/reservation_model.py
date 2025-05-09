from db import Database

def init_table():
    conn = Database.instance()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS reservations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            date_time TEXT NOT NULL,
            people_count INTEGER NOT NULL
        )
    """)
    conn.commit()

def insert_reservation(name, date_time, people_count):
    conn = Database.instance()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO reservations (name, date_time, people_count)
        VALUES (?, ?, ?)
    """, (name, date_time, people_count))
    conn.commit()

def get_all_reservations():
    conn = Database.instance()
    cursor = conn.cursor()
    cursor.execute("SELECT name, date_time, people_count FROM reservations")
    rows = cursor.fetchall()
    return rows
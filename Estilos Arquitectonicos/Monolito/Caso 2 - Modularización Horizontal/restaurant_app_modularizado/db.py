import sqlite3

class Database:
    _instance = None

    def __init__(self):
        self.conn = sqlite3.connect("restaurant.db", check_same_thread=False)
        self.conn.row_factory = sqlite3.Row  

    @classmethod
    def instance(cls):
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance.conn
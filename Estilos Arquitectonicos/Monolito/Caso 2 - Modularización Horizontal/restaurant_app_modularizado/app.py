from flask import Flask
from reservations.reservation_routes import reservation_bp
from reservations.reservation_model import init_table

app = Flask(__name__)
app.register_blueprint(reservation_bp)

init_table()

if __name__ == "__main__":
    app.run(debug=True)
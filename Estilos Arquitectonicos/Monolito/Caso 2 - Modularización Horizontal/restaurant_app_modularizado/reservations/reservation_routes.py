from flask import Blueprint, request, jsonify
from .reservation_service import create_reservation, list_reservations

reservation_bp = Blueprint("reservation", __name__)

@reservation_bp.route("/reservations", methods=["POST", "OPTIONS"])
def add_reservation():
    data = request.json
    create_reservation(data["name"], data["date_time"], int(data["people_count"]))
    return jsonify({"message": "Reservation created"})

@reservation_bp.route("/reservations", methods=["GET"])
def get_reservations():
    rows = list_reservations()
    return jsonify([
        {"name": r[0], "date_time": r[1], "people_count": r[2]} for r in rows
    ])
from .reservation_model import insert_reservation, get_all_reservations

def create_reservation(name, date_time, people_count):
    insert_reservation(name, date_time, people_count)
    return True

def list_reservations():
    return get_all_reservations()
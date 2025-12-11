from flask import Blueprint

bp = Blueprint('main', __name__)

@bp.route("/", methods=["GET", "POST"])
def ping():
    return {"message":"pong"}

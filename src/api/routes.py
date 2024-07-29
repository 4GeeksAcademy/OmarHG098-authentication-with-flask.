"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello, this is Omar speaking to you through the backend"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def sign_up():
    body = request.json
    email = body.get("email", None)
    password = body.get("password", None)
    
    if email is None or password is None:
        return jsonify({"error": "Missing values!"}), 400
    
    password_hash = generate_password_hash(password)

    if User.query.filter_by(email=email).first() is not None:
        return jsonify({"error": "User already exists"}), 400
    
    try:
        new_user = User(email=email, password=password_hash, is_active=True)
        db.session.add(new_user)
        db.session.commit()
        return jsonify ({"message": "User created"}), 200
        
    except Exception as error:
        db.session.rollback()
        return jsonify({"error": "{error}"}), 500



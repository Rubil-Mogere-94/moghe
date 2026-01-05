from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Enable CORS for all origins

@app.route('/')
def home():
    return "Moghe Flask Backend API is running!"

@app.route('/api/contact', methods=['POST'])
def contact():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Basic validation
    if not name or not email or not message:
        return jsonify({"error": "All fields are required."}), 400

    print("Received Contact Form Submission:")
    print(f"Name: {name}")
    print(f"Email: {email}")
    print(f"Message: {message}")

    # In a real application, you would integrate with an email service or save to a database here.

    return jsonify({"message": "Your message has been sent successfully!"}), 200

if __name__ == '__main__':
    app.run(port=3001, debug=True)

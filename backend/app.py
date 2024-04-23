from flask import Flask, jsonify, abort
from flask_cors import CORS
import json

# Step 1: Create the Flask app instance
app = Flask(__name__)
CORS(app)  # Enable CORS on the app

# Step 2: Define routes after the app instance
@app.route('/data', methods=['GET'])
def get_data():
    try:
        with open('data.json', 'r') as f:
            data = json.load(f)
        return jsonify(data)
    except FileNotFoundError:
        abort(404)  # Not found if the JSON file does not exist

# Step 3: Conditionally run the application
if __name__ == '__main__':
    app.run(debug=True)

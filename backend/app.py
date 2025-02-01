from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/drugs', methods=['GET'])
def get_drugs():
    drug_reviews_druglib_com = fetch_ucirepo(id=461) 
    X = drug_reviews_druglib_com.data.features
    y = drug_reviews_druglib_com.data.targets
    return jsonify({'X': X, 'y': y})


if __name__ == '__main__':
    app.run(debug=True, port=5000)
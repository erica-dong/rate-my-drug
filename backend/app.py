from flask import Flask, jsonify, request
from flask_cors import CORS
from ucimlrepo import fetch_ucirepo 

app = Flask(__name__)
CORS(app)

drug_reviews_druglib_com = fetch_ucirepo(id=461) 
data = drug_reviews_druglib_com.data.features


@app.route('/api/drugs', methods=['GET'])
def get_drugs():    
    drugs = data['urlDrugName'].unique().tolist()
    return jsonify(drugs)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
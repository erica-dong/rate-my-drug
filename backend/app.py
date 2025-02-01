from flask import Flask, jsonify, request, Response
from flask_cors import CORS
from ucimlrepo import fetch_ucirepo
from pymongo.mongo_client import MongoClient
from bson import json_util
from datetime import datetime

app = Flask(__name__)
CORS(app)

uri = 'mongodb+srv://armaanp4423:tHlk2dWxoH4aZRn8@rmdcluster.yhag7.mongodb.net/?retryWrites=true&w=majority&appName=rmdcluster'
client = MongoClient(uri)
client.list_database_names()

db = client["drugs"]
drugs = db["drugs"]

@app.route('/api/drugs', methods=['GET'])
def get_drugs():
    drug_reviews_druglib_com = fetch_ucirepo(id=461) 
    data = drug_reviews_druglib_com.data.features

    drugs = data['urlDrugName'].unique().tolist()
    return jsonify(drugs)

@app.route('/api/drugs/info', methods=['GET'])
def get_drug_info():
    drug_name = request.args.get('drug')
    drug = drugs.find_one({"name": drug_name}, {"_id": 0})
    if not drug:
        return jsonify({"error": "Drug not found"}), 404

    return Response(json_util.dumps(drug), mimetype='application/json')

@app.route('/api/drugs/new-review', methods=['POST'])
def post_drug_review():
    data = request.get_json()
    drug_name = data.get('drug')
    review = data.get('review')
    review["created"] = datetime.now()

    drug = drugs.find_one({"name": drug_name})
    if not drug:
        drugs.insert_one({"name": drug_name, "reviews": [review]})
    else:   
        drug['reviews'].append(review)
        drugs.update_one({"name": drug_name}, {"$set": {"reviews": drug['reviews']}})

    return jsonify(review)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
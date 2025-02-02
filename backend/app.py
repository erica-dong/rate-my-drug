from flask import Flask, jsonify, request
from flask_cors import CORS
from ucimlrepo import fetch_ucirepo
from pymongo.mongo_client import MongoClient

app = Flask(__name__)
CORS(app)

uri = 'mongodb+srv://armaanp4423:tHlk2dWxoH4aZRn8@rmdcluster.yhag7.mongodb.net/?retryWrites=true&w=majority&appName=rmdcluster'
client = MongoClient(uri)
client.list_database_names()

@app.route('/api/drugs', methods=['GET'])
def get_drugs():
    drug_reviews_druglib_com = fetch_ucirepo(id=461) 
    data = drug_reviews_druglib_com.data.features

    drugs = [{'value': drug, 'label': ' '.join(word.capitalize() for word in drug.replace('-', ' ').split())} for drug in data['urlDrugName'].unique().tolist()]

    return jsonify(drugs)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
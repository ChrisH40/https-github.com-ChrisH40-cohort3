from flask import Flask, jsonify, render_template
import sys
sys.path.append('/code/cohort3/src/python/comp-230/')
from invoice_sheet_functions import sheet_reader


app = Flask(__name__)

sheet_data = sheet_reader('/code/cohort3/src/python/comp-230/invoice_data.xlsx')


@app.route('/')
def home():
    try:
        return render_template('index.html'), 200
    except:
        return jsonify({'message': 'Error - please try again.'}), 404


@app.route('/raw')
def data_dump():
    try:
        return jsonify(sheet_data), 200
    except:
        return jsonify({'message': 'Error - please try again.'}), 404


@app.route('/loop')
def data_loop():
    try:
        return render_template('loop.html', data=sheet_data), 200
    except:
        return jsonify({'message': 'Error - please try again.'}), 404


@app.route('/all', methods=['GET'])
def get_all():
    try:
        return jsonify(sheet_data), 200
    except:
        return jsonify({'message': 'Error - please try again.'}), 404


@app.route('/<string:sheet>', methods=['GET'])
def get_sheet(sheet):
    try:
        for key, value in sheet_data.items():
            if sheet == key or sheet.lower() == key.lower():
                return jsonify(value), 200
        else:
            return jsonify({'message': 'Error - sheet not found.'}), 400
    except:
        return jsonify({'message': 'Error - please try again.'}), 404


@app.route('/<string:sheet>/<int:item>', methods=['GET'])
def get_item(sheet, item):
    try:
        for key, value in sheet_data.items():
            if sheet == key or sheet.lower() == key.lower():
                x_sheet = value 
                for key, value in x_sheet.items():
                    if str(item) == str(key):
                        return jsonify(value), 200
        return jsonify({'message': 'Error - sheet or item not found.'}), 400
    except:
        return jsonify({'message': 'Error - please try again.'}), 404                   


app.run(port=5000, debug=True)

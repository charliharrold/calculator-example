from flask import Flask, request, jsonify

app = Flask(__name__)

# API Route
@app.route('/api/math', methods=['POST']) 
def process_math():
    data = request.get_json() 
    input_value = data.get('input') # Process the input value
    try:
        processed_data = eval(input_value)
    except ZeroDivisionError as e:
        processed_data = "Can't divide by 0!"
    return jsonify(processed_data)

if __name__=="__main__":
    app.run(debug=True)
    
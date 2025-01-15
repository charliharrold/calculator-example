from flask import Flask, request, jsonify

app = Flask(__name__)

# API Route
@app.route('/api/math', methods=['POST']) 
def process_math():
    data = request.get_json() 
    return_value = f"data received is: {data}"
    return jsonify(return_value)

if __name__=="__main__":
    app.run(debug=True)
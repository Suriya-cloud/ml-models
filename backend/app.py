from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load trained model
model = joblib.load("house_model.pkl")


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    area = data["area"]

    prediction = model.predict([[area]])

    return jsonify({
        "predicted_price": prediction[0]
    })


if __name__ == "__main__":
    app.run(debug=True)
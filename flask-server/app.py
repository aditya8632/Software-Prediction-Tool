from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

model1 = joblib.load('model.pkl')
model2 = joblib.load('modelc.pkl')
model3 = joblib.load('modela.pkl')

@app.route('/predict_model1', methods=['POST'])
def predict_model1():
    data = request.get_json(force=True)
    user_input = pd.DataFrame(data['features']).T
    prediction = model1.predict(user_input)
    predicted_label = "Success" if prediction[0] == 1 else "Unsuccess"
    return jsonify({'prediction': predicted_label})

@app.route('/predict_model2', methods=['POST'])
def predict_model2():
    data = request.get_json(force=True)
    user_input = pd.DataFrame(data['features']).T
    prediction = model2.predict(user_input)
    predicted_label = {0: "Low", 1: "Medium", 2: "High"}[prediction[0]]
    return jsonify({'prediction': predicted_label})

@app.route('/predict_model3', methods=['POST'])
def predict_model3():
    data = request.get_json(force=True)
    user_input = pd.DataFrame(data['features']).T
    prediction = model3.predict(user_input)
    predicted_label = {0: "Poor", 1: "Modrate", 2: "Good"}[prediction[0]]
    return jsonify({'prediction': predicted_label})

if __name__ == '__main__':
    app.run(port=5000, debug=True)





#test initial
 
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import joblib
# import pandas as pd

# app = Flask(__name__)
# CORS(app)


# model = joblib.load('model.pkl')

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.get_json(force=True)
#     user_input = pd.DataFrame(data['features']).T
#     prediction = model.predict(user_input)
#     predicted_label = "Success" if prediction[0] == 1 else "UnSuccess"
#     return jsonify({'prediction': predicted_label})





# if __name__ == '__main__':
#     app.run(port=5000, debug=True)


#test curret 



# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import joblib
# import pandas as pd

# app = Flask(__name__)
# CORS(app)

# model = joblib.load('modelc.pkl')

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.get_json(force=True)
#     user_input = pd.DataFrame(data['features']).T
#     prediction = model.predict(user_input)
#     predicted_label = {0: "Low", 1: "Medium", 2: "High"}[prediction[0]]
#     return jsonify({'prediction': predicted_label})

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)



#test after

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import joblib
# import pandas as pd


# app = Flask(__name__)
# CORS(app)

# model = joblib.load('modela.pkl')

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.get_json(force=True)
#     user_input = pd.DataFrame(data['features']).T
#     prediction = model.predict(user_input)
#     predicted_label = {0: "Poor", 1: "Modrate", 2: "Good"}[prediction[0]]
#     return jsonify({'prediction': predicted_label})

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)

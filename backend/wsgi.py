from flask import Flask,render_template 
from os import path
#template_dir = path.abspath('/../frontend/templates')
app = Flask(__name__,template_folder='../frontend/templates',static_folder='../frontend/static')

@app.route("/")
@app.route("/home")
def index():
    return render_template('index.html')

@app.route("/dashboard")
def dashboard():
    return render_template('dashboard.html')

@app.route("/library")
def library():
    return render_template('library.html')


if __name__ == "__main__":
    app.run(debug=True)
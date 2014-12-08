from flask import Flask
from flask import render_template
app = Flask(__name__)
app.debug = True
app.template_folder = ""
app.static_path=""
app.static_folder =""



@app.route("/")
def hello():
    return render_template('index.html')
    #return "Hello World!"

if __name__ == "__main__":
    app.run()
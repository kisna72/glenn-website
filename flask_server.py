from flask import Flask
from flask import render_template
app = Flask(__name__)
app.debug = True
app.template_folder = r"C:\Users\Krishna\Desktop\glenn-website\templates"
#app.static_path=r"C:\Users\Krishna\Desktop\glenn-website\templates"
app.static_folder = r"C:\Users\Krishna\Desktop\glenn-website\templates\static"
#app.static_url_path = r"C:\Users\Krishna\Desktop\glenn-website\templates"
static_path = app.static_folder
static_url = app.static_url_path
print(static_path, static_url)


@app.route("/")
def hello():
    return render_template('index.html')
    #return "Hello World!"
@app.route("/pages/home.html")
def home_page():
	return render_template('pages/home.html')

@app.route("/pages/about.html")
def about_page():
	return render_template('pages/about.html')

@app.route("/pages/services.html")
def services_page():
	return render_template('pages/services.html')

@app.route("/pages/location.html")
def location_page():
	return render_template('pages/location.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0')
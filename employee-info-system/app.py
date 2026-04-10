from flask import Flask

app = Flask(__name__)

#Index route 
@app.route("/")
def index():
   return "<h1>Welcome to my Flask App<h1><p>This is the index.</p>"

#Run the server
if __name__ == "__main__":
    app.run(debug=True)
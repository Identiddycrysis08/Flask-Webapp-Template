from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')
@app.route('/price_and_availability')
def price():
    return render_template('priceandavailability.html')
@app.route('/reviews')
def reviews():
    return render_template('reviews.html')
@app.route('/gettinghere')
def gettinghere():
    return render_template('gettinghere.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)

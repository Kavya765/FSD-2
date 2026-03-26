from flask import Flask, jsonify

app = Flask(__name__)

customers = {
    1: {"name": "Kavya", "orders": [101, 102]},
    2: {"name": "Rahul", "orders": [103]}
}

@app.route('/customers/<int:customer_id>/orders', methods=['GET'])
def get_customer_orders(customer_id):
    customer = customers.get(customer_id)

    if not customer:
        return jsonify({"error": "Customer not found"}), 404

    return jsonify({
        "customer_id": customer_id,
        "orders": customer["orders"]
    })

app.run(port=5000)
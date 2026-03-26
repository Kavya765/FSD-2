from flask import Flask, request, jsonify

app = Flask(__name__)

orders = {
    101: {"status": "Pending"},
    102: {"status": "Shipped"},
    103: {"status": "Delivered"}
}

@app.route('/orders/<int:order_id>', methods=['PUT'])
def update_order(order_id):
    if order_id not in orders:
        return jsonify({"error": "Order not found"}), 404

    data = request.get_json()
    orders[order_id]["status"] = data.get("status")

    return jsonify(orders[order_id])

import os

port = int(os.environ.get("PORT", 5000))
app.run(host="0.0.0.0", port=port)
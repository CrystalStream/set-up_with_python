from flask import Flask, request, jsonify
import json

def create_app():
  app = Flask(__name__)

  # Load the configuration
  app.config.from_object('config')

  @app.route('/')
  def check_server():
      return jsonify({ 'status': 2000, 'message': 'Server running' })

  """
  Handler that will calculate the union of two sets
  """
  @app.route('/api/v1/union', methods=['POST'])
  def union():
    a, b = get_values(request.json)
    return jsonify({ 'status': 2000, 'data': list(a.union(b)) })

  """
  Handler that will calculate the intersection of two sets
  """
  @app.route('/api/v1/intersection', methods=['POST'])
  def intersection():
    a, b = get_values(request.json)
    return jsonify({ 'status': 2000, 'data': sorted(list(a.intersection(b))) })

  """
  Handler that will calculate the difference of two sets
  """
  @app.route('/api/v1/difference', methods=['POST'])
  def difference():
    a, b = get_values(request.json)
    return jsonify({ 'status': 2000, 'data': list(a.difference(b)) })

  """
  Handler that will calculate the symmetric_difference of two sets
  """
  @app.route('/api/v1/symmetric_difference', methods=['POST'])
  def symmetric_difference():
    a, b = get_values(request.json)
    return jsonify({ 'status': 2000, 'data': list(a.symmetric_difference(b)) })

  def get_values(data):
    return (set(data['a']), set(data['b']))
  

  return app


if __name__ == '__main__':
    app = create_app()
    app.run(port=5000)
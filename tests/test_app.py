import pytest

class TestApp:

  def test_server_runnin(self, client):
    """Start get the server running"""

    res = client.get('/')
    assert res.status_code == 200
    assert res.json['message'] == 'Server running'
    assert res.json['status'] == 2000

  def test_union(self, client):
    """Should return a set which is the union of sets a and b."""

    expected = {
      'a': [0,2,4,6,8],
      'b': [4,6,8,10,12,14,16],
      'result': [0,2,4,6,8,10,12,14,16]
    }

    res = client.post('/api/v1/union', json={'a': expected['a'], 'b': expected['b'] })
    assert res.status_code == 200
    assert res.json['data'] == expected['result']
    assert res.json['status'] == 2000


  def test_intersection(self, client):
    """Should return a set which is the intersection of sets a and b. (elements that are in both)."""

    expected = {
      'a': [0,2,4,6,8],
      'b': [4,6,8,10,12,14,16],
      'result': [4,6,8]
    }

    res = client.post('/api/v1/intersection', json={'a': expected['a'], 'b': expected['b'] })
    assert res.status_code == 200
    assert res.json['data'] == expected['result']
    assert res.json['status'] == 2000
  
  def test_difference(self, client):
    """Should return a set which is the difference of sets a and b. (elements that are in "a" but not in "b")."""

    expected = {
      'a': [0,2,4,6,8],
      'b': [4,6,8,10,12,14,16],
      'result': [0, 2]
    }

    res = client.post('/api/v1/difference', json={'a': expected['a'], 'b': expected['b'] })
    assert res.status_code == 200
    assert res.json['data'] == expected['result']
    assert res.json['status'] == 2000

  
  def test_symmetric_difference(self, client):
    """Should return the symmetric difference of sets a and b. (belongs to either "a" or "b" but not to both simultaneously)."""

    expected = {
      'a': [0,2,4,6,8],
      'b': [4,6,8,10,12,14,16],
      'result': [0, 2, 10, 12, 14, 16]
    }

    res = client.post('/api/v1/symmetric_difference', json={'a': expected['a'], 'b': expected['b'] })
    assert res.status_code == 200
    assert res.json['data'] == expected['result']
    assert res.json['status'] == 2000
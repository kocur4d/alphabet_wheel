import {
  transpose,
  multiply,
  size,
  subset,
  index,
} from 'mathjs'

import _range from 'lodash/range'
import _map from 'lodash/map'
import _times from 'lodash/times'

// Monkey patch Math - converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180
}

class WheelCalculator {
  constructor(count) {
    this.count = count
  }

  init() {
    this._generateAngle()
    this._generateAngles()
    this._generateVertices()
  }

  coordinates() {
    const matrixSize = size(this.vertices)[1]
    return _times(
      matrixSize,
      number => subset(
        this.vertices,
        index([0,1], [number,(number + 1) % matrixSize])
      )
    )
  }

  scaleVertices(radius) {
    this.vertices = multiply(this.vertices, radius)
  }

  rotateVertices(angle) {
    const angleRad = Math.radians(angle)
    const rotationMatrix = [
      [Math.cos(angleRad), -1 * Math.sin(angleRad)],
      [Math.sin(angleRad), Math.cos(angleRad)],
    ]
    this.vertices = multiply(rotationMatrix, this.vertices)
  }

  _generateAngle() {
    this.angle = 360 / this.count
  }

  _generateAngles() {
    this.angles = _range(0, 360, this.angle)
  }

  _generateVertices() {
    const vertices = _map(this.angles, angle => [
      Math.cos(Math.radians(angle)),
      Math.sin(Math.radians(angle))
    ])
    this.vertices = transpose(vertices)
  }
}

export default WheelCalculator

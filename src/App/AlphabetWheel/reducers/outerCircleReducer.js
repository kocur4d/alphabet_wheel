import Immutable from 'immutable'

///JUST FOR TEST WILL GO SOON

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

// finds the angle
const generateAngle = count => 360 / count

// generates the range of angles up to 360
const generateAngles = angle => _range(0, 360, angle)

// combines both above methods so you can get a range from count
const anglesFromCount = count => {
  const angle = generateAngle(count)
  return generateAngles(angle)
}

//creates rotation matrix
const rotationMatrix = angle => {
  const angleRad = Math.radians(angle)
  return [
      [Math.cos(angleRad), -1 * Math.sin(angleRad)],
      [Math.sin(angleRad), Math.cos(angleRad)],
    ]
}

//converts angles to cartesian matrix
const verticesMatrix = count => {
  const angles = anglesFromCount(count)
  const vertices = _map(angles, angle => [
    Math.cos(Math.radians(angle)),
    Math.sin(Math.radians(angle))
  ])
  return transpose(vertices)
}

//combines most of the above to generate scaled matrix from count and radius
const countToScaledMatrix = (count, radius) => {
  const angle = generateAngle(count)
  const rotMatrix = rotationMatrix(angle/2)
  
  const vertices = verticesMatrix(count) // generate matrics of vertices
  const rotatedVertices = multiply(rotMatrix, vertices) // rotate the matrix
  return multiply(rotatedVertices, radius) //scales the matrix via radius
}

//transforms scaled matrix to matrix of svg points
//each svg needs 2 points to draw its shape
const matrixToVertices = matrix => {
  const matrixSize = size(matrix)[1]
  return _times(matrixSize, number => subset(matrix, index([0,1], [number,(number + 1) % matrixSize])))
}
//// Above will go at some point

const outerMatrix = countToScaledMatrix(19, 99)

const initialState = Immutable.List(matrixToVertices(outerMatrix))

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

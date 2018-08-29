import _map from 'lodash/map'
import _indexOf from 'lodash/indexOf'

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ]

class CaesarCalculator {
  constructor(shift) {
    this.shift = shift
  }

  cipher(message) {
    return _map(message, letter => this._cipherLetter(letter)).join('')
  }

  _cipherLetter(letter) {
    const upcaseLetter = letter.toUpperCase()
    const letterIndex = _indexOf(alphabet, upcaseLetter)
    const cipherIndex = (letterIndex + this.shift) % alphabet.length
    const a = alphabet[cipherIndex]
    return a
  }
}

export default CaesarCalculator

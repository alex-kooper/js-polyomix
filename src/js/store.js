
const Store = {}

class WellStore {
  constructor(height, width) {
    this.height = height
    this.width = width
    this.blocks = Repeat(Repeat(undefined, width), height)
  }
}



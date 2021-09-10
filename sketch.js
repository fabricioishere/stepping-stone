function setup() {
  createCanvas(400, 400)

  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      set(i, j, color(random(0, 255), random(0, 255), random(0, 255)))
    }
  }
  updatePixels()
}

function draw() {
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      var currentColor = get(i, j)
      // Jogue a moeda e verifique se dá cara
      if (random(['H', 'T']) == 'H') {
        // Escolha um vizinho aleatório
        var r = random(['T', 'R', 'B', 'L'])

        // Vizinho à esquerda
        if (r == 'L') set((i - 1 + width) % width, j, currentColor)
        // Vizinho à direita
        else if (r == 'R') set((i + 1) % width, j, currentColor)
        // Vizinho de baixo
        else if (r == 'B') set(i, (j + 1) % height, currentColor)
        // Vizinho de cima
        else if (r == 'T') {
          set(i, (j - 1 + height) % height, currentColor)
        }
      }
    }
  }
  updatePixels()
}

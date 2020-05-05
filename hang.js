function hang(seconds = 5) {
  const doesAt = Date.now() + seconds*1000
  while (Date.now() < doesAt) {}
}

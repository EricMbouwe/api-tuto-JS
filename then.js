
//with then syntax
moveTo(50, 50)
  .then(() => moveTo(20, 100))
  .then(() => moveTo(100, 200))
  .then(() => moveTo(2, 10))

// Becomes with await syntax
const animate = async () => {
  await moveTo(50, 50)
  await moveTo(20, 100)
  await moveTo(100, 200)
  await moveTo(2, 10)
}
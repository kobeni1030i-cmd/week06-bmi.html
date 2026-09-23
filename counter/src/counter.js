export default function setupCounter(element) {
  const storageKey = 'counter-value'
  const savedCounter = Number(localStorage.getItem(storageKey))
  let counter = Number.isFinite(savedCounter) ? savedCounter : 0
  const countElement = element.querySelector('[aria-live="polite"]')
  const setCounter = (count) => {
    counter = count
    countElement.textContent = counter
    localStorage.setItem(storageKey, String(counter))
  }

  element.querySelector('[data-action="increment"]').addEventListener('click', () => {
    setCounter(counter + 1)
  })
  element.querySelector('[data-action="decrement"]').addEventListener('click', () => {
    setCounter(counter - 1)
  })
  element.querySelector('[data-action="reset"]').addEventListener('click', () => {
    setCounter(0)
  })

  setCounter(counter)
}

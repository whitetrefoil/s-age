/**
 * Calculate the age.
 *
 * @param date - Birthdate.
 * @param now - Today's date.
 */
export default function age(date: string|number|Date, now: string|number|Date = Date.now()) {
  const birthDate = new Date(date)
  const today     = new Date(now)

  const yearDiff  = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  const pastDate  = today.getDate() - birthDate.getDate()

  if (monthDiff < 0 || (monthDiff === 0 && pastDate < 0)) {
    return yearDiff - 1
  }

  return yearDiff
}

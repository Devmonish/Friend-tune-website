'use client'
// Every letter hops when the cursor touches it.
export default function BouncyText({ text }) {
  let n = 0
  return (
    <>
      {text.split(' ').map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap">
          {word.split('').map((ch) => (
            <span key={n} className="letter" style={{ '--i': n++ }}>
              {ch}
            </span>
          ))}
          {'\u00A0'}
        </span>
      ))}
    </>
  )
}

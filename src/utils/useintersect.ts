import React, { useState, useEffect } from "react"

const useIntersect = (
  target: React.RefObject<Element>,
  threshold?: number,
  once?: boolean
) => {
  // Refを与えて、その要素がintersectしているかどうかを返す
  const [intersect, setIntersect] = useState(false)

  const callback: IntersectionObserverCallback = entries => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (once) setIntersect(intersect || entry.isIntersecting)
      else setIntersect(entry.isIntersecting)
    })
  }

  useEffect(() => {
    if (target.current == null) {
      return
    }

    const options = { threshold }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(target.current)

    return () => {
      if (target.current != null) observer.unobserve(target.current)
    }
  })

  return intersect
}

export default useIntersect

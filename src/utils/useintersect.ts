import React, { useState, useEffect } from "react"

const useIntersect = (
  target: React.RefObject<Element>,
  threshold?: number,
  once?: boolean,
  defaultIntersect?: boolean
) => {
  // Refを与えて、その要素がintersectしているかどうかを返す
  const [intersect, setIntersect] = useState(defaultIntersect == true)

  useEffect(() => {
    if (target.current == null) {
      return
    }

    const options = { threshold }
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        setIntersect(entry.isIntersecting)
        if (once && entry.isIntersecting && target.current != null) {
          observer.unobserve(target.current)
        }
      })
    }, options)
    observer.observe(target.current)

    return () => {
      if (target.current != null) observer.unobserve(target.current)
    }
  })

  return intersect
}

export default useIntersect

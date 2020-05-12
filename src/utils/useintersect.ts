import React, { useState, useEffect } from "react"

const useIntersect = (target: React.RefObject<Element>) => {
  // Refを与えて、その要素がintersectしているかどうかを返す
  const [intersect, setIntersect] = useState(false)

  const callback: IntersectionObserverCallback = entries => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      setIntersect(entry.isIntersecting)
    })
  }

  useEffect(() => {
    if (target.current == null) {
      return
    }

    const observer = new IntersectionObserver(callback)
    observer.observe(target.current)

    return () => {
      if (target.current != null) observer.unobserve(target.current)
    }
  })

  return intersect
}

export default useIntersect

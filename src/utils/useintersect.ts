import React, { useState, useEffect } from "react"

const useIntersect = (
  target: React.RefObject<Element>,
  option?: IntersectionObserverInit,
  once?: boolean,
  defaultIntersect?: boolean
) => {
  // Refを与えて、その要素がintersectしているかどうかを返す
  const [intersect, setIntersect] = useState(defaultIntersect == true)

  useEffect(() => {
    if (target.current == null) {
      return
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        setIntersect(entry.isIntersecting)
        if (once && entry.isIntersecting && target.current != null) {
          observer.unobserve(target.current)
        }
      })
    }, option)
    observer.observe(target.current)

    return () => {
      if (target.current != null) observer.unobserve(target.current)
    }
  })

  return intersect
}

export default useIntersect

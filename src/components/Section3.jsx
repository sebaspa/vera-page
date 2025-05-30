import { useEffect, useState } from "react"
import { CircleInfo } from "./"
import { getInfoSection3 } from "../api/infoSections"

export const Section3 = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [info, setInfo] = useState([])

  useEffect(() => {
    setIsLoading(true)
    const getInfoFromApi = async () => {
      const info = await getInfoSection3()
      setInfo(info)
      setIsLoading(false)
    }
    getInfoFromApi().catch(console.error)
  }, [])


  return (
    <div className="container mx-auto px-4 w-full h-full relative">
      <div className="hidden md:block">
        {
          isLoading ? <div>Loading...</div> :
            info.map((item, index) => (
              <div className={`absolute ${item.className}`}>
                <CircleInfo key={index} img={item.img} title={item.title} description={item.description} />
              </div>
            ))
        }
      </div>
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {
          isLoading ? <div>Loading...</div> :
            info.map((item, index) => (
              <div className="">
                <CircleInfo key={index} img={item.img} title={item.title} description={item.description} />
              </div>
            ))
        }
      </div>
    </div>
  )
}

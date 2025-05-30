export const CircleInfo = ({ img, title, description }) => {
  return (
    <div className="info max-w-[280px] text-center">
      <img src={img} alt={title} className="w-[80px] md:w-[120px] h-auto mx-auto mb-3" />
      <h3 className="text-base md:text-xl font-medium font-inter text-vera-green-500">{title}</h3>
      <p className="text-sm md:text-base font-inter text-vera-green-200">{description}</p>
    </div>
  )
}

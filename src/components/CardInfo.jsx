export const CardInfo = ({ img, title, description, className = "" }) => {
  return (
    <div className={`cardInfo flex items-center gap-4 md:gap-8 mb-10 ${className}`}>
      <img src={img} alt={title} className="w-[80px] md:w-[100px] h-auto" />
      <div className="">
        <h3 className="text-xl md:text-2xl font-medium text-vera-green-500 font-inter mb-1">{title}</h3>
        <p className="text-sm md:text-base text-vera-green-200 font-inter">{description}</p>
      </div>
    </div>)
}

import AdddToCartBtn from "./AdddToCartBtn"

export type DessertCardProps = {
name: string,
category: string,
price: number,
image: {
  thumbnail: string,
  mobile: string,
  tablet: string,
  desktop: string,
}
}

const DessertCard = (props: DessertCardProps) => {
  return (
    <div>
        <img src={props.image.desktop} alt={props.name} />
        <AdddToCartBtn />
        <h4>{props.category}</h4>
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
    </div>
  )
}

export default DessertCard
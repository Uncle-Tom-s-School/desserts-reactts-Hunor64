import AdddToCartBtn from "./AdddToCartBtn"

type DessertCardProps = {
name: string
}

const DessertCard = (props: DessertCardProps) => {
  return (
    <div>
        {props.name}
        <AdddToCartBtn />
    </div>
  )
}

export default DessertCard
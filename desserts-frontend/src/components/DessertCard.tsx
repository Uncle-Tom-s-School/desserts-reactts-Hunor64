
type DessertCardProps = {
name: string
}

const DessertCard = (props: DessertCardProps) => {
  return (
    <div>
        {props.name}
    </div>
  )
}

export default DessertCard
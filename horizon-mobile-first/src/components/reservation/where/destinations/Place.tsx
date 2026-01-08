interface Props {
    city : string,
    description : string
}

export const Place = ({city, description}: Props) => {
    return (
        <div className="py-4">
            <p className="font-semibold">{city}</p>
            <p>{description}</p>
        </div>
    )
}

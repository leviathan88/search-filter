export const Card = ({ name, order }) => {
  return (
    <div className="card">
      <h4> {name} </h4>
      <p> {order} </p>
    </div>
  )
}
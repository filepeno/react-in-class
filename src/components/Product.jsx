export default function Product(props) {
  console.log(props);

  return (
    <article className={`Product ${props.soldOut ? "" : "soldOut"}`}>
      <h2 className="ProductName">{props.productdisplayname}</h2>
      <h3 className="Price">
        <span>{props.price}</span> dkk
      </h3>
      <h4 className={`SoldOutTag ${props.soldOut ? "hidden" : ""}`}>sold out</h4>
      <p className="Description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quas tenetur. Assumenda laboriosam, minima dignissimos quae sequi alias quidem voluptatem nemo. Aliquam quibusdam provident est aperiam debitis cum repudiandae obcaecati!
      </p>
    </article>
  );
}

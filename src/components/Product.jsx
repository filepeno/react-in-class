export default function Product(props) {
  console.log(props);
  const styles = {
    background: props.product.soldOut ? "green" : "red",
  };
  return (
    <article style={styles} className="Product">
      <h2 className="ProductName">{props.product.productdisplayname}</h2>
      <h3 className="Price">
        <span>{props.product.price}</span> dkk
      </h3>
      <p className="Description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quas tenetur. Assumenda laboriosam, minima dignissimos quae sequi alias quidem voluptatem nemo. Aliquam quibusdam provident est aperiam debitis cum repudiandae obcaecati!
      </p>
    </article>
  );
}

export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Paintings in Charcoal and acrylics</h2>

      <ul id="products">{children}</ul>
    </section>
  );
}

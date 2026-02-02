import "./list.css";

export default function List() {
  const nomes = ["Flávio", "Ana", "Carlos", "Jojozelan"];

  return (
    <section className="list-container">
      <h2>Renderizar listas</h2>

      <ul className="list">
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </section>
  );
}

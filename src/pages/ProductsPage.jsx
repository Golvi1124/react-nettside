import { Link } from "react-router-dom";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      navn: "NeuroBand X",
      beskrivelse:
        "En trådløs pannebåndsenhet som lar deg kontrollere smarte enheter med tankene dine via EEG-signaler.",
      pris: "3 499",
    },
    {
      id: 2,
      navn: "EchoBrew Mug",
      beskrivelse:
        "En selvrørende kaffekopp med stemmestyring og temperaturkontroll via Bluetooth-app.",
      pris: "899",
    },
    {
      id: 3,
      navn: "AirFold Keyboard",
      beskrivelse:
        "Et fullstendig sammenleggbart tastatur som passer i lommen og projiserer taster på en hvilken som helst overflate.",
      pris: "1 299",
    },
    {
      id: 4,
      navn: "SleepTune Pillow",
      beskrivelse:
        "Smartpute med innebygde høyttalere og søvnsensorer som tilpasser musikk og lydlandskap etter søvnmønster.",
      pris: "1 149",
    },
    {
      id: 5,
      navn: "NanoPet Companion",
      beskrivelse:
        "Virtuelt AI-kjæledyr projisert via AR-briller som reagerer på berøring, stemme og humør.",
      pris: "2 799",
    },
  ];

  return (
    <div>
      <h3>Our products:</h3>
      {products.map((product) => {
        return (
          <div>
            <Link key={product.id} to={"/products/${product.id}"}>
              <h4>{product.navn}</h4>
              <p>{product.beskrivelse}</p>
              <p style={{ color: "red" }}>{`kr. ${product.pris}.00,-`}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

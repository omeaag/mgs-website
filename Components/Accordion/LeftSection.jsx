import Image from "next/image";

function LeftSection({ item, displayContent }) {
  return (
    <div
      className={`sectionContent ${
        displayContent === true ? "open" : "close"
      } left-section`}
    >
      <div className="sectionTitle">
        <p className="accordion-title">{item.title}</p>
        <p className="accordion-par">{item.paragraph}</p>
      </div>
      <Image alt={item.title} width={377} src={item.image} />
    </div>
  );
}

export default LeftSection;

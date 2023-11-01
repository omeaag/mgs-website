import Image from "next/image";

function LeftSection({ item, displayContent }) {
  return (
    <div
      className={`sectionContent ${
        displayContent === true ? "open" : "close"
      } left-section`}
    >
      <Image alt={item.title} id="AccordionTitleImage" width={377} src={item.image} />
      <div id={item.title} className="sectionTitle">
        <p className="accordion-title">{item.title} <Image alt={item.title} src={item.img}/></p>
        <p className="accordion-par">{item.paragraph}</p>
      </div>
    </div>
  );
}

export default LeftSection;

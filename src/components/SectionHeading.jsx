function SectionHeading({ number, title, english, description, inverse = false }) {
  return (
    <div className={`section-heading ${inverse ? 'inverse' : ''}`}>
      <div className="section-index">{number}</div>
      <div>
        <p>{english}</p>
        <h2>{title}</h2>
        {description && <span>{description}</span>}
      </div>
    </div>
  )
}

export default SectionHeading

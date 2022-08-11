function Tags({ tags }) {
  return (
    <div>
      {tags.map((tag, index) => (
        <div key={`${tag}-${index}`}>{tag}</div>
      ))}
    </div>
  )
}

export default Tags

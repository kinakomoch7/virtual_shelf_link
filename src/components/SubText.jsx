

export const SubText = (props) => {
  const { style, contents } = props;
  return (
    <div style={{ ...style, fontWeight: 'bold', fontSize: 24, textAlign:'center', margin:30 }}>
      {contents}
    </div>
  )
}



export const HeadText = (props) => {
  const { style, contents } = props;
  return (
    <div style={{ ...style, fontWeight: 'bold', fontSize: 40, textAlign:'center'}}>
      {contents}
    </div>
  )
}

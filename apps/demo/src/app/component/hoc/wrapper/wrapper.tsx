const Wrapper = (props: any) => {
  return (
    <div style={props.style} className={props.className} onClick={props.onClick}>{props.children}</div>
  );
};

export default Wrapper;

// const withClass = (Wrapper: any, classes: any) => {
//   return (props: any) => {
//     <div className={classes}>
//       <Wrapper />
//     </div>;
//   };
// };


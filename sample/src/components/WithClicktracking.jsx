const WithClicktracking = (Component) => {  // ← capital C
  return (props) => {
    const handleClick = () => {
      console.log("Click Tracked", props.trackingInfo);
    };

    return (
      <div onClick={handleClick}>
        <Component {...props} />  {/* ← capital C, no semicolon */}
      </div>
    );
  };
};

export default WithClicktracking;
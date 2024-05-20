

import Spinner from 'react-bootstrap/Spinner';

function SizesExample() {
  return (
    <>
    <div style={{marginLeft:"40%"}}>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
      </div>
    </>
  );
}

export default SizesExample;




export function BasicExample() {
  return (
    <Spinner animation="border" role="status" style={{marginLeft:"40%"}}>
      <span className="visually-hidden" >Loading...</span>
    </Spinner>
  );
}


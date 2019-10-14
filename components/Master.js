import Head from 'next/head'

const MasterPage = (props) => (
  <div>
    <head>
      <title>Bitcoin App</title>
    </head>

    {props.children}
  </div>
)
 
export default MasterPage;
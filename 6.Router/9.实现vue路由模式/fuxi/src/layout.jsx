import './layout.css';


export default function Layout(props){
    return (<div className="layout">
      <header className="layout_header">
        { props.header }
      </header>
      <main className="layout_main">
        { props.children }
      </main>
    </div>)
};
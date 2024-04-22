
import './index.css'

export default function Layout(props){
    return (<div className="layout">
        <header className="layout_header">
          { props.header }
        </header>
        <main className="layout_main">
          <div className="main_sideber">
            { props.sideber }
          </div>
          <main className="main_main">
            { props.children }
          </main>
        </main>
    </div>)
}
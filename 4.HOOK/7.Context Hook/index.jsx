  //创建上下文对象
  const ctx = React.createContext();

  function App(){


    return (<ctx.Provider value='nice'>
                <Test/>
        </ctx.Provider>)
  };


  function Test(){
         const value = useContext(ctx);
         return (<h1>{value}</h1>);
  }

  
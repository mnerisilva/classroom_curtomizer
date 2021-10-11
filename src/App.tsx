import * as C from './App.styles';
import Api from '../src/data/api/Api';
import { FormInclusao } from './components/forms/formInclusao/FormInclusao';

const App = () => {
  
  let p1_url = 'https://www.youtube.com/embed/';
  let p2_url = '?playlist=';
  let p3_url = '&amp;enablejsapi=1&amp;amp;version=3&amp;amp;playerapiid=ytplayer&amp;amp;showinfo=0&amp;amp;modestbranding=1&amp;amp;fs=0&amp;amp;cc_load_policy=1;showinfo=0;autohide=1;rel=0';
  let id_video = 'iF2MdbrTiBM';
  let url = p1_url+id_video+p2_url+id_video+p3_url;

  const handleClick = () => {
    console.log(this);
  }


  return (
      <div className="container">
          <header>
            <C.Header>
              <C.HeaderText>ClassROOm CustomiZer</C.HeaderText>
            </C.Header>
          </header>
          <section className="content">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                  <C.SimpleList>
                      {Api.map( (item, index) => {                        
                          return <C.SimpleListItem key={item.id}><div  data-id={item.id}>{item.title} </div></C.SimpleListItem>;
                      })}
                  </C.SimpleList>            
                <FormInclusao />              
              </div>
              <div className="col-lg-9 col-md-8">
                            <div className="embed-responsive embed-responsive-16by9">                                
                                <iframe src={url} ></iframe>
                            </div>                           
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4"> 
              </div>               
            </div>
          </section>
        </div>
  );
}

export default App;
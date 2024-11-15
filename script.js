window.addEventListener("load",checkInternetConnection)

function checkInternetConnection(){
  const StatusText =document.getElementById('StatusText');
  const StatusIP   =document.getElementById('StatusIP');
  const StatusNet =document.getElementById('StatusNet');

  StatusText.textContent = 'Checking.....';

  if(navigator.onLine){
    fetch( 'https://api.ipify.org?format=json')
    .then((response)=> response.json())
    .then((data)=>{
       StatusIP.textContent = data.ip; 
       StatusText.textContent = 'Connected';

       const connection = navigator.connection;
       const Statusstrength = connection?connection.downlink +'Mbps':'Unknown';
       StatusNet.textContent =Statusstrength

    }) 
    .catch(()=>{
        StatusText.textContent = 'Disconnected';
        StatusIP.textContent   = '--';
        StatusNet.textContent = '--';
      
    })  
  }
  else{
    StatusText.textContent = 'Disconnected';
    StatusIP.textContent   = '--';
    StatusNet.textContent = '--';

  }
}
async function obtener_publicaciones_usuarios(cant) {

  try {
    console.time("Secuencial");
    const response_usuarios = await fetch(`https://jsonplaceholder.typicode.com/users`);
    
    const usuarios = await response_usuarios.json(); //todos los usuarios
    
    const primeros_usuarios = usuarios.filter(u => u.id <= cant);   //primeros ids pedidos

    const primeros_ids = primeros_usuarios.map(n => n.id);   //guardos los ids

    //console.log(primeros_usuarios);
    //console.log(primeros_ids);
    for(let id of primeros_ids){
       let response_publicaciones = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`); //busco ese id
       let publicaciones = await response_publicaciones.json(); //todas las publicaciones de ese usuario
       let cantidad_publicaciones = publicaciones.length; //cantidad de publicaciones
       let usuario = primeros_usuarios.find(u => u.id == id); //nombre del usuario con el id usado
       console.log(`${usuario.name} tiene ${cantidad_publicaciones} publicaciones`);
    }
    console.timeEnd("Secuencial");

    }catch (error) {

    console.error('Error al obtener los usuarios:', error.message);

  }

}

async function obtener_publicaciones_usuarios_promise_all(cant){
	
	try{
           console.time("Paralelo");
	    const response_usuarios = await fetch(`https://jsonplaceholder.typicode.com/users`);
   	    const usuarios = await response_usuarios.json(); //todos los usuarios
            const primeros_usuarios = usuarios.filter(u => u.id <= cant);   //primeros ids pedidos
            const primeros_ids = primeros_usuarios.map(n => n.id);   //guardos los ids

	    const promesas = primeros_ids.map(id => 
      		fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        	.then(r => r.json())
        	.then(publicaciones => {
          	const usuario = primeros_usuarios.find(u => u.id === id);
          	return {
            		usuario: usuario.name,
            		cantidad_publicaciones: publicaciones.length
          	};
  	      })
    	    );

           const resultados = await Promise.all(promesas); //espera todas las promesas

           resultados.forEach(r => {
              console.log(`${r.usuario} tiene ${r.cantidad_publicaciones} publicaciones`);
           });
        console.timeEnd("Paralelo");
	} catch (error){
	    console.error('Error al obtener los usuarios:', error.message);

	}
}

// obtener las publicaciones de los 3 primeros usuarios

obtener_publicaciones_usuarios(3);

obtener_publicaciones_usuarios_promise_all(3);

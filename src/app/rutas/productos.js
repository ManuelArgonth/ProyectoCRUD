const connectdb = require ('../../config/BDconect');

//App y evitamos parentesis, obviamos  los parametros.
module.exports = app =>{
    //Almacena resultado obtenida desde BDconect.js
    const connect = connectdb();

    //Función para ubicar archivo que se enviará
    app.get('/',(req,res)=>{
        //llama conección y ejecuta query
        connect.query('SELECT * FROM producto', (err,result) =>{
            //console.log(result);
            res.render('productos/productos',{                
                productos: result
            });
        });

        //Enviar un texto a pantalla
        //res.render('productos/productos')
        //renderisa
        //res.render('index')
    });

    //metodo post para pasar extraer datos form desde EJS productos
    app.post('/productos',(req, res)=>{
        const {id_producto,
            p_nombre,
            p_descripcion,
            p_preci,
            p_fupdate
        } = req.body;
        const p_precio = parseInt(p_preci);
        const p_fregistro = new Date();
        connect.query('INSERT INTO producto SET? ', {
          id_producto,
          p_nombre,
          p_descripcion,
          p_precio,
          p_fregistro,
          p_fupdate
        },(err, result)=>{
            console.log(err);
            res.redirect('/');
        })
    });

    app.get('/editar/:id_producto',(req, res)=>{
        const{id_producto}= req.params;
        connect.query('SELECT * FROM producto WHERE id_producto = ?', [id_producto], (err,rows)=>{
            res.render('productos/update_p',{
                productos: rows[0]
            })
            console.log(rows[0]);
        });
    });

    app.post('/update/:id_producto',(req, res)=>{
        const{id_producto}= req.params;
        const {
            p_nombre,
            p_descripcion,
            p_preci,
        } = req.body;
        const p_precio = parseInt(p_preci);
        const p_fupdate = new Date();
        connect.query('UPDATE producto SET ?  WHERE id_producto=?',[{p_nombre,p_descripcion,p_precio,p_fupdate},id_producto], (err,rows)=>{
            res.redirect('/');
        });
    });


    app.get('/eliminar/:id_producto',(req, res)=>{
        const{id_producto} = req.params;
        connect.query('DELETE FROM producto WHERE id_producto= ?', [id_producto],
        (err,rows)=>{
            res.redirect('/');
        });
    });
}
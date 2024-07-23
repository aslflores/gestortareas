const path = require('path');

module.exports = {
    entry:'./src/index.js', // punto  de entrada de tu aplicacción
    output:{
        filename:'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module:{
        rules:[
            {
                test:/\.css$/, // Regex para identificar archivos CSS
                use:['style-loader', 'css-loader'], // Loaders para procesar archivos
            },
            {
                test:/\.js$/, // Regex para identificar archivos JS
                exclude:/node_modules/, // Excluir la carpeta node_modules
                use:{
                    loader:'babel-loader', // Loader para transpilar JS moderno  a JS compatible con más navegadores
                    options:{
                        prsents:['@babel/preset-env'],
                    }
                }
            }
        ]
    },
    devtool:'source-map', //Generar source maps para facilitar la depuración
    devserver:{
        contentBase:path.resolve(_dirrame,'dist'), // Carpeta desde donde obtenemos los archivos que mostramos al usuario
        compress: true, // Habilitando comprensión gzip
        port:9000, // Puerto del servidor  de desarrollo
    }
}
const HtmlWebPackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode:'development',
    output: {
        clean:true //LImpia y vuelve a crear dist
    },
    module : {
        rules:[

            {
                test: /\/.html$/,//Barre todos los archivos y va a encontrar el html
                loader: 'html-loader',
                options : {
                    sources:false 
                    }
            },
            {
                test: /\.css$/,
                exclude : /styles.css$/,
                use: ['style-loader', 'css-loader']   //pARA LOS ESTILOS         
            },            
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader : 'file-loader'                
            },



        ]
    },
    optimization : {},
    plugins:[
        
        new  HtmlWebPackPlugin( {
            title:'Mi web pack app',
            filename:'index.html',
            template:'./src/index.html'
        }),
        new  MiniCssExtractPlugin( {            
            filename:'[name].[fullhash].css', //Mismo nombre
            ignoreOrder:false            
        }),
        new CopyPlugin ({
            patterns : [
              { from : 'src/assets/',  to : 'assets/' }
            ]

        })

    
    ],
}
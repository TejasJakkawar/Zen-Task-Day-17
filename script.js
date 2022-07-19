let box=document.getElementById('container')
let button=document.getElementById('btn')


button.addEventListener('click',()=>{
    countdown()
})

function countdown (){
setTimeout(()=>{box.innerHTML='<h1>10</h1>'
    setTimeout(()=>{box.innerHTML='<h1>9</h1>'
        setTimeout(()=>{box.innerHTML='<h1>8</h1>'
            setTimeout(()=>{box.innerHTML='<h1>7</h1>'
                 setTimeout(()=>{box.innerHTML='<h1>6</h1>'
                       setTimeout(()=>{box.innerHTML='<h1>5</h1>'
                            setTimeout(()=>{box.innerHTML='<h1>4</h1>'
                                 setTimeout(()=>{box.innerHTML='<h1>3</h1>'
                                     setTimeout(()=>{box.innerHTML='<h1>2</h1>'
                                          setTimeout(()=>{box.innerHTML='<h1>1</h1>'
                                              setTimeout(()=>{box.innerHTML='<h1>0</h1>'
                                                    setTimeout(()=>{box.innerHTML='<br><br><h1 class=display-3><span id=happy>Happy </span><span id=inde> Independance</span><span id=day> Day</span></h1><br><img class=img-fluid src=https://wallpapercave.com/wp/wp2587803.jpg><br>'

                                            
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)              
                            },1000)                      
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
}
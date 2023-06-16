const llenarMatriz = () =>{
    let iteracion = document.getElementById('iteracion').value

    let mat00 = document.getElementById('00').value
    let mat01 = document.getElementById('01').value
    let mat02 = document.getElementById('02').value
    let mat03 = document.getElementById('03').value
    let m00 = parseInt(mat00)
    let m01 = parseInt(mat01)
    let m02 = parseInt(mat02)
    let m03 = parseInt(mat03)


    let mat10 = document.getElementById('10').value
    let mat11 = document.getElementById('11').value
    let mat12 = document.getElementById('12').value
    let mat13 = document.getElementById('13').value
    let m10 = parseInt(mat10)
    let m11 = parseInt(mat11)
    let m12 = parseInt(mat12)
    let m13 = parseInt(mat13)

    let mat20 = document.getElementById('20').value
    let mat21 = document.getElementById('21').value
    let mat22 = document.getElementById('22').value
    let mat23 = document.getElementById('23').value
    let m20 = parseInt(mat20)
    let m21 = parseInt(mat21)
    let m22 = parseInt(mat22)
    let m23 = parseInt(mat23)
    let x=0,y=0,z=0
    let matriz = [
        [m00, m01, m02, m03],
        [m10, m11, m12, m13],
        [m20, m21, m22, m23]
    ]

    const despeje = (matriz)=>{
        x = matriz[0][3]/matriz[0][0]
        console.log(x.toFixed(4))

        y = matriz[1][3]/matriz[1][1]
        console.log(y.toFixed(4))

        z = matriz[2][3]/matriz[2][2]
        console.log(z.toFixed(4))
    }

    const proceso = ()=>{
        var a, x1, x2, b,y1,y2,c, z1,z2
        a = matriz[0][3]
        x1 = ((-1* matriz[0][1])* y)
        x2 = ((-1* matriz[0][2])* z)

        x= (x1 + x2 + a)/matriz[0][0]
        console.log(x.toFixed(4))

        b = matriz[1][3]
        y1 = ((-1* matriz[1][0])* x)
        y2 = ((-1* matriz[1][2])* z)

        y = (y1 + y2 + b)/matriz[1][1]
        console.log(y.toFixed(4))

        c = matriz[2][3]
        z1 = ((-1* matriz[2][0])* x)
        z2 = ((-1* matriz[2][1])* y)

        z= (z1 + z2 + c)/matriz[2][2]
        console.log(z.toFixed(4))
    }

    if(((m00>m01) && (m00>m02)) && ((m11>m10) && (m11>m12)) && ((m22>m20) && (m22>m21))){
        console.log(matriz)
    }else{
        // var xx = matriz.indexOf(matriz.reduce((accum, arr) =>{
        //     return arr[0] > accum[0] ? arr : accum
        // }))
        // var yy = matriz.indexOf(matriz.reduce((accum, arr) =>{
        //     return arr[1] > accum[1] ? arr : accum
        // }))
        // var zz = matriz.indexOf(matriz.reduce((accum, arr) =>{
        //     return arr[2] > accum[2] ? arr : accum
        // }))

        matriz = [
            [Math.max(...matriz[0]), matriz[0].find(item => item != Math.max(...matriz[0]) && item != Math.min(...matriz[0])) || matriz[0][0] ,Math.min(...matriz[0]), matriz[0][3]],
            [Math.min(...matriz[1]), Math.max(...matriz[1]), matriz[1].find(item => item != Math.max(...matriz[1]) && item != Math.min(...matriz[1])) || matriz[1][1], matriz[1][3]],
            [Math.min(...matriz[2]), matriz[2].find(item => item != Math.max(...matriz[2]) && item != Math.min(...matriz[2])), Math.max(...matriz[2]) || matriz[2][2], matriz[2][3]]
        ]
        console.log(matriz)
    }
    console.log("Iteracion: 1")
    despeje(matriz)
    for(var i =1;i< iteracion; i++ ){
        console.log(`Iteracion: ${i+1}`)
        proceso()
    }
    alert("Resultado en la consola, abrela")
}
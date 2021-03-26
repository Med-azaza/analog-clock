$(function (){
    const rotation = ()=>{
        let d= new Date();
        let s=d.getSeconds();
        let h=d.getHours();
        let m=d.getMinutes();
        $('#time').html(h.toString()+':'+m.toString());
        s*=6;
        h*=30;
        h+=m/2;
        $('#sec-stick').css({transform:'rotate('+s.toString()+'deg)'});
        $('#min-stick').css({transform:'rotate('+h.toString()+'deg)'});
    }
    let t=setInterval(rotation,1000);
})
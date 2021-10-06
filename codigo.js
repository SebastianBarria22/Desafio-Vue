var app = new Vue({
  el: '#app',
  data: {
    lista: [],
    nombre:'',
    descripcion:'',
    precio:'',
  },

  methods: {
    agregarProducto: function(){
      if(this.nombre!="" && this.descripcion!="" && this.precio!=""){
        this.lista.push({nombre:this.nombre, descripcion:this.descripcion, precio:"$"+this.precio});
        this.nombre='';
        this.descripcion='';
        this.precio='';
      }else{
        alert("Ingrese todos los datos");
      }
    },
    eliminarProducto: function(index){
    this.lista.splice(index, 1);
  }
 }
});

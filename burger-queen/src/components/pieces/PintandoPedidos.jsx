import React, { useState, useEffect } from 'react';
import products from '../controllers/products.js';
import btnCategory from '../styles/btnCategory.module.css';
import itemMenu from '../styles/itemMenu.module.css';
import OrderTotal from './OrderTotal.jsx';
import lineaOrder from '../styles/itemMenu.module.css';
import containerPedido from '../styles/containerPedido.module.css';
import HeadTableOrder from './HeadTableOrder';
import itemOrderTable from '../styles/itemOrder.module.css';
// const [prodData, setProdData] = useState([]);
const PintarProductos = () => {
  const [prodData, setProdData] = useState([]);
  const [prodType, setProdType] = useState('desayuno');

  const productos = (token) => {
    products(token).then((res) => {
      setProdData(res.products);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    productos('el token');
  }, []);

  return (
    <>
      <div className={containerPedido.containerPedido}>
        <div className={containerPedido.containerListMenu}>
          <div className={itemMenu.containerFlexIzq}>
            <button
              className={btnCategory.btnCategory}
              type="submit"
              onClick={() => {
                setProdType('desayuno');
              }}
            >
            Desayuno
            </button>
            <button
              className={btnCategory.btnCategory}
              type="submit"
              onClick={() => {
                setProdType('almuerzo');
              }}
            >
            Almuerzo
            </button>
          </div>
          <div className={itemMenu.containerFlexIzq}>
            {prodData.filter((p) => p.type === prodType).map((p) => (
              <button className={itemMenu.listItemMenu} key={p.id}>
                {p.name}
                {' '}
                {''}
                {' '}
                {p.price}
              </button>
            ))}
          </div>

        </div>
        <div>
          <form>
            <div>
              <p className={lineaOrder.lineaOrder}>Pedido N° : </p>
            </div>
            <div className={lineaOrder.clientInput}>
              <label>Cliente : </label>
              <input placeholder="Nombre del cliente" className={lineaOrder.nameInput} />
            </div>
            <div className={itemOrderTable.tableOrder}>
              <HeadTableOrder />
            </div>
            <OrderTotal />
            <div className={lineaOrder.footerSideOrder}>
              <button className={lineaOrder.btnEnviar}>ENVIAR</button>
              <button className={lineaOrder.btnEnviar}>CANCELAR</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PintarProductos;

import React, { useEffect, useState } from 'react';
import img from '../assets/images/products/Exfoliating Scrub3.jpg';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Cart = () => {
  const defaultData = [
    {
      id: 1,
      items: 'Inner Glow',
      brand: 'Nike',
      quantity: 3,
      price: 100,
      img: img,
    },
    {
      id: 2,
      items: 'Yuja',
      brand: 'Low',
      quantity: 5,
      price: 40,
      img: img,
    },
    {
      id: 3,
      items: 'Serum Avoskin lta',
      brand: 'Slow',
      quantity: 2,
      price: 20,
      img: img,
    },
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor((row) => row, {
      id: 'Items',
      cell: ({ getValue }) => {
        const { items, brand } = getValue();

        return (
          <div className="flex text-start gap-1 flex-col lg:flex-row  lg:w-52 ">
            <img src={img} alt="" className="w-14" />

            <div>
              <h5 className="font-semibold">{items}</h5>
              <p>{brand}</p>
            </div>
          </div>
        );
      },
      footer: (info) => info.column.id,
    }),

    columnHelper.accessor('price', {
      header: () => 'Price',
      cell: (info) => <span>${info.renderValue()}</span>,
      footer: (info) => info.column.id,
    }),

    columnHelper.accessor((row) => [row.quantity, row.id], {
      id: 'Quantity',
      header: () => 'Quantity',
      cell: ({ getValue, row: { id } }) => {
        const [quantity, items] = getValue();

        const incQuantity = (id) => {
          setData((oldValue) => {
            oldValue[id].quantity = oldValue[id].quantity + 1;
            return [...oldValue];
          });
        };
        const decQuantity = (id) => {
          setData((oldValue) => {
            oldValue[id].quantity = oldValue[id].quantity - 1;

            const newValue = data.filter((item) => item.id !== items);

            if (oldValue[id].quantity <= 0) return newValue;
            return [...oldValue];
          });
        };

        return (
          <div className="flex justify-center items-center lg:text-xl font-semibold">
            <button className="mx-2 " onClick={() => incQuantity(id)}>
              <Icon icon="ic:round-plus" />
            </button>
            <span className="w-5">{quantity}</span>
            <button className="mx-2 " onClick={() => decQuantity(id)}>
              <Icon icon="ic:round-minus" />
            </button>
          </div>
        );
      },
      footer: (info) => info.column.id,
    }),

    columnHelper.accessor((row) => row, {
      id: 'Total',
      cell: (info) => {
        const { quantity, price } = info.getValue();
        return quantity * price;
      },
      footer: (info) => info.column.id,
    }),

    columnHelper.accessor('id', {
      header: 'Delete',
      cell: ({ getValue }) => {
        const deleteItem = (id) => {
          const item = data.filter((item) => item.id !== id);

          setData(item);
        };

        return (
          <button>
            <Icon icon="ic:baseline-delete" className="h-5 w-5  text-primaryPink" onClick={() => deleteItem(getValue())} />
          </button>
        );
      },
      footer: (info) => info.column.id,
    }),
  ];

  const [data, setData] = React.useState([...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (data.length === 0) {
    return (
      <section className="main-container mt-20 flex flex-col">
        <h2>There is no Items in cart</h2>
        <Link className="btn-primary hover:bg-opacity-90" to="/products">
          Fill the cart
        </Link>
      </section>
    );
  }

  return (
    <main>
      <section className="main-container flex justify-center items-center mt-20 flex-col">
        <h3 className="font-bold text-xl lg:mt-10">Dharma Cart {data.length} items</h3>

        <table className="w-full mt-10 lg:mt-10">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-y-2 border-primaryBlack/20 ">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Cart;

import React from 'react';
import { Icon } from '@iconify/react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

const Table = ({ setCarts, setData, data }) => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor((row) => row, {
      id: 'Items',
      cell: ({ getValue }) => {
        const { items, brand, img } = getValue();

        return (
          <div className="flex text-start gap-1 flex-col lg:flex-row  lg:w-52 ">
            <img src={img.url} alt={items} className="w-14" />

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
            setCarts([...oldValue]);

            return [...oldValue];
          });
        };
        const decQuantity = (id) => {
          setData((oldValue) => {
            oldValue[id].quantity = oldValue[id].quantity - 1;
            const newValue = data.filter((item) => item.id !== items);

            if (oldValue[id].quantity <= 0) oldValue = newValue;
            setCarts([...oldValue]);

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

    columnHelper.accessor(
      (row) => {
        return row;
      },
      {
        id: 'Total',
        cell: (info) => {
          const { quantity, price } = info.getValue();
          return <span>${(quantity * price).toFixed(1)}</span>;
        },
        footer: (info) => info.column.id,
      }
    ),

    columnHelper.accessor('id', {
      header: 'Delete',
      cell: ({ getValue }) => {
        const deleteItem = (id) => {
          const item = data.filter((item) => item.id !== id);

          setCarts(item);
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
  );
};

export default Table;

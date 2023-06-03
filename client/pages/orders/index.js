const OrderIndex = ({ orders }) => {
    const orderList = orders.map((order, i) => {
        let statusColor;
        if (order.status === 'complete') {
            statusColor = 'table-success'
        } else if (order.status === 'cancelled') {
            statusColor = 'table-danger'
        } else {
            statusColor = 'table-warning'
        }

        return (
            <tr key={order.id}>
                <td> {i + 1} </td>
                <td> {order.ticket.title} </td>
                <td> {order.ticket.price} </td>
                <td className={statusColor}> {order.status} </td>
            </tr>
        );
    });

    return (
        <table className="table table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {orderList}
            </tbody>
        </table>
    )
};

OrderIndex.getInitialProps = async (context, client) => {
    const { data } = await client.get('/api/orders');

    return { orders: data };
};

export default OrderIndex;
let showHistory;

if (user.history) {
  showHistory = user.history.map((item, i) => (
    <tr key={i}>
      <td>{item.model}</td>
      <td>{item.quantity}</td>
      <td>${item.price}</td>
      <td>{moment(item.date).format("MM-DD-YYYY")}</td>
    </tr>
  ));
} else {
  showHistory = null;
}

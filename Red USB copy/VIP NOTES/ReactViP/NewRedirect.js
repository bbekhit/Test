const [redirect, setRedirect] = useState(false);
const handleChange = e => {
  const { name, value } = e.target;
  setServiceForm({ ...serviceForm, [name]: value });
};

const handleSubmit = async e => {
  e.preventDefault();
  let result = await createService(serviceForm, user.uid);
  if (result === "success") {
    setRedirect(true);
  }
};

if (redirect) {
  return <Redirect to="/" />;
}

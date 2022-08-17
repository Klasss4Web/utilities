 const pickContactFromPhone = async (setName, setPhone) => {
  try {
    const contacts = await navigator.contacts.select(props);
    if (!contacts.length) {
      alert("could not pick contact...Please try again");

      return;
    }

    const contact = contacts[0];
    const contactNumber = contact.tel
      .filter((tel) => tel.length > 0)[0]
      .replace(/\s/g, "");
    const contactName = contact.name.filter((name) => name.length > 0)[0];
    setName(contactName);
    setPhone(contactNumber);

    //   handleResults(contacts);
  } catch (ex) {
    // Handle any errors here.
    console.log("err", ex);
    console.log("err", ex.response);
    // errorNotifier('Only supported on mobile Phones', ex);
  }
};

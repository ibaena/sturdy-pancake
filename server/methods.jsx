Meteor.methods({
  submitContact(name,phone,email,message) {
    Contact.insert({
      name: name,
      phone: phone,
      email:email,
      message: message,
      createdAt: new Date(),
    });
    this.refs.phone.value = "";
    this.refs.name.value = "";
    this.refs.email.value = "";
    this.refs.message.value = "";
  },
});

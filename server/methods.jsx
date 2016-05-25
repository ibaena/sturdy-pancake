Meteor.methods({
  submitContact(name,message,phone,email) {
    Contact.insert({
      name: name,
      message: message,
      phone:phone,
      email: email,
      createdAt: new Date(),
    });
    this.refs.phone.value = "";
    this.refs.name.value = "";
    this.refs.email.value = "";
    this.refs.message.value = "";
  },
});

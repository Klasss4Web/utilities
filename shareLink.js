const shareLink = () => {
  if (navigator.share) {
    navigator
      .share({
        title: `Poll Invites from ${user}`,
        text: `Hi ${user} has created a meeting poll on fixmeet and has invited you to participate, click the link below to join the poll`,
        url: `https://fixmeet.app/login?pcode=${pcode}`,
      })
      .then(() => console.log("Successfully share"))
      .catch((error) => console.log("Error sharing", error));
  } else {
    console.log(`Your system doesn't support sharing`);
    alert(`Your system doesn't support sharing`);
  }
};

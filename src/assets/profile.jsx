function Profile() {
    const url = 'https://upload.wikimedia.org/wikipedia/commons/6/60/Eagles_together.jpg';
    const handleclick = (e) => {
        console.log('eagle shout ');
        e.target.style.display="none";
    }
    return(   <div>
            <img src={url} alt="eagle image"  onClick={(e) =>handleclick()}/>
            </div>);
}
export default Profile;
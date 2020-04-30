console.log(4);

//Fetching data from the json file
fetch("./data.json")
.then(res => res.json())
.then(data => {
    let div_songs = document.getElementsByClassName('song');
    let div_artist = document.getElementsByClassName('artist');
    let div_time = document.getElementsByClassName('time');
    let img = document.getElementsByClassName('album');

    for (let i = 0; i < div_songs.length; i++)
    {
        div_songs[i].innerHTML = (data['recent-tracks'][i]['song-name'])
        div_artist[i].innerHTML = (data['recent-tracks'][i]['artist-name'])
        div_time[i].innerHTML = (data['recent-tracks'][i]['time'])
        img[i].src = (data['recent-tracks'][i]['album-image-url'])
    }

    let tdiv_songs = document.getElementsByClassName('topt-song');
    let tdiv_artist = document.getElementsByClassName('topt-artist');
    let tdiv_plays = document.getElementsByClassName('topt-plays');
    let timg = document.getElementsByClassName('talbum');

    for (let i = 0; i < tdiv_songs.length; i++)
    {
        tdiv_songs[i].innerHTML = (data['top-tracks'][i]['song-name'])
        tdiv_artist[i].innerHTML = (data['top-tracks'][i]['artist-name'])
        tdiv_plays[i].innerHTML = (data['top-tracks'][i]['total-plays'])
        timg[i].src = (data['top-tracks'][i]['album-image-url'])
    }

    let grid_div = document.getElementsByClassName('gridImgContainer');
    let grid_text = document.getElementsByClassName('gridText')

    for (let i = 0; i < grid_div.length; i++)
    {
        grid_div[i].style.backgroundImage = "url("+(data['top-artist'][i]['artist-image-url'])+")";
        grid_text[i].innerHTML = (data['top-artist'][i]['artist-name'])+", "+(data['top-artist'][i]['total-plays']) + " Total Plays";
    }
  
})


function commentBox()
{
    let name = document.getElementById("name").value
    let comment = document.getElementById("comment").value
    let comment_box = document.getElementById("postedcomment")
    let div_name = document.createElement('div')
    let div_comment = document.createElement('div')
    let div_time = document.createElement('div')
    let get_date = new Date();
    let post_date = get_date.getDate()+'/'+(get_date.getMonth()+1)+'/'+get_date.getFullYear();
    let post_time = get_date.getHours() + ":" + get_date.getMinutes();
    let posted_dateTime = post_date+' '+post_time;

    div_time.innerHTML = (posted_dateTime)
    div_name.innerHTML = (name)
    div_comment.innerHTML = (comment)

    console.log(comment)
    console.log(name)
    console.log(posted_dateTime)

    comment_box.append(div_name)
    comment_box.append(div_comment)
    comment_box.append(div_time)
}
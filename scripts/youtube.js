const videos = [
  {
    videoUrl: "https://youtu.be/U1JLtpJTe84?si=J0UQ8EJoFMfFVCvs",
    thumbnail: "assets/vazhithunaiye.jpg",
    duration: "3:44",
    title:
      "Vazhithunaiye Video Song | Dragon | Pradeep Ranganathan,Kayadu | Ashwath Marimuthu | Leon James",
    channel: {
      name: "Think Music India",
      logo: "channel-pictures/think_music.jpg",
      verified: true,
    },
    stats: {
      views: "38M",
      age: "2 months ago",
    },
  },
  {
    videoUrl: "https://youtu.be/jFb7vn4Xgds?si=9lP8YaGM9Q9R4udR",
    thumbnail: "assets/mokka-commentry.avif",
    duration: "9:42",
    title: "Man of Steel 2 Update .. (தமிழ்)",
    channel: {
      name: "Mokka Commentry",
      logo: "channel-pictures/mokka-cmty.jpg",
      verified: true,
    },
    stats: {
      views: "34K",
      age: "5 hours ago",
    },
  },
  {
    videoUrl: "https://youtu.be/MbAojJGuds4?si=J9HXMNT8Kzn0IFjB",
    thumbnail: "assets/madan gowri.avif",
    duration: "16:52",
    title: "Google Big Change! | Madan Gowri | Tamil | MG Squad 🖖🏻",
    channel: {
      name: "Madan Gowri",
      logo: "channel-pictures/mg.jpg",
      verified: true,
    },
    stats: {
      views: "189K",
      age: "7 hours ago",
    },
  },
  {
    videoUrl: "https://youtu.be/vgStOhHqRdo?si=-nKtvV9ULK3j6Tsn",
    thumbnail: "assets/ambikapathy.avif",
    duration: "4:57",
    title: "Ambikapathy - Unnaal Unnaal Video Tamil | Dhanush | A. R. Rahman",
    channel: {
      name: "SonyMusicSouthVEVO",
      logo: "channel-pictures/sony_music.jpg",
      verified: true,
    },
    stats: {
      views: "4.5",
      age: "5 years ago",
    },
  },
  {
    videoUrl: "https://youtu.be/EmTG6OFr-8A?si=1oxjjmMAEJgsKiV9",
    thumbnail: "assets/anbe sivam.avif",
    duration: "26:10",
    title:
      "அன்பே சிவம் Best Scenes | மன்னிப்பு கேக்குற மனசு தான் சாமி ! | Kamal Haasan | Madhavan R | Nassar",
    channel: {
      name: "AP International",
      logo: "channel-pictures/ap.jpg",
      verified: true,
    },
    stats: {
      views: "103K",
      age: "2 weeks ago",
    },
  },
  {
    videoUrl: "https://youtu.be/PVcAhAxQcgM?si=IDKNqIq0pdFxUzj8",
    thumbnail: "assets/village_cooking.avif",
    duration: "11:32",
    title:
      "FULL CHICKEN ROAST | Whole Fried Chicken Recipe Cooking in village | Free Range Chicken Recipe",
    channel: {
      name: "Village Cooking Channel",
      logo: "channel-pictures/village_cooking.jpg",
      verified: true,
    },
    stats: {
      views: "154M",
      age: "3 years ago",
    },
  },
  {
    videoUrl: "https://youtu.be/yngKXEBALE0?si=0KGV-ip6zmY8hWTR",
    thumbnail: "assets/batman vs superman.avif",
    duration: "9:56",
    title:
      "Batman v Superman: Dawn of Justice | EPIC Fight Scene! | ClipZone: Heroes & Villains",
    channel: {
      name: "ClipZone:Heroes & Villains",
      logo: "channel-pictures/clipzone.jpg",
      verified: true,
    },
    stats: {
      views: "19M",
      age: "4 years ago",
    },
  },
  {
    videoUrl: "https://youtu.be/UN7HgzJsFZA?si=98jLDs_zk4m_dgLx",
    thumbnail: "assets/vijay.avif",
    duration: "6:15",
    title:
      "Aalaporan Thamizhan 8K/4K Music Video | Mersal | Vijay | A.R. Rahman | Nithya Menen",
    channel: {
      name: "Sony Music South",
      logo: "channel-pictures/sony.jpg",
      verified: true,
    },
    stats: {
      views: "523K",
      age: "2 months ago",
    },
  },
  {
    videoUrl: "https://youtu.be/1seR_ckLXz4?si=_vrH_PYEkUPGzCFt",
    thumbnail: "assets/golden-sparrow.jpg",
    duration: "4:18",
    title:
      "Golden Sparrow - Video Song | Dhanush | Priyanka Mohan | Pavish | Anika | GV Prakash #NEEK",
    channel: {
      name: "Wunderbar Films",
      logo: "channel-pictures/wunderbar.jpg",
      verified: true,
    },
    stats: {
      views: "107M",
      age: "2 months ago",
    },
  },
  {
    videoUrl: "https://youtu.be/s3Ci3qj7-_w?si=zN77sA_QaSPV4vp3",
    thumbnail: "assets/vj-siddhu-ep1.avif",
    duration: "14:48",
    title:
      "மொத்த Flight-ம் நமக்கா 😱✈️ | Maldives Series | Ep-01 | Vj Siddhu Vlogs",
    channel: {
      name: "Vj Siddhu Vlogs",
      logo: "channel-pictures/vj-siddhu-vlogs.jpg",
      verified: true,
    },
    stats: {
      views: "2.8M",
      age: "7 days ago",
    },
  },
  {
    videoUrl: "https://youtu.be/or3zl9oLjD0?si=snGiJ4OxLIOR4FyY",
    thumbnail: "assets/spiderman.avif",
    duration: "9:56",
    title: "Curing The Villians | SPIDER-MAN:NO WAY HOME",
    channel: {
      name: "FilmIsNOW Epic Scenes",
      logo: "channel-pictures/spidy.jpg",
      verified: true,
    },
    stats: {
      views: "593K",
      age: "5 months ago",
    },
  },
  {
    videoUrl: "https://youtu.be/5CEXL8kfGL4?si=1P9wGcbvcMYFFj3Q",
    thumbnail: "assets/kanimaa.avif",
    duration: "4:05",
    title:
      "Full Video:KANIMAA - RETRO | Suriya | Karthik Subbaraj | Pooja Hedge",
    channel: {
      name: "T-Series Tamil",
      logo: "channel-pictures/t-series tamil.jpg",
      verified: true,
    },
    stats: {
      views: "9M",
      age: "8 days ago",
    },
  },
];

let videoHTML = "";
videos.forEach((video) => {
  videoHTML += `
 <div class="video-preview">
          <div class="thumbnail-row">
            <a href="${video.videoUrl}"
              ><img src="${video.thumbnail}" class="thumbnail-1"
            /></a>

            <div class="video-time">${video.duration}</div>
          </div>
          <div class="video-info-grid">
            <div class="channel-picture">
              <img
                class="profile-picture"
                src="${video.channel.logo}"
                alt="channel-logo"
              />
            </div>
            <div class="video-info">
              <p class="video-title">
                ${video.title}
              </p>
              <p class="video-author">
               ${video.channel.name}
                <i style="font-size: 12px" class="fa">&#xf058;</i>
              </p>
              <p class="video-stats">${video.stats.views} views &#183; ${video.stats.age}</p>
            </div>
          </div>
        </div>
`;
});

document.querySelector(".js-video-grid").innerHTML = videoHTML;

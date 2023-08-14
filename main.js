function displayLyrics(songTitle) {
    var lyrics = getLyrics(songTitle);
    document.getElementById('song-title').innerText = songTitle;
    document.getElementById('song-lyrics').innerText = lyrics;

}

function getLyrics(songTitle) {
    // Kode di sini untuk mendapatkan lirik lagu berdasarkan judul lagu
    // Misalnya, kita bisa menggunakan objek JavaScript untuk menyimpan lirik lagu berdasarkan judulnya
    var lyrics = '';

    if (songTitle === 'lirik1') {
        lyrics ="Aku gak butuh uangmu\n" +
        "Aku gak butuh hartamu\n" +
        "Yang kubutuh hanya cintamu\n" +
        "Setulus cintaku padamu\n" +
        "Aku gak mau warisanmu\n" +
        "Aku gak mau kekayaanmu\n" +
        "Yang ku mau rasa sayangmu\n" +
        "Sesayang aku padamu\n" +
        "Hidup sederhana\n" +
        "Gak punya apa-apa tapi banyak cinta\n" +
        "Hidup bermewah-mewahan\n" +
        "Punya segalanya tapi sengsara\n" +
        "Seperti para koruptor\n" +
        "Seperti para koruptor\n" +
        "Aku gak perlu make-up mu\n" +
        "Aku gak perlu bajumu\n" +
        "Yang ku perlu isi dadamu\n" +
        "Sepenuh kasihku padamu\n" +
        "Aku gak penting warna lipstikmu\n" +
        "Aku gak penting perhiasanmu\n" +
        "Yang penting jujur hatimu\n" +
        "Sejujurnya aku falling in love padamu\n" +
        "Hidup sederhana\n" +
        "Gak punya apa-apa tapi banyak cinta\n" +
        "Hidup bermewah-mewahan\n" +
        "Punya segalanya tapi sengsara\n" +
        "Seperti para koruptor\n" +
        "Seperti para koruptor"
        ;
    } else if (songTitle === 'lirik2') {
        lyrics ="Sedikit ngerti ngaku udah paham\n" +
        "Kerja sedikit maunya kelihatan\n" +
        "Otak masih kaya TK\n" +
        "Kok ngakunya sarjana\n" +
        "Ngomong-ngomongin orang\n" +
        "Kaya udah jagoan\n" +
        "Tonk kosong nyaring bunyinya\n" +
        "Klentang-klentong kosong banyak bicara\n" +
        "Oceh sana-sini nggak ada isi\n" +
        "Otak udang ngomongnya sembarang ah\n" +
        "Hak manusia ingin bicara\n" +
        "Hak manusia ingin bernyanyi\n" +
        "Kalau sumbang janganlah didengarkan\n" +
        "Kalau merdu ikutlah bernyanyi\n" +
        "Jangan ngelarang-larang\n" +
        "Jangan banyak komentar\n" +
        "Apalagi menghina\n" +
        "Tonk kosong nyaring bunyinya\n" +
        "Klentang-klentong kosong banyak bicara\n" +
        "Oceh sana-sini nggak ada isi\n" +
        "Otak udang ngomongnya sembarang ah\n" +
        "Terserah mereka kalian atau saya\n" +
        "Asal nggak melanggar hukum\n" +
        "Biarkan saja\n" +
        "Tonk tonk kosong mending pada diam\n" +
        "Biar dunia tentukan pilihan\n" +
        "Yang mana yang benar\n" +
        "Yang mana yang baik\n" +
        "Dari pada elo jadi\n" +
        "Tonk kosong nyaring bunyinya\n" +
        "Klentang-klentong kosong banyak bicara\n" +
        "Oceh sana-sini nggak ada isi\n" +
        "Otak udang ngomongnya sembarang ah\n" +
        "Tonk kosong nyaring bunyinya\n" +
        "Klentang-klentong kosong banyak bicara\n" +
        "Oceh sana-sini nggak ada isi\n" +
        "Otak udang ngomongnya sembarang ah\n" +
        "Ah ah";
        
    } else if (songTitle === 'lirik3') {
        lyrics="Oh mama papa, aku sudah kerja siang dan malam\n" +
        "Bahkan bukan untuk diriku sendiri\n" +
        "Papa bertanya Bimbim ada apa\n" +
        "Mama tersenyum dengan manis\n" +
        "Dan beliau bilang, beliau bilang\n" +
        "\n" +
        "Bimbim\n" +
        "Bimbim jangan menangis\n" +
        "Bimbim\n" +
        "Bimbim jangan menangis\n" +
        "Aku jadi bertanya-tanya\n" +
        "\n" +
        "Aku punya pacar dia sekolah di BPLP Bali\n" +
        "Kusering berkunjung kesana\n" +
        "Aku diberi cinta dan ku berikan dia cinta\n" +
        "Kurangkul tanganku di pundaknya\n" +
        "Dia berbisik Bimbim what's up\n" +
        "Something happen, tell me all your trouble\n" +
        "Tahu dia bilang apa dia bilang\n" +
        "\n" +
        "Bimbim\n" +
        "Bimbim jangan menangis\n" +
        "Bimbim\n" +
        "Bimbim jangan menangis\n" +
        "Aku jadi bertanya-tanya\n" +
        "\n" +
        "Bahkan sahabatku kadang selalu menasehati\n" +
        "Tapi ku tak bisa juga mengerti\n" +
        "Tahu mereka bilang apa, mereka bilang\n" +
        "\n" +
        "Bimbim\n" +
        "Bimbim jangan menangis\n" +
        "Bimbim\n" +
        "Bimbim jangan menangis\n" +
        "Aku jadi bertanya-tanya";}
        return lyrics;
    }

    function displayVideo(videoTitle) {
        var videoUrl = getVideoUrl(videoTitle);
        document.getElementById('video-title').innerText = videoTitle;
        document.getElementById('video-player').src = videoUrl;
    }
    
    function getVideoUrl(videoTitle) {
        // Kode di sini untuk mendapatkan URL video berdasarkan judul video
        // Misalnya, kita bisa menggunakan objek JavaScript untuk menyimpan URL video berdasarkan judulnya
        var videoUrl = '';
    
        if (videoTitle === 'Video1') {
            videoUrl = 'https://www.youtube.com/embed/2-40OKr7XOk?autoplay=1';
        } else if (videoTitle === 'Video2') {
            videoUrl = 'https://www.youtube.com/embed/AQ4O24oCIlA?autoplay=1';
        } else if (videoTitle === 'Video3') {
            videoUrl = 'https://www.youtube.com/embed/0_AiRAFqGU0?autoplay=1';
        // } else if (videoTitle === 'Kamu Ngga Sendirian') {
        //     videoUrl = '..//video/KAMU NGGA SENDIRIAN - TIPE-X LIVE IN LIVING ROOM.mp4';
        // } else if (videoTitle === 'Salam Rindu') {
        //     videoUrl = '..//video/SALAM RINDU - TIPE-X LIVE IN LIVING ROOM.mp4';
        // } else if (videoTitle === 'Sakit Hati') {
        //     videoUrl = '..//video/SAKIT HATI - TIPE-X LIVE IN LIVING ROOM.mp4';
        // 
        }
        return videoUrl;
    }
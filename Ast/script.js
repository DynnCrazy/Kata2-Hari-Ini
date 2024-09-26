const quotes = [
    {
        "q": "Jalani hari dengan penuh semangat!",
        "a": ""
    },
    {
        "q": "Teruslah bernafas.",
        "a": "JKL"
    },
    {
        "q": "Selalu percaya kalau sesuatu yang indah akan segera terjadi.",
        "a": ""
    },
    {
        "q": "Kamu tidak pernah menyadari apa yang kamu miliki sampai itu hilang.",
        "a": ""
    },
    {
        "q": "Kegagalan hanyalah kesempatan untuk memulai lagi, kali ini lebih cerdas.",
        "a": "Henry Ford"
    },
    {
        "q": "Dunia ini penuh dengan orang-orang baik. Jika kamu tidak menemukannya, jadilah satu-satunya.",
        "a": ""
    },
    {
        "q": "Uang bukan segalanya, tapi segalanya butuh uang.",
        "a": ""
    },
    {
        "q": "Kehidupan ini tidak seindah yang kita bayangkan. Tetapi tidak seburuk yang kita pikirkan.",
        "a": ""
    },
    {
        "q": "Semua makhluk hebat dalam satu hal, tapi tidak dalam semua hal.",
        "a": "Spongebob Squarepants"
    },
    {
        "q": "Jika mempunyai banyak uang membuatku lupa dengan sahabatku, maka aku memilih untuk tidak mempunyai uang.",
        "a": "Spongebob Squarepants"
    },
    {
        "q": "Yang penting saat menikmati hidup adalah menjadi bahagia, itulah yang terpenting.",
        "a": "Audrey Hepburn"
    },
    {
        "q": "Hidup adalah perjuangan. Tidak ada hidup tanpa perjuangan.",
        "a": "Plankton"
    },{
        "q": "Lebih baik merasa dicintai dan kehilangan, daripada tidak diintai sama sekali.",
        "a": "Plankton"
    },
    {
        "q": "Orang bodoh bisa bahagia dengan kebodohannya.",
        "a": "Patrick Star"
    },
    {
        "q": "Sabarmu akan terbayar, lelahmu akan hilang, sakitmu akan sembuh. Kamu harus ingat, tuhan itu tidak buta.",
        "a": ""
    },
    {
        "q": "Belajar tanpa berpikir, tidak ada gunanya. Tapi berpikir tanpa belajar, sangatlah berbahaya.",
        "a": "Ir. Soekarno"
    },
    {
        "q": "Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan saat kamu tidak memikirkan mereka",
        "a": "B.J. Habibie"
    },
    {
        "q": "Minggir lu miskin.",
        "a": "I Show Speed"
    },
    {
        "q": "Hidup bukan tentang menunggu badai berlalu, tetapi belajar menari di tengah hujan.",
        "a": ""
    }
];

function showQuoteOfTheDay() {
    const date = new Date();
    const dayIndex = date.getDate() % quotes.length;
    
    const quote = quotes[dayIndex].q;
    const author = quotes[dayIndex].a;

    document.getElementById('quote').innerText = '"' + quote + '"';

    if (author) {
        document.getElementById('author').innerText = "- " + author;
    } else {
        document.getElementById('author').innerText = "";
    }
}

showQuoteOfTheDay();

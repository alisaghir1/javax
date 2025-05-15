import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <div className="my-8 text-center  text-7xl  text-black">
        صُنع بحب بواسطة علي صغير، عاشق أمه الرسمي
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-black text-white">
        <h1 className="text-5xl font-bold mb-10 mt-10">
          تعرف على الأسطورة: جافاكس
        </h1>

        <Image
          src="/javax.jpg"
          alt="Funny friend"
          width={800}
          height={800}
          className="rounded-full border-4 border-white shadow-lg"
        />

        <p className="text-2xl mt-4 max-w-xl">
          "معروف بمهاراته في الكاونتر، ومهاراته في تنس الطاولة، وذكائه العالي."
        </p>

        <div className="bg-white text-black rounded-xl p-4 mt-6 max-w-md shadow">
          <h2 className="text-3xl font-bold">Top Skills:</h2>
          <ul className="list-disc text-2xl text-left pl-5 mt-2">
            <li>"أهم المهارات:"</li>
            <li>أمه عاشقة لكثير من الشباب</li>
            <li>صف الكوريين في صف واحد.</li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-white py-12 px-4 text-center ">
        <h2 className="text-5xl text-black font-bold mb-12">
          اعتذار حبيبة علي صغير لعلي صغير بسبب جافاكس
        </h2>
        <div className="max-w-5xl mx-auto">
          <video
            src="/mom.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg"
            // autoplay muted loop can be added here if you want
          >
            متصفحك لا يدعم عرض الفيديو.
          </video>
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-10">
          منشورات أذكى شخص على قيد الحياة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { src: "/javax-4.jpg", caption: "جوعان" },
            { src: "/javax-5.jpg", caption: "مفكّر إنو الله خلقو وكسر القالب" },
            { src: "/javax-6.jpg", caption: "عم يمسك أمور الدولة "},
            { src: "/javax-7.jpg", caption: "دايمًا أحسن من كل العالم "},
            { src: "/javax-8.jpg", caption: "بتعرف، هو دايمًا مسافر، كان بإسبانيا عم يتفرج على مدريد." },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.src}
                alt={item.caption}
                width={300}
                height={300}
                className="rounded-xl border border-black"
              />
              <p className="mt-2 text-2xl">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-10">أهم صور حياته</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { src: "/javax-1.jpg", caption: "كان مستعجل" },
            { src: "/javax-2.jpg", caption: "قرر يلبس الحجاب." },
            { src: "/javax-3.jpg", caption: "أكل شي بتيزو" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.src}
                alt={item.caption}
                width={300}
                height={300}
                className="rounded-xl border border-black"
              />
              <p className="mt-2 text-2xl">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-10">أهم مقاطع حياته</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { src: "/akel.mp4", caption: "دايمًا ياكل من أصحابه " },
            { src: "/breakdance.mp4", caption: "راقص بريك دانس محترف" },
            { src: "/pro-cs.mp4", caption: "أفضل لاعب يو إس بي في التاريخ" },
            { src: "/samaher.mp4", caption: " الراقصة سماهر" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <video
                src={item.src}
                controls
                width={300}
                height={300}
                className="rounded-xl border border-black"
              >
                Sorry, your browser does not support embedded videos.
              </video>
              <p className="mt-2 text-2xl">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center text-5xl my-20 bg-black text-white">
        إذا كنت بحاجة لأي صور إضافية أو استفسارات، أو حتى لترتيب موعد، لا تتردد في التواصل معي بشكل خاص. شكرًا، علي صغير.
      </div>
    </main>
  );
}

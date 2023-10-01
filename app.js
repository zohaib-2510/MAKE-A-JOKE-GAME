let btn = document.querySelector("#btn");
let wri = document.querySelector("#write")
function funcEng(){
    btn.addEventListener("click",function(){

    let jokes = ["What do kids play when their mom is using the phone? Bored games.",

         "What do you call an ant who fights crime? A vigilANTe!",
        
       " Why are snails slow? Because they’re carrying a house on their back.",
        
     "What’s the smartest insect? A spelling bee!",
    " What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",

  "   Why did the teddy bear say no to dessert? Because she was stuffed.",
     
      "Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands.",
     
     "Name the kind of tree you can hold in your hand? A palm tree!",
     "What has ears but cannot hear? A cornfield.",
     
    " What’s a cat’s favorite dessert? A bowl full of mice-cream.",

    ]
    let math = jokes[Math.floor(Math.random() * jokes.length)]
   wri.innerHTML=math;
    })
}
funcEng();

function funcUrdu(){
    btn.addEventListener("click",function(){

        let jokes = ["تیری آمد کا جنوں اتنا کہ ہر غم بھول گیا",
    

          "کوئی قابو کر بے قابو جن کوئی سانپ نکال پٹاری سے کوئی دهاگا ، کھینچ پراندے کا کوئی منکا , اکشا دهاری سے",
            
           " Dil ki gehraiyon se guzar ke dekh, zindagi ka safar bohat khoobsurat hai.",
            
         "یادیں تیری چھو گئیں ہیں دنیا ویرانی میں۔",
        "محبت کی راہوں میں رنگ ہی رنگ ہیں احوال، ہر رنگ کا رنگ ہی خوبصورت ہے",
    
      "  جنوں کی راہوں پر قدم رکھ کے بھی دل کا سفر جاری ہوتا ہے",
         
          "یادیں بندر کی ترحالی کی طرح ہوتی ہیں، بلکل برقرار نہیں رہتیں۔",
         
         "عشق کی راہوں میں تھوکریں خوبصورتی کا حصّہ ہوتی ہیں۔"
       
    
        ]
        let math = jokes[Math.floor(Math.random() * jokes.length)]
       wri.innerHTML=math;
        })
}
funcUrdu();





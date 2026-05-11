// script.js


// Creates an object that stores all climber information
const climbers = {

   adam: {
        name: "Adam Ondra", // Climbers name
        info: "Adam Ondra is one of the greatest climbers in the world. He is from the Czech Republic and is known for being extremely strong in both sport climbing and bouldering. Many people consider him one of the best all-around climbers in history because he has pushed the limits of what is possible in climbing. He became famous for climbing some of the hardest routes ever done in the world. Adam is also known for his intense focus and powerful style. When he climbs, he often looks very serious because he is thinking carefully about every move. He has completed climbs that almost nobody else has been able to finish, including some of the most difficult rock routes ever created. Adam also competed in the Olympics, representing climbing on a global stage. Even though he is already at the top level, he continues to train hard and try new challenges. Many young climbers look up to him because of his dedication, strength, and love for the sport."
      },

      mejdi: {
        name: "Mejdi Schalck",
        info: "Mejdi Schalck is a talented climber from France who is known for his speed, power, and exciting climbing style. He became famous in competition bouldering because of how quickly he can solve difficult climbing problems. Mejdi is one of the strongest young climbers in the world and has competed against many top athletes in international climbing competitions. People enjoy watching Mejdi climb because he moves very fast and takes big risks on difficult routes. He is especially good at dynamic moves, where climbers jump or move quickly between holds. His energy and confidence make him exciting to watch during competitions. Mejdi trains very hard and continues improving every year, becoming one of the rising stars in modern climbing and bouldering."
      },

      alex: {
        name: "Alex Honnold",
        info: "Alex Honnold is one of the most famous climbers in the world. He is known for free solo climbing, which means climbing without ropes or safety equipment. One of his biggest achievements was climbing the giant cliff El Capitan in Yosemite National Park completely alone without any protection. This climb was shown in the famous movie Free Solo. The movie became very popular because people were shocked by how dangerous the climb was         Alex is known for staying very calm and focused even in scary situations high above the ground. Many people say he has almost no fear. He also climbed famous buildings and walls around the world, including Taipei 101 in Taiwan during a live event. Climbers admire him because of his strength, balance, smart climbing skills, and bravery. Besides climbing, he also helps charities and raises awareness about environmental issues."

      },

      janja: {
        name: "Janja Garnbret",
        info: "Janja Garnbret is one of the best female climbers in the world. She is from Slovenia and became famous because of her amazing strength, balance, and climbing skills. Janja is especially known for competition climbing and bouldering, where she has won many world championships and international competitions. She also won a gold medal in the Olympics, making her one of the biggest stars in climbing history. Many people admire Janja because she climbs very smoothly and makes difficult routes look easy. She is known for her strong mindset, confidence, and hard work during training. Even when climbs are extremely difficult, she stays calm and focused. Janja has inspired many young climbers around the world, especially girls who want to start climbing. Besides competitions, she also enjoys outdoor climbing and continues to push the limits of the sport."
        },

      magnus: {
        name: "Magnus Midtbø",
        info: "Magnus Midtbø is a famous climber from Norway. He is known for his incredible strength, powerful climbing style, and fun personality. Magnus started climbing when he was young and later became one of the best competitive climbers in Europe. He won many climbing competitions and became respected for his strong grip and athletic skills. Today, Magnus is also very popular on YouTube, where he makes videos about climbing, training, challenges, and adventures with other athletes and famous climbers. Many people enjoy watching his videos because they are exciting, funny, and show how difficult climbing can be. Magnus is known for trying crazy climbing challenges and testing his strength in different sports. He has inspired many people to start climbing and stay active. Even after leaving professional competitions, he continues to be one of the most famous climbers on the internet."

    }
};


// Function that opens popup and shows climber information
function showInfo(climber) {

    // Changes popup title text
    document.getElementById("popup-title").innerText = climbers[climber].name;

    // Changes popup paragraph text
    document.getElementById("popup-text").innerText = climbers[climber].info;

    // Makes popup visible
    document.getElementById("popup").style.display = "flex";
}


// Function that closes popup
function closePopup() {

    // Hides popup
    document.getElementById("popup").style.display = "none";
}


// Allows popup to close when clicking outside popup box
window.onclick = function(event) {

    // Stores popup background element
    const popup = document.getElementById("popup");

    // Checks if user clicked on popup background
    if (event.target === popup) {

        // Hides popup
        popup.style.display = "none";
    }
};
var model = document.getElementById("model");
var colors = ["./models/blue01.glb", "./models/lightbrown01.glb"]; 
var currentColorIndex = 1; 

// simple change color
document.getElementById("change-colour").addEventListener("click", function(e) {
  model.src = colors[currentColorIndex];

  // Change next color
  currentColorIndex = (currentColorIndex + 1) % colors.length;

  document.getElementById("model-info1").style.display = "block"; 
});

// example with showing content
model.querySelectorAll('button').forEach((Hotspot) => {
  Hotspot.addEventListener('click', () => annotationClicked(Hotspot));
});

const annotationClicked = (annotation) => {
  let dataset = annotation.dataset;
  model.cameraTarget = dataset.target;
  model.fieldOfView = '30deg';
};


  // Change texture functionality for model
  document.getElementById("change-texture").addEventListener("click", function() {
    document.getElementById("model1").src = "./models/darkbrownleather.glb";
    document.getElementById("model-info2").style.display = "block";
  });
  
 
 
 
  // Change colour functionality for model
  document.getElementById("change-colour2").addEventListener("click", function() {
    document.getElementById("model2").src = "./models/purple01.glb";
    document.getElementById("model-info3").style.display = "block";
  });
  
 

  // Example with multiple models for model1
  var myModels1 = ["./models/darkbrownleather.glb", "./models/darkbrownsoft.glb"];
  var counter1 = 0;
  document.getElementById("change-texture").addEventListener("click", function() {
    counter1++;
    if (counter1 == myModels1.length) {
        counter1 = 0;
    }
    document.getElementById("model1").src = myModels1[counter1];
  });
  

  document.getElementById("changeImageBtn").addEventListener("click", function() {
    var modelViewer = document.getElementById("model1");
    if (modelViewer) {
        
        if (modelViewer.src === "./models/darkbrownsoft.glb") {
            modelViewer.src = "./models/darkbrownleather.glb"; 
        } else {
            modelViewer.src =  "./models/darkbrownsoft.glb"; 
        }
        
    }
});


  // Example with multiple models for model2
  var myModels2 = ["./models/purple01.glb", "./models/orange01.glb", "./models/red01.glb"];
  var counter2 = 0;
  document.getElementById("change-colour2").addEventListener("click", function() {
    counter2++;
    if (counter2 == myModels2.length) {
        counter2 = 0;
    }
    document.getElementById("model2").src = myModels2[counter2];
  });
  

  
  
  
  
  
 
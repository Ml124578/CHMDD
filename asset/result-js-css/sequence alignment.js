function function1() {// Define the fixed sequence B in JavaScript
 
 const sequenceB = jsonData.sequence;

 function alignSequences() {
let sequenceA = document.getElementById("sequenceA").value.toUpperCase();

// Remove spaces from the user input sequence
sequenceA = sequenceA.replace(/\s/g, "");

const matrix = createAlignmentMatrix(sequenceA, sequenceB);
const alignment = traceBack(matrix, sequenceA, sequenceB);

// Add style to highlight the active site in the result
const resultDiv = document.getElementById("alignmentResult");
const highlightedAlignment = highlightActiveSite(alignment, jsonData.activeSite);
resultDiv.innerHTML = highlightedAlignment;
}

 function createAlignmentMatrix(sequenceA, sequenceB) {
   const matrix = [];

   // Initialize the matrix with zeros
   for (let i = 0; i <= sequenceA.length; i++) {
     matrix[i] = [];
     for (let j = 0; j <= sequenceB.length; j++) {
       matrix[i][j] = 0;
     }
   }

   // Fill in the matrix using dynamic programming
   for (let i = 1; i <= sequenceA.length; i++) {
     for (let j = 1; j <= sequenceB.length; j++) {
       const match = sequenceA[i - 1] === sequenceB[j - 1] ? 1 : 0;
       matrix[i][j] = Math.max(
         matrix[i - 1][j - 1] + match,
         matrix[i - 1][j],
         matrix[i][j - 1]
       );
     }
   }

   return matrix;
 }

 function traceBack(matrix, sequenceA, sequenceB) {
   let i = sequenceA.length;
   let j = sequenceB.length;
   let alignmentA = "";
   let alignmentB = "";

   while (i > 0 || j > 0) {
     if (i > 0 && matrix[i][j] === matrix[i - 1][j] + 0) {
       alignmentA = sequenceA[i - 1] + alignmentA;
       alignmentB = "-" + alignmentB;
       i--;
     } else if (j > 0 && matrix[i][j] === matrix[i][j - 1] + 0) {
       alignmentA = "-" + alignmentA;
       alignmentB = sequenceB[j - 1] + alignmentB;
       j--;
     } else {
       alignmentA = sequenceA[i - 1] + alignmentA;
       alignmentB = sequenceB[j - 1] + alignmentB;
       i--;
       j--;
     }
   }

   return alignmentA + "<br>" + alignmentB;
 }

 function highlightActiveSite(alignment, activeSite) {
const splitAlignment = alignment.split("<br>");
const alignmentA = splitAlignment[0];
const alignmentB = splitAlignment[1];

// Initialize counters to keep track of non-dash characters for both chains
let charCountA = 0;
let charCountB = 0;

// Initialize variables to store the highlighted alignments for both chains
let highlightedAlignmentA = "";
let highlightedAlignmentB = "";

for (let i = 0; i < alignmentB.length; i++) {
 if (alignmentB[i] !== "-") {
   charCountB++;
   if (activeSite.includes(charCountB)) {
     const aminoAcidB = alignmentB[i];
     // Add a 'title' attribute to display the position of the amino acid in B chain
     highlightedAlignmentB += `<span class="active-site" title="Position B: ${charCountB}">${aminoAcidB}</span>`;
   } else {
     highlightedAlignmentB += alignmentB[i];
   }
 } else {
   highlightedAlignmentB += alignmentB[i];
 }

 if (alignmentA[i] !== "-") {
   charCountA++;
   const aminoAcidA = alignmentA[i];
   // Add a 'title' attribute to display the position of the amino acid in A chain
   highlightedAlignmentA += `<span title="Position A: ${charCountA}">${aminoAcidA}</span>`;
 } else {
   highlightedAlignmentA += alignmentA[i];
 }
}

return highlightedAlignmentA + "<br>" + highlightedAlignmentB;
}
document.getElementById("seqButton").addEventListener("click", function() {
    alignSequences();
  });
  
}
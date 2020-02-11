// $(document).ready(() => {

//   const generateRandomString = () => {
//     return (Math.random().toString(36) + '00000000000000000').slice(2, 10);
//   };

//   // Temp until we get the endpoint figured out
//   // The generated random endpoint string needs to go into the db
//   const randomStr = generateRandomString();
//   let url = `localhost:8080/api/vote/${randomStr}`;
//   const $pollContainer = $('.poll-container');

//   $pollContainer.append(`
//     <div class="url-link">
//       <input type="text" value="${url}" id="copy-url">
//       <button id ="copy-btn" onclick="copy()">copy URL</button>
//       <script>
//         const copy = () => {
//           let copyText = document.getElementById("copy-url");
//           copyText.select();
//           copyText.setSelectionRange(0, 99999)
//           document.execCommand("copy");
//         };
//       </script>
//     </div>
//     `);

// });


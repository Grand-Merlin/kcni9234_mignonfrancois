/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function (event) {\n  /* Récupération des éléments HTML */\n  var toggleCheckbox = document.getElementById('toggle_checkbox');\n  var body = document.body;\n  var formContainer = document.querySelector('.form-container');\n  var form = document.querySelector('form');\n\n  /* Désactivation temporaire des transitions */\n  body.style.transition = 'none';\n  form.style.transition = 'none';\n  formContainer.style.transition = 'none';\n\n  /* Définition des couleurs d'arrière-plan et de texte initiales */\n  body.style.backgroundColor = '#f9f4e1';\n  body.style.color = '#000';\n  form.style.backgroundColor = '#f9f4e1';\n\n  /* Réactivation des transitions après un court délai */\n  setTimeout(function () {\n    body.style.transition = '';\n    form.style.transition = '';\n    formContainer.style.transition = '';\n  }, 100);\n\n  /* Écoute du changement d'état du bouton bascule */\n  toggleCheckbox.addEventListener('change', function () {\n    if (this.checked) {\n      /* Passage en mode sombre */\n      body.style.backgroundColor = '#333';\n      body.style.color = '#f9f4e1';\n      form.style.backgroundColor = '#333';\n      formContainer.style.backgroundImage = \"url('/images/background_dark.png')\";\n    } else {\n      /* Passage en mode clair */\n      body.style.backgroundColor = '#f9f4e1';\n      body.style.color = '#000';\n      form.style.backgroundColor = '#f9f4e1';\n      formContainer.style.backgroundImage = \"url('/images/background.png')\";\n    }\n  });\n});\n\n/* Fonction pour valider une adresse e-mail */\nfunction validateEmail(email) {\n  /* Création d'une expression régulière pour tester le format de l'e-mail */\n  var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/;\n  /* Test de l'e-mail avec l'expression régulière et renvoi du résultat */\n  return re.test(email);\n}\n\n/* Fonction pour vérifier si le champ du mot de passe est vide */\nfunction isPasswordEmpty(password) {\n  /* Vérification si le mot de passe est vide et renvoi du résultat */\n  return password === \"\";\n}\n\n/* Ajout d'un écouteur d'événements \"submit\" au formulaire */\ndocument.getElementById('login-form').addEventListener('submit', function (event) {\n  try {\n    /* Récupération de l'e-mail et du mot de passe des champs de saisie */\n    var email = document.getElementById('email').value;\n    var password = document.getElementById('password').value;\n\n    /* Si l'e-mail n'est pas valide ou si le mot de passe est vide, blocage de la soumission du formulaire */\n    if (!validateEmail(email)) {\n      alert('Veuillez entrer une adresse e-mail valide.');\n      event.preventDefault();\n    } else if (isPasswordEmpty(password)) {\n      alert('Veuillez entrer un mot de passe.');\n      event.preventDefault();\n    }\n  } catch (error) {\n    /* Si une erreur se produit, capture et affichage de celle-ci */\n    console.error(\"Une erreur s'est produite lors de la validation du formulaire :\", error);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvbWFpbi5qcy5qcyIsIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidG9nZ2xlQ2hlY2tib3giLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJmb3JtQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImZvcm0iLCJzdHlsZSIsInRyYW5zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInNldFRpbWVvdXQiLCJjaGVja2VkIiwiYmFja2dyb3VuZEltYWdlIiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwicmUiLCJ0ZXN0IiwiaXNQYXNzd29yZEVtcHR5IiwicGFzc3dvcmQiLCJ2YWx1ZSIsImFsZXJ0IiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9tYWluLmpzP2ZkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xyXG4gICAgLyogUsOpY3Vww6lyYXRpb24gZGVzIMOpbMOpbWVudHMgSFRNTCAqL1xyXG4gICAgY29uc3QgdG9nZ2xlQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlX2NoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcblxyXG4gICAgLyogRMOpc2FjdGl2YXRpb24gdGVtcG9yYWlyZSBkZXMgdHJhbnNpdGlvbnMgKi9cclxuICAgIGJvZHkuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcclxuICAgIGZvcm0uc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcclxuICAgIGZvcm1Db250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcclxuXHJcbiAgICAvKiBEw6lmaW5pdGlvbiBkZXMgY291bGV1cnMgZCdhcnJpw6hyZS1wbGFuIGV0IGRlIHRleHRlIGluaXRpYWxlcyAqL1xyXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y5ZjRlMSc7IFxyXG4gICAgYm9keS5zdHlsZS5jb2xvciA9ICcjMDAwJzsgXHJcbiAgICBmb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjlmNGUxJzsgXHJcblxyXG4gICAgLyogUsOpYWN0aXZhdGlvbiBkZXMgdHJhbnNpdGlvbnMgYXByw6hzIHVuIGNvdXJ0IGTDqWxhaSAqL1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYm9keS5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbiAgICAgICAgZm9ybS5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbiAgICB9LCAxMDApO1xyXG5cclxuICAgIC8qIMOJY291dGUgZHUgY2hhbmdlbWVudCBkJ8OpdGF0IGR1IGJvdXRvbiBiYXNjdWxlICovXHJcbiAgICB0b2dnbGVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIC8qIFBhc3NhZ2UgZW4gbW9kZSBzb21icmUgKi9cclxuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzMzMyc7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuY29sb3IgPSAnI2Y5ZjRlMSc7IFxyXG4gICAgICAgICAgICBmb3JtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzMzJztcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2ltYWdlcy9iYWNrZ3JvdW5kX2RhcmsucG5nJylcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvKiBQYXNzYWdlIGVuIG1vZGUgY2xhaXIgKi9cclxuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y5ZjRlMSc7IFxyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmNvbG9yID0gJyMwMDAnOyBcclxuICAgICAgICAgICAgZm9ybS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2Y5ZjRlMSc7IFxyXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcvaW1hZ2VzL2JhY2tncm91bmQucG5nJylcIjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vKiBGb25jdGlvbiBwb3VyIHZhbGlkZXIgdW5lIGFkcmVzc2UgZS1tYWlsICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcclxuICAgIC8qIENyw6lhdGlvbiBkJ3VuZSBleHByZXNzaW9uIHLDqWd1bGnDqHJlIHBvdXIgdGVzdGVyIGxlIGZvcm1hdCBkZSBsJ2UtbWFpbCAqL1xyXG4gICAgY29uc3QgcmUgPSAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvO1xyXG4gICAgLyogVGVzdCBkZSBsJ2UtbWFpbCBhdmVjIGwnZXhwcmVzc2lvbiByw6lndWxpw6hyZSBldCByZW52b2kgZHUgcsOpc3VsdGF0ICovXHJcbiAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbn1cclxuXHJcbi8qIEZvbmN0aW9uIHBvdXIgdsOpcmlmaWVyIHNpIGxlIGNoYW1wIGR1IG1vdCBkZSBwYXNzZSBlc3QgdmlkZSAqL1xyXG5mdW5jdGlvbiBpc1Bhc3N3b3JkRW1wdHkocGFzc3dvcmQpIHtcclxuICAgIC8qIFbDqXJpZmljYXRpb24gc2kgbGUgbW90IGRlIHBhc3NlIGVzdCB2aWRlIGV0IHJlbnZvaSBkdSByw6lzdWx0YXQgKi9cclxuICAgIHJldHVybiBwYXNzd29yZCA9PT0gXCJcIjtcclxufVxyXG5cclxuLyogQWpvdXQgZCd1biDDqWNvdXRldXIgZCfDqXbDqW5lbWVudHMgXCJzdWJtaXRcIiBhdSBmb3JtdWxhaXJlICovXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLyogUsOpY3Vww6lyYXRpb24gZGUgbCdlLW1haWwgZXQgZHUgbW90IGRlIHBhc3NlIGRlcyBjaGFtcHMgZGUgc2Fpc2llICovXHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLnZhbHVlO1xyXG5cclxuICAgICAgICAvKiBTaSBsJ2UtbWFpbCBuJ2VzdCBwYXMgdmFsaWRlIG91IHNpIGxlIG1vdCBkZSBwYXNzZSBlc3QgdmlkZSwgYmxvY2FnZSBkZSBsYSBzb3VtaXNzaW9uIGR1IGZvcm11bGFpcmUgKi9cclxuICAgICAgICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWwpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdWZXVpbGxleiBlbnRyZXIgdW5lIGFkcmVzc2UgZS1tYWlsIHZhbGlkZS4nKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUGFzc3dvcmRFbXB0eShwYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IGVudHJlciB1biBtb3QgZGUgcGFzc2UuJyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvKiBTaSB1bmUgZXJyZXVyIHNlIHByb2R1aXQsIGNhcHR1cmUgZXQgYWZmaWNoYWdlIGRlIGNlbGxlLWNpICovXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUgbG9ycyBkZSBsYSB2YWxpZGF0aW9uIGR1IGZvcm11bGFpcmUgOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQUNDLEtBQUssRUFBSztFQUNyRDtFQUNBLElBQU1DLGNBQWMsR0FBR0gsUUFBUSxDQUFDSSxjQUFjLENBQUMsaUJBQWlCLENBQUM7RUFDakUsSUFBTUMsSUFBSSxHQUFHTCxRQUFRLENBQUNLLElBQUk7RUFDMUIsSUFBTUMsYUFBYSxHQUFHTixRQUFRLENBQUNPLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUMvRCxJQUFNQyxJQUFJLEdBQUdSLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLE1BQU0sQ0FBQzs7RUFFM0M7RUFDQUYsSUFBSSxDQUFDSSxLQUFLLENBQUNDLFVBQVUsR0FBRyxNQUFNO0VBQzlCRixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLE1BQU07RUFDOUJKLGFBQWEsQ0FBQ0csS0FBSyxDQUFDQyxVQUFVLEdBQUcsTUFBTTs7RUFFdkM7RUFDQUwsSUFBSSxDQUFDSSxLQUFLLENBQUNFLGVBQWUsR0FBRyxTQUFTO0VBQ3RDTixJQUFJLENBQUNJLEtBQUssQ0FBQ0csS0FBSyxHQUFHLE1BQU07RUFDekJKLElBQUksQ0FBQ0MsS0FBSyxDQUFDRSxlQUFlLEdBQUcsU0FBUzs7RUFFdEM7RUFDQUUsVUFBVSxDQUFDLFlBQU07SUFDYlIsSUFBSSxDQUFDSSxLQUFLLENBQUNDLFVBQVUsR0FBRyxFQUFFO0lBQzFCRixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLEVBQUU7SUFDMUJKLGFBQWEsQ0FBQ0csS0FBSyxDQUFDQyxVQUFVLEdBQUcsRUFBRTtFQUN2QyxDQUFDLEVBQUUsR0FBRyxDQUFDOztFQUVQO0VBQ0FQLGNBQWMsQ0FBQ0YsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVc7SUFDakQsSUFBSSxJQUFJLENBQUNhLE9BQU8sRUFBRTtNQUNkO01BQ0FULElBQUksQ0FBQ0ksS0FBSyxDQUFDRSxlQUFlLEdBQUcsTUFBTTtNQUNuQ04sSUFBSSxDQUFDSSxLQUFLLENBQUNHLEtBQUssR0FBRyxTQUFTO01BQzVCSixJQUFJLENBQUNDLEtBQUssQ0FBQ0UsZUFBZSxHQUFHLE1BQU07TUFDbkNMLGFBQWEsQ0FBQ0csS0FBSyxDQUFDTSxlQUFlLEdBQUcsb0NBQW9DO0lBQzlFLENBQUMsTUFBTTtNQUNIO01BQ0FWLElBQUksQ0FBQ0ksS0FBSyxDQUFDRSxlQUFlLEdBQUcsU0FBUztNQUN0Q04sSUFBSSxDQUFDSSxLQUFLLENBQUNHLEtBQUssR0FBRyxNQUFNO01BQ3pCSixJQUFJLENBQUNDLEtBQUssQ0FBQ0UsZUFBZSxHQUFHLFNBQVM7TUFDdENMLGFBQWEsQ0FBQ0csS0FBSyxDQUFDTSxlQUFlLEdBQUcsK0JBQStCO0lBQ3pFO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOztBQUVGO0FBQ0EsU0FBU0MsYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQzFCO0VBQ0EsSUFBTUMsRUFBRSxHQUFHLHNFQUFzRTtFQUNqRjtFQUNBLE9BQU9BLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLENBQUM7QUFDekI7O0FBRUE7QUFDQSxTQUFTRyxlQUFlQSxDQUFDQyxRQUFRLEVBQUU7RUFDL0I7RUFDQSxPQUFPQSxRQUFRLEtBQUssRUFBRTtBQUMxQjs7QUFFQTtBQUNBckIsUUFBUSxDQUFDSSxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUNILGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFTQyxLQUFLLEVBQUU7RUFDN0UsSUFBSTtJQUNBO0lBQ0EsSUFBTWUsS0FBSyxHQUFHakIsUUFBUSxDQUFDSSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNrQixLQUFLO0lBQ3BELElBQU1ELFFBQVEsR0FBR3JCLFFBQVEsQ0FBQ0ksY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDa0IsS0FBSzs7SUFFMUQ7SUFDQSxJQUFJLENBQUNOLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7TUFDdkJNLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztNQUNuRHJCLEtBQUssQ0FBQ3NCLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsTUFBTSxJQUFJSixlQUFlLENBQUNDLFFBQVEsQ0FBQyxFQUFFO01BQ2xDRSxLQUFLLENBQUMsa0NBQWtDLENBQUM7TUFDekNyQixLQUFLLENBQUNzQixjQUFjLENBQUMsQ0FBQztJQUMxQjtFQUNKLENBQUMsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7SUFDWjtJQUNBQyxPQUFPLENBQUNELEtBQUssQ0FBQyxpRUFBaUUsRUFBRUEsS0FBSyxDQUFDO0VBQzNGO0FBQ0osQ0FBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./resources/js/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/main.js"]();
/******/ 	
/******/ })()
;
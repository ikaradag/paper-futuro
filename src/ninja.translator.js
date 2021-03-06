ninja.translator = {
	currentCulture: "en",

	autoDetectTranslation: function() {
		// window.navigator.language for Firefox / Chrome / Opera Safari
		// window.navigator.userLanguage for IE
		var language = window.navigator.language || window.navigator.userLanguage;
		if (!this.translate(language)) {
			// Try to remove part after futurocoin, for example cs-CZ -> cs
			language = language.substr(0, language.indexOf('-'));
			this.translate(language);
		}
	},

	translate: function (culture) {
		var dict = ninja.translator.translations[culture];
		if (dict) {
			// set current culture
			ninja.translator.currentCulture = culture;
			// update menu UI
			for (var cult in ninja.translator.translations) {
				var cultureElement = document.getElementById("culture" + cult);
				if (cultureElement != null) {
					cultureElement.setAttribute("class", "");
				}
				else {
					console.log("DOM element not found: " + "culture" + cult);
				}
				document.getElementById("culture" + culture).setAttribute("class", "selected");
			}
			// apply translations
			for (var id in dict) {
				if (document.getElementById(id) && document.getElementById(id).value) {
					document.getElementById(id).value = dict[id];
				}
				else if (document.getElementById(id)) {
					document.getElementById(id).innerHTML = dict[id];
				}
			}
			return true;
		} else {
			return false;
		}
	},

	get: function (id) {
		var translation = ninja.translator.translations[ninja.translator.currentCulture][id];
		return translation;
	},

	translations: {
		"en": {
			// javascript alerts or messages
			"testneteditionactivated": "TESTNET EDITION ACTIVATED",
			"paperlabelbitcoinaddress": "Futurocoin Address:",
			"paperlabelprivatekey": "Private Key (Wallet Import Format):",
			"paperlabelencryptedkey": "Encrypted Private Key (Password required)",
			"bulkgeneratingaddresses": "Generating addresses... ",
			"brainalertpassphrasetooshort": "The passphrase you entered is too short.\n\n",
			"brainalertpassphrasewarning": "Warning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your Futurocoin.",
			"brainalertpassphrasedoesnotmatch": "The passphrase does not match the confirm passphrase.",
			"detailalertnotvalidprivatekey": "The text you entered is not a valid Private Key",
			"detailconfirmsha256": "The text you entered is not a valid Private Key!\n\nWould you like to use the entered text as a passphrase and create a Private Key using a SHA256 hash of the passphrase?\n\nWarning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your Futurocoin.",
			"detailbip38decryptbutton": "Decrypt BIP38", //TODO: please translate
			"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
			"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.",
			"bip38alertpassphraserequired": "Passphrase required for BIP38 key",
			"vanityinvalidinputcouldnotcombinekeys": "Invalid input. Could not combine keys.",
			"vanityalertinvalidinputpublickeysmatch": "Invalid input. The Public Key of both entries match. You must input two different keys.",
			"vanityalertinvalidinputcannotmultiple": "Invalid input. Cannot multiply two public keys. Select 'Add' to add two public keys to get a Futurocoin address.",
			"vanityprivatekeyonlyavailable": "Only available when combining two private keys",
			"vanityalertinvalidinputprivatekeysmatch": "Invalid input. The Private Key of both entries match. You must input two different keys.",

		    // header and menu html
			"singlewallet": "Single Wallet",
			"paperwallet": "Paper Wallet",
			"bulkwallet": "Bulk Wallet",
			"brainwallet": "Brain Wallet",
			"vanitywallet": "Vanity Wallet",
            "splitwallet": "Split Wallet",
			"detailwallet": "Wallet Details"
		},

		"es": {
			// javascript alerts or messages
			"testneteditionactivated": "Testnet se activa",
			"paperlabelbitcoinaddress": "Dirección Futurocoin:",
			"paperlabelprivatekey": "Clave privada (formato para importar):",
			"paperlabelencryptedkey": "Clave privada cifrada (contraseña necesaria)",
			"bulkgeneratingaddresses": "Generación de direcciones... ",
			"brainalertpassphrasetooshort": "La contraseña introducida es demasiado corta.\n\n",
			"brainalertpassphrasewarning": "Aviso: Es importante escoger una contraseña fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus Futurocoin.",
			"brainalertpassphrasedoesnotmatch": "Las contraseñas no coinciden.",
			"detailalertnotvalidprivatekey": "El texto que has introducido no es una clave privada válida",
			"detailconfirmsha256": "El texto que has introducido no es una clave privada válida\n\n¿Quieres usar ese texto como si fuera una contraseña y generar una clave privada usando un hash SHA256 de tal contraseña?\n\nAviso: Es importante escoger una contraseña fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus Futurocoin.",
			"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.", //TODO: please translate
			"bip38alertpassphraserequired": "Passphrase required for BIP38 key", //TODO: please translate
			"vanityinvalidinputcouldnotcombinekeys": "Entrada no válida. No se puede combinar llaves.",
			"vanityalertinvalidinputpublickeysmatch": "Entrada no válida. La clave pública de ambos coincidan entradas. Debe introducir dos claves diferentes.",
			"vanityalertinvalidinputcannotmultiple": "Entrada no válida. No se puede multiplicar dos claves públicas. Seleccione 'Añadir' para agregar dos claves públicas para obtener una dirección Futurocoin.",
			"vanityprivatekeyonlyavailable": "Sólo está disponible cuando se combinan dos claves privadas",
			"vanityalertinvalidinputprivatekeysmatch": "Entrada no válida. La clave privada de ambos coincidan entradas. Debe introducir dos claves diferentes.",

			// header and menu html
			"tagline": "Generador de carteras Futurocoin de código abierto en lado de cliente con Javascript",
			"generatelabelbitcoinaddress": "Generando dirección Futurocoin...",
			"generatelabelmovemouse": "Mueve un poco el ratón para crear entropía...",
			"generatelabelkeypress": "OR type some random characters into this textbox", //TODO: please translate
			"singlewallet": "Una sola cartera",
			"paperwallet": "Cartera en papel",
			"bulkwallet": "Direcciones en masa",
			"brainwallet": "Cartera mental",
			"vanitywallet": "Cartera personalizada",
			"splitwallet": "Split Wallet", //TODO: please translate
			"detailwallet": "Detalles de la cartera",

			// footer html
			"footerlabeldonations": "Donaciones:",
			"footerlabeltranslatedby": "Traducción: <b>12345</b>Vypv2QSmuRXcciT5oEB27mPbWGeva",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "Histórico de versiones",
			"footerlabelgithub": "Repositorio GitHub",
			"footerlabelgithubzip": "zip",
			"footerlabelsig": "sig",
			"footerlabelcopyright1": "Copyright bitaddress.org, The Futurocoin Developers.",
			"footerlabelcopyright2": "Copyright del código JavaScript: en el fuente.",
			"footerlabelnowarranty": "Sin garantía.",

			// status html
			"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
			"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
			"statusokcryptogood": "OK", //TODO: please translate
			"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
			"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
			"statusokcryptobad": "OK", //TODO: please translate
			"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
			"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
			"statusokunittestsgood": "OK", //TODO: please translate
			"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
			"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
			"statusokunittestsbad": "OK", //TODO: please translate
			"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
			"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
			"statusokprotocolgood": "OK", //TODO: please translate
			"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
			"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
			"statuslabelprotocolbad2": "download", //TODO: please translate
			"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
			"statusokprotocolbad": "OK", //TODO: please translate
			"statuslabelkeypool1": "This is a log of all the Futurocoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
			"statuskeypoolrefresh": "Refresh", //TODO: please translate
			"statusokkeypool": "OK", //TODO: please translate

			// single wallet html
			"newaddress": "Generar dirección",
			"singleprint": "Imprimir",
			"singlelabelbitcoinaddress": "Dirección Futurocoin",
			"singlelabelprivatekey": "Clave privada (formato para importar):",
			"singletip1": "<b>A Futurocoin wallet</b> is as simple as a single pairing of a Futurocoin address with it's corresponding Futurocoin private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
			"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the Futurocoin address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you are familiar with PGP you can download this all-in-one HTML page and check that you have an authentic version from the author of this site by matching the SHA256 hash of this HTML with the SHA256 hash available in the signed version history document linked on the footer of this site. If you leave/refresh the site or press the Generate New Address button then a new private key will be generated and the previously displayed private key will not be retrievable.	Your Futurocoin private key should be kept a secret. Whomever you share the private key with has access to spend all the Futurocoin associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
			"singletip3": "<b>Add funds</b> to this wallet by instructing others to send Futurocoin to your Futurocoin address.", //TODO: please translate
			"singletip4": "<b>Check your balance</b> by going to explorer.futurocoin.org and entering your Futurocoin address.", //TODO: please translate
			"singletip5": "<b>Spend your Futurocoin</b> by importing your private key to the p2p client wallet. Keep in mind when you import your single key to a Futurocoin p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another Futurocoin address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining Futurocoin will be stored there. Satoshi advised that one should never delete a wallet.", //TODO: please translate
			"singleshare": "SHARE", //TODO: please translate
			"singlesecret": "SECRET", //TODO: please translate

			// paper wallet html
			"paperlabelhideart": "Ocultar diseño",
			"paperlabeladdressesperpage": "Direcciones por página:",
			"paperlabeladdressestogenerate": "Direcciones en total:",
			"papergenerate": "Generar",
			"paperprint": "Imprimir",
			"paperlabelBIPpassphrase": "Passphrase:", //TODO: please translate
			"paperlabelencrypt": "BIP38 Encrypt?", //TODO: please translate

			// bulk wallet html
			"bulklabelstartindex": "Empezar en:",
			"bulklabelrowstogenerate": "Filas a generar:",
			"bulklabelcompressed": "Compressed addresses?", //TODO: please translate
			"bulkgenerate": "Generar",
			"bulkprint": "Imprimir",
			"bulklabelcsv": "Valores separados por coma:",
			"bulklabelformat": "Índice,Dirección,Clave privada (formato para importar)",
			"bulklabelq1": "¿Por qué debo usar \"Direcciones en masa\" para aceptar Futurocoin en mi web?",
			"bulka1": "La forma tradicional de aceptar Futurocoin en tu web requiere tener instalado el cliente oficial de Futurocoin (\"futurocoind\"). Sin embargo muchos servicios de hosting no permiten instalar dicho cliente. Además, ejecutar el cliente en tu servidor supone que las claves privadas están también en el servidor y podrían ser comprometidas en caso de intrusión. Al usar este mecanismo, puedes subir al servidor sólo las dirección de Futurocoin y no las claves privadas. De esta forma no te tienes que preocupar de que alguien robe la cartera si se cuelan en el servidor.",
			"bulklabelq2": "¿Cómo uso \"Direcciones en masa\" para aceptar Futurocoin en mi web?",
			"bulklabela2li1": "Usa el tab \"Direcciones en masa\" para generar por anticipado muchas direcciones (más de 10000). Copia y pega la lista de valores separados por comas (CSV) a un archivo de texto seguro (cifrado) en tu ordenador. Guarda una copia de seguridad en algún lugar seguro.",
			"bulklabela2li2": "Importa las direcciones en la base de datos de tu servidor. No subas la cartera ni las claves públicas, o de lo contrario te lo pueden robar. Sube sólo las direcciones, ya que es lo que se va a mostrar a los clientes.",
			"bulklabela2li3": "Ofrece una alternativa en el carro de la compra de tu web para que los clientes paguen con Futurocoin. Cuando el cliente elija pagar con Futurocoin, les muestras una de las direcciones de la base de datos como su \"dirección de pago\" y guardas esto junto con el pedido.",
			"bulklabela2li4": "Ahora te hace falta recibir una notificación del pago. Busca en google \"notificación de pagos Futurocoin\" (o \"Futurocoin payment notification\" en inglés) y suscríbete a alguno de los servicios que aparezcan. Hay varios de ellos, que te pueden notificar vía Web services, API, SMS, email, etc. Una vez te llegue la notificación, lo cual puede ser automatizado, entonces ya puedes procesar el pedido. Para comprobar a mano si has recibido un pago, puedes usar Block Explorer: reemplaza DIRECCION a continuación por la dirección que estés comprobando. La transacción puede tardar entre 10 minutos y una hora en ser confirmada. <br />http://explorer.futurocoin.org/address/DIRECCION<br /><br />Puedes ver las transacciones sin confirmar en: https://bchain.info/Futurocoin/ http://insight.futurocoin.siampm.com/ <br />Las transacciones sin confirmar suelen aparecer ahí en unos 30 segundos.",
			"bulklabela2li5": "Las Futurocoin que recibas se almacenarán de forma segura en la cadena de bloques. Usa la cartera original que generaste en el paso 1 para usarlas.",

			// brain wallet html
			"brainlabelenterpassphrase": "Contraseña:",
			"brainlabelshow": "Mostrar",
			"brainprint": "Imprimir",
			"brainlabelconfirm": "Confirmar contraseña:",
			"brainview": "Ver",
			"brainalgorithm": "Algoritmo: SHA256(contraseña)",
			"brainlabelbitcoinaddress": "Dirección Futurocoin:",
			"brainlabelprivatekey": "Clave privada (formato para importar):",

			// vanity wallet html
			"vanitylabelstep1": "Paso 1 - Genera tu par de claves",
			"vanitynewkeypair": "Generar",
			"vanitylabelstep1publickey": "Clave pública:",
			"vanitylabelstep1pubnotes": "Copia y pega la línea de arriba en el campo \"Your-Part-Public-Key\" de la web de Vanity Pool.",
			"vanitylabelstep1privatekey": "Clave privada:",
			"vanitylabelstep1privnotes": "Copia y pega la clave privada de arriba en un archivo de texto. Es mejor que lo almacenes en un volumen cifrado. Lo necesitarás para recuperar la clave privada una vez Vanity Pool haya encontrado tu prefijo.",
			"vanitylabelstep2calculateyourvanitywallet": "Paso 2 - Calcula tu cartera personalizada",
			"vanitylabelenteryourpart": "Introduce la clave privada generada en el paso 1, y que has guardado:",
			"vanitylabelenteryourpoolpart": "Introduce la clave privada obtenida de la Vanity Pool:",
			"vanitylabelnote1": "[NOTA: esta casilla de entrada puede aceptar una clave pública o clave privada]",
			"vanitylabelnote2": "[NOTA: esta casilla de entrada puede aceptar una clave pública o clave privada]",
			"vanitylabelradioadd": "Añadir",
			"vanitylabelradiomultiply": "Multiplicar",
			"vanitycalc": "Calcular cartera personalizada",
			"vanitylabelbitcoinaddress": "Dirección Futurocoin personalizada:",
			"vanitylabelnotesbitcoinaddress": "Esta es tu nueva dirección, que debería tener el prefijo deseado.",
			"vanitylabelpublickeyhex": "Clave pública personalizada (HEX):",
			"vanitylabelnotespublickeyhex": "Lo anterior es la clave pública en formato hexadecimal.",
			"vanitylabelprivatekey": "Clave privada personalizada (formato para importar):",
			"vanitylabelnotesprivatekey": "Esto es la clave privada para introducir en tu cartera.",

			// detail wallet html
			"detaillabelenterprivatekey": "Introduce la clave privada",
			"detailkeyformats": "Key Formats: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
			"detailview": "Ver detalles",
			"detailprint": "Imprimir",
			"detaillabelnote1": "Tu clave privada es un número secreto, único, que sólo tú conoces. Se puede expresar en varios formatos. Aquí abajo mostramos la dirección y la clave pública que se corresponden con tu clave privada, así como la clave privada en los formatos más conocidos (para importar, hex, base64 y mini).",
			"detaillabelnote2": "Futurocoin almacena las claves públicas comprimidas. El cliente también soporta importar/exportar claves privadas usando importprivkey/dumpprivkey. El formato de las claves privadas exportadas depende de si la dirección se generó en una cartera antigua o nueva.",
			"detaillabelbitcoinaddress": "Dirección Futurocoin:",
			"detaillabelbitcoinaddresscomp": "Dirección Futurocoin (comprimida):",
			"detaillabelpublickey": "Clave pública (130 caracteres [0-9A-F]):",
			"detaillabelpublickeycomp": "Clave pública (comprimida, 66 caracteres [0-9A-F]):",
			"detaillabelprivwif": "Clave privada para importar (51 caracteres en base58, empieza con un",
			"detaillabelprivwifcomp": "Clave privada para importar (comprimida, 52 caracteres en base58, empieza con",
			"detailcompwifprefix": "'K' o 'L'",
			"detaillabelprivhex": "Clave privada en formato hexadecimal (64 caracteres [0-9A-F]):",
			"detaillabelprivb64": "Clave privada en base64 (44 caracteres):",
			"detaillabelprivmini": "Clave privada en formato mini (22, 26 o 30 caracteres, empieza por 'S'):",
			"detaillabelpassphrase": "BIP38 Passphrase", //TODO: please translate
			"detailbip38decryptbutton": "Decrypt BIP38", //TODO: please translate
			"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
			"detaillabelq1": "How do I make a wallet using dice? What is B6?", //TODO: please translate
			"detaila1": "An important part of creating a Futurocoin wallet is ensuring the random numbers used to create the wallet are truly random. Physical randomness is better than computer generated pseudo-randomness. The easiest way to generate physical randomness is with dice. To create a Futurocoin private key you only need one six sided die which you roll 99 times. Stopping each time to record the value of the die. When recording the values follow these rules: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. By doing this you are recording the big random number, your private key, in B6 or base 6 format. You can then enter the 99 character base 6 private key into the text field above and click View Details. You will then see the Futurocoin address associated with your private key. You should also make note of your private key in WIF format since it is more widely used." //TODO: please translate
		},

		"fr": {
			// javascript alerts or messages
			"testneteditionactivated": "ÉDITION TESTNET ACTIVÉE",
			"paperlabelbitcoinaddress": "Adresse Futurocoin:",
			"paperlabelprivatekey": "Clé Privée (Format d'importation de porte-monnaie):",
			"paperlabelencryptedkey": "Encrypted Private Key (Password required)", //TODO: please translate
			"bulkgeneratingaddresses": "Création de l'adresse... ",
			"brainalertpassphrasetooshort": "Le mot de passe que vous avez entré est trop court.\n\n",
			"brainalertpassphrasewarning": "Attention: Choisir un mot de passe solide est important pour vous protéger des attaques bruteforce visant à trouver votre mot de passe et voler vos Futurocoin.",
			"brainalertpassphrasedoesnotmatch": "Le mot de passe ne correspond pas au mot de passe de vérification.",
			"detailalertnotvalidprivatekey": "Le texte que vous avez entré n'est pas une Clé Privée valide",
			"detailconfirmsha256": "Le texte que vous avez entré n'est pas une Clé Privée valide!\n\nVoulez-vous utiliser le texte comme un mot de passe et créer une Clé Privée à partir d'un hash SHA256 de ce mot de passe?\n\nAttention: Choisir un mot de passe solide est important pour vous protéger des attaques bruteforce visant à trouver votre mot de passe et voler vos Futurocoin.",
			"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.", //TODO: please translate
			"bip38alertpassphraserequired": "Mot de passe a inventé pour crypter en BIP38", 
			"vanityinvalidinputcouldnotcombinekeys": "Entrée non valide. Impossible de combiner les clés.",
			"vanityalertinvalidinputpublickeysmatch": "Entrée non valide. La clé publique des deux entrées est identique. Vous devez entrer deux clés différentes.",
			"vanityalertinvalidinputcannotmultiple": "Entrée non valide. Il n'est pas possible de multiplier deux clés publiques. Sélectionner 'Ajouter' pour ajouter deux clés publiques pour obtenir une adresse Futurocoin.",
			"vanityprivatekeyonlyavailable": "Seulement disponible si vos combinez deux clés privées",
			"vanityalertinvalidinputprivatekeysmatch": "Entrée non valide. La clé Privée des deux entrées est identique. Vous devez entrer deux clés différentes.",
			
			// header and menu html
			"tagline": "Générateur De Porte-Monnaie Futurocoin Javascript Hors-Ligne",
			"generatelabelbitcoinaddress": "Création de l'adresse Futurocoin...",
			"generatelabelmovemouse": "BOUGEZ votre souris pour ajouter de l'entropie...",
			"generatelabelkeypress": "OU veuillez taper des caractères aléatoires dans le rectangle blanc suivant", 
			"singlewallet": "Porte-Monnaie Simple",
			"paperwallet": "Porte-Monnaie Papier",
			"bulkwallet": "Porte-Monnaie En Vrac",
			"brainwallet": "Porte-Monnaie Cerveau",
			"vanitywallet": "Porte-Monnaie Vanité",
			"splitwallet": "Split Wallet", //TODO: please translate
			"detailwallet": "Détails du Porte-Monnaie",
			
			// footer html
			"footerlabeldonations": "Dons:",
			"footerlabeltranslatedby": "Traduction: 1Gy7NYSJNUYqUdXTBow5d7bCUEJkUFDFSq",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "Historique De Version",
			"footerlabelgithub": "Dépôt GitHub",
			"footerlabelgithubzip": "zip",
			"footerlabelsig": "sig",
			"footerlabelcopyright1": "Copyright bitaddress.org, The Futurocoin Developers.",
			"footerlabelcopyright2": "Les droits d'auteurs JavaScript sont inclus dans le code source.",
			"footerlabelnowarranty": "Aucune garantie.",

			// status html
			"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
			"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
			"statusokcryptogood": "OK", //TODO: please translate
			"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
			"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
			"statusokcryptobad": "OK", //TODO: please translate
			"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
			"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
			"statusokunittestsgood": "OK", //TODO: please translate
			"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
			"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
			"statusokunittestsbad": "OK", //TODO: please translate
			"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
			"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
			"statusokprotocolgood": "OK", //TODO: please translate
			"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
			"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
			"statuslabelprotocolbad2": "download", //TODO: please translate
			"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
			"statusokprotocolbad": "OK", //TODO: please translate
			"statuslabelkeypool1": "This is a log of all the Futurocoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
			"statuskeypoolrefresh": "Refresh", //TODO: please translate
			"statusokkeypool": "OK", //TODO: please translate

			// single wallet html
			"newaddress": "Générer Une Nouvelle Adresse",
			"singleprint": "Imprimer",
			"singlelabelbitcoinaddress": "Adresse Futurocoin:",
			"singlelabelprivatekey": "Clé Privée (Format d'importation de porte-monnaie):",
			"singletip1": "Un porte-monnaie Futurocoin est aussi simple qu'une paire d'adresses Futurocoin dont une correspond à l'adresse privée Futurocoin. Ce porte-monnaie affiché a été généré pour vous dans votre propre navigateur internet et est donc affiché ci-dessus.", 
			"singletip2": "Pour garder en sécurité ce porte-monnaie, vous devez l'imprimer ou, alternativement, enregistrer l'adresse de réception Futurocoin et la clé privée. Il est important de créer une copie de sauvegarde de la clé privée et de la stocker à un endroit sûr. Ce site n'a aucune base prédéterminée ou de sauvegarde de votre clé privée. Si vous êtes initiés à PGP, vous pouvez télécharger la version toute-en-1 de la page HTML et ainsi vérifier que vous avez une version authentique issue de l'auteur du site en comparant l'encryptage SHA1 de votre page HTML sauvegardée avec l'encryptage SHA1 disponible sur l'historique certifiée indiquée en bas de ce site. Si vous quittez ou rafraichissez ce site ou que vous appuyez sur \"générer une nouvelle adresse\" ... alors une nouvelle clé privée sera générée et la précédente clé privée affichée ne pourra plus être retrouvée. Votre clé privée Futurocoin doit être gardée secrète. Celui qui connaît la clé privée aura la possibilité de vider tous les Futurocoin accumulés et associés à l'adresse de réception. Si vous imprimez le porte-monnaie, pensez à le mettre à l'abri de l'eau dans un sac étanche. Traitez le porte-monnaie papier comme de l'argent en espèces et billets.",
			"singletip3": "Pour ajouter des fonds à votre porte-monnaie, indiquez d'envoyer les Futurocoin à votre adresse de réception.",
			"singletip4": "Vérifier le contenu de votre porte-monnaie en consultant explorer.futurocoin.org et en y tapant votre adresse de réception Futurocoin.",
			"singletip5": "Pour dépenser vos Futurocoin, en y important votre clé privée dans un porte-monnaie P2P. Gardez à l'esprit que quand vous importez votre clé privée dans le programme P2P Futurocoin et que vous dépensez vos fonds, votre clé privée sera intégrée avec d'autres clés privées dans le porte-monnaie P2P. Quand vous effectuez une transaction, le changement sera envoyé sur une autre adresse Futurocoin privée à l'intérieur du porte-monnaie P2P. Vous DEVEZ, alors, faire une sauvegarde du porte-monnaie P2P et le garder en sécurité car l'ensemble des Futurocoin restant y sera stocké. Satoshi a averti qu'il ne faudrait jamais supprimer un porte-monnaie.",
			"singleshare": "PARTAGER",
			"singlesecret": "SECRET",

			// paper wallet html
			"paperlabelhideart": "Enlever l'image ?",
			"paperlabeladdressesperpage": "Adresses par page:",
			"paperlabeladdressestogenerate": "Nombre d'adresses à créer:",
			"papergenerate": "Générer",
			"paperprint": "Imprimer",
			"paperlabelBIPpassphrase": "mot de passe:",
			"paperlabelencrypt": "Cryptage en BIP38 ?", //TODO: please translate

			// bulk wallet html
			"bulklabelstartindex": "Commencer à l'index:",
			"bulklabelrowstogenerate": "Colonnes à générer:",
			"bulklabelcompressed": "Compressed addresses?", //TODO: please translate
			"bulkgenerate": "Générer",
			"bulkprint": "Imprimer",
			"bulklabelcsv": "Valeurs Séparées Par Des Virgules (CSV):",
			"bulklabelformat": "Index,Adresse,Clé Privée (WIF)",
			"bulklabelq1": "Pourquoi utiliserais-je un Porte-monnaie en vrac pour accepter les Futurocoin sur mon site web?",
			"bulka1": "L'approche traditionnelle pour accepter des Futurocoin sur votre site web requière l'installation du logiciel Futurocoin officiel (\"futurocoind\"). Plusieurs hébergeurs ne supportent pas l'installation du logiciel Futurocoin. De plus, faire fonctionner le logiciel Futurocoin sur votre serveur web signifie que vos clés privées sont hébergées sur le serveur et pourraient donc être volées si votre serveur web était compromis. En utilisant un Porte-monnaie en vrac, vous pouvez publiquer seulement les adresses Futurocoin sur votre serveur et non les clés privées. Vous n'avez alors pas à vous inquiéter du risque de vous faire voler votre porte-monnaie si votre serveur était compromis.",
			"bulklabelq2": "Comment utiliser le Porte-monnaie en vrac pour utiliser le Futurocoin sur mon site web?",
			"bulklabela2li1": "Utilisez le Porte-monnaie en vrac pour pré-générer une large quantité d'adresses Futurocoin (10,000+). Copiez collez les données séparées par des virgules (CSV) dans un fichier texte sécurisé dans votre ordinateur. Sauvegardez ce fichier dans un endroit sécurisé.",
			"bulklabela2li2": "Importez les adresses Futurocoin dans une base de donnée sur votre serveur web. (N'ajoutez pas le porte-monnaie ou les clés privées sur votre serveur web, sinon vous courrez le risque de vous faire voler si votre serveur est compromis. Ajoutez seulement les adresses Futurocoin qui seront visibles à vos visiteurs.)",
			"bulklabela2li3": "Ajoutez une option dans votre panier en ligne pour que vos clients puissent vous payer en Futurocoin. Quand un client choisi de vous payer en Futurocoin, vous pouvez afficher une des adresses de votre base de donnée comme \"adresse de paiment\" pour votre client et sauvegarder cette adresse avec sa commande.",
			"bulklabela2li4": "Vous avez maintenant besoin d'être avisé quand le paiement est reçu. Cherchez \"Futurocoin payment notification\" sur Google et inscrivez-vous à un service de notification de paiement Futurocoin. Il y a plusieurs services qui vous avertiront via des services Web, API, SMS, Email, etc. Une fois que vous avez reçu la notification, qui devrait être programmée automatiquement, vous pouvez traiter la commande de votre client. Pour vérifier manuellement si un paiement est arrivé, vous pouvez utiliser Block Explorer. Remplacez ADRESSE par l'adresse Futurocoin que vous souhaitez vérifier. La confirmation de la transaction pourrait prendre de 10 à 60 minutes pour être confirmée.<br />http://explorer.futurocoin.org/address/ADRESSE<br /><br />Les transactions non confirmées peuvent être visualisées ici: https://bchain.info/Futurocoin/ or http://insight.futurocoin.siampm.com/ <br />Vous devriez voir la transaction à l'intérieur de 30 secondes.",
			"bulklabela2li5": "Les Futurocoin vos s'accumuler de façon sécuritaire dans la chaîne de blocs. Utilisez le porte-monnaie original que vous avez généré à l'étape 1 pour les dépenser.",
			
			// brain wallet html
			"brainlabelenterpassphrase": "Entrez votre mot de passe: ",
			"brainlabelshow": "Afficher?",
			"brainprint": "Imprimer",
			"brainlabelconfirm": "Confirmer le mot de passe: ",
			"brainview": "Visualiser",
			"brainalgorithm": "Algorithme: SHA256(mot de passe)",
			"brainlabelbitcoinaddress": "Adresse Futurocoin:",
			"brainlabelprivatekey": "Clé Privée (Format d'importation de porte-monnaie):",

			// vanity wallet html
			"vanitylabelstep1": "Étape 1 - Générer votre \"Étape 1 Paire De Clés\"",
			"vanitynewkeypair": "Générer",
			"vanitylabelstep1publickey": "Étape 1 Clé Publique:",
			"vanitylabelstep1pubnotes": "Copiez celle-ci dans la case Votre-Clé-Publique du site de Vanity Pool.",
			"vanitylabelstep1privatekey": "Step 1 Clé Privée:",
			"vanitylabelstep1privnotes": "Copiez la cette Clé Privée dans un fichier texte. Idéalement, sauvegardez la dans un fichier encrypté. Vous en aurez besoin pour récupérer la Clé Privée lors que Vanity Pool aura trouvé votre préfixe.",
			"vanitylabelstep2calculateyourvanitywallet": "Étape 2 - Calculer votre Porte-monnaie Vanité",
			"vanitylabelenteryourpart": "Entrez votre Clé Privée (générée à l'étape 1 plus haut et précédemment sauvegardée):",
			"vanitylabelenteryourpoolpart": "Entrez la Clé Privée (provenant de Vanity Pool):",
			"vanitylabelnote1": "[NOTE: cette case peut accepter une clé publique ou un clé privée]",
			"vanitylabelnote2": "[NOTE: cette case peut accepter une clé publique ou un clé privée]",
			"vanitylabelradioadd": "Ajouter",
			"vanitylabelradiomultiply": "Multiplier",
			"vanitycalc": "Calculer Le Porte-monnaie Vanité",
			"vanitylabelbitcoinaddress": "Adresse Futurocoin Vanité:",
			"vanitylabelnotesbitcoinaddress": "Ci-haut est votre nouvelle adresse qui devrait inclure le préfix requis.",
			"vanitylabelpublickeyhex": "Clé Public Vanité (HEX):",
			"vanitylabelnotespublickeyhex": "Celle-ci est la Clé Publique dans le format hexadécimal. ",
			"vanitylabelprivatekey": "Clé Privée Vanité (WIF):",
			"vanitylabelnotesprivatekey": "Celle-ci est la Clé Privée pour accéder à votre porte-monnaie. ",
			
			// detail wallet html
			"detaillabelenterprivatekey": "Entrez la Clé Privée",
			"detailkeyformats": "Key Formats: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
			"detailview": "Voir les détails",
			"detailprint": "Imprimer",
			"detaillabelnote1": "Votre Clé Privée Futurocoin est un nombre secret que vous êtes le seul à connaître. Il peut être encodé sous la forme d'un nombre sous différents formats. Ci-bas, nous affichons l'adresse Futurocoin et la Clé Publique qui corresponds à la Clé Privée ainsi que la Clé Privée dans les formats d'encodage les plus populaires (WIF, WIFC, HEX, B64).",
			"detaillabelnote2": "Futurocoin v0.6+ conserve les clés publiques dans un format compressé. Le logiciel supporte maintenant aussi l'importation et l'exportation de clés privées avec importprivkey/dumpprivkey. Le format de la clé privée exportée est déterminé selon la version du porte-monnaie Futurocoin.",
			"detaillabelbitcoinaddress": "Adresse Futurocoin:",
			"detaillabelbitcoinaddresscomp": "Adresse Futurocoin (compressée):",
			"detaillabelpublickey": "Clé Publique (130 caractères [0-9A-F]):",
			"detaillabelpublickeycomp": "Clé Publique (compressée, 66 caractères [0-9A-F]):",
			"detaillabelprivwif": "Clé Privée WIF (51 caractères base58, débute avec un a",
			"detaillabelprivwifcomp": "Clé Privée WIF (compressée, 52 caractères base58, débute avec un a",
			"detailcompwifprefix": "'K' ou 'L'",
			"detaillabelprivhex": "Clé Privée Format Hexadecimal (64 caractères [0-9A-F]):",
			"detaillabelprivb64": "Clé Privée Base64 (44 caractères):",
			"detaillabelprivmini": "Clé Privée Format Mini (22, 26 ou 30 caractères, débute avec un 'S'):",
			"detaillabelpassphrase": "BIP38 Passphrase", //TODO: please translate
			"detailbip38decryptbutton": "Decrypt BIP38", //TODO: please translate
			"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
			"detaillabelq1": "How do I make a wallet using dice? What is B6?", //TODO: please translate
			"detaila1": "An important part of creating a Futurocoin wallet is ensuring the random numbers used to create the wallet are truly random. Physical randomness is better than computer generated pseudo-randomness. The easiest way to generate physical randomness is with dice. To create a Futurocoin private key you only need one six sided die which you roll 99 times. Stopping each time to record the value of the die. When recording the values follow these rules: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. By doing this you are recording the big random number, your private key, in B6 or base 6 format. You can then enter the 99 character base 6 private key into the text field above and click View Details. You will then see the Futurocoin address associated with your private key. You should also make note of your private key in WIF format since it is more widely used." //TODO: please translate
		},

		"el": {
			// javascript alerts or messages
			"testneteditionactivated": "ΕΝΕΡΓΗ ΕΚΔΟΣΗ TESTNET",
			"paperlabelbitcoinaddress": "Διεύθυνση Futurocoin:",
			"paperlabelprivatekey": "Προσωπικό Κλειδί (Μορφή εισαγωγής σε πορτοφόλι):",
			"paperlabelencryptedkey": "Encrypted Private Key (Password required)", //TODO: please translate
			"bulkgeneratingaddresses": "Δημιουργία διευθύνσεων... ",
			"brainalertpassphrasetooshort": "Η φράση κωδικός που δώσατε είναι πολύ αδύναμη.\n\n",
			"brainalertpassphrasewarning": "Προσοχή: Είναι σημαντικό να επιλέξετε μια ισχυρή φράση κωδικό που θα σας προφυλάξει από απόπειρες παραβίασής της τύπου brute force και κλοπή των Futurocoin σας.",
			"brainalertpassphrasedoesnotmatch": "Η φράση κωδικός και η επιβεβαίωση της δε συμφωνούν.",
			"detailalertnotvalidprivatekey": "Το κείμενο που εισάγατε δεν αντιστοιχεί σε έγκυρο Προσωπικό Κλειδί",
			"detailconfirmsha256": "Το κείμενο που εισάγατε δεν αντιστοιχεί σε έγκυρο Προσωπικό Κλειδί!\n\nΘα θέλατε να χρησιμοποιηθεί το κείμενο ως κωδικός για τη δημιουργία ενός Προσωπικού Κλειδιού που θα δημιουργηθεί από το SHA265 hash της φράσης κωδικού;\n\nΠροσοχή: Είναι σημαντικό να επιλέξετε έναν ισχυρό κωδικό ώστε να είναι δύσκολο να τον μαντέψει κάποιος και να κλέψει τα Futurocoin σας.",
			"bip38alertincorrectpassphrase": "Λάθος φράση κωδικός αποκρυπτογράφησης Προσωπικού Κλειδιού.",
			"bip38alertpassphraserequired": "Απαιτείται η φράση κωδικός για το Κλειδί BIP38",
			"vanityinvalidinputcouldnotcombinekeys": "Μη έγκυρη εισαγωγή. Ο συνδυασμός των κλειδιών είναι αδύνατος.",
			"vanityalertinvalidinputpublickeysmatch": "Μη έγκυρη εισαγωγή. Τα Δημόσια Κλειδιά των δύο εγγραφών είναι όμοια. Πρέπει να εισάγετε δύο διαφορετικά Κλειδιά.",
			"vanityalertinvalidinputcannotmultiple": "Μη έγκυρη εισαγωγή. Δεν είναι δυνατός ο πολλαπλασιασμός δύο Δημόσιων Κλειδιών. Επιλέξτε 'Πρόσθεση' για να προσθέσετε δύο Δημόσια Κλειδιά για δημιουργία μίας Διεύθυνσης Futurocoin.",
			"vanityprivatekeyonlyavailable": "Διαθέσιμο μόνο κατά το συνδυασμό δύο Προσωπικών Κλειδιών",
			"vanityalertinvalidinputprivatekeysmatch": "Μη έγκυρη εισαγωγή. Τα Προσωπικά Κλειδιά των δύο εγγραφών είναι όμοια. Πρέπει να εισάγετε δύο διαφορετικά Κλειδιά.",

			// header and menu html
			"tagline": "Δημιουργός Διευθύνσεων Futurocoin, ανοικτού κώδικα Javascript",
			"generatelabelbitcoinaddress": "Δημιουργία Διεύθυνσης Futurocoin...",
			"generatelabelmovemouse": "ΚΟΥΝΗΣΤΕ το ποντίκι τριγύρω για να προσθέσετε επιπλέον τυχαιότητα...",
			"generatelabelkeypress": "OR type some random characters into this textbox", //TODO: please translate
			"singlewallet": "Απλό Πορτοφόλι",
			"paperwallet": "Χάρτινο Πορτοφόλι",
			"bulkwallet": "Πολλαπλά Πορτοφόλια",
			"brainwallet": "Μνημονικό Πορτοφόλι",
			"vanitywallet": "Πορτοφόλι Vanity",
			"splitwallet": "Split Wallet", //TODO: please translate
			"detailwallet": "Λεπτομέρειες Πορτοφολιού",

			// footer html
			"footerlabeldonations": "Δωρεές:",
			"footerlabeltranslatedby": "Μετάφραση: <a href='http://BitcoinX.gr/'><b>BitcoinX.gr</b></a> 1BitcoiNxkUPcTFxwMqxhRiPEiQRzYskf6",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "ιστορικό εκδόσεων",
			"footerlabelgithub": "Αποθετήριο GitHub",
			"footerlabelgithubzip": "zip",
			"footerlabelsig": "sig",
			"footerlabelcopyright1": "Copyright bitaddress.org, The Futurocoin Developers.",
			"footerlabelcopyright2": "Τα πνευματικά δικαιώματα της JavaScript περιλαμβάνονται στον κώδικα.",
			"footerlabelnowarranty": "Καμία εγγύηση.",

			// status html
			"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
			"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
			"statusokcryptogood": "OK", //TODO: please translate
			"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
			"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
			"statusokcryptobad": "OK", //TODO: please translate
			"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
			"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
			"statusokunittestsgood": "OK", //TODO: please translate
			"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
			"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
			"statusokunittestsbad": "OK", //TODO: please translate
			"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
			"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
			"statusokprotocolgood": "OK", //TODO: please translate
			"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
			"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
			"statuslabelprotocolbad2": "download", //TODO: please translate
			"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
			"statusokprotocolbad": "OK", //TODO: please translate
			"statuslabelkeypool1": "This is a log of all the Futurocoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
			"statuskeypoolrefresh": "Refresh", //TODO: please translate
			"statusokkeypool": "OK", //TODO: please translate

			// single wallet html
			"newaddress": "Δημιουργία μιας νέας Διεύθυνσης",
			"singleprint": "Εκτύπωση",
			"singlelabelbitcoinaddress": "Διεύθυνση Futurocoin:",
			"singlelabelprivatekey": "Προσωπικό Κλειδί (Μορφή εισαγωγής σε πορτοφόλι):",
			"singletip1": "<b>A Futurocoin wallet</b> is as simple as a single pairing of a Futurocoin address with it's corresponding Futurocoin private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
			"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the Futurocoin address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you are familiar with PGP you can download this all-in-one HTML page and check that you have an authentic version from the author of this site by matching the SHA256 hash of this HTML with the SHA256 hash available in the signed version history document linked on the footer of this site. If you leave/refresh the site or press the Generate New Address button then a new private key will be generated and the previously displayed private key will not be retrievable.	Your Futurocoin private key should be kept a secret. Whomever you share the private key with has access to spend all the Futurocoin associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
			"singletip3": "<b>Add funds</b> to this wallet by instructing others to send Futurocoin to your Futurocoin address.", //TODO: please translate
			"singletip4": "<b>Check your balance</b> by going to explorer.futurocoin.org and entering your Futurocoin address.", //TODO: please translate
			"singletip5": "<b>Spend your Futurocoin</b> by importing your private key to the p2p client wallet. Keep in mind when you import your single key to a Futurocoin p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another Futurocoin address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining Futurocoin will be stored there. Satoshi advised that one should never delete a wallet.", //TODO: please translate
			"singleshare": "SHARE", //TODO: please translate
			"singlesecret": "SECRET", //TODO: please translate

			// paper wallet html
			"paperlabelhideart": "Απόκρυψη γραφικού;",
			"paperlabeladdressesperpage": "Διευθύνσεις ανά σελίδα:",
			"paperlabeladdressestogenerate": "Πλήθος διευθύνσεων:",
			"papergenerate": "Δημιουργία",
			"paperprint": "Εκτύπωση",
			"paperlabelBIPpassphrase": "Passphrase:", //TODO: please translate
			"paperlabelencrypt": "BIP38 Encrypt?", //TODO: please translate

			// bulk wallet html
			"bulklabelstartindex": "Ξεκίνημα δείκτη:",
			"bulklabelrowstogenerate": "Πλήθος σειρών:",
			"bulklabelcompressed": "Συμπιεσμένες διευθύνσεις;",
			"bulkgenerate": "Δημιουργία",
			"bulkprint": "Εκτύπωση",
			"bulklabelcsv": "Τιμές που χωρίζονται με κόμμα (CSV):",
			"bulklabelformat": "Δείκτης,Διεύθυνση,Προσωπικό Κλειδί (WIF)",
			"bulklabelq1": "Γιατί να χρησιμοποιήσω Πολλαπλά Πορτοφόλια στην ιστοσελίδα μου;",
			"bulka1": "Ο παραδοσιακός τρόπος για να δέχεστε Futurocoin στην ιστοσελίδα σας, απαιτεί την εγκατάσταση και λειτουργία του επίσημου δαίμονα πελάτη Futurocoin (\"futurocoind\"). Αρκετά πακέτα φιλοξενίας δεν υποστηρίζουν την εγκατάστασή του. Επιπλέον, η εκτέλεση του πελάτη Futurocoin στον web server σας συνεπάγεται και τη φιλοξενία των προσωπικών σας κλειδιών στον ίδιο server, τα οποία μπορεί να υποκλαπούν αν ο server πέσει θύμα επίθεσης. Χρησιμοποιώντας τα Πολλαπλά Πορτοφόλια, ανεβάζετε στον server σας μόνο τις διευθύνσεις Futurocoin κι όχι τα προσωπικά κλειδιά. Με αυτό τον τρόπο δεν χρειάζεται να ανησυχείτε μήπως υποκλαπεί το πορτοφόλι σας.",
			"bulklabelq2": "Πως χρησιμοποιώ τα Πολλαπλά Πορτοφόλια για να δέχομαι Futurocoin στην ιστοσελίδα μου;",
			"bulklabela2li1": "Χρησιμοποιήστε την καρτέλα Πολλαπλά Πορτοφόλια για να δημιουργήσετε έναν μεγάλο αριθμό διευθύνσεων Futurocoin (10.000+). Αντιγράψτε κι επικολλήστε τη λίστα των χωρισμένων με κόμμα τιμών (CSV) που δημιουργήθηκαν, σε ένα ασφαλές αρχείο στον υπολογιστή σας. Αντιγράψτε το αρχείο που δημιουργήσατε σε μια ασφαλή τοποθεσία.",
			"bulklabela2li2": "Εισάγετε τις διευθύνσεις Futurocoin σε έναν πίνακα βάσης δεδομένων στον web server σας. (Μην αντιγράψετε τα προσωπικά κλειδιά ή το πορτοφόλι στον web server γιατί διακινδυνεύετε να σας τα κλέψουν. Μόνο τις διευθύνσεις Futurocoin που θα εμφανίζονται στους πελάτες.)",
			"bulklabela2li3": "Παρέχετε στο καλάθι αγορών σας μια επιλογή για πληρωμή σε Futurocoin. Όταν ο πελάτης επιλέγει να πληρώσει με Futurocoin, θα εμφανίσετε σε αυτόν μια από τις διευθύνσεις από τη βάση δεδομένων, ως την «προσωπική του διεύθυνση πληρωμής» την οποία θα αποθηκεύσετε μαζί με την εντολή αγοράς.",
			"bulklabela2li4": "Τώρα χρειάζεται να ειδοποιηθείτε μόλις γίνει η πληρωμή. Ψάξτε στο Google για «Futurocoin payment notification» κι εγγραφείτε σε τουλάχιστο μία υπηρεσία ειδοποίησης πληρωμής. Υπάρχουν διάφορες υπηρεσίες που θα σας ειδοποιήσουν με Web υπηρεσίες, API, SMS, Email, κλπ. Όταν λάβετε την ειδοποίηση, η οποία μπορεί να αυτοματοποιηθεί προγραμματιστικά, εκτελείτε την εντολή του πελάτη. Για να ελέγξετε χειροκίνητα την πληρωμή μπορείτε να χρησιμοποιήσετε τον Block Explorer. Αντικαταστήστε το THEADDRESSGOESHERE με τη Futurocoin διεύθυνσή σας. Η επιβεβαίωση της πληρωμής ενδέχεται να διαρκέσει από δέκα λεπτά έως μία ώρα.<br />http://explorer.futurocoin.org/address/THEADDRESSGOESHERE<br /><br />Μπορείτε να δείτε τις συναλλαγές που δεν έχουν επιβεβαιωθεί στο: https://bchain.info/Futurocoin/ or http://insight.futurocoin.siampm.com/ <br />Θα πρέπει να δείτε τη συναλλαγή εκεί εντός 30 δευτερολέπτων.",
			"bulklabela2li5": "Τα Futurocoin θα συσσωρεύονται με ασφάλεια στην αλυσίδα των μπλοκ. Χρησιμοποιήστε το αρχικό πορτοφόλι που δημιουργήσατε στο βήμα 1 για να τα ξοδέψετε.",
			
			// brain wallet html
			"brainlabelenterpassphrase": "Εισάγετε κωδικό: ",
			"brainlabelshow": "Εμφάνιση;",
			"brainprint": "Εκτύπωση",
			"brainlabelconfirm": "Επιβεβαιώστε τον κωδικό: ",
			"brainview": "Δημιουργία",
			"brainalgorithm": "Αλγόριθμος: SHA256(κωδικός)",
			"brainlabelbitcoinaddress": "Διεύθυνση Futurocoin:",
			"brainlabelprivatekey": "Προσωπικό Κλειδί (Μορφή εισαγωγής σε πορτοφόλι):",
			
			// vanity wallet html
			"vanitylabelstep1": "Βήμα 1 - Δημιουργήστε το «Ζεύγος κλειδιών του Βήματος 1»",
			"vanitynewkeypair": "Δημιουργία",
			"vanitylabelstep1publickey": "Βήμα 1 Δημόσιο Κλειδί:",
			"vanitylabelstep1pubnotes": "Αντιγράψτε κι επικολλήστε το παραπάνω στο πεδίο Your-Part-Public-Key στην ιστοσελίδα του Vanity Pool.",
			"vanitylabelstep1privatekey": "Step 1 Προσωπικό Κλειδί:",
			"vanitylabelstep1privnotes": "Αντιγράψτε κι επικολλήστε το παραπάνω Προσωπικό Κλειδί σε ένα αρχείο κειμένου. Ιδανικά, αποθηκεύστε το σε έναν κρυπτογραφημένο δίσκο. Θα το χρειαστείτε για να ανακτήσετε το Futurocoin Προσωπικό Κλειδί όταν βρεθεί το πρόθεμά σας από το Vanity Pool.",
			"vanitylabelstep2calculateyourvanitywallet": "Βήμα 2 - Υπολογίστε το Vanity Πορτοφόλι σας.",
			"vanitylabelenteryourpart": "Εισάγετε το Προσωπικό Κλειδί που δημιουργήσατε στο Βήμα 1 κι αποθηκεύσατε:",
			"vanitylabelenteryourpoolpart": "Εισάγετε το Προσωπικό Κλειδί από το Vanity Pool:",
			"vanitylabelnote1": "[ΣΗΜΕΙΩΣΗ: Το πεδίο αυτό μπορεί να δεχθεί είτε ένα Δημόσιο είτε ένα Προσωπικό Κλειδί.]",
			"vanitylabelnote2": "[ΣΗΜΕΙΩΣΗ: Το πεδίο αυτό μπορεί να δεχθεί είτε ένα Δημόσιο είτε ένα Προσωπικό Κλειδί.]",
			"vanitylabelradioadd": "Πρόσθεσε",
			"vanitylabelradiomultiply": "Πολλαπλασίασε",
			"vanitycalc": "Υπολογισμός του Πορτοφολιού Vanity",
			"vanitylabelbitcoinaddress": "Vanity Διεύθυνση Futurocoin:",
			"vanitylabelnotesbitcoinaddress": "Παραπάνω είναι η διεύθυνσή σας που θα πρέπει να περιλαμβάνει το επιθυμητό πρόθεμα.",
			"vanitylabelpublickeyhex": "Vanity Δημόσιο Κλειδί (HEX):",
			"vanitylabelnotespublickeyhex": "Παραπάνω είναι το Δημόσιο Κλειδί σε δεκαεξαδική μορφή. ",
			"vanitylabelprivatekey": "Vanity Προσωπικό Κλειδί (WIF):",
			"vanitylabelnotesprivatekey": "Παραπάνω είναι το Προσωπικό Κλειδί που θα φορτώσετε στο Πορτοφόλι σας. ",
			
			// detail wallet html
			"detaillabelenterprivatekey": "Εισάγετε το Προσωπικό Κλειδί",
			"detailkeyformats": "Key Formats: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
			"detailview": "Προβολή λεπτομερειών",
			"detailprint": "Εκτύπωση",
			"detaillabelnote1": "Το Futurocoin Προσωπικό Κλειδί είναι ένας μοναδικός και μυστικός αριθμός που μόνο εσείς πρέπει να γνωρίζετε, ο οποίος μπορεί να κωδικοποιηθεί σε πολλές διαφορετικές μορφές. Εμφανίζουμε παρακάτω τη διεύθυνση Futurocoin και το Δημόσιο Κλειδί, μαζί με το Προσωπικό Κλειδί, στις πιο δημοφιλείς μορφές  (WIF, WIFC, HEX, B64).",
			"detaillabelnote2": "Το Futurocoin v0.6+ αποθηκεύει τα Προσωπικά Κλειδιά σε συμπιεσμένη μορφή. Το πρόγραμμα υποστηρίζει επίσης εισαγωγή κι εξαγωγή των Προσωπικών Κλειδιών με τις εντολές importprivkey/dumpprivkey. Η μορφή του εξαγόμενου Προσωπικού Κλειδιού προσδιορίζεται από το αν η διεύθυνση δημιουργήθηκε σε ένα παλιό ή νέο πορτοφόλι.",
			"detaillabelbitcoinaddress": "Διεύθυνση Futurocoin:",
			"detaillabelbitcoinaddresscomp": "Συμπιεσμένη Διεύθυνση Futurocoin:",
			"detaillabelpublickey": "Δημόσιο Κλειδί (130 χαρακτήρες [0-9A-F]):",
			"detaillabelpublickeycomp": "Δημόσιο Κλειδί (Συμπιεσμένο, 66 χαρακτήρες [0-9A-F]):",
			"detaillabelprivwif": "Προσωπικό Κλειδί WIF (51 χαρακτήρες base58, ξεκινάει με",
			"detaillabelprivwifcomp": "Προσωπικό Κλειδί WIF (Συμπιεσμένο, 52 χαρακτήρες base58, ξεκινάει με",
			"detailcompwifprefix": "'K' ή 'L'",
			"detaillabelprivhex": "Προσωπικό Κλειδί Δεκαεξαδική Μορφή (64 χαρακτήρες [0-9A-F]):",
			"detaillabelprivb64": "Προσωπικό Κλειδί Base64 (44 χαρακτήρες):",
			"detaillabelprivmini": "Προσωπικό Κλειδί Μορφή Mini (22, 26 ή 30 χαρακτήρες, ξεκινάει με 'S'):",
			"detaillabelpassphrase": "BIP38 Κωδικός",
			"detailbip38decryptbutton": "Αποκωδικοποίηση BIP38",
			"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
			"detaillabelq1": "How do I make a wallet using dice? What is B6?", //TODO: please translate
			"detaila1": "An important part of creating a Futurocoin wallet is ensuring the random numbers used to create the wallet are truly random. Physical randomness is better than computer generated pseudo-randomness. The easiest way to generate physical randomness is with dice. To create a Futurocoin private key you only need one six sided die which you roll 99 times. Stopping each time to record the value of the die. When recording the values follow these rules: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. By doing this you are recording the big random number, your private key, in B6 or base 6 format. You can then enter the 99 character base 6 private key into the text field above and click View Details. You will then see the Futurocoin address associated with your private key. You should also make note of your private key in WIF format since it is more widely used." //TODO: please translate
		},

	    "it": {
			// javascript alerts or messages
			"testneteditionactivated": "TESTNET EDITION ATTIVATO",
			"paperlabelbitcoinaddress": "Indirizzo Futurocoin:",
			"paperlabelprivatekey": "Chiave privata (Wallet Import Format):",
			"paperlabelencryptedkey": "Chiave privata criptata (password richiesta)",
			"bulkgeneratingaddresses": "Generazione indirizzi... ",
			"brainalertpassphrasetooshort": "La passphrase inserita è troppo corta.\n\n",
			"brainalertpassphrasewarning":"Attenzione: La scelta di una passphrase robusta è importante per evitare attacchi brute force in grado di indovinare la tua passphrase e rubare i tuoi Futurocoin",
			"brainalertpassphrasedoesnotmatch": "La passphrase non combacia con quella data per la conferma.",
			"detailalertnotvalidprivatekey": "Il testo inserito non rappresenta una Chiave Privata valida",
			"detailconfirmsha256": "Il testo inserito non rappresenta una Chiave privata valida!\n\nVorresti usare il testo inserito come passphrase e creare da questa un hash SHA256 e generare così una Chiave Privata?\n\nAvvertenza: La scelta di una passphrase robusta è importante per evitare che attacchi di tipo \"brute force\" vadano a segno indovinando il testo segreto e di conseguenza far perdere i Futurocoin.",
			"bip38alertincorrectpassphrase": "Passphrase non corretta per questa chiave privata criptata.",
			"bip38alertpassphraserequired": "Passphrase richiesta per chiave BIP38",
			"vanityinvalidinputcouldnotcombinekeys": "Dati inseriti non validi. Le chiavi non possono essere combinate.",
			"vanityalertinvalidinputpublickeysmatch": "Dati inseriti non validi. Entrambe le chiavi pubbliche combaciano. Devi inserire due chiavi differenti.",
			"vanityalertinvalidinputcannotmultiple": "Dati inseriti non validi. Impossibile moltiplicare due chiavi pubbliche. Seleziona 'Aggiungi' per inserire due chiavi pubbliche ed ottenere l'indirizzo Futurocoin.",
			"vanityprivatekeyonlyavailable": "Non disponibile quando vengono combinate due chiavi private",
			"vanityalertinvalidinputprivatekeysmatch": "Dati inseriti non validi. Entrambe le chiavi private combaciano. Devi inserire due chiavi differenti.",

			// header and menu html
			"tagline": "Open Source JavaScript Client-Side Futurocoin Wallet Generator",
			"generatelabelbitcoinaddress": "Generazione Indirizzo Futurocoin...",
			"generatelabelmovemouse": "MUOVI il tuo mouse per contribuire alla generazione dei numeri casuali...",
			"generatelabelkeypress": "OR type some random characters into this textbox", //TODO: please translate
			"singlewallet": "Singolo portafoglio",
			"paperwallet": "Paper Wallet",
			"bulkwallet": "Portafogli multipli",
			"brainwallet": "Brain Wallet",
			"vanitywallet": "Vanity Wallet",
			"splitwallet": "Split Wallet", //TODO: please translate
			"detailwallet": "Dettagli portafoglio",

			// footer html
			"footerlabeldonations": "Donazioni:",
			"footerlabeltranslatedby": "",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "Cronologia Versioni",
			"footerlabelgithub": "Repository GitHub",
			"footerlabelgithubzip": "zip",
			"footerlabelsig": "sig",
			"footerlabelcopyright1": "Copyright bitaddress.org, The Futurocoin Developers.",
			"footerlabelcopyright2": "Le note di copyright dei file JavaScript sono inclusi nei sorgenti stessi.",
			"footerlabelnowarranty": "Nessuna garanzia.",

	    	// status html
			"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
			"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
			"statusokcryptogood": "OK", //TODO: please translate
			"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
			"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
			"statusokcryptobad": "OK", //TODO: please translate
			"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
			"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
			"statusokunittestsgood": "OK", //TODO: please translate
			"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
			"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
			"statusokunittestsbad": "OK", //TODO: please translate
			"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
			"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
			"statusokprotocolgood": "OK", //TODO: please translate
			"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
			"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
			"statuslabelprotocolbad2": "download", //TODO: please translate
			"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
			"statusokprotocolbad": "OK", //TODO: please translate
			"statuslabelkeypool1": "This is a log of all the Futurocoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
			"statuskeypoolrefresh": "Refresh", //TODO: please translate
			"statusokkeypool": "OK", //TODO: please translate

			// single wallet html
			"newaddress": "Genera un Nuovo Indirizzo",
			"singleprint": "Stampa",
			"singlelabelbitcoinaddress": "Indirizzo Futurocoin:",
			"singlelabelprivatekey": "Chiave privata (Wallet Import Format):",
			"singletip1": "<b>Un portafogli Futurocoin</b> è composto semplicemente da una coppia di valori: l'indirizzo e la sua chiave privata. Un portafogli è stato appena generato sul tuo browser e mostrato sopra.",
			"singletip2": "<b>Per mettere in sicurezza questo portafogli</b> devi stampare o quantomeno salvare l'indirizzo Futurocoin e la Chiave privata. È molto importante fare una copia di backup della chiave privata e conservarla in un posto sicuro. Questo sito non conosce la tua chiave privata. Se hai familiarità con PGP, puoi scaricare per intero questa pagina HTML e controllare la sua autentiticità. Puoi confrontare il codice SHA256 della pagina scaricata con il codice firmato dall'autore che trovi nella cronologia delle versioni (in fondo alla pagina). Se abbandoni/aggiorni la pagina web oppure premi il tasto Genera, un nuovo indirizzo sostituirà quello vecchio che non potrà più essere recuperato. La chiave privata dovrebbe essere tenuta segreta, chiunque conosca la chiave privata può avere accesso e spendere i tuoi Futurocoin. Se stampi il tuo portafogli conservalo in una busta di plastica sigillata per tenerla al riparo dall'acqua. Tratta quanto stampato alla stregua di una banconota.",
			"singletip3": "<b>Ricevi fondi</b> su questo portafogli mostrando l'indirizzo Futurocoin per il versamento.",
			"singletip4": "<b>Controlla il saldo</b> visitando explorer.futurocoin.org cercando il tuo indirizzo Futurocoin.",
			"singletip5": "<b>Spendi i tuoi Futurocoin</b> importando in esso il portafogli. Tieni presente che quando importi una chiave nel client p2p, nel momento in cui spendi le monete, la chiave viene raggruppata insieme alle altre presenti nel programma con i restanti Futurocoin. Quando esegui una transazione gli spiccioli verranno invitati verso un altro indirizzo all'interno del tuo portafogli gestito dal client p2p. Quindi dovresti tenere un backup del portafogli contenuto nel client p2p e tenere questo in un posto sicuro fin tanto terrai dei Futurocoin lì. Satoshi consiglia di non cancellare mai un portafogli. ",
			"singleshare": "SHARE", //TODO: please translate
			"singlesecret": "SECRET", //TODO: please translate

			// paper wallet html
			"paperlabelhideart": "Senza grafica?",
			"paperlabeladdressesperpage": "Indirizzi per pagina:",
			"paperlabeladdressestogenerate": "Indirizzi da generare:",
			"papergenerate": "Genera",
			"paperprint": "Stampa",
			"paperlabelBIPpassphrase": "Passphrase:",
			"paperlabelencrypt": "BIP38 criptato?",

			// bulk wallet html
			"bulklabelstartindex": "Indice iniziale:",
			"bulklabelrowstogenerate": "Righe da generare:",
			"bulklabelcompressed": "Indirizzo compresso?",
			"bulkgenerate": "Genera",
			"bulkprint": "Stampa",
			"bulklabelcsv": "Valori Separati da virgola:",
			"bulklabelformat": "Indice,Indirizzo,Chiave Privata (WIF)",
			"bulklabelq1": "Perché dovrei usare tanti portafogli per accettare Futurocoin sul mio sito web?",
			"bulka1": "Il tradizionale approcio per accettare i Futurocoin è quello di installare il demone ufficiale Futurocoin (\"futurocoind\"). Molti pacchetti di hosting web non supportano l'installazione di tale demone. Inoltre tenere in esecuzione il demone richiede che la chiave privata del portafogli sia custodita sul server, se questo viene violato tramite hacking puoi perdere tutti i Futurocoin. Usando portafogli multipli puoi caricare sul server solo l'indirizzo per il versamento e non la chiave privata. Quindi non devi preoccuparti del tuo portafogli nel caso in cui il server venga violato con un attacco di hacking.",
			"bulklabelq2": "Come utilizzo tutti questi portafogli per accettare Futurocoin sul mio sito web?",
			"bulklabela2li1": "Usa la funzione \"Portafogli multipli\" per generare una grande quantità di indirizzi Futurocoin (10,000+). Copia e incolla la lista generata in formato CSV (campi separati da virgola) su un file, al sicuro nel tuo computer. Fai una copia di backup di questo file e mettilo un posto sicuro.",
			"bulklabela2li2": "Importa gli indirizzi Futurocoin in una tabella del database sul tuo web server. (Non importare i portafogli/chiavi private sul web server, altrimenti corri il rischio che rubino i tuoi Futurocoin con l'hacking. Usa gli indirizzi Futurocoin così come verranno mostrati ai tuoi clienti.)",
			"bulklabela2li3": "Fornisci una opzione nel carrello del tuo sito web per pagare in Futurocoin. Quando il cliente sceglie di pagare in Futurocoin, gli mostrerai un indirizzo dal tuo database come \"indirizzo di pagamento\" e conserverai questo stesso indirizzo insieme ai dati dell'ordine.",
			"bulklabela2li4": "Ora hai bisogno di notificare l'arrivo del pagamento. Cerca su Google \"notifiche pagamento Futurocoin\" ed iscriviti ad almeno un servizio di notifica. Esistono diversi servizi che possono notificare in vari modi come Web Services, API, SMS, Email, etc. Una volta ricevuta la notifica, la quale può essere automatizzata con la programmazione, puoi processare l'ordine del cliente. Per verificare manualmente se l'ordine è davvero arrivato puoi usare un block explorer. Sostituisci INDIRIZZODACONTROLLARE con l'indirizzo Futurocoin da controllare. Possono volerci dai 10 fino a 60 minuti per fare in modo che una transazione venga confermata.<br>http://explorer.futurocoin.org/address/INDIRIZZODACONTROLLARE<br><br>Le transazioni non confermate possono essere visionate su: https://bchain.info/Futurocoin/ http://insight.futurocoin.siampm.com/ <br>Dovresti vedere la transazione entro 30 secondi.",
			"bulklabela2li5": "In questo modo i Futurocoin transiteranno nella blockchain in tutta sicurezza. Usa il portafogli creato nel Passo 1 per spendere i Futurocoin.",

			// brain wallet html
			"brainlabelenterpassphrase": "Inserisci la Passphrase: ",
			"brainlabelshow": "Mostra?",
			"brainprint": "Stampa",
			"brainlabelconfirm": "Conferma Passphrase: ",
			"brainview": "Visiona",
			"brainalgorithm": "Algoritmo: SHA256(passphrase)",
			"brainlabelbitcoinaddress": "Indirizzo Futurocoin:",
			"brainlabelprivatekey": "Chiave privata (Wallet Import Format):",

			// vanity wallet html
			"vanitylabelstep1": "Passo1 1 - Genera la tua Coppia di chiavi",
			"vanitynewkeypair": "Genera",
			"vanitylabelstep1publickey": "Passo 1 Chiave pubblica:",
			"vanitylabelstep1pubnotes": "Copia e incolla il testo soprastante nel campo \"chiave-pubblica-parziale\" sul sito web del pool.",
			"vanitylabelstep1privatekey": "Passo 1 Chiave pubblica:",
			"vanitylabelstep1privnotes": "Copia & incolla la Chiave privata soprastante su un file di testo. Idealmente conservalo su un disco criptato. Ti servirà per recuperare la Chiave privata una volta che il Pool avrà trovato quella col prefisso scelto.",
			"vanitylabelstep2calculateyourvanitywallet": "Passo 2 - Calcolo del Vanity Wallet",
			"vanitylabelenteryourpart": "Inserisci la tua Chiave Privata parziale (Generata nel Passo 1 e precedentemente salvata):",
			"vanitylabelenteryourpoolpart": "Inserisci la Chiave privata parziale generata dal pool (dal Vanity Pool):",
			"vanitylabelnote1": "[NOTA: questo campo può accettare sia chiavi pubbliche che private]",
			"vanitylabelnote2": "[NOTA: questo campo può accettare sia chiavi pubbliche che private]",
			"vanitylabelradioadd": "Aggiungi",
			"vanitylabelradiomultiply": "Moltiplica",
			"vanitycalc": "Calcola Vanity Wallet",
			"vanitylabelbitcoinaddress": "Indirizzo del Vanity Wallet:",
			"vanitylabelnotesbitcoinaddress": "Sopra trovi il tuo nuovo indirizzo che dovrebbe includere il prefisso che hai scelto.",
			"vanitylabelpublickeyhex": "Chiave pubblica del Vanity Wallet (HEX):",
			"vanitylabelnotespublickeyhex": "Quella sopra è la Chiave Pubblica nel formato esadecimale. ",
			"vanitylabelprivatekey": "Chiave privata del Vanity Wallet (WIF):",
			"vanitylabelnotesprivatekey": "Quella sopra è la Chiave Privata nel formato esadecimale.  ",
			
			// detail wallet html
			"detaillabelenterprivatekey": "Inserisci la Chiave Privata",
			"detailkeyformats": "Key Formats: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
			"detailview": "Mostra Dettagli",
			"detailprint": "Stampa",
			"detaillabelnote1": "La tua Chiave privata Futurocoin è rappresentata da un numero segreto, unico al mondo, che dovresti conoscere soltanto tu. Può essere codificato in molti formati differenti. Di seguito verrà mostrato l'indirizzo Futurocoin e la chiave pubblica, con la corrispondente chiave privata, nei più diffusi formati di codifica (WIF, WIFC, HEX, B64).",
			"detaillabelnote2": "Il client Futurocoin, dalla versione v0.6, memorizza le chiavi pubbliche in formato compresso. Il programma ora supporta l'importazione e l'esportazione delle chiavi private attraverso importprivkey/dumpprivkey. Il formato con cui viene esportata la chiave privata dipende se l'indirizzo generato è stato creato con il nuovo o vecchio portafogli.",
			"detaillabelbitcoinaddress": "Indirizzo Futurocoin",
			"detaillabelbitcoinaddresscomp": "Indirizzo Futurocoin compresso",
			"detaillabelpublickey": "Chiave pubblica (130 caratteri [0-9A-F]):",
			"detaillabelpublickeycomp": "Chiave pubblica (compressa, 66 caratteri [0-9A-F]):",
			"detaillabelprivwif": "Chiave privata WIF<br>51 caratteri base58, inizia per a",
			"detaillabelprivwifcomp": "Chiave privata WIF compressa<br>52 caratteri base58, inizia per 'a'",
			"detailcompwifprefix": "'K' o 'L'",
			"detaillabelprivhex": "Chiave privata formato esadecimale (64 caratteri [0-9A-F]):",
			"detaillabelprivb64": "Chiave privata Base64 (44 caratteri):",
			"detaillabelprivmini": "Chiave privata formato mini (22, 26 or 30 caratteri, inizia per 'S'):",
			"detaillabelpassphrase": "Inserisci passphrase BIP38",
			"detailbip38decryptbutton": "Decripta BIP38",
			"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
			"detaillabelq1": "How do I make a wallet using dice? What is B6?", //TODO: please translate
			"detaila1": "An important part of creating a Futurocoin wallet is ensuring the random numbers used to create the wallet are truly random. Physical randomness is better than computer generated pseudo-randomness. The easiest way to generate physical randomness is with dice. To create a Futurocoin private key you only need one six sided die which you roll 99 times. Stopping each time to record the value of the die. When recording the values follow these rules: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. By doing this you are recording the big random number, your private key, in B6 or base 6 format. You can then enter the 99 character base 6 private key into the text field above and click View Details. You will then see the Futurocoin address associated with your private key. You should also make note of your private key in WIF format since it is more widely used." //TODO: please translate
	    },
	    
	    "de": {
			// javascript alerts or messages
			"testneteditionactivated": "TESTNET AKTIVIERT",
			"paperlabelbitcoinaddress": "Futurocoin-Adresse:",
			"paperlabelprivatekey": "Privater Schl&uuml;ssel (Wallet Import Format):",
			"paperlabelencryptedkey": "Verschl&uuml;sselter privater Schl&uuml;ssel (Passwort ben&ouml;tigt)",
			"bulkgeneratingaddresses": "Adressen erstellen... ",
			"brainalertpassphrasetooshort": "Die eingegebene Passphrase ist zu kurz.\n\n",
			"brainalertpassphrasewarning": "Hinweis: Eine längere Passphrase schützt besser vor Brute-Force-Attacken, bei denen auf gut Glück Passphrasen probiert werden.",
			"brainalertpassphrasedoesnotmatch": "Die beiden Passphrasen stimmen nicht überein.",
			"detailalertnotvalidprivatekey": "Der eingegebene Text ist kein gültiger privater Schlüssel.",
			"detailconfirmsha256": "Der eingegebene Text ist kein gültiger privater Schlüssel!\n\nMöchtest du den eingegebenen Text als Passphrase verwenden, um mithilfe dessen SHA256-Hash einen privaten Schlüssel zu erstellen?\n\nHinweis: Eine längere Passphrase sch&uuml;tzt besser vor Brute-Force-Attacken, bei denen auf gut Glück Passphrasen probiert werden.",
			"bip38alertincorrectpassphrase": "Falsches Passwort",
			"bip38alertpassphraserequired": "Bitte Passwort eingeben.",
			"vanityinvalidinputcouldnotcombinekeys": "Unzulässige Eingaben. Die Schlüssel konnten nicht kombiniert werden.",
			"vanityalertinvalidinputpublickeysmatch": "Unzulässige Eingaben. Die eingegebenen öffentlichen Schlüssel stimmen überein. Bitte gib zwei unterschiedliche Schlüssel ein.",
			"vanityalertinvalidinputcannotmultiple": "Unzulässige Eingaben. Zwei öffentliche Schlüssel können nicht miteinander multipliziert werden. Wähle \"Addieren\" aus, um aus zwei öffentlichen Schlüsseln eine Futurocoin-Adresse zu erstellen.",
			"vanityprivatekeyonlyavailable": "Nur verfügbar, wenn zwei private Schlüssel kombiniert werden.",
			"vanityalertinvalidinputprivatekeysmatch": "Unzulässige Eingaben. Die eingegebenen privaten Schlüssel stimmen überein. Bitte gib zwei unterschiedliche Schlüssel ein.",

			// header and menu html
			"tagline": "Offener, client-seitiger Futurocoin-Wallet-Generator in JavaScript",
			"generatelabelbitcoinaddress": "Erstelle Futurocoin-Wallet...",
			"generatelabelmovemouse": "Bewege deine Maus umher, um die Zuf&auml;lligkeit zu erh&ouml;hen...",
			"generatelabelkeypress": "OR type some random characters into this textbox", //TODO: please translate
			"singlewallet": "Einzelnes Wallet",
			"paperwallet": "Papier-Wallet",
			"bulkwallet": "Massen-Wallet",
			"brainwallet": "Kopf-Wallet",
			"vanitywallet": "Personalisiertes Wallet",
			"splitwallet": "Split Wallet", //TODO: please translate
			"detailwallet": "Walletdetails",

			// footer html
			"footerlabeldonations": "Spenden:",
			"footerlabeltranslatedby": "&Uuml;bersetzung: 1EWPcmYmU8MamRUYMFWQa1r7A2Tskz78t5",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "Versionsgeschichte",
			"footerlabelgithub": "GitHub-Repository",
			"footerlabelgithubzip": "zip",
			"footerlabelsig": "sig",
			"footerlabelcopyright1": "Copyright bitaddress.org, The Futurocoin Developers.",
			"footerlabelcopyright2": "JavaScript-Copyrights sind im Quelltext enthalten.",
			"footerlabelnowarranty": "Ohne Gew&auml;hr.",

	    	// status html
			"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
			"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
			"statusokcryptogood": "OK", //TODO: please translate
			"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
			"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
			"statusokcryptobad": "OK", //TODO: please translate
			"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
			"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
			"statusokunittestsgood": "OK", //TODO: please translate
			"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
			"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
			"statusokunittestsbad": "OK", //TODO: please translate
			"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
			"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
			"statusokprotocolgood": "OK", //TODO: please translate
			"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
			"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
			"statuslabelprotocolbad2": "download", //TODO: please translate
			"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
			"statusokprotocolbad": "OK", //TODO: please translate
			"statuslabelkeypool1": "This is a log of all the Futurocoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
			"statuskeypoolrefresh": "Refresh", //TODO: please translate
			"statusokkeypool": "OK", //TODO: please translate

			// single wallet html
			"newaddress": "Neues Wallet erstellen",
			"singleprint": "Drucken",
			"singlelabelbitcoinaddress": "Futurocoin-Adresse",
			"singlelabelprivatekey": "Privater Schl&uuml;ssel (WIF &nfuturocoin; zum Importieren geeignet):",
			"singletip1": "<b>Ein Futurocoin-Wallet </b>(Geldb&ouml;rse) ist nichts anderes als eine Futurocoin-Adresse (&ouml;ffentlicher Schl&uuml;ssel) und der zu ihr geh&ouml;rende private Schl&uuml;ssel. Oben findest du ein solches, gerade f&uuml;r dich erstelltes Wallet, bestehend aus den beiden Zeichenketten. Die QR-Codes dienen lediglich der Vereinfachung und enthalten kodiert die Adresse bzw. den privaten Schl&uuml;ssel.",
			"singletip2": "<b>Um dieses Wallet zu sch&uuml;tzen,</b> musst du es entweder ausdrucken oder anderweitig die Futurocoin-Adresse und den privaten Schl&uuml;ssel sichern. Fertige auf jeden Fall eine Kopie des privaten Schl&uuml;ssels an und bewahre sie an einem sicheren Ort auf. Der private Schl&uuml;ssel liegt nur lokal auf deinem Rechner vor und wurde nicht ins Internet &uuml;bertragen. Falls du dich mit PGP auskennst, kannst du dir diese all-in-one HTML-Seite herunterladen. Um zu &uuml;berpr&uuml;fen, ob die heruntergeladene Version authentisch ist, kannst du den SHA256-Hash dieser Seite mit dem SHA256-Hash in der signierten Versionsgeschichte am unteren Ende dieser Seite abgleichen. Wenn du diese Seite verl&auml;sst, sie neul&auml;dst bzw. den \"Neues Wallet erstellen\"-Button dr&uuml;ckst, wird ein neues Wallet erstellt und das vorherige wird nicht mehr abrufbar sein. Du solltest deinen privaten Schl&uuml;ssel geheim halten. Wer den privaten Schl&uuml;ssel hat, kann damit auf alle im Wallet befindlichen Futurocoin zugreifen und sie nach Belieben ausgeben. Behandle dein gedrucktes Wallet wie echtes Geld!",
			"singletip3": "Du kannst <b>Guthaben</b> zu deinem Wallet <b>hinzuf&uuml;gen</b>, indem du genau wie bei anderen &Uuml;berweisungen Futurocoin an die Futurocoin-Adresse deines Wallets schickst.",
			"singletip4": "<b>&Uuml;berpr&uuml;fe dein Guthaben,</b> indem du deine Futurocoin-Adresse auf explorer.futurocoin.org eingibst.",
			"singletip5": "Du kannst deine <b>Futurocoin ausgeben</b> deinen privaten Schl&uuml;ssel in dieses importieren. Beachte dabei aber, dass, sobald du Futurocoin mit dem Programm sendest, dein privater Schl&uuml;ssel mit den anderen privaten Schl&uuml;sseln, die vom Programm bereitgestellt werden, verbunden wird. Bei einer &Uuml;berweisung wird etwas R&uuml;ckgeld an eine der Futurocoin-Adressen des Programms geschickt. Deswegen musst du, um tats&auml;chlich dein gesamtes Guthaben zu sichern, ein Backup vom gesamten Wallet des Programms, das nun auch deinen importierten privaten Schl&uuml;ssel enth&auml;lt, anfertigen. Satoshi r&auml;t, dass man unter keinen Umst&auml;nden ein Wallet l&ouml;schen sollte.", 
			"singleshare": "SHARE", //TODO: please translate
			"singlesecret": "SECRET", //TODO: please translate

			// paper wallet html
			"paperlabelhideart": "Grafische Gestaltung ausblenden?",
			"paperlabeladdressesperpage": "Adressen je Seite:",
			"paperlabeladdressestogenerate": "Anzahl zu erstellender Adressen:",
			"papergenerate": "Erstellen",
			"paperprint": "Drucken",
			"paperlabelBIPpassphrase": "Passwort:",
			"paperlabelencrypt": "Mit BIP38 verschl&uuml;sseln?",

			// bulk wallet html
			"bulklabelstartindex": "Startindex:",
			"bulklabelrowstogenerate": "Zu erstellende Adressen:",
			"bulklabelcompressed": "Adressen komprimieren?",
			"bulkgenerate": "Erstellen",
			"bulkprint": "Drucken",
			"bulklabelcsv": "Comma Separated Values (CSV):",
			"bulklabelformat": "Index, Adresse, privater Schl&uuml;ssel (WIF)",
			"bulklabelq1": "Warum sollte ich ein Massen-Wallet auf meiner Webseite einsetzen?",
			"bulka1": "Bisher musste immer der offizielle Futurocoin-Daemon, futurocoind, auf dem Server installiert sein, damit man Futurocoin auf seiner Webseite annehmen konnte. Viele Webhoster blockieren die Installation von futurocoind. Au&szlig;erdem m&uuml;ssen die privaten Schl&uuml;ssel auf dem Server liegen, damit futurocoind funktioniert, obwohl sie dort einfacher gestohlen werden k&ouml;nnen. Mit einem Massen-Wallet brauchst du nur noch die Futurocoin-Adressen und nicht mehr zus&auml;tzlich die privaten Schl&uuml;ssel hochladen. Dadurch musst du dir keine Sorgen mehr machen, dass dein Futurocoin-Wallet gestohlen werden k&ouml;nnte, wenn unberechtigt in deinen Server eingedrungen wird.",
			"bulklabelq2": "Wie kann ich ein Massen-Wallet in meine Webseite integrieren?",
			"bulklabela2li1": "Erstelle mithilfe dieser Seite ganz viele Futurocoin-Adressen (10.000+). Kopiere die CSV-Liste in eine sichere Textdatei auf deinem Computer. Fertige ein Backup dieser Datei an und speichere sie an einem sicheren Ort.",
			"bulklabela2li2": "Importiere die Futurocoin-Adressen in eine Datenbank auf deinem Server. (Lege nur die Futurocoin-Adressen, nicht aber die privaten Schl&uuml;ssel auf deinem Server ab!)",
			"bulklabela2li3": "Biete deinen Kunden auf deiner Webseite Futurocoin als Zahlungsm&ouml;glichkeit an. Wenn ein Kunde mit Futurocoin zahlen m&ouml;chte, zeige ihm eine der Adressen aus deiner Datenbank als Zahlungsadresse an und speichere sie mit seiner Bestellung.",
			"bulklabela2li4": "Jetzt musst du dir den Zahlungseingang best&auml;tigen lassen. Google \"Futurocoin payment notification\" und melde dich bei mindestens einem solchen Anbieter an. Es gibt verschiedene Anbieter, die dich via Web, API, SMS, E-Mail etc. &uuml;ber erfolgte Transaktionen informieren k&ouml;nnen. Sobald du die Eingangsbest&auml;tigung erh&auml;lst, kannst du automatisch die Bestellung abwickeln lassen. Um selber zu schauen, ob eine Zahlung erfolgt ist, kannst du Block Explorer nutzen. Ersetze BITCOINADRESSE durch die Futurocoin-Adresse, die du pr&uuml;fen m&ouml;chtest. Es dauert von zehn Minuten bis zu einer Stunde, um Transaktionen zu best&auml;tigen. <br />http://explorer.futurocoin.org/address/BITCOINADRESSE<br /> <br />Unbest&auml;tigte Transaktionen findest du hier: https://bchain.info/Futurocoin/ http://insight.futurocoin.siampm.com/ <br /> S&auml;mtliche Transaktionen sollten dort innerhalb von 30 Sekunden auftauchen.",
			"bulklabela2li5": "Deine Futurocoin werden sicher in die Block-Chain aufgenommen. Mithilfe des urspr&uuml;nglichen Wallets vom ersten Schritt kannst du sie ausgeben.",

			// brain wallet html
			"brainlabelenterpassphrase": "Passphrase eingeben:",
			"brainlabelshow": "Aufdecken?",
			"brainprint": "Drucken",
			"brainlabelconfirm": "Passphrase wiederholen:",
			"brainview": "Zugehöriges Wallet anzeigen",
			"brainalgorithm": "Algorithmus: SHA256 (Passphrase)",
			"brainlabelbitcoinaddress": "Futurocoin-Adresse:",
			"brainlabelprivatekey": "Privater Schl&uuml;ssel (WIF):",

			// vanity wallet html
			"vanitylabelstep1": "Schritt 1 - Erstelle dein Schl&uuml;sselpaar",
			"vanitynewkeypair": "Erstellen",
			"vanitylabelstep1publickey": "&Ouml;ffentlicher Schl&uuml;ssel:",
			"vanitylabelstep1pubnotes": "Kopiere den obigen &ouml;ffentlichen Schl&uuml;ssel in das \"Your public key\"-Feld auf der Webseite von Vanity Pool.",
			"vanitylabelstep1privatekey": "Privater Schl&uuml;ssel (Your Part Private Key):",
			"vanitylabelstep1privnotes": "Speichere den obigen privaten Schl&uuml;ssel in einer Textdatei, die du am besten auf einem verschl&uuml;sselten Laufwerk sicherst. Sobald der Vanity-Pool deine personalisierte Futurocoin-Adresse gefunden hat, kannst du den zu ihr geh&ouml;renden privaten Schl&uuml;ssel nur mithilfe des vom Pools berechneten privaten Schl&uuml;ssels (Pool Part Private Key) und des obigen privaten Schl&uuml;ssels (Your Part Private Key) erhalten. Beide privaten Schl&uuml;ssel (Pool und Your) werden zum Berechnen des privaten Schl&uuml;ssels deiner personalisierten Futurocoin-Adresse ben&ouml;tigt, damit wirklich nur jemand, der beide besitzt, das personalisierte Wallet nutzen kann.",
			"vanitylabelstep2calculateyourvanitywallet": "Schritt 2 - Berechne dein personalisiertes Wallet",
			"vanitylabelenteryourpart": "Gib hier deinen privaten Schl&uuml;ssel von oben ein (Your Part Private Key):",
			"vanitylabelenteryourpoolpart": "Gib hier den von Vanity-Pool erhaltenen privaten Schl&uuml;ssel ein (Pool Part Private Key):",
			"vanitylabelnote1": "[HINWEIS: Dieses Eingabefeld nimmt sowohl &ouml;ffentlich als auch private Schl&uuml;ssel an.]",
			"vanitylabelnote2": "[HINWEIS: Dieses Eingabefeld nimmt sowohl &ouml;ffentlich als auch private Schl&uuml;ssel an.]",
			"vanitylabelradioadd": "Addieren",
			"vanitylabelradiomultiply": "Multiplizieren",
			"vanitycalc": "Personalisiertes Wallet berechnen",
			"vanitylabelbitcoinaddress": "Personalisierte Futurocoin-Adresse:",
			"vanitylabelnotesbitcoinaddress": "Die obige Futurocoin-Adresse sollte den gew&uuml;nschten Pr&auml;fix enthalten.",
			"vanitylabelpublickeyhex": "Personalisierter &ouml;ffentlicher Schl&uuml;ssel (HEX):",
			"vanitylabelnotespublickeyhex": "Die obige Zeichenfolge ist der &ouml;ffentliche Schl&uuml;ssel (Futurocoin-Adresse) im Hexadezimalformat.",
			"vanitylabelprivatekey": "Personalisierter privater Schl&uuml;ssel (WIF):",
			"vanitylabelnotesprivatekey": "Der obige private Schl&uuml;ssel erm&ouml;glicht das Importieren in andere Wallets.",

			// detail wallet html
			"detaillabelenterprivatekey": "Privaten Schl&uuml;ssel eingeben:",
			"detailkeyformats": "Unterstützte Formate: WIF, WIFC, HEX, B64, B6, MINI, BIP38",	
			"detailview": "Details anzeigen",
			"detailprint": "Drucken",
			"detaillabelnote1": "Der private Schl&uuml;ssel deines Wallets ist eine geheime, einzigartige Zeichenfolge, die nur du kennst. Er kann auf mehrer Arten dargestellt werden. Unten findest du die zugeh&ouml;rige Futurocoin-Adresse bzw. &ouml;ffentlichen Schl&uuml;ssel sowie den privaten Schl&uuml;ssel in den verbreitetsten Formaten.",
			"detaillabelnote2": "Ab Version 0.6 speichert Futurocoin-qt &ouml;ffentliche Schl&uuml;ssel komprimiert. Futurocoin Programm unterst&uuml;tzt nun auch den Import und Export von privaten Schl&uuml;sseln mit importprivkey/dumpprivkey. Futurocoin Format des exportierten privaten Schl&uuml;ssels h&auml;ngt davon ab, ob die Adresse in einem alten oder neuen Wallet erstellt wurde.",
			"detaillabelbitcoinaddress": "Futurocoin-Adresse:",
			"detaillabelbitcoinaddresscomp": "Komprimierte Futurocoin-Adresse:",
			"detaillabelpublickey": "&Ouml;ffentlicher Schl&uuml;ssel (130 Zeichen [0-9A-F]):",
			"detaillabelpublickeycomp": "Komprimierter &ouml;ffentlicher Schl&uuml;ssel (66 Zeichen [0-9A-F]):",
			"detaillabelprivwif": "Privater Schl&uuml;ssel WIF  <br /> 51 Zeichen in base58, beginnt mit",
			"detaillabelprivwifcomp": "Komprimierter privater Schl&uuml;ssel WIF <br /> 52 Zeichen in base58, beginnt mit",
			"detailcompwifprefix": "'K' oder 'L'",
			"detaillabelprivhex": "Privater Schl&uuml;ssel in Hexadezimal (64 Zeichen [0-9A-F]):",
			"detaillabelprivb64": "Privater Schl&uuml;ssel in base64 (44 Zeichen):",
			"detaillabelprivmini": "Privater Schl&uuml;ssel in mini (22, 26 oder 30 Zeichen, beginnt mit 'S'):",
			"detaillabelpassphrase": "Passwort f&uuml;r BIP38 eingeben",
			"detailbip38decryptbutton": "Entschl&uuml;sseln",
			"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
			"detaillabelq1": "Wie erstelle ich ein Wallet mithilfe eines Würfels? Was versteht man unter B6?",
			"detaila1": "Beim Erstellen eines Futurocoin-Wallets sollten die dafür genutzten Zufallszahlen auch tatsächlich zufällig sein. Ein echter Würfel liefert wesentlich zufälligere Zahlen als ein Computer. Um einen privaten Schlüssel zu erstellen, sind lediglich 99 Würfe mit einem normalen Würfel nötig. Nach jedem Wurf solltest du die Augenzahl nach folgendem Muster aufschreiben: 1-\>1, 2-\>2, 3-\>3, 4-\>4, 5-\>5, 6-\>0. Die so entstandene Zufallszahl stellt deinen privaten Schlüssel in B6 bzw. zur Basis 6 dar. Diesen 99 Zeichen langen Basis-6-Schlüssel kannst du im obigen Eingabefeld eingeben und dir dann die zugehörigen Details anzeigen lassen. U.a. wird dir die zu deinem privaten Schlüssel gehörende Futurocoin-Adresse angezeigt. Es wäre ratsam, sich die ebenfalls berechnete WIF-Version des privaten Schlüssels zu notieren, weil sie häufiger genutzt wird."
		},

		"cs": {
			// javascript alerts or messages
			"testneteditionactivated": "TESTNET aktivován",
			"paperlabelbitcoinaddress": "Futurocoin adresa:",
			"paperlabelprivatekey": "Soukromý klíč (WIF &nfuturocoin; Formát pro import do peněženky):",
			"paperlabelencryptedkey": "Šifrovaný soukromý klíč (Vyžadováno heslo)",
			"bulkgeneratingaddresses": "Generuji adresy... ",
			"brainalertpassphrasetooshort": "Zadané heslo je příliš krátké.\n\n",
			"brainalertpassphrasewarning": "Varování: Je důležité zvolit silné heslo, které je odolné proti útoku hrubou silou a krádeži vašich Futurocoinů.",
			"brainalertpassphrasedoesnotmatch": "Heslo nejsou stejná.",
			"detailalertnotvalidprivatekey": "Zadaný text není platým soukromým klíčem",
			"detailconfirmsha256": "Zadaný text není platným soukromým klíčem!\n\nChcete použít zadaný text jako heslo a vytvořit soukromý klíč pomocí SHA256?\n\nVarování: Je důležité zvolit silné heslo, které je odolné proti útoku hrubou silou a krádeži vašich Futurocoinů.",
			"bip38alertincorrectpassphrase": "Špatné heslo pro BIP38",
			"bip38alertpassphraserequired": "Vyžadováno heslo pro BIP38 klíč",
			"vanityinvalidinputcouldnotcombinekeys": "Špatný vstup. Kombinovat klíče není možné.",
			"vanityalertinvalidinputpublickeysmatch": "Špatný vstup. Veřejný klíč obou položek je shodný. Musíte zadat dva různé klíče.",
			"vanityalertinvalidinputcannotmultiple": "Špatný vstup. Dva veřejné klíče není možné násobit. Zvolte 'Přidat' pro přidání dvou veřejných klíčů a získání Futurocoin adresy.",
			"vanityprivatekeyonlyavailable": "Dostupné pouze při kombinaci dvou soukromých klíčů",
			"vanityalertinvalidinputprivatekeysmatch": "Špatný vstup. Soukromý klíč obou položek je shodný. Musíte zadat dva různé klíče.",

			// header and menu html
			"tagline": "Open Source generátor Futurocoin peněženky napsaný v JavaScript",
			"generatelabelbitcoinaddress": "Generuji Futurocoin adresu",
			"generatelabelmovemouse": "POHYBUJTE myší pro získání dostatku náhody...",
			"generatelabelkeypress": "NEBO napište několik náhodných znaků do tohoto pole",
			"singlewallet": "Jedna peněženka",
			"paperwallet": "Papírová peněženka",
			"bulkwallet": "Hromadná peněženka",
			"brainwallet": "Myšlenková peněženka",
			"vanitywallet": "Peněženka Vanity",
			"splitwallet": "Split Wallet", //TODO: please translate
			"detailwallet": "Detail peněženky",

			// footer html
			"footerlabeldonations": "Příspěvek:",
			"footerlabeltranslatedby": "Překlad: 1LNF2anjkH3HyRKrhMzVYqYRKFeDe2TJWz",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "Historie verzí",
			"footerlabelgithub": "GitHub Repository",
			"footerlabelgithubzip": "zip",
			"footerlabelsig": "sig",
			"footerlabelcopyright1": "Copyright bitaddress.org, The Futurocoin Developers.",
			"footerlabelcopyright2": "Copyright JavaScriptu je uveden ve zdrojovém kódu.",
			"footerlabelnowarranty": "Bez záruky.",

			// status html
			"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
			"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
			"statusokcryptogood": "OK", //TODO: please translate
			"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
			"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
			"statusokcryptobad": "OK", //TODO: please translate
			"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
			"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
			"statusokunittestsgood": "OK", //TODO: please translate
			"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
			"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
			"statusokunittestsbad": "OK", //TODO: please translate
			"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
			"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
			"statusokprotocolgood": "OK", //TODO: please translate
			"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
			"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
			"statuslabelprotocolbad2": "download", //TODO: please translate
			"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
			"statusokprotocolbad": "OK", //TODO: please translate
			"statuslabelkeypool1": "This is a log of all the Futurocoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
			"statuskeypoolrefresh": "Refresh", //TODO: please translate
			"statusokkeypool": "OK", //TODO: please translate

			// single wallet html
			"newaddress": "Vytvořit novou adresu",
			"singleprint": "Tisk",
			"singlelabelbitcoinaddress": "Futurocoin adresa",
			"singlelabelprivatekey": "Soukromý klíč (WIF &nfuturocoin; Formát pro import do peněženky):",
			"singletip1": "<b>Futurocoin peněženka</b> je jednoduchý pár Futurocoin adresy s přidruženým soukromým klíčem. Taková peněženka byla právě vytvořena ve vašem prohlížeči a zobrazena výše.",
			"singletip2": "<b>Pro zabezpečení této peněženky</b> musíte tuto Futurocoin adresu a soukromý klíč vytisknout a nebo jinak poznamenat. Je důležité provést zálohu soukromého klíče a jeho uschování na bezpečném místě. Tato webová stránka nemá žádné informace o vašem soukromém klíči. Pokud ovládáte PGP, můžete celou tuto stránku stáhnout v jednom HTML souboru a ověřit její pravost srovnáním SHA256 hashe s podepsaným dokumentem historie verzí. Odkaz naleznete v patičce této stránky. Pokud opustíte či obnovíte tuto stránku nebo kliknete na 'Vytvořit novou adresu' dojde k vygenerování nového soukromého klíče a předtím zobrazený klíč bude ztracen. Váš soukromý klíč musíte uchovat v tajnosti. Každý kdo má tento klíč k dispozici může utratit všechny peníze v této peněžence. Pokud budete peněženku tisknout, uzavřete ji do nepropustného obalu nebo ji zalaminujte. Tím zabráníte jejímu poškození vodou. Chovejte se k této peněžence jako k normálním bankovkám.",
			"singletip3": "<b>Pro vložení</b> peněz do této peněženky stačí zaslat peníze na Futurocoin adresu.",
			"singletip4": "<b>Zkontrolovat zůstatek</b> můžete na webové stránce explorer.futurocoin.org po zadání Futurocoin adresy.",
			"singletip5": "<b>Utratit Futurocoin</b> můžete pomocí jednoho z P2P Futurocoin klientů naimportováním soukromého klíče. Myslete na to, že importem klíče do klienta se stane součástí jeho peněženky. Pokud převedete někomu peníze, nespotřebovaný zůstatek se zašle na jinou Futurocoin adresu uvedenou v P2P klienta. Tuto novou adresu musíte vyzálohovat a udržovat v bezpečí. Satoshi doporučuje, že by nikdo nikdy neměl mazat peněženku.",
			"singleshare": "SDÍLEJTE",
			"singlesecret": "SOUKROMÉ",

			// paper wallet html
			"paperlabelhideart": "Skrýt grafiku?",
			"paperlabeladdressesperpage": "Adres na stránku:",
			"paperlabeladdressestogenerate": "Vytvořit adres:",
			"papergenerate": "Vytvořit",
			"paperprint": "Tisk",
			"paperlabelBIPpassphrase": "Heslo:",
			"paperlabelencrypt": "Šifrovat BIP38?",

			// bulk wallet html
			"bulklabelstartindex": "Počátek:",
			"bulklabelrowstogenerate": "Počet řádku k vytvoření:",
			"bulklabelcompressed": "Komprimované adresy?",
			"bulkgenerate": "Vytvořit",
			"bulkprint": "Tisk",
			"bulklabelcsv": "Čárkou oddělené hodnoty (CSV):",
			"bulklabelformat": "Index, Adresa, Soukromý klíč (WIF &nfuturocoin; Formát pro import do peněženky)",
			"bulklabelq1": "Proč bych měl používat Hromadnou peněženku pro příjem Futurocoinů na mé stránce?",
			"bulka1": "Tradiční způsob jak přijímat Futurocoin na vaší webové stránce vyžaduje instalaci oficiálního Futurocoin klienta (\"futurocoind\"). Mnoho webhostingových společností neumožňuje tuto instalaci provést. Také běh Futurocoin démona na webovém serveru znamená, že soukromé klíče jsou uloženy na serveru a mohou být ukradeny. Pokud použijete Hromadnou peněženku, tak stačí na server nahrát pouze veřejnou Futurocoin adresu a ne soukromé klíče. Poté se nemusíte bát, že vaše Futurocoin budou ukradeny v případě napadení serveru.",
			"bulklabelq2": "Jakým způsobem mohou přijímat Futurocoin na mé stránce pomocí Hromadné peněženky?",
			"bulklabela2li1": "Předgenerujte si velké množství Futurocoin adres (10 000+). Okopírujte si CSV seznam do souboru na bezpečné místo ve vašem počítači. Poté jej vyzálohujte na bezpečné místo.",
			"bulklabela2li2": "Naimportujte Futurocoin adresy do databáze na vašem webovém serveru. Neimportujte soukromé klíče, abyste zabránili krádeži vašich peněz.",
			"bulklabela2li3": "Umožněte na vaší stránce platbu pomocí Futurocoin. Stačí vždy zobrazit jednu z vygenerovaných adres a uložit si ji u objednávky.",
			"bulklabela2li4": "Nyní je již pouze potřeba zařídit notifikace o příchozí transakci. Zadejte do Google \"Futurocoin payment notification\" a využijte jednu z existujících služeb. Existuje jich několik a podporují např. Web Services, API, SMS, Email, apod. Notifikaci můžete zpracovat automaticky. Pro ruční kontrolu, zda peníze přišly, stačí použít Block Explorer. Nahraďte SEMPATŘÍADRESA Futurocoin adresou, kterou chcete zkontrolovat. Potvrzení transkace může trvat od 10 minut do jedné hodiny.<br />http://explorer.futurocoin.org/address/SEMPATŘÍADRESA<br /><br />Nepotvrzené tansakce je možné zkontrolovat na: https://bchain.info/Futurocoin/ http://insight.futurocoin.siampm.com/ <br />Většinou se zde zobrazí do 30 sekund.",
			"bulklabela2li5": "Futurocoin budou bezpečně převedeny v řetězci bloků. Pro spotřebování stačí kdykoliv naimportovat soubor vygenerovaný v prvním kroku.",

			// brain wallet html
			"brainlabelenterpassphrase": "Zadejte heslo:",
			"brainlabelshow": "Zobrazit?",
			"brainprint": "Tisk",
			"brainlabelconfirm": "Heslo znovu:",
			"brainview": "Zobrazit",
			"brainalgorithm": "Algoritmus: SHA256 (Heslo)",
			"brainlabelbitcoinaddress": "Futurocoin adresa:",
			"brainlabelprivatekey": "Soukromý klíč (WIF &nfuturocoin; Formát pro import do peněženky):",

			// vanity wallet html
			"vanitylabelstep1": "Krok 1 &nfuturocoin; Vytvořte klíč pro první krok",
			"vanitynewkeypair": "Vytvořit",
			"vanitylabelstep1publickey": "Veřejný klíč 1. kroku",
			"vanitylabelstep1pubnotes": "Zkopírujte a vložte výše uvedený klíč do pole Your-Part-Public-Key na Vanity Pool stránce.",
			"vanitylabelstep1privatekey": "Soukromý klíč 1. kroku",
			"vanitylabelstep1privnotes": "Zkopírujte a uschovejte uvedený soukromý klíč. Ideálně na šifrovaný disk. Budete ho potřebovat pro získání vašeho Futurocoin soukromého klíče poté, co pool nalezne začátek.",
			"vanitylabelstep2calculateyourvanitywallet": "Krok 2 &nfuturocoin; Výpočet peněženky Vanity",
			"vanitylabelenteryourpart": "Zadejte vaši část soukromého klíče (vygenerovaný a uložený v prvním kroku výše):",
			"vanitylabelenteryourpoolpart": "Zadejte pool část soukromého klíče (z Vanity Poolu):",
			"vanitylabelnote1": "[POZNÁMKA: do tohoto pole můžete zadat veřejný nebo soukromý klíč]",
			"vanitylabelnote2": "[POZNÁMKA: do tohoto pole můžete zadat veřejný nebo soukromý klíč]",
			"vanitylabelradioadd": "Sečíst",
			"vanitylabelradiomultiply": "Násobit",
			"vanitycalc": "Spočítát peněženku Vanity",
			"vanitylabelbitcoinaddress": "Futurocoin adresa Vanity:",
			"vanitylabelnotesbitcoinaddress": "Výše je vaše nová adresa, která by měla obsahovat požadovaný začátek.",
			"vanitylabelpublickeyhex": "Veřejný klíč Vanity (HEX):",
			"vanitylabelnotespublickeyhex": "Výše je veřejný klíč v hexadecimálním formátu.",
			"vanitylabelprivatekey": "Soukromý klíč Vanity (WIF):",
			"vanitylabelnotesprivatekey": "Výše je soukromý klíč pro načtení do vaší peněženky.",

			// detail wallet html
			"detaillabelenterprivatekey": "Zadejte soukromý klíč:",
			"detailkeyformats": "Podporované formáty: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
			"detailview": "Zobrazit detail",
			"detailprint": "Tisk",
			"detaillabelnote1": "",
			"detaillabelnote2": "",
			"detaillabelbitcoinaddress": "Futurocoin adresa:",
			"detaillabelbitcoinaddresscomp": "Komprimovaná Futurocoin adresa:",
			"detaillabelpublickey": "Veřejný klíč (130 znaků [0-9A-F]):",
			"detaillabelpublickeycomp": "Komprimovaný veřejný klíč (66 znaků [0-9A-F]):",
			"detaillabelprivwif": "Soukromý klíč WIF  <br />51 znaků v base58, začíná",
			"detaillabelprivwifcomp": "Komprimovaný soukromý klíč WIF <br />52 znaků v base58, začíná",
			"detailcompwifprefix": "'K' nebo 'L'",
			"detaillabelprivhex": "Soukromý klíč v hexadecimálním formátů (64 znaků [0-9A-F]):",
			"detaillabelprivb64": "Soukromý klíč v base64 (44 znaků):",
			"detaillabelprivmini": "Soukromý klíč v mini formátů (22, 26 nebo 30 znaků, začíná 'S'):",
			"detaillabelpassphrase": "Zadejte BIP38 heslo:",
			"detailbip38decryptbutton": "Dešifrovat",
			"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
			"detaillabelq1": "Jak si mohu vytvořit peněženku pomocí hrací kostky? Co je to B6?",
			"detaila1": "Důležitá součást vytváření Futurocoin peněženky je jistota, že náhodná čísla použitá pro její tvorbu jsou opravdu náhodná. Fyzická náhoda je lepší než počítačem generovaná pseudonáhoda. Pomocí hrací kostky je možné jednoduše získat fyzicky náhodná čísla. Pro vytvoření soukromého klíče potřebujete pouze šestihrannou kostku, kterou 99x hodíte. Každý tento hod zaznamenejte. Při zapisování převeďte čísla takto: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Pomocí této techniky zapisujete velké, opravdu náhodné číslo, svůj soukromý klíč v B6 nebo také base 6 formátu. Těchto 99 čísel napište do pole výše a klikněte na Zobrazit detail. Poté se vám zobrazí Futurocoin adresa přidružená k tomuto soukromému klíči. Soukromý klíč byste si měli zaznamenat také ve WIF formátu, který je široce používán."
		},
		
		"hu": {  // 02-MAR-2014 16:57
			// javascript alerts or messages
			"testneteditionactivated": "TESTNET KIADÁS AKTIVÁLVA",
			"paperlabelbitcoinaddress": "Futurocoin cím:",
			"paperlabelprivatekey": "Privát kulcs (WIF, tárca import formátumban):",
			"paperlabelencryptedkey": "Titkosított privát kulcs (Jelszó szükséges)",
			"bulkgeneratingaddresses": "Cím generálás... ",
			"brainalertpassphrasetooshort": "A megadott jelmondat túl rövid.\n\n",
			"brainalertpassphrasewarning": "Figyelem: Fontos, hogy erős jelmondatot válasszon, mert különben a jelmondatot nyers erővel feltörhetik és a Futurocoin ellophatják.",
			"brainalertpassphrasedoesnotmatch": "A jelmondat és az ellenőrző jelmondat nem azonos.",
			"detailalertnotvalidprivatekey": "A beadott szöveg nem érvénytelen Privát Kulcs",
			"detailconfirmsha256": "Az ön által beadott szöveg érvénytelen Privát Kulcs!\n\nSzeretné a beadott szöveget jelmondatként kezelni, és annak SHA256 zanzájából egy Privát Kulcsot előállítani?\n\nFigyelem: Fontos, hogy erős jelmondatot válasszon, mert különben a jelmondatot nyers erővel feltörhetik és a Futurocoin ellophatják.",
			"bip38alertincorrectpassphrase": "Érvénytelen jelmondat a titkosított privát kulcshoz.",
			"bip38alertpassphraserequired": "A BIP38 kulcshoz jelmondat szükséges",
			"vanityinvalidinputcouldnotcombinekeys": "Érvénytelen bemenet. A kulcsok nem tartoznak össsze.",
			"vanityalertinvalidinputpublickeysmatch": "Érvénytelen bemenet. A két megadott nyilvános kulcs azonos. Két különböző kulcs bevitelére van szükség.",
			"vanityalertinvalidinputcannotmultiple": "Érvénytelen bemenet. Két nyilvános kulcs összeszorzása nem lehetséges. Válassza az 'Összeadás'-t, ha két nyilvános kulcsból szeretne egy Futurocoin címet kapni.",
			"vanityprivatekeyonlyavailable": "Csak két privát kulcs kombinálásakor lehetséges",
			"vanityalertinvalidinputprivatekeysmatch": "Érvénytelen bemenet. A két megadott privát kulcs azonos. Két különböző kulcs bevitelére van szükség.",

			// header and menu html
			"tagline": "Nyílt forráskódú, kliens oldali JavaScript, Futurocoin pénztárca előállítására",
			"generatelabelbitcoinaddress": "A Futurocoin cím előállítása...",
			"generatelabelmovemouse": "MOZGASSA az egeret, ha fokozni szeretné a véletlenszerűséget...",
			"generatelabelkeypress": "VAGY gépeljen be néhány véletlenszerű karaktert ebbe a szövegdobozba",
			"singlewallet": "Egyszerű pénztárca",
			"paperwallet": "Papír pénztárca",
			"bulkwallet": "Tömeges pénztárca",
			"brainwallet": "Fejben tartott pénztárca",
			"vanitywallet": "Kérkedő pénztárca",
			"splitwallet": "Részekre bontott ~",
			"detailwallet": "A pénztárca részletei",

			// footer html
			"footerlabeldonations": "Adományok:",
			"footerlabeltranslatedby": "Fordította: 1GEBor11XtqDoamipB8nAV7o4fNW5JcrUD",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "Változatok története",
			"footerlabelgithub": "GitHub kódtár",
			"footerlabelgithubzip": "zip",
			"footerlabelsig": "sig",
			"footerlabelcopyright1": "Copyright bitaddress.org, The Futurocoin Developers.",
			"footerlabelcopyright2": "Az egyes JavaScript kódok szerzőinek jogai a forráskódon belül találhatók meg.",
			"footerlabelnowarranty": "Garancia nincs.",

			// status html
			"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
			"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
			"statusokcryptogood": "OK", //TODO: please translate
			"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
			"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
			"statusokcryptobad": "OK", //TODO: please translate
			"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
			"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
			"statusokunittestsgood": "OK", //TODO: please translate
			"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
			"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
			"statusokunittestsbad": "OK", //TODO: please translate
			"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
			"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
			"statusokprotocolgood": "OK", //TODO: please translate
			"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
			"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
			"statuslabelprotocolbad2": "download", //TODO: please translate
			"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
			"statusokprotocolbad": "OK", //TODO: please translate
			"statuslabelkeypool1": "This is a log of all the Futurocoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
			"statuskeypoolrefresh": "Refresh", //TODO: please translate
			"statusokkeypool": "OK", //TODO: please translate

			// single wallet html
			"newaddress": "Új cím előállítása",
			"singleprint": "Nyomtatás",
			"singlelabelbitcoinaddress": "Futurocoin cím:",
			"singlelabelprivatekey": "Privát kulcs (WIF, tárca import formátumban):",
			"singletip1": "<b>Egy Futurocoin pénztárca</b> nem más, mint egy Futurocoin címből és a hozzá tartozó privát kulcsból álló számpár. Egy ilyen pénztárcát állítottunk elő és jelenítettünk meg fent az Ön számára a Web böngészőben.",
			"singletip2": "<b>A pénztárca biztonságos megőrzése</b> érdekében nyomtassa ki vagy más módon rögzítse a Futurocoin címet és privát kulcsot. Fontos, hogy a privát kulcsból készítsen másolatot, és tárolja biztonságos helyen. Ez a webhely nem tud az ön privát kulcsairól. Ha ismeri a PGP-t, akkor egyben letöltheti az egész web lapot, és ellenőrizheti, hogy a webhely szerzője álatal írt valódi változatot töltötte-e le. Ehhez össze kell hasonlítania a HTML-ből képzett SHA256 zanzát a webhely láblécében hivatkozott, aláírt verzió történetben lévő SHA256 zanzával. Ha elhagyja/megfrissíti a webhelyet vagy megnyomja az 'Új cím előállítása' gombot, akkor egy új privát kulcs áll elő, és az előzőleg megjelenített privát kulcs elvész. A Futurocoin címhez tartozó privát kulcsot titokban kell tartani. Bárki, aki megszerzi ezt a kulcsot, el tudja költeni az ehhez a címhez tartozó összes Futurocoin. Ha kinyomtatja a pénztárcát, akkor tárolja egy villámzáras vízhatlan nylon-zacskóban. A papír pénztárcát tekintse úgy, mintha pénz lenne.",
			"singletip3": "<b>Pénzt úgy tehet</b> a pénztárcájába, hogy másokkal Futurocoin küldet erre a Futurocoin címre.",
			"singletip4": "<b>A pénztárca egyenlegét</b> úgy kérdezheti le, hogy elmegy a explorer.futurocoin.org weblapokra, és ott beadja ezt a Futurocoin címet.",
			"singletip5": "<b>Ha el akarja költeni a Futurocoin,</b> beimportálja a privát kulcsot a p2p kliens pénztárcájába. Ne feledje, hogy miután beimportálta a kulcsot a p2p Futurocoin kliensbe, a kulcsot a p2p kliens a pénztárcában lévő többi kulccsal együtt tárolja. Pénz küldésekor a visszajáró pénzt a p2p kliens pénztárcájában lévő másik Futurocoin címre fogják küldeni. Ekkor biztonsági másolatot kell készítenie a p2p kliens pénztárcáról, és a másolatot biztos helyen kell őriznie, mivel a maradék Futurocoin a pénztárca kulcsai tárolják. Satoshi tanácsa, hogy pénztárcát soha ne töröljünk.",

			// paper wallet html
			"paperlabelhideart": "A grafika elrejtése?",
			"paperlabeladdressesperpage": "Címek száma egy oldalon:",
			"paperlabeladdressestogenerate": "Előállítandó címek száma:",
			"papergenerate": "Előállítás",
			"paperprint": "Nyomtatás",
			"paperlabelBIPpassphrase": "Jelmondat:",
			"paperlabelencrypt": "BIP38 titkosítás?",

			// bulk wallet html
			"bulklabelstartindex": "Kezdő index:",
			"bulklabelrowstogenerate": "Az előállítandó sorok száma:",
			"bulklabelcompressed": "Tömörített címek használata?",
			"bulkgenerate": "Előállítás",
			"bulkprint": "Nyomtatás",
			"bulklabelcsv": "Vesszővel elválasztott értékek (CSV):",
			"bulklabelformat": "Index, Cím, Privát cím (WIF)",
			"bulklabelq1": "Miért jó a Tömeges pénztárca használata, ha Ön Futurocoin szeretne elfogadni a web-en?",
			"bulka1": "Ha Ön Futurocoin szeretne elfogadni a web-en, akkor a szokásos megoldás az, hogy installálja a hivatalos Futurocoin kliens démont (\"futurocoind\"). Sok web szolgáltató nem támogatja a Futurocoin démon installálását. Ráadásul, ha a Futurocoin démont a web szerveren futtatja, akkor a privát kulcsai is a web szerveren lesznek tárolva, és a web szerver meghekkelésekor ellophatják őket. A Tömeges pénztárca használatakor csak a Futurocoin címeket kell feltölteni a web szerverre, a privát kulcsokat nem. Így nem kell aggódnia, hogy ellopják a Futurocoin pénztárcáját, ha betörnek a web szerverre.",
			"bulklabelq2": "Hogyan használható a Tömeges pénztárca az Ön web helyén Futurocoin elfogadásra?",
			"bulklabela2li1": "A Tömeges pénztárcával állítson elő nagy mennyiségű (10,000+) Futurocoin címet. Másolja át a vesszővel elválasztott adatokat (CSV) egy biztonságos szöveges állományba a számítógépére. A szöveges állományról készítsen mentést, és azt őrizze biztonságos környezetben.",
			"bulklabela2li2": "Importálja be a Futurocoin címeket a web szerverén futó adatbázisba. (A pénztárca privát kulcsait ne importája be, mert ezzel azt kockáztatja, hogy a hackerek ellopják a pénzét. Csak a Futurocoin címeket importálja be, úgy, ahogy azt a ügyfelei látják majd.)",
			"bulklabela2li3": "Web helyének vásárlókosarába vegye fel a Futurocoin történő fizetés lehetőségét. Ha egy ügyfél Futurocoin kíván fizetni, akkor \"fizetési címként\" az adatbázis egyik címét jelenítse meg, és a megrendelés mellett ezt a címet tárolja.",
			"bulklabela2li4": "Most szüksége van arra, hogy értesítést kapjon, ha megérkezett a pénz. A Google-on keressen rá a \"Futurocoin payment notification\" kifejezésre, és iratkozzon föl valamelyik szolgáltatóhoz, amely értesítést küld, ha bizonyos címekre Futurocoin küldtek. Számos ilyen szolgáltató van, amelyik Web szervíz, API, SMS, Email, stb. segítségével értesítést küld. Amint megérkezik az értesítés, amelynek automatikus figyelése beprogramozható, máris megkezdheti az ügyfél megrendelésének feldolgozását. Ha manuálisan szeretné ellenőrizni, hogy érkezett-e valamelyik címre pénz, akkor a Block Explorer-t használhatja. A CÍM helyébe írja azt a Futurocoin címet, amelyet ellenőrizni szeretne. A tranzakció megerősítéséhez 10 és 60 perc közötti időre van szükség.<br />http://explorer.futurocoin.org/address/CÍM<br /><br />A megerősítetlen tranzakciókat itt lehet megnézni: https://bchain.info/Futurocoin/ http://insight.futurocoin.siampm.com/ <br />A tranzakció 30 másodpercen belül megjelenik.",
			"bulklabela2li5": "Az Ön Futurocoin biztonságos módon gyűlnek a blokkláncon. Használja az 1. lépés során előállított eredeti pénztárcát, ha szeretné őket elkölteni.",

			// brain wallet html
			"brainlabelenterpassphrase": "Adja be a jelmondatot: ",
			"brainlabelshow": "Jelmondat megjelenítése?",
			"brainprint": "Nyomtatás",
			"brainlabelconfirm": "Erősítse meg a jelmondatot: ",
			"brainview": "Megjelenítés",
			"brainalgorithm": "Algoritmus: SHA256(jelmondat)",
			"brainlabelbitcoinaddress": "Futurocoin cím:",
			"brainlabelprivatekey": "Privát kulcs (WIF, tárca import formátumban):",

			// vanity wallet html
			"vanitylabelstep1": "1. lépés - az \"1. lépéshez tartozó Kulcspár\" előállítása",
			"vanitynewkeypair": "Előállítás",
			"vanitylabelstep1publickey": "1. lépés, Publikus Kulcs:",
			"vanitylabelstep1pubnotes": "Másolja a fentiekeket a Vanity Pool webhely Your-Part-Public-Key ('az ön publikus kulcsa') mezőjébe.",
			"vanitylabelstep1privatekey": "1. lépés, Privát Kulcs:",
			"vanitylabelstep1privnotes": "Másolás és beillesztés segítségével másolja a fenti Privát Kulcsot egy szöveges állományba. Ideális esetben a szöveges állomány egy titkosított meghajtón van. Ha a Vanity Pool megtalálta az Ön által megadott előtaghoz tartozó Privát Kulcsot, akkor lesz szüksége erre az állományra, hogy elő tudja állítani a Privát Kulcsot.",
			"vanitylabelstep2calculateyourvanitywallet": "2. lépés - A Kérkedő Pénztárca Privát Kulcsának kiszámítása",
			"vanitylabelenteryourpart": "Adja meg az Önhöz tartozó Privát Kulcsot (amelyet az 1. lépésben állított elő és mentett el):",
			"vanitylabelenteryourpoolpart": "Adja meg a Pool-hoz tartozó Privát Kulcsot (amely  a Vanity Pool-ból származik):",
			"vanitylabelnote1": "[MEGJEGYZÉS: ebbe a szövegmezőbe publikus kulcs vagy privát kulcs egyaránt írható]",
			"vanitylabelnote2": "[MEGJEGYZÉS: ebbe a szövegmezőbe publikus kulcs vagy privát kulcs egyaránt írható]",
			"vanitylabelradioadd": "Összeadás",
			"vanitylabelradiomultiply": "Szorzás",
			"vanitycalc": "A Kérkedő pénztárca kiszámítása",
			"vanitylabelbitcoinaddress": "Kérkedő Futurocoin cím:",
			"vanitylabelnotesbitcoinaddress": "Fönt látható az ön új címe, mely magában foglalja a kívánt előtagot.",
			"vanitylabelpublickeyhex": "Kérkedő Publikus Kulcs (HEX):",
			"vanitylabelnotespublickeyhex": "A Publikus Kulcs hexadecimális alakban. ",
			"vanitylabelprivatekey": "Kérkedő Privát Kulcs (WIF):",
			"vanitylabelnotesprivatekey": "Ez az Ön Privát Kulcsa, mellyel elérheti a pénzét. ",

			// split wallet html
			"splitlabelthreshold": "A visszaállításhoz szükséges részek minimális száma",
			"splitlabelshares": "Részek száma",
			"splitview": "Előállítás",
			"combinelabelentershares": "Adja be a meglévő részeket (Enter-rel, szóközzel vagy más whitespace karakterrel elválasztva)",
			"combineview": "A részek összekombinálása",
			"combinelabelprivatekey": "Visszaállított Privát Kulcs",

			// detail wallet html
			"detaillabelenterprivatekey": "Adja meg a Privát Kulcsot",
			"detailkeyformats": "Kulcs formátumok: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
			"detailview": "Részletek megjelenítése",
			"detailprint": "Nyomtatás",
			"detaillabelnote1": "A Futurocoin Privát Kulcs egy titkos szám, melyet csak Ön ismer. Számos különböző formátumban kódolható. Az alábbiakban megjelenítettük a a Privát Kulcshoz tartozó Futurocoin Címet és Publikus kulcsot, valamint a Privát Kulcsot a legnépszerűbb kódolási formátumokban (WIF, WIFC, HEX, B64).",
			"detaillabelnote2": "A Futurocoin v0.6+ a publikus kulcsokat tömörített formátumban tárolja. A kliens az importprivkey/dumpprivkey parancsokkal a privát kulcsok importálását és exportálását is támogatja. Az exportált privát kulcsok formátumát csupán a Futurocoin pénztárca verziószáma határozza meg.",
			"detaillabelbitcoinaddress": "Futurocoin cím:",
			"detaillabelbitcoinaddresscomp": "Tömörített Futurocoin cím:",
			"detaillabelpublickey": "Publikus Kulcs (130 karakter [0-9A-F]):",
			"detaillabelpublickeycomp": "Tömörített Publikus Kulcs (66 karakter [0-9A-F]):",
			"detaillabelprivwif": "WIF Privát Kulcs <br />51 db base58 karakter, melynek kezdete",
			"detaillabelprivwifcomp": "Tömörített WIF Privát Kulcs <br />52 db base58 karakter, melynek kezdete",
			"detailcompwifprefix": "'K' vagy 'L'",
			"detaillabelprivhex": "Hexadecimális formátumú Privát Kulcs (64 karakter [0-9A-F]):",
			"detaillabelprivb64": "Base64 formátumú Privát Kulcs (44 karakter):",
			"detaillabelprivmini": "Mini formátumú Privát Kulcs (22, 26 vagy 30 karakter, amely egy 'S'-sel kezdődik):",
			"detaillabelpassphrase": "BIP38 jelmondat",
			"detailbip38decryptbutton": "BIP38 dekódolás",
			"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
			"detaillabelq1": "Hogyan lehet dobókockával pénztárcát készíteni? Mit jelent a B6 formátum?",
			"detaila1": "Egy Futurocoin pénztárca előállításakor nagyon fontos, hogy a felhasznált véletlen számok valóban véletlenek legyenek. A fizikai véletlen jobb, mint a számítógéppel előállított pszeudo-véletlen. Fizikai véletlen a legegyszerűbben egy dobókockával állítható elő. Ha szeretne egy Futurocoin privát címet előállítani, akkor csupán egy dobókockára van szüksége, mellyel 99-szer kell dobni. Jegyezze fel minden egyes dobása eredményét. Az eredmények feljegyzésekor a következő szabályokat kövesse: 1->1, 2->2, 3->3, 4->4, 5->5, 6->0. Ha így tesz, akkor a privát kulcshoz tartozó véletlen számot B6 formátumban, vagyis 6-os számrendszerben rögzíti. Írja be ezt a 99 karakterből álló 6-os számrendszerbeli privát kulcsot a fenti szövegmezőbe, majd nyomja meg a 'Részletek megjelenítése' gombot. Ekkor megjelenik az a Futurocoin cím, amely ehhez a privát kulcshoz tartozik. Érdemes felírni a WIF formátumú privát kulcsot is, mivel ezt szélesebb körben használják."
		},

		"jp": {	
			// javascript alerts or messages
			"testneteditionactivated": "テストネット版が有効になりました。",
			"paperlabelbitcoinaddress": "Futurocoinアドレス",
			"paperlabelprivatekey": "プライベートキー(WIF形式)",
			"paperlabelencryptedkey": "暗号化されたプライベートキー(パスワード必須)",
			"bulkgeneratingaddresses": "アドレス生成中...",
			"brainalertpassphrasetooshort": "パスワードが短すぎます \n\n",
			"brainalertpassphrasewarning": "注意：強いパスワードを選ばないとプライベートキーを安易に当てられてFuturocoinを盗まれてしまいます。<br>なお、<b>UTF-8の文字も使えるため、キーボードが半角か全角か今一度ご確認下さい。</b>",
			"brainalertpassphrasedoesnotmatch": "パスワードが一致しません",
			"detailalertnotvalidprivatekey": "入力された文字列は有効なプライベートキーではありません。",
			"detailconfirmsha256": "入力された文字列は有効なプライベートキーではありません。\n\n代わりにこの文字列をパスワードとして、SHA256ハッシュを用いプライベートキーを生成しますか？\n\n注意: 強いパスワードを選ばないとプライベートキーを安易に当てられてFuturocoinを盗まれてしまいます。",
			"bip38alertincorrectpassphrase": "暗号化されたプライベートキーに一致しないパスワードです。",
			"bip38alertpassphraserequired": "BIP38キーを生成するにはパスワードをかける必要があります。",
			"vanityinvalidinputcouldnotcombinekeys": "不正入力です。キーを結合できませんでした。",
			"vanityalertinvalidinputpublickeysmatch": "不正入力です。両方のパブリックキーが同じです。2つの異なるキーをお使い下さい。",
			"vanityalertinvalidinputcannotmultiple": "不正入力です。2つのパブリックキーを掛け合わせることはできません。「足し算」を選択し、2つのパブリックキーを足し合わせてアドレスを生成して下さい。",
			"vanityprivatekeyonlyavailable": "2つのプライベートキーを掛け合わせた時だけ有効です。",
			"vanityalertinvalidinputprivatekeysmatch": "不正入力両方のプライベートキーがチケットに一致します。2つの異なるキーをお使い下さい。",

			// header and menu html
			"tagline": "クライエント側Futurocoinアドレス生成(JavaScript使用)",
			"generatelabelbitcoinaddress": "Futurocoinアドレスを生成中...",
			"generatelabelmovemouse": "マウスを動かして、ランダム要素を追加してください。",
			"generatelabelkeypress": "もしくはこちらの入力欄にランダムな文字を打って下さい。",
			"singlewallet": "シングルウォレット",
			"paperwallet": "ペーパーウォレット",
			"bulkwallet": "大量ウォレット",
			"brainwallet": "暗記ウォレット",
			"vanitywallet": "カスタムウォレット",
			"splitwallet": "Split Wallet", //TODO: please translate
			"detailwallet": "ウォレットの詳細",

			// footer html
			"footerlabeldonations": "プロジェクト寄付先",
			"footerlabeltranslatedby": "日本語訳寄付先 1o3EBhxPhGn8cGCL6Wzi5F5kTPuBofdMf",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "バージョン履歴",
			"footerlabelgithub": "GitHubリポジトリ",
			"footerlabelgithubzip": "zip",
			"footerlabelsig": "sig",
			"footerlabelcopyright1": "Copyright bitaddress.org, The Futurocoin Developers.",
			"footerlabelcopyright2": "JavaScriptのコピーライト情報はソースに含まれています。",
			"footerlabelnowarranty": "保障はありません。",

			// status html
			"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
			"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
			"statusokcryptogood": "OK", //TODO: please translate
			"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
			"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
			"statusokcryptobad": "OK", //TODO: please translate
			"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
			"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
			"statusokunittestsgood": "OK", //TODO: please translate
			"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
			"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
			"statusokunittestsbad": "OK", //TODO: please translate
			"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
			"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
			"statusokprotocolgood": "OK", //TODO: please translate
			"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
			"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
			"statuslabelprotocolbad2": "download", //TODO: please translate
			"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
			"statusokprotocolbad": "OK", //TODO: please translate
			"statuslabelkeypool1": "This is a log of all the Futurocoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
			"statuskeypoolrefresh": "Refresh", //TODO: please translate
			"statusokkeypool": "OK", //TODO: please translate

			// single wallet html
			"newaddress": "新アドレス生成",
			"singleprint": "印刷",
			"singlelabelbitcoinaddress": "Futurocoinアドレス",
			"singlelabelprivatekey": "プライベートキー (WIF形式)",
			"singletip1": "<b>Futurocoinウォレットとは</b> Futurocoinのアドレスと対応するプライベートキーを組み合わせたものです。新しいアドレスがブラウザー上で生成され、上記に表示されています。",
			"singletip2": "<b>このウォレットを守るためには</b> FuturocoinアドレスとFuturocoinプライベートキーを印刷するなどの手段で記録しなければいけません。プライベートキーが無いとペアになっているアドレスに送られたFuturocoinが使えないので、人に晒されないような方法でプライベートキーのコピーを取り、大事に保管して下さい。このサイトはこのプライベートキーの保存はしません。PGPをご存知の方は、このサイトを1つのhtmlファイルで落とすことができるので、このサイトのhtmlファイルのSHA256ハッシュとサイトのフッターにデジタル署名されたメッセージに入ったハッシュを比べて不正にいじられていないかをお確かめいただけます。このページを閉じたり、離れたり、”新アドレス生成”を押すと現在表示されているプライベートキーは消え、新規アドレスが生成されるので、ご使用の場合は必ず何らかの手段で記録しておいて下さい。プライベートキーは秘密にしてください。共有されますと、対応するFuturocoinアドレスに存在するコインが全て共有者間で利用可能となります。ウォレット情報を印刷したら、濡れないようにジップロックに入れましょう。紙幣と同様に扱うよう心がけてください。",
			"singletip3": "<b>このウォレットにコインを追加 : </b> 他の人から自分のFuturocoinアドレスに送ってもらう。",
			"singletip4": "<b>残高照会は</b> explorer.futurocoin.orgに行き、Futurocoinアドレスを入力してお調べ下さい。",
			"singletip5": "<b>Futurocoinを使おう。</b> 送金するには、このページで生成したプライベートキーをパソコン・スマホ端末にあるウォレットアプリなどに取り込んで使えます。しかし、その時点でそのアドレスが取り込んだウォレットの他のアドレスと融合してしまい、この一つのアドレスのバックアップだけじゃビットコインを保管することはできなくなります。取り込み先のウォレットを強いパスワードで暗号化し、バックアップして、安全に扱って下さい。ビットコインの考案者「サトシさん」曰く、「一度作ったウォレットを、空にしたとしても、削除しない方が良い。」(メールアドレスと同じく、いつ昔の友達や親戚から古いアドレス宛にビットコインを送ってくるかわかりませんから。)",

			// paper wallet html
			"paperlabelhideart": "デザイン非表示",
			"paperlabeladdressesperpage": "1ページごとのアドレス数",
			"paperlabeladdressestogenerate": "生成するアドレス数",
			"papergenerate": "生成",
			"paperprint": "印刷",
			"paperlabelBIPpassphrase": "パスワード",
			"paperlabelencrypt": "BIP38で暗号化？",

			// bulk wallet html
			"bulklabelstartindex": "開始番号",
			"bulklabelrowstogenerate": "生成する行数",
			"bulklabelcompressed": "アドレスを短縮？",
			"bulkgenerate": "生成",
			"bulkprint": "印刷",
			"bulklabelcsv": "カンマ区切り値",
			"bulklabelformat": "番号、アドレス、プライベートキー(WIF形式)",
			"bulklabelq1": "ウェブサイトでFuturocoinを受け付ける時、何故大量のアドレスを生成しておいた方がいいのか？",
			"bulka1": "以前はFuturocoinをサイトで受け付けたかったら、「futurocoind」というFuturocoinのシステムサービスをサーバーにアップロードし、サーバー上で実行しなければいけませんでした。しかし、このやり方だとサーバーがハッキングされてしまった場合、プライベートキーも全て持って行かれてしまいます。大量に生成しておいて、Futurocoinアドレスだけをサーバーにアップしておけば、プライベートキーを安全な場所に保管できます。",
			"bulklabelq2": "どうやって大量生成を使ってサイトでFuturocoinを受け付けられるようにできるのか？",
			"bulklabela2li1": "大量生成タブで大量のFuturocoinを生成(10,000+でも可)。出てくるCSVテキストをコピーして、安全なテキストエディターで貼り付けて、安全な場所に保存しておいて下さい。一つバックアップを取り、別の場所で保管しておく(強いパスワードのかかったzipなどで)",
			"bulklabela2li2": "Futurocoinアドレスをウェブサーバーにアップロード。プライベートキーはアップロードしないで下さい。ユーザーに見せたい宛先用のアドレスのみをアップロードして下さい。",
			"bulklabela2li3": "サイトのショッピングカート機能にFuturocoinのリンクを追加して下さい。クリックされた時、お値段と先ほどアップしたFuturocoinアドレスが順番に出てくるようにしておいて下さい(1取引1アドレス)。注文の情報と一緒に、このアドレスも一緒に保存して、後で紐付けられるようにしておいて下さい。",
			"bulklabela2li4": "後は支払いの通知を受けないと注文を通すか否か分かりません。グーグルで「Futurocoin payment notification」と検索したら、SMS、メール、APIなどでFuturocoinの支払いがあった際教えてくれます。これをコードの中に組み込んで、支払いがあったら注文を通すようにもできます。手動で送金があったかを見る場合、http://explorer.futurocoin.org に行き、宛先のアドレスを入力すれば、取引履歴から送金の事実を確認できます。大体送金の30秒後に表示され、10分～1時間の間に「確認」されます。",
			"bulklabela2li5": "送られたFuturocoinはブロックチェーンにて安全に保管されます。送金するには1番で作成したウォレットを何らかのFuturocoinソフトに取り込んでご利用下さい。",

			// brain wallet html
			"brainlabelenterpassphrase": "パスワード",
			"brainlabelshow": "表示",
			"brainprint": "印刷",
			"brainlabelconfirm": "パスワードをもう一度",
			"brainview": "アドレスを見せる",
			"brainalgorithm": "アルゴリズム SHA256 (パスワード)",
			"brainlabelbitcoinaddress": "Futurocoinアドレス",
			"brainlabelprivatekey": "プライベートキー(WIF形式)",

			// vanity wallet html
			"vanitylabelstep1": "ステップ１「ステップ１キーペア」を生成",
			"vanitynewkeypair": "生成",
			"vanitylabelstep1publickey": "ステップ１パブリックキー",
			"vanitylabelstep1pubnotes": "上記のものをカスタムアドレス生成業者の注文フォームに貼り付けて下さい。",
			"vanitylabelstep1privatekey": "ステップ１プライベートキー",
			"vanitylabelstep1privnotes": "上記のものを安全なテキストファイルに貼り付け、大事に保管しておいて下さい。パスワードで暗号化することをオススメします。カスタムアドレス生成業者からアドレスプレフィックスをもらった時にこれが必要となります。",
			"vanitylabelstep2calculateyourvanitywallet": "ステップ2カスタムアドレスを計算",
			"vanitylabelenteryourpart": "ステップ１で保存したプライベートキーを入力",
			"vanitylabelenteryourpoolpart": "カスタムアドレス生成業者からもらったプライベートキーを入力",
			"vanitylabelnote1": "[メモ： この欄はパブリックキーでもプライベートキーでも可能です。]",
			"vanitylabelnote2": "[メモ： この欄はパブリックキーでもプライベートキーでも可能です。]",
			"vanitylabelradioadd": "足し算",
			"vanitylabelradiomultiply": "掛け算",
			"vanitycalc": "カスタムアドレスを計算",
			"vanitylabelbitcoinaddress": "カスタムFuturocoinアドレス",
			"vanitylabelnotesbitcoinaddress": "ご希望された頭文字を持ったアドレスになっています。",
			"vanitylabelpublickeyhex": "カスタムパブリックキー(HEX)",
			"vanitylabelnotespublickeyhex": "パブリックキーを16進で表したものです。",
			"vanitylabelprivatekey": "カスタムプライベートキー(WIF形式)",
			"vanitylabelnotesprivatekey": "上記のアドレスに送られたFuturocoinを使うためのプライベートキーです。",

			// split wallet html
			"splitwallet": "分散ウォレット",
			"splitlabelthreshold": "復元に必要なシェア数",
			"splitlabelshares": "全シェア数",
			"splitview": "生成",
			"combinelabelentershares": "お持ちのシェアを入力 (空白区切り)",
			"combineview": "シェア合わせて復元",
			"combinelabelprivatekey": "復元された秘密鍵",

			// detail wallet html
			"detaillabelenterprivatekey": "プライベートキーを入力",
			"detailkeyformats": "受け付けるキーの形式 WIF, WIFC, HEX, B64, B6, MINI, BIP38",
			"detailview": "詳細を表示",
			"detailprint": "印刷",
			"detaillabelnote1": "Futurocoinプライベートキーはあなたにしか分からない秘密の鍵。色々な形式で表示することができ、下記で表示しているのはFuturocoinアドレス、パブリックキー、プライベートキー、そして複数の形式でプライベートキーを表示します。(WIF, WIFC, HEX, B64)",
			"detaillabelnote2": "Futurocoin v0.6より圧縮したパブリックキーを保存している。なお、importprivkey / dumpprivkeyのコマンドを用いてプライベートキーのインポートとエクスポートもできる。エクスポートされるプライベートキーの形式はウォレットの作成時期とバージョンによって異なってくる。",
			"detaillabelbitcoinaddress": "Futurocoinアドレス",
			"detaillabelbitcoinaddresscomp": "Futurocoinアドレス(圧縮)",
			"detaillabelpublickey": "パブリックキー (130文字[0-9A-F])",
			"detaillabelpublickeycomp": "パブリックキー (圧縮、66文字[0-9A-F])",
			"detaillabelprivwif": "プライベートキー (WIF)<br>(base58コード51文字) 頭文字が",
			"detaillabelprivwifcomp": "プライベートキー (WIF)<br>(圧縮、base58コード52文字) 頭文字が",
			"detailwifprefix": "'5'",
			"detailcompwifprefix": "'K' か 'L'",
			"detaillabelprivhex": "プライベートキー(16進) (64文字[0-9A-F])",
			"detaillabelprivb64": "プライベートキー(base64コード) (44文字)",
			"detaillabelpassphrase": "BIP38パスワード",
			"detailbip38decryptbutton": "BIP38暗号を解除",
			"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
			"detaillabelq1": "サイコロを使ってどうやってアドレス作るのか？「B6」とは何か？",
			"detaila1": "Futurocoinのアドレスの生成には一番大事なことが、アドレス生成に使われている乱数が本当にランダムなのかというところです。自然界に起きる物理的なランダムさはパソコンが生成する(似非)ランダムさよりは優れている。物理的なランダムさを作る一番簡単な方法はサイコロを振ることです。Futurocoinのプライベートキーを生成するには、6面のサイコロを99回振って、毎回結果を記載していきます。規則として1⇒1, 2⇒2, 3⇒3, 4⇒4, 5⇒5, 6⇒0というように、6が出る度に「0」と記載して下さい。99桁の6進数字列ができたら、上記の入力欄に入れて、「詳細を表示」ボタンを押して下さい。これでWIF形式のプライベートキーやそれと紐づくFuturocoinアドレスが表示されます。これらを記載し、通常生成されたFuturocoinアドレスと同じように保管しておいて下さい。",
		},

		"pt-br": {
			// javascript alerts or messages
			"testneteditionactivated": "EDIÇÃO DO TESTNET ATIVADA",
			"paperlabelbitcoinaddress": "Endereço Futurocoin:",
			"paperlabelprivatekey": "Chave privada (Wallet Import Format):",
			"paperlabelencryptedkey": "Chave privada criptografada (Senha necessária)",
			"bulkgeneratingaddresses": "Generando endereços... ",
			"brainalertpassphrasetooshort": "A senha introduzida é pequena demais.\n\n",
			"brainalertpassphrasewarning": "Aviso: É importante que escolha uma senha forte, para evitar ataques de força bruta que tentem adivinhar sua senha e roubar seus Futurocoin.",
			"brainalertpassphrasedoesnotmatch": "As senhas digitadas não são iguais.",
			"detailalertnotvalidprivatekey": "O texto que você digitou não é uma chave privada válida",
			"detailconfirmsha256": "O texto que você digitou não é uma chave privada válida\n\nQuer usar esse texto como se fosse uma senha e gerar uma chave privada usando um hash SHA256 dessa senha?\n\nAviso: É importante escolher uma senha forte para evitar ataques de força bruta que tentem adivinhá-la e roubar seus Futurocoin.",
			"bip38alertincorrectpassphrase": "Senha incorreta para essa chave privada criptografada.",
			"bip38alertpassphraserequired": "Senha necessária para a chave BIP38", 
			"vanityinvalidinputcouldnotcombinekeys": "Entrada inválida. Não foi possível combinar as chaves.",
			"vanityalertinvalidinputpublickeysmatch": "Entrada inválida. As chaves públicas de ambas entradas são iguais. Você deve inserir duas chaves diferentes.",
			"vanityalertinvalidinputcannotmultiple": "Entrada inválida. Não é possível multiplicar duas chaves públicas. Clique em 'Somar' para somar duas chaves públicas para adquirir um endereço Futurocoin.",
			"vanityprivatekeyonlyavailable": "Disponível apenas quando se combinam duas chaves privadas",
			"vanityalertinvalidinputprivatekeysmatch": "Entrada inválida. As chaves privadas de ambas as entradas são iguais. Você deve inserir duas chaves diferentes.",

			// header and menu html
			"tagline": "Gerador local de carteiras Futurocoin usando Javascript de código aberto",
			"generatelabelbitcoinaddress": "Gerando endereço Futurocoin...",
			"generatelabelmovemouse": "Movimente um pouco o ponteiro do mouse para criar entropia...",
			"generatelabelkeypress": "OU digite alguns caracteres aleatórios nessa caixa de texto",
			"singlewallet": "Carteira única",
			"paperwallet": "Carteira em papel",
			"bulkwallet": "Múltiplos endereços",
			"brainwallet": "Carteira mental",
			"vanitywallet": "Carteira personalizada",
			"splitwallet": "Split Wallet", //TODO: please translate
			"detailwallet": "Detalhes da carteira",

			// footer html
			"footerlabeldonations": "Doações:",
			"footerlabeltranslatedby": "Tradução: 1LwaSNTZ7xAagYKyE68gT5iqX1DmPnmJmy",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "Histórico de versões",
			"footerlabelgithub": "Repositório GitHub",
			"footerlabelgithubzip": "zip",
			"footerlabelsig": "sig",
			"footerlabelcopyright1": "Copyright bitaddress.org, The Futurocoin Developers.",
			"footerlabelcopyright2": "Copyright do código JavaScript: no código-fonte.",
			"footerlabelnowarranty": "Sem garantia.",

			// status html
			"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
			"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
			"statusokcryptogood": "OK", //TODO: please translate
			"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
			"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
			"statusokcryptobad": "OK", //TODO: please translate
			"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
			"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
			"statusokunittestsgood": "OK", //TODO: please translate
			"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
			"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
			"statusokunittestsbad": "OK", //TODO: please translate
			"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
			"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
			"statusokprotocolgood": "OK", //TODO: please translate
			"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
			"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
			"statuslabelprotocolbad2": "download", //TODO: please translate
			"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
			"statusokprotocolbad": "OK", //TODO: please translate
			"statuslabelkeypool1": "This is a log of all the Futurocoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
			"statuskeypoolrefresh": "Refresh", //TODO: please translate
			"statusokkeypool": "OK", //TODO: please translate

			// single wallet html
			"newaddress": "Gerar endereço",
			"singleprint": "Imprimir",
			"singlelabelbitcoinaddress": "Endereço Futurocoin",
			"singlelabelprivatekey": "Chave privada (Wallet Import Format):",
			"singletip1": "<b>Uma carteira Futurocoin</b> é tão simples quanto um simples pareamento de um endereço Futurocoin com a sua chave privada Futurocoin correspondente. Essa carteira foi gerada para você em seu navegador web e está sendo exibida acima.",
			"singletip2": "<b>Para proteger essa carteira</b> você deve imprimir ou anotar/salvar o endereço Futurocoin e a chave privada. É importante que você faça uma cópia de segurança da sua chave privada e armazene-a em um local seguro. Esse site não toma conhecimento da sua chave privada. Se você for familiar com PGP, você pode baixar essa pagina HTML tudo-em-um e verificar se você tem uma versão autêntica do autor deste site ao fazer a correspondência do hash SHA256 deste HTML com o hash SHA256 disponível na versão assinada do documento linkado no rodapé deste site. Se você sair/atualizar essa página ou apertar o botão Gerar Novo Endereço, então uma nova chave privada será gerada e a chave exibida anteriormente não será recuperável.	A sua chave privada Futurocoin deve ser mantida como um segredo. Qualquer pessoa que tiver acesso a ela poderá gastar todos os seus Futurocoin associados com aquele endereço. Se você imprimir sua carteira, armazene-a em um saco plástico selado para mantê-la longe da água. Trate uma carteira em papel como se fosse dinheiro.",
			"singletip3": "<b>Adicione fundos</b> para essa carteira ao indicar para outras pessoas enviarem Futurocoin para o seu endereço Futurocoin.",
			"singletip4": "<b>Verifique seu saldo</b> visitando os sites explorer.futurocoin.org e digitando o seu endereço Futurocoin.",
			"singletip5": "<b>Gaste seus Futurocoin</b> importar sua chave privada para a carteira do aplicativo. Tenha em mjente que quando você importa uma chave única para um cliente Futurocoin p2p e gasta seus fundos, sua chave será agrupada com outras chavfes privadas no aplicativo de carteira. Quando você realizar uma transação o seu troco será enviado para outro endereço Futurocoin dentro do seu aplicativo de carteira. Você deve então fazer backup da sua carteira em seu aplicativo e mantê-la em segurança, visto que seus Futurocoin remanescentes agora serão armazenados nela. Um conselho do Satoshi Nakamoto é de que uma carteira nunca deve ser apagada.",
			"singleshare": "COMPARTILHE", //TODO: please translate
			"singlesecret": "SECRETA", //TODO: please translate

			// paper wallet html
			"paperlabelhideart": "Ocultar figura",
			"paperlabeladdressesperpage": "Endereços por página:",
			"paperlabeladdressestogenerate": "Total de endereços:",
			"papergenerate": "Gerar",
			"paperprint": "Imprimir",
			"paperlabelBIPpassphrase": "Senha:",
			"paperlabelencrypt": "Criptografar em BIP38?",

			// bulk wallet html
			"bulklabelstartindex": "Começar em:",
			"bulklabelrowstogenerate": "Linhas a gerar:",
			"bulklabelcompressed": "Endereços comprimidos?",
			"bulkgenerate": "Gerar",
			"bulkprint": "Imprimir",
			"bulklabelcsv": "Valores separados por vírgula:",
			"bulklabelformat": "Índice,Dirección,Clave privada (formato para importar)",
			"bulklabelq1": "¿Por qué debo usar \"Direcciones en masa\" para aceptar Futurocoin en mi web?",
			"bulka1": "La forma tradicional de aceptar Futurocoin en tu web requiere tener instalado el cliente oficial de Futurocoin (\"futurocoind\"). Sin embargo muchos servicios de hosting no permiten instalar dicho cliente. Además, ejecutar el cliente en tu servidor supone que las claves privadas están también en el servidor y podrían ser comprometidas en caso de intrusión. Al usar este mecanismo, puedes subir al servidor sólo las dirección de Futurocoin y no las claves privadas. De esta forma no te tienes que preocupar de que alguien robe la cartera si se cuelan en el servidor.",
			"bulklabelq2": "¿Cómo uso \"Direcciones en masa\" para aceptar Futurocoin en mi web?",
			"bulklabela2li1": "Usa el tab \"Direcciones en masa\" para generar por anticipado muchas direcciones (más de 10000). Copia y pega la lista de valores separados por comas (CSV) a un archivo de texto seguro (cifrado) en tu ordenador. Guarda una copia de seguridad en algún lugar seguro.",
			"bulklabela2li2": "Importa las direcciones en la base de datos de tu servidor. No subas la cartera ni las claves públicas, o de lo contrario te lo pueden robar. Sube sólo las direcciones, ya que es lo que se va a mostrar a los clientes.",
			"bulklabela2li3": "Ofrece una alternativa en el carro de la compra de tu web para que los clientes paguen con Futurocoin. Cuando el cliente elija pagar con Futurocoin, les muestras una de las direcciones de la base de datos como su \"dirección de pago\" y guardas esto junto con el pedido.",
			"bulklabela2li4": "Ahora te hace falta recibir una notificación del pago. Busca en google \"notificación de pagos Futurocoin\" (o \"Futurocoin payment notification\" en inglés) y suscríbete a alguno de los servicios que aparezcan. Hay varios de ellos, que te pueden notificar vía Web services, API, SMS, email, etc. Una vez te llegue la notificación, lo cual puede ser automatizado, entonces ya puedes procesar el pedido. Para comprobar a mano si has recibido un pago, puedes usar Block Explorer: reemplaza DIRECCION a continuación por la dirección que estés comprobando. La transacción puede tardar entre 10 minutos y una hora en ser confirmada. <br />http://explorer.futurocoin.org/address/DIRECCION<br /><br />Puedes ver las transacciones sin confirmar en: https://bchain.info/Futurocoin/ http://insight.futurocoin.siampm.com/ <br />Las transacciones sin confirmar suelen aparecer ahí en unos 30 segundos.",
			"bulklabela2li5": "Las Futurocoin que recibas se almacenarán de forma segura en la cadena de bloques. Usa la cartera original que generaste en el paso 1 para usarlas.",

			// brain wallet html
			"brainlabelenterpassphrase": "Senha:",
			"brainlabelshow": "Mostrar",
			"brainprint": "Imprimir",
			"brainlabelconfirm": "Confirmar senha:",
			"brainview": "Ver",
			"brainalgorithm": "Algoritmo: SHA256(senha)",
			"brainlabelbitcoinaddress": "Enderçeo Futurocoin:",
			"brainlabelprivatekey": "Chave privada (Wallet Import Format):",

			// vanity wallet html
			"vanitylabelstep1": "Passo 1 - Gere seu par de chaves",
			"vanitynewkeypair": "Gerar",
			"vanitylabelstep1publickey": "Chave pública:",
			"vanitylabelstep1pubnotes": "Copie e cole a linha acima no campo \"Your-Part-Public-Key\" presente no site do Vanity Pool.",
			"vanitylabelstep1privatekey": "Chave privada:",
			"vanitylabelstep1privnotes": "Copie e cole a chave privada acima em um arquivo de texto. Idealmente salve em um disco criptografado. Ela será necessária para recuperar a chave privada assim que a Vanity Pool encontrar o seu prefixo.",
			"vanitylabelstep2calculateyourvanitywallet": "Passo 2 - Calcule sua carteira Vanity",
			"vanitylabelenteryourpart": "Introduza a chave privada gerada no passo 1 acima, e que você já tem guardada:",
			"vanitylabelenteryourpoolpart": "Introduza a chave privada obtida no Vanity Pool:",
			"vanitylabelnote1": "[NOTA: essa caixa de texto pode aceitar uma chave pública ou privada]",
			"vanitylabelnote2": "[NOTA: essa caixa de texto pode aceitar uma chave pública ou privada]",
			"vanitylabelradioadd": "Adicionar",
			"vanitylabelradiomultiply": "Multiplicar",
			"vanitycalc": "Calcular carteira personalizada",
			"vanitylabelbitcoinaddress": "Endereço Futurocoin Vanity:",
			"vanitylabelnotesbitcoinaddress": "Esse é o seu novo endereço, que deveria conter o seu prefixo exigido.",
			"vanitylabelpublickeyhex": "Chave pública Vanity (HEX):",
			"vanitylabelnotespublickeyhex": "Essa é a sua chave pública em formato hexadecimal.",
			"vanitylabelprivatekey": "Chave privada Vanity (WIF):",
			"vanitylabelnotesprivatekey": "Essa é a chave privada para introduzir em sua carteira.",

			// detail wallet html
			"detaillabelenterprivatekey": "Insira sua chave privada",
			"detailkeyformats": "Formatos de chave: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
			"detailview": "Ver detalhes",
			"detailprint": "Imprimir",
			"detaillabelnote1": "Sua chave privada é um número secreto, único, que somente você tem acesso. Ela pode ser expressa em vários formatos. Abaixo mostramos o endereço e a chave pública que correspondem à sua chave privada, assim como a chave privada nos formatos mais conhecidos (WIF, hex, base64 y mini).",
			"detaillabelnote2": "As versões do Futurocoin acima da v0.6+ armazenam as chaves públicas comprimidas. O cliente também suporta a importação/exportação de chaves privadas usando importprivkey/dumpprivkey. O formato das chaves privadas exportadas depende se o endereço foi gerado em uma carteira antiga ou nova.",
			"detaillabelbitcoinaddress": "Endereço Futurocoin:",
			"detaillabelbitcoinaddresscomp": "Endereço Futurocoin (comprimido):",
			"detaillabelpublickey": "Chave pública (130 caracteres [0-9A-F]):",
			"detaillabelpublickeycomp": "Chave pública (comprimida, 66 caracteres [0-9A-F]):",
			"detaillabelprivwif": "Chave privada para importação (51 caracteres em base58, inicia com um",
			"detaillabelprivwifcomp": "Chave privada para importação  (comprimida, 52 caracteres em base58, inicia com",
			"detailcompwifprefix": "'K' o 'L'",
			"detaillabelprivhex": "Chave privada em formato hexadecimal (64 caracteres [0-9A-F]):",
			"detaillabelprivb64": "Chave privada em base64 (44 caracteres):",
			"detaillabelprivmini": "Chave privada en formato mini (22, 26 ou 30 caracteres, inicia com 'S'):",
			"detaillabelpassphrase": "Senha BIP38",
			"detailbip38decryptbutton": "Desencriptar BIP38",
			"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
			"detaillabelq1": "Como eu faço uma carteira usando um dado? O que é B6?",
			"detaila1": "Uma parte importante ao criar um carteira Futurocoin é se assegurar que os números aleatórios usados para criar a carteira sejam realmente aleatórios. A aleatoriedade física é melhor do que a pseudo-aleatoriedade gerada por computador. A maneira mais fácil de gerar aleatoriedade física é com dados. Para criar um chave privada Futurocoin você precisa de apenas um dado de seis lados, o qual você jogará 99 vezes. A cada jogada, anote o valor do dado. Ao anotar os valores, siga as seguintes regras: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Ao fazer isso, você está anotando esse grande número aleatório, sua chave privada, no formato base 6 (B6). Você pode então digitar essa chave privada em base 6 contendo 99 caracteres no campo de texto acima e clicar em Ver Detalhes. Você então verá o endereço Futurocoin associado com sua chave privada. Você deve também anotar sua chave privada no formato WIF, já que ele é mais amplamente utilizado."
		},

		"zh-cn": {	
			// javascript alerts or messages
			"testneteditionactivated": "TESTNET EDITION ACTIVATED",
			"paperlabelbitcoinaddress": "世币地址",
			"paperlabelprivatekey": "私钥 (WIF格式)",
			"paperlabelencryptedkey": "加密私钥(需要密码)",
			"bulkgeneratingaddresses": "创建地址中...",
			"brainalertpassphrasetooshort": "这个密码太短了 \n\n",
			"brainalertpassphrasewarning": "警告：选择一个足够强大的口令非常重要，它可以避免你的私钥被暴力破解。 此外，UTF-8编码有效。请注意区分全角/半角",
			"brainalertpassphrasedoesnotmatch": "两次输入的口令不一致",
			"detailalertnotvalidprivatekey": "输入的私钥无效",
			"detailconfirmsha256": "你输入的不是合法的私钥，\n\n你想用它的SHA-256值当作私钥吗（相当于脑钱包）\n\n警告：选择一个足够强大的口令非常重要，它可以避免你的私钥被暴力破解。",
			"bip38alertincorrectpassphrase": "这个加密私钥的密码不正确。",
			"bip38alertpassphraserequired": "BIP38加密的私钥需要密码。",
			"vanityinvalidinputcouldnotcombinekeys": "错误输入，这两个Key无法合成。",
			"vanityalertinvalidinputpublickeysmatch": "错误输入，请使用不同的公钥。",
			"vanityalertinvalidinputcannotmultiple": "错误，两个公钥不能进行乘运算，想要检查两个公钥合成的地址，请选择加运算。",
			"vanityprivatekeyonlyavailable": "使用两个私钥合成，才会得到合成私钥。",
			"vanityalertinvalidinputprivatekeysmatch": "错误输入，请使用不同的私钥。",

			// header and menu html
			"tagline": "开源JavaScript世币钱包工具",
			"generatelabelbitcoinaddress": "地址生成中...",
			"generatelabelmovemouse": "请移动鼠标产生随机种子...",
			"generatelabelkeypress": "或者在文本框中输入随机字符",
			"singlewallet": "普通钱包",
			"paperwallet": "纸钱包",
			"bulkwallet": "批量钱包",
			"brainwallet": "脑钱包",
			"vanitywallet": "虚荣钱包",
			"splitwallet": "分裂钱包",
			"detailwallet": "钱包详情",

			// footer html
			"footerlabeldonations": "项目捐赠",
			"footerlabeltranslatedby": "简中翻译捐赠 1BfXayW2vrj6uRpoZg3nR8rMEckLpGmaiL",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "版本历史",
			"footerlabelgithub": "GitHub页面",
			"footerlabelgithubzip": "zip",
			"footerlabelsig": "sig",
			"footerlabelcopyright1": "Copyright bitaddress.org, The Futurocoin Developers.",
			"footerlabelcopyright2": "JavaScript的版权信息已经包含在源代码中。",
			"footerlabelnowarranty": "No warranty",

			// status html
			"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
			"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
			"statusokcryptogood": "OK", //TODO: please translate
			"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
			"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
			"statusokcryptobad": "OK", //TODO: please translate
			"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
			"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
			"statusokunittestsgood": "OK", //TODO: please translate
			"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
			"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
			"statusokunittestsbad": "OK", //TODO: please translate
			"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
			"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
			"statusokprotocolgood": "OK", //TODO: please translate
			"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
			"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
			"statuslabelprotocolbad2": "download", //TODO: please translate
			"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
			"statusokprotocolbad": "OK", //TODO: please translate
			"statuslabelkeypool1": "This is a log of all the Futurocoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
			"statuskeypoolrefresh": "Refresh", //TODO: please translate
			"statusokkeypool": "OK", //TODO: please translate

			// single wallet html
			"newaddress": "生成新地址",
			"singleprint": "打印",
			"singlelabelbitcoinaddress": "世币地址",
			"singlelabelprivatekey": "私钥 (WIF格式-可导入客户端的格式)",
			"singletip1": "<b>世币钱包</b>就是这么简单，一个地址，对应一个私钥，浏览器已自动生成了一个，就显示在上面。私钥必须保密，地址可以公开。",
			"singletip2": "<b>妥善保管你的钱包</b> 为了保护你的钱包，建议你用打印或者其他方式来保管你的私钥和地址。把你的私钥备份保存在安全、保密的位置是必要的。本站不提供私钥的相关知识，请自行学习。如果你熟悉PGP，你也可以下载这个HTML文件（它是单文件全功能的），用它的SHA256摘要和作者在本站页脚留下的相比对。本工具支持离线使用，这样它生成的私钥-地址就很难被监视了。世币私钥必须保密，任何知道你私钥的人都可以随意花费其对应地址的世币。你可以打印你的钱包（即纸钱包），把它装进一个防水的口袋里——就像你在保管纸币一样。",
			"singletip3": "<b>获得世币: </b> 让别人往你的地址汇入世币。",
			"singletip4": "<b>查询余额：</b> 访问explorer.futurocoin.org可以查看到任何地址中的世币余额。",
			"singletip5": "<b>花费世币：</b> 你可以下载世币客户端，导入你的世币私钥来花费对应地址上的世币。每当你发送一笔钱之后，找零有可能会发回客户端生成的另外一个地址，记得备份客户端生成的钱包文件，否则你可能丢钱。中本聪说过，不要删除任何钱包，因为你的亲戚朋友说不定还会往你的旧地址里汇款。",

			// paper wallet html
			"paperlabelhideart": "隐藏背景图案",
			"paperlabeladdressesperpage": "每张纸上打印的地址数",
			"paperlabeladdressestogenerate": "生成的地址数",
			"papergenerate": "生成",
			"paperprint": "打印",
			"paperlabelBIPpassphrase": "密码",
			"paperlabelencrypt": "BIP38加密？",

			// bulk wallet html
			"bulklabelstartindex": "起始编号",
			"bulklabelrowstogenerate": "生成行数",
			"bulklabelcompressed": "生成压缩地址？",
			"bulkgenerate": "生成",
			"bulkprint": "打印",
			"bulklabelcsv": "逗号分隔值：",
			"bulklabelformat": "编号,地址,私钥(WIF格式)",
			"bulklabelq1": "什么时候我会需要批量钱包？",
			"bulka1": "例如，当你建设一个世币收款网站，需要分别为每一个用户准备一个收款地址时，传统的做法是使用世币客户端“futurocoind”生成大量的地址，但是不一定所有的网站托管都支持它。另外，你在服务器上运行世币客户端，也就意味着你的私钥也会保存在服务器上，当骇客攻破服务器时，你的世币可能会被盗。使用批量钱包一次生成大量的钱包，只把生成的地址放在服务器上，即使服务器被攻破，也不必担心世币的安全。",
			"bulklabelq2": "我该怎样在我的网站上使用批量钱包接受世币？",
			"bulklabela2li1": "    在批量钱包选项卡预生成大量世币地址（比如，一万个）。把生成的逗号分隔值清单（CSV）复制到一个安全的环境中，注意备份。",
			"bulklabela2li2": "    把地址列表导入到Web服务器上（注意，<b>不要</b>把私钥部分也一并导入，否则会有被盗的危险）",
			"bulklabela2li3": "    为你的客户提供一个世币支付的接口。每当一名客户选择使用世币支付，你就从你的数据库中提取一个地址，作为该客户专用的“付款地址”，并保存订单信息。",
			"bulklabela2li4": "接下来你需要一个收款通知，联系相关服务的供应商（谷歌搜索“Futurocoin payment notification”），它们可以监视指定地址的资金变动，并通过WebAPI、短信、电邮或者其他方式来提醒你，你也可以通过编程使一切自动化。在http://explorer.futurocoin.org/address/地址 或者 https://bchain.info/Futurocoin/ http://insight.futurocoin.siampm.com/ 查看交易确认。通常情况下，你能够在30秒之内看见交易，而根据你对安全的要求不同，你可能需要10分钟到1小时的时间等待交易确认。",
			"bulklabela2li5": "世币在区块链上稳定之后，你就可以使用在第一步中生成的私钥来花费它们。",

			// brain wallet html
			"brainlabelenterpassphrase": "口令",
			"brainlabelshow": "显示口令？",
			"brainprint": "打印",
			"brainlabelconfirm": "口令确认",
			"brainview": "生成脑钱包",
			"brainalgorithm": "算法： SHA256 (口令)",
			"brainlabelbitcoinaddress": "世币地址",
			"brainlabelprivatekey": "私钥(WIF格式)",

			// vanity wallet html
			"vanitylabelstep1": "第一步，生成一对公-私钥",
			"vanitynewkeypair": "生成",
			"vanitylabelstep1publickey": "第一步-公钥",
			"vanitylabelstep1pubnotes": "委托他人替你生成虚荣地址时，将这段公钥提供给受托人。受托人生成你需要的虚荣地址后，可能会给你另一个公钥，将这两个公钥合成，你可验证是否得到了你所需的虚荣地址。",
			"vanitylabelstep1privatekey": "第一步-私钥",
			"vanitylabelstep1privnotes": "妥善保管这段私钥，建议严格加密。受托人为你生成虚荣地址后，将交给你另一个私钥（不保密也没关系），将这两个私钥合成，你即获得你所需的虚荣地址及其私钥。",
			"vanitylabelstep2calculateyourvanitywallet": "第二步-合成虚荣地址",
			"vanitylabelenteryourpart": "这里输入你的第一步-私钥（或公钥）",
			"vanitylabelenteryourpoolpart": "这里输入你从受托人那里获得的私钥（或公钥）",
			"vanitylabelnote1": "[注：这个文本框可以接受一个私钥或公钥，压缩非压缩均可]",
			"vanitylabelnote2": "[注：这个文本框可以接受一个私钥或公钥，压缩非压缩均可]",
			"vanitylabelradioadd": "加运算",
			"vanitylabelradiomultiply": "乘运算（仅适合私钥）",
			"vanitycalc": "合成",
			"vanitylabelbitcoinaddress": "虚荣地址-合成地址",
			"vanitylabelnotesbitcoinaddress": "这是合成的虚荣地址，它应当满足你的委托。",
			"vanitylabelpublickeyhex": "合成公钥(16进制)",
			"vanitylabelnotespublickeyhex": "用16进制表示的合成公钥。",
			"vanitylabelprivatekey": "合成私钥(WIF格式)",
			"vanitylabelnotesprivatekey": "上面虚荣地址对应的私钥，即你的虚荣私钥，请妥善保管，可导入钱包。",

			// split wallet html
			"splitlabelthreshold": "组合私钥时，需要的最少分裂私钥的份数（区间[2,127]）",
			"splitlabelshares": "分裂的总份数（[2,127]）",
			"splitview": "制造分裂私钥",
			"combinelabelentershares":"输入找到的分裂私钥（空格分隔）",
			"combineview": "组合它们",
			"combinelabelprivatekey": "组合后的私钥",

			// detail wallet html
			"detaillabelenterprivatekey": "钱包详情",
			"detailkeyformats": "接受下列格式：WIF, WIFC, HEX, B64, B6, MINI, BIP38",
			"detailview": "显示详情",
			"detailprint": "打印",
			"detaillabelnote1": "世币私钥应当是只有你知道的保密代码，这段代码有许多种不同的编码格式。下面会给出此私钥对应的地址、公钥，以及最流行的私钥编码格式(WIF, WIFC, HEX, B64, MINI)",
			"detaillabelnote2": "Futurocoin v0.6+ 存储压缩格式的公钥。现在客户端支持导入/导出私钥，命令是importprivkey/dumpprivkey，导出的格式可能因钱包文件版本而不同。",
			"detaillabelbitcoinaddress": "世币地址",
			"detaillabelbitcoinaddresscomp": "世币地址(压缩格式)",
			"detaillabelpublickey": "公钥 (130位[0-9A-F]字符)",
			"detaillabelpublickeycomp": "公钥 (压缩格式，66位[0-9A-F]字符)",
			"detaillabelprivwif": "私钥 (WIF格式)<br />(51位base58字符) ",
			"detaillabelprivwifcomp": "私钥 (WIF格式)<br />(压缩格式，52位base58字符) ",
			"detailwifprefix": "'5'开头",
			"detailcompwifprefix": "'K'或'L'开头",
			"detaillabelprivhex": "私钥(16进制) (64位[0-9A-F]字符)",
			"detaillabelprivb64": "私钥(base64) (44位)",
			"detaillabelpassphrase": "输入BIP38的口令",
			"detailbip38decryptbutton": "BIP38解码",
			"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
			"detaillabelq1": "怎样用骰子生成私钥？B6是什么意思？",
			"detaila1": "真正用随机数产生的钱包才是好钱包。物理产生的随机数可能会比计算机产生的随机数更优越（计算机的伪随机算法可能被识破，但是物理随机不太可能）。生成物理随机的最简单的办法是使用骰子，掷一枚六面骰99次，记录结果，将结果“6”记为“0”（或者将所有结果-1记录），这样你得到的记录将会是由0 1 2 3 4 5 组成的一串数字，称为“Base6格式”，简称“B6”。将它输入上面的文本框，点击“显示详情”按钮，得到你的私钥、地址。",
		},

        "ru": {
            // javascript alerts or messages
            "testneteditionactivated": "Активирован режим TESTNET",
            "paperlabelbitcoinaddress": "Адрес Futurocoin кошелька:",
            "paperlabelprivatekey": "Приватный Ключ (в формате для импорта):",
            "paperlabelencryptedkey": "Зашифрованный Приватный Ключ (требуется пароль)",
            "bulkgeneratingaddresses": "Генерация адресов... ",
            "brainalertpassphrasetooshort": "Введенная парольная фраза слишком коротка.\n\n",
            "brainalertpassphrasewarning": "Предупреждение: Очень важно выбрать сложную парольную фразу, чтобы было невозможно угадать ее методом грубого перебора и украсть ваши биткоины.",
            "brainalertpassphrasedoesnotmatch": "Парольная фраза и ее подтверждение не совпадают.",
            "detailalertnotvalidprivatekey": "Введенный текст не является корректным приватным ключем",
            "detailconfirmsha256": "Введенный текст не является корректным приватным ключем!\n\nВы хотите использовать введенный текст в качестве парольной фразы и создать Приватный Ключ используя SHA256 для хеширования парольной фразы?\n\nПредупреждение: Очень важно выбрать сложную парольную фразу, чтобы было невозможно угадать ее методом грубого перебора и украсть ваши биткоины.",
            "bip38alertincorrectpassphrase": "Введена некорректная парольная фраза для этого зашифрованного приватного ключа.",
            "bip38alertpassphraserequired": "Парольная фраза необходима для ключа BIP38",
            "vanityinvalidinputcouldnotcombinekeys": "Некорректный ввод. Не удалось объединить ключи.",
            "vanityalertinvalidinputpublickeysmatch": "Некорректный ввод. Обе записи имеют одинаковый публичный ключ. Введите два разных публичных ключа.",
            "vanityalertinvalidinputcannotmultiple": "Некорректный ввод. Невозможно объединить два публичных ключа. Выберите 'Добавить', чтобы добавить два публичных ключа для получения биткоин адреса.",
            "vanityprivatekeyonlyavailable": "Доступно только при объединении двух приватных ключей",
            "vanityalertinvalidinputprivatekeysmatch": "Некорректный ввод. Обе записи имеют одинаковый приватный ключ. Введите два разных приватных ключа.",

            // header and menu html
            "tagline": "JavaScript генератор Futurocoin кошельков на стороне клиента с открытым исходным кодом",
            "generatelabelbitcoinaddress": "Генерация Futurocoin адреса...",
            "generatelabelmovemouse": "Двигайте указателем мыши по экрану для добавления случайности...",
            "generatelabelkeypress": "ИЛИ введите несколько случайных символов в это текстовое поле",
            "singlewallet": "Один кошелек",
            "paperwallet": "Бумажный кошелек",
            "bulkwallet": "Несколько кошельков",
            "brainwallet": "Умный кошелек",
            "vanitywallet": "Персональный кошелек",
            "splitwallet": "Split Wallet", //TODO: please translate
            "detailwallet": "Детали кошелька",

            // footer html
            "footerlabeldonations": "Пожертвования:",
            "footerlabeltranslatedby": "Перевод: 1JGnkKH7gJhTyAz9r47nugFM8sdrUENpJi",
            "footerlabelpgp": "PGP ключ",
            "footerlabelversion": "История версий",
            "footerlabelgithub": "Проект на GitHub",
			"footerlabelgithubzip": "zip",
			"footerlabelsig": "sig",
            "footerlabelcopyright1": "Копирайт bitaddress.org, The Futurocoin Developers.",
            "footerlabelcopyright2": "Информация о копирайте на JavaScript в исходниках.",
            "footerlabelnowarranty": "Без гарантий.",

        	// status html
            "statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
            "statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
            "statusokcryptogood": "OK", //TODO: please translate
            "statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
            "statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
            "statusokcryptobad": "OK", //TODO: please translate
            "statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
            "statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
            "statusokunittestsgood": "OK", //TODO: please translate
            "statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
            "statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
            "statusokunittestsbad": "OK", //TODO: please translate
            "statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
            "statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
            "statusokprotocolgood": "OK", //TODO: please translate
            "statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
            "statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
            "statuslabelprotocolbad2": "download", //TODO: please translate
            "statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
            "statusokprotocolbad": "OK", //TODO: please translate
            "statuslabelkeypool1": "This is a log of all the Futurocoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
            "statuskeypoolrefresh": "Refresh", //TODO: please translate
            "statusokkeypool": "OK", //TODO: please translate

            // single wallet html
            "newaddress": "Сгенерировать новый адрес",
            "singleprint": "Распечатать",
            "singlelabelbitcoinaddress": "Адрес Futurocoin кошелька",
            "singlelabelprivatekey": "Приватный Ключ (в формате для импорта)",
            "singletip1": "<b>Futurocoin кошелек</b> это простая пара идентификаторов, состоящая из адреса Futurocoin кошелька и соответствующего ему приватного ключа. Такой колшелек был сгенерирован для Вас в Вашем браузере и отображен выше.",
            "singletip2": "<b>Для обеспечения сохранности этого кошелька</b> Вам необходимо распечатать или каким-либо другим спобом записать Futurocoin адрес и приватный ключ. Очень важно иметь запасную копию приватного ключа и хранить ее в безопасном месте. Этот сайт не хранит информацию о Вашем ключе. Если Вы имеете опыт работы с PGP, то Вы можете сохранить эту HTML страницу в формате архива и проверить то, что Вы используете подлинную версию страницы от автора сайта, сравнив SHA256 хэш этой HTML страницы с SHA256 хэшем указанным истории версий данной страницы, которая подписана ключем автора сайта. Данную ифнормацию можно найти внизу страницы. Если Вы покинете или обновите страницу с сайтом или нажмете кнопку 'Сгенерировать новый адрес', то будет сгенерирован новый приватный ключ и предыдущий приватный ключ восстановить будет невозможно. Ваш приватный ключ Futurocoin кошелька должен храниться в секрете. С кем бы Вы не поделились информацией о приватном ключе - он будет иметь возможность потратить Futurocoin кошелька с этим адресом. Если вы распечатали приватный ключ - необходимо обеспечить его сохранность в месте, недоступном для воды. Обращайтесь с бумажным кошельком для Futurocoin как с наличными деньгами.",
            "singletip3": "<b>Пополните кошелек</b> сообщив другим свой Futurocoin адрес.",
            "singletip4": "<b>Проверить баланс кошелька</b> можно на сайте explorer.futurocoin.org по адресу Futurocoin кошелька.",
            "singletip5": "<b>Потратить Ваши биткоины</b> выполнив импорт Вашего приватного ключа. Необходимо учесть, что когда Вы импортируете свой один приватный ключ в программу-клиент и тратите биткоины - Ваш ключ смешан с другими приватными ключами в программе-клиенте. При выполнении транзакции по расходу или получению средств, сдача будет перенаправлена на другой Futurocoin адрес программного кошелька.После выполнения транзации необходимо сделать резервную копию Вашего программного кошелька и сохранить ее в надежном месте, так как на нем будут сожержаться оставшиеся средства. Сатоши рекомендует никогда не удалять кошелек.",
            "singleshare": "Поделиться",
            "singlesecret": "Хранить в секрете",

            // paper wallet html
            "paperlabelhideart": "Без дизайна",
            "paperlabeladdressesperpage": "Адресов на страницу:",
            "papergenerate": "Сгенерировать",
            "paperprint": "Распечатать",
            "paperlabelBIPpassphrase": "Парольная фраза:",
            "paperlabelencrypt": "Шифрование BIP38?",

            // bulk wallet html
            "bulklabelstartindex": "Стартовый индекс:",
            "bulklabelrowstogenerate": "Количество кошельков:",
            "bulklabelcompressed": "Короткие адреса?",
            "bulkgenerate": "Сгенерировать",
            "bulkprint": "Распечатать",
            "bulklabelcsv": "Значения разделенные запятой:",
            "bulklabelformat": "Порядковый номер, Адрес, Приватный Ключ (импорт)",
            "bulklabelq1": "Почему нужно использовать несколько кошельков, чтобы принимать биткоины на Вашем сайте?",
            "bulka1": "Традиционный подход к приему биткоинов на Вашем сайте - это установка оффициального демона клиента Futurocoin ('futurocoind'). Большинство хостингов для вебсайтов не поддерживают установку демона Futurocoin. Также, запуск демона клиента Futurocoin на Вашем веб-сервере означает, что Вы храните приватные ключи на этом сервере и они могут быть украдены, если Ваш веб-сервер подвергнется взлому. При использовании нескольких кошельков Вы можете выгрузить только адреса Futurocoin на Ваш сервер, в то время как приватные ключи останутся в секрете. В этом случае Вам не следует беспокоиться того, что Ваш веб-сервер будет взломан и биткоин кошелек будет украден.",
            "bulklabelq2": "Как использовать несколько кошельков, чтобы принимать биткоины на Вашем сайте?",
            "bulklabela2li1": "Используйте вкладку 'Несколько кошельков', для того чтобы сгенерировать большое количество адресов Futurocoin (10.000+). Скопируйте и вставьте сгенерированные идентификаторы в виде списка (в формате CSV) в секретный файл на вашем компьютере. Сделайте резервную копию созданного файла и сохраните ее в надежном месте. ",
            "bulklabela2li2": "Импортируйте биткоин адреса в базу данных или иное хранилище Вашего веб-сервера. (Не размещайте приватные ключи кошелька на Вашем веб-сервере, в противном случае Вы рискуете потерять свои биткоины. Своим клиентам Вам достаточно предоставить Futurocoin адрес.)",
            "bulklabela2li3": "Добавьте опцию для оплаты заказа из корзины Вашего клиента для оплаты Futurocoin. Если клиент выбирает оплату Futurocoin - предоставьте ему информацию о Futurocoin адресе для приема оплаты, который будет закреплен за этим клиентом и сохраните соответствующим образом заказ.",
            "bulklabela2li4": "Вам необходимо получать информацию о получении оплаты. Загуглите 'нотификации об оплате биткоинами' и подпишитесь на какой-нибудь сервис нотификаций. В интернете можно найти множество сервисов дял получения нотификаций через веб-сервисы, api, смс, электронную почту и т.д. Как только Вы получите нотификацию об оплате, которую можно обрабатывать в автоматическом режиме, Вы можете приступить к подготовке заказа для Вашего клиента. Чтобы вручную проверить статус оплаты воспользуйтесь сервисом Block Explorer. Заменить АДРЕС на Ваш адрес Futurocoin, который Вы хотите проверить. Подтверждение транзакции оплаты может занимать от 10 минут до одного часа. http://explorer.futurocoin.org/address/АДРЕС\n\nНеподтвержденные транзации оплаты можно посмотреть на: https://bchain.info/Futurocoin/ http://insight.futurocoin.siampm.com/\nНеподтвержденная транзакция будет отображаться через 30 секунд.",
            "bulklabela2li5": "Futurocoin накапливаются в цепочке блоков. Используйте оригинальный файл сгенерированный на 1 шаге, чтобы потратить их.",

            // brain wallet html
            "brainlabelenterpassphrase": "Парольная фраза:",
            "brainlabelshow": "Показать?",
            "brainprint": "Распечатать",
            "brainlabelconfirm": "Подтверждение парольной фразы:",
            "brainview": "Просмотр",
            "brainalgorithm": "Алгоритм SHA256(парольная фраза)",
            "brainlabelbitcoinaddress": "Адрес Futurocoin кошелька:",
            "brainlabelprivatekey": "Приватный ключ (в формате импорта):",

            // vanity wallet html
            "vanitylabelstep1": "Шаг 1 - Сгенерируйте Ваш приватный ключ первого шага",
            "vanitynewkeypair": "Сгенерировать",
            "vanitylabelstep1publickey": "Шаг 1 Публичный Ключ:",
            "vanitylabelstep1pubnotes": "Скопируйте и вставьте это значение в поле Вашей части публичного ключа на сайте пула для генерации адресов.",
            "vanitylabelstep1privatekey": "Шаг 1 Приватный Ключ:",
            "vanitylabelstep1privnotes": "Скопируйте и вставьте приватный ключ в файл. В идеале необходимо сохранить его на зашифрованный диск. Вам будет нужен приватный ключ после того, как пул найдет интересующий Вас префикс адреса.",
            "vanitylabelstep2calculateyourvanitywallet": "Шаг 2 - Вычисление Вашего персонального кошелька",
            "vanitylabelenteryourpart": "Введите Вашу часть приватного ключа (сгенерированного и сохраненного на шаге 1):",
            "vanitylabelenteryourpoolpart": "Введите часть приватного ключа пула (предоставляется пулом):",
            "vanitylabelnote1": "Это поле для публичного или приватного ключа",
            "vanitylabelnote2": "Это поле для публичного или приватного ключа",
            "vanitylabelradioadd": "Сложить",
            "vanitylabelradiomultiply": "Перемножить",
            "vanitycalc": "Вычислить адрес кошелька",
            "vanitylabelbitcoinaddress": "Адрес Futurocoin кошелька:",
            "vanitylabelnotesbitcoinaddress": "Это Ваш новый адрес с префиксом.",
            "vanitylabelpublickeyhex": "Публичный ключ (в формате HEX):",
            "vanitylabelnotespublickeyhex": "Это публичный ключ в формате hex.",
            "vanitylabelprivatekey": "Приватный ключ (в формате импорта):",
            "vanitylabelnotesprivatekey": "Это Ваш приватный ключ для импорта в другой кошелек.",

            // detail wallet html
            "detaillabelenterprivatekey": "Введите Приватный Ключ",
            "detailkeyformats": "Форматы ключа: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
            "detailview": "Детальная информация",
            "detailprint": "Распечатать",
            "detaillabelnote1": "Ваш Приватный Ключ - это секретная информация, которую знаете только Вы. Этот ключ можно закодировать несколькими способами. Ниже вы видите адрес Futurocoin и публичный ключ, которые соответствуют Вашему приватному ключу, если Ваш приватный ключ в одном из популярных форматов (WIF, WIFC, HEX, B64, MINI)",
            "detaillabelnote2": "Приложение Futurocoin версии 0.6 и выше хранит ключи в сжатом формате. Это приложение также поддерживает импорт и экспорт приватных ключей командами importprivkey/dumpprivkey. Формат экспортированного ключа определяется кошельком, который сгенерировал адрес Futurocoin.",
            "detaillabelbitcoinaddress": "Адрес Futurocoin кошелька",
            "detaillabelbitcoinaddresscomp": "Короткий адрес Futurocoin кошелька",
            "detaillabelpublickey": "Публичный ключ (130 символов [0-9A-F]):",
            "detaillabelpublickeycomp": "Публичный ключ (короткий, 66 символов [0-9A-F]):",
            "detaillabelprivwif": "Приватный ключ (в формате импорта), 51 символ base58, начинается с '5'",
            "detaillabelprivwifcomp" : "Приватный ключ, короткий, 52 символа base58, начинается с",
            "detailcompwifprefix": "'K' или 'L'",
            "detaillabelprivhex": "Приватный Ключ в HEX формате (64 символа [0-9A-F]):",
            "detaillabelprivb64": "Приватный Ключ в Base64 формате (44 символа):",
            "detaillabelprivmini": "Приватный Ключ в формате мини (22, 26 или 30 символов, начинается с 'S'):",
            "detaillabelpassphrase": "Парольная фраза BIP38",
            "detailbip38decryptbutton": "Расшифровать BIP38",
            "detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
            "detaillabelq1": "Как сделать кошелек используя игральный кости? Что такое B6?",
            "detaila1": "Очень важно понимать, что при генерации биткоин кошелька используются действительно случайные числа. Физическая случайность лучше компьютерной псевдо-случайности. Самым простым способом генерации физической случайности является игральная кость. Для генерации Приватного Ключа Futurocoin кошелька Вам нужна игральная кость с шестью сторонами, которую необходимо бросить 99 раз. Необходимо записать каждую цифру, выпавшую на игральной кости. Итоговый результат необходимо записать в таком виде: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Таким образом Вы запишите большое случайное число - Ваш Приватный Ключ, в формате B6 или Base6. После этого Вы можете ввести 99 символов приватного ключа в формате Base6 в текстовое поле вверху страницы и получить детальную информацию о кошельке. После этого Вы сможете увидеть адрес Futurocoin кошелька соответствующий полученному приватному ключу. Вам потребуется сделать запись приватного ключа в формате для импорта, так как он наиболее часто используется."
        }
	}
};

ninja.translator.showEnglishJson = function () {
	var english = ninja.translator.translations["en"];
	var spanish = ninja.translator.translations["es"];
	var spanishClone = {};
	for (var key in spanish) {
		spanishClone[key] = spanish[key];
	}
	var newLang = {};
	for (var key in english) {
		newLang[key] = english[key];
		delete spanishClone[key];
	}
	for (var key in spanishClone) {
		if (document.getElementById(key)) {
			if (document.getElementById(key).value) {
				newLang[key] = document.getElementById(key).value;
			}
			else {
				newLang[key] = document.getElementById(key).innerHTML;
			}
		}
	}
	var div = document.createElement("div");
	div.setAttribute("class", "englishjson");
	div.innerHTML = "<h3>English Json</h3>";
	var elem = document.createElement("textarea");
	elem.setAttribute("rows", "15");
	elem.setAttribute("cols", "110");
	elem.setAttribute("wrap", "off");
	var langJson = "{\n";
	for (var key in newLang) {
		langJson += "\t\"" + key + "\"" + ": " + "\"" + newLang[key].replace(/\"/g, "\\\"").replace(/\n/g, "\\n") + "\",\n";
	}
	langJson = langJson.substr(0, langJson.length - 2);
	langJson += "\n}\n";
	elem.innerHTML = langJson;
	div.appendChild(elem);
	document.body.appendChild(div);
};

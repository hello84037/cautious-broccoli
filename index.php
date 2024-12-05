<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Child Family Inventory</title>
    <meta name="author" content="Jake & Brittney Child">
    <meta name="description" content="This is an attempt to to create an inventory application for keeping track of food storage.">
    <meta property="og:title" content="Child Family Food Storage">
    <meta property="og:type" content="website">
    <meta property="og:image" content="./images/island.webp">
    <meta property="og:url" content="https://hello84037.github.io/cautious-broccoli">
    <link rel="canonical" href="https://hello84037.github.io/cautious-broccoli/">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/normalize.css">
    <link rel="stylesheet" href="styles/base.css">
    <link rel="stylesheet" href="styles/larger.css">
    <link rel="icon" href="bread.ico">
</head>
<body>

    <?php
        include_once('constants.php');

        // Create connection
        $conn = new mysqli($SERVER_NAME, $USERNAME, $PASSWORD);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error . "<br>");
        }
        echo "Connected successfully<br>";

        // Create database
        $sql = "CREATE DATABASE IF NOT EXISTS $DATABASE_NAME";
        if ($conn->query($sql) === TRUE) {
            echo "Database was created successfully or already existed.<br>";
        } else {
            echo "Error creating database: " . $conn->error . "<br>";
        }

        // sql to create table
        $sql = "CREATE TABLE IF NOT EXISTS $DATABASE_NAME.$TABLE_NAME (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        itemname VARCHAR(30) NOT NULL,
        quantity INT,
        desiredquantity INT,
        reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )";

        if ($conn->query($sql) === TRUE) {
            echo "myTable created successfully";
        } else {
            echo "Error creating table: " . $conn->error;
        }

        $conn->close();
    ?>
    <header><h1>Child Family Food Storage</h1>
        <img alt="Image of food storage" src="images/FoodStorage.png">
    </header>
    <div class="nav">
        <div class="menuContainer">
            <div class="menu">
                <div class="menuLine"></div>
                <div class="menuLine"></div>
                <div class="menuLine"></div>
            </div>
        </div>
        <nav class="navigation">
            <a href="index.html">
                <img class="foot_logo" src="images/food_storage.webp" alt="Logo Image">
              </a>
            <a href="inventory.php" title="Inventory">Inventory</a>
            <a href="alerts.html" title="Alerts">Alerts</a>
            <a href="about.html" title="About">About</a>
        </nav>
    </div>
    <main>
        <div class="hero">
            <div class="hero-label">
                <button id="addButton" class="button1">Add</button>
                <button id="removeButton" class="button1">Remove</button>
                <button id="lookupButton" class="button1">Lookup</button>
            </div>
        </div>
        <div id="addRemovePopup" class="popup">
            <div class="popup-content">
                <p id="popupHeader">How would you like to lookup the item?</p>
                <div id="popupButtons">
                    <div>
                        <button class="popupButton" id="barcodeLookup">
                            <p id="barcodeLookupText">Barcode</p>
                            <img class="popupImg" alt="Image of QR Code" src="images/qrcode.png">
                        </button>
                    </div>
                    <div>
                        <button class="popupButton" id="manualLookup">
                            <p id="manualLookupText">Manual</p>
                            <img class="popupImg" alt="Image of Magnifying Glass" src="images/MagnifyingGlass.png">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div id="lookupPopup" class="popup">
            <div class="popup-content">
                <h1>Enter the information for the item</h1>
                <form action="inventory.php" method="POST">
                    <label for="name">Name:</label>
                    <input type="text" id="itemname" name="itemname"><br><br>
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="1" value="1"><br><br>
                    <label for="desiredquantity">Desired Quantity:</label>
                    <input type="number" id="desiredquantity" name="desiredquantity" min="1" value="1"><br><br>
                    <input type="submit" value="Submit">
                    <input type="button" value="Cancel" id="cancelButton"/>
                </form>
            </div>
        </div>

    </main>
    <footer>
        <p>&copy; <span id="year"></span> | Jake & Brittney Child | Utah, United States of America</p>
        <p id="lastModified"></p>
    </footer>
    <script src="scripts/getdates.js"></script>
    <script src="scripts/responsivemenu.js"></script>
    <script src="scripts/mobilebrowser.js"></script>
    <script src="scripts/popup.js"></script>
</body>
</html>
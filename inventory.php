<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Child Family Food Storage - Inventory</title>
    <meta name="author" content="Jake & Brittney Child">
    <meta name="description" content="This is a course assignment portal built to display the works of Brittney Child for the class: WDD 230 - Web Frontend Development. It will show each 
    completed assignment as I develop and grow in my skills through this course.">
    <meta property="og:title" content="Brittney Child - WDD230 Homepage">
    <meta property="og:type" content="website">
    <meta property="og:image" content="./images/island.webp">
    <meta property="og:url" content="https://britty042.github.io/wdd230">
    <link rel="canonical" href="https://britty042.github.io/wdd230/">
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
        $conn = new mysqli($SERVER_NAME, $USERNAME, $PASSWORD, $DATABASE_NAME);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error . "<br>");
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $sql = "INSERT INTO $DATABASE_NAME.$TABLE_NAME (itemname, quantity, desiredquantity)
            VALUES ('$_POST[itemname]','$_POST[quantity]','$_POST[desiredquantity]')";

            mysqli_query($conn, $sql);
        }
        
        $query = "SELECT * FROM $DATABASE_NAME.$TABLE_NAME";
        $result = mysqli_query($conn, $query);
        
        $conn->close();
    ?>
    <header><h1>Inventory</h1>
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
            <a href="index.php">
                <img class="foot_logo" src="images/food_storage.webp" alt="Logo Image">
              </a>
            <a href="inventory.html" title="Inventory">Inventory</a>
            <a href="alerts.html" title="Alerts">Alerts</a>
            <a href="about.html" title="About">About</a>
        </nav>
    </div>
    <main>
        <?php 
            echo "<table border='1'>
            <tr>
            <th>Id</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Desired Quantity</th>
            </tr>";
            
            while($row = mysqli_fetch_array($result))
            {
                echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['itemname'] . "</td>";
                echo "<td>" . $row['quantity'] . "</td>";
                echo "<td>" . $row['desiredquantity'] . "</td>";
                echo "</tr>";
            }
            
            echo "</table>";
        ?>
    </main>
    <footer>
        <p>&copy; <span id="year"></span> | Jake & Brittney Child | Utah, United States of America</p>
        <p id="lastModified"></p>
    </footer>
    <script src="scripts/getdates.js"></script>
    <script src="scripts/responsivemenu.js"></script>
</body>
</html>
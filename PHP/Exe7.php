<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comparação</title>
</head>
<body>
    <?php
    $variavel1 = 10;      
    $variavel2 = "10";    

    var_dump($variavel1 == $variavel2);  
    echo "<br>";
    var_dump($variavel1 === $variavel2); 
    ?>
</body>
</html>

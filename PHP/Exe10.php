<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema média</title>
</head>
<body>
    <?php
    $n1 = 9;
    $n2 = 8;
    $n3 = 2;

    $media = ($n1 + $n2 + $n3) / 3;

    if ($media % 2 == 0){
        echo "Aluno aprovado(a) com média $media";
    } else {
        echo "Aluno reprovado (a) com média $media";
    }
    
    ?>
</body>
</html>
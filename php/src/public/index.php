<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <style>
        body {
            background-color: #f5f5f5;
            font-family: sans-serif;
            text-align: center;
        }

        h1 {
            color: #333;
            font-size: 3rem;
            margin: 0;
            padding: 2rem 0;
        }

        button {
            background-color: #333;
            border: none;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            font-size: 1.5rem;
            margin: 2rem 0;
            padding: 1rem 2rem;
        }

        .marquee {
            height: 50px;
            overflow: hidden;
            position: relative;
            color: #333;
        }

        .marquee p {
            font-size: 1.5rem;
            position: absolute;
            width: 100%;
            height: 100%;
            margin: 0;
            line-height: 50px;
            text-align: center;
            -moz-transform: translateX(100%);
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            -moz-animation: scroll-left 2s linear infinite;
            -webkit-animation: scroll-left 2s linear infinite;
            animation: scroll-left 15s linear infinite;
        }

        @-moz-keyframes scroll-left {
            0% {
                -moz-transform: translateX(100%);
            }

            100% {
                -moz-transform: translateX(-100%);
            }
        }

        @-webkit-keyframes scroll-left {
            0% {
                -webkit-transform: translateX(100%);
            }

            100% {
                -webkit-transform: translateX(-100%);
            }
        }

        @keyframes scroll-left {
            0% {
                -moz-transform: translateX(100%);
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }

            100% {
                -moz-transform: translateX(-100%);
                -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
            }
        }
    </style>
</head>

<body>
    <h1>Dynamic PHP</h1>
    <div class="marquee">
        <p>
            This page is built with a single php file 🎉
            Today&apos;s date is:
            <?php
            date_default_timezone_set('America/Halifax');
            $date = date("l jS \of F Y H:i:s A e");
            echo $date;
            ?>
        </p>
    </div>
    <div>
        <form action="index.php" method="get">
            <button type="submit" value="<?php echo $_GET['count'] + 1 ?>" name="count">Count:
                <?php if ($_GET['count']) {
                    echo $_GET['count'];
                } else {
                    echo 0;
                } ?>
            </button>
        </form>
    </div>
</body>

</html>
<?php
    // Параметры подключения к базе данных
    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "your_database_name";

    try {
        // Создаем подключение к базе данных
        $conn = new mysqli($host, $user, $password, $database);

        // Проверка подключения
        if ($conn->connect_error) {
            throw new Exception("Ошибка подключения: " . $conn->connect_error);
        }

        // Получение данных из POST запроса
        $experience = $_POST['experience'] ?? '';
        $conflict = $_POST['conflict'] ?? '';
        $achievements = $_POST['achievements'] ?? '';
        $skills = $_POST['skills'] ?? '';
        $deadlines = $_POST['deadlines'] ?? '';
        $motivates = $_POST['motivates'] ?? '';
        $full_name = $_POST['full_name'] ?? '';
        $passport_data = $_POST['passport_data'] ?? '';


        // SQL-запрос для вставки данных
        $sql = "INSERT INTO your_table_name (experience, conflict, achievements, skills, deadlines, motivates, full_name, passport_data)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

         // Подготавливаем запрос
         $stmt = $conn->prepare($sql);
         if (!$stmt) {
               throw new Exception("Ошибка подготовки запроса: " . $conn->error);
         }
         // Привязываем параметры
        $stmt->bind_param("ssssssss", $experience, $conflict, $achievements, $skills, $deadlines, $motivates, $full_name, $passport_data);


        // Выполняем запрос
        if ($stmt->execute() === TRUE) {
            echo "Данные успешно добавлены в базу данных.";
        } else {
             throw new Exception("Ошибка добавления данных: " . $stmt->error);
        }

        $stmt->close();
        $conn->close();

    } catch (Exception $e) {
       echo "Произошла ошибка: " . $e->getMessage();
    }

    ?>
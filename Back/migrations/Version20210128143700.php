<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210128143700 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE concert (id INT AUTO_INCREMENT NOT NULL, concert_room_id INT NOT NULL, name VARCHAR(255) NOT NULL, artist VARCHAR(255) NOT NULL, artist_pres LONGTEXT NOT NULL, artist_img VARCHAR(255) DEFAULT NULL, date DATE NOT NULL, time DATETIME NOT NULL, time_open DATETIME NOT NULL, category INT NOT NULL, max_price INT NOT NULL, price_rate INT NOT NULL, parking TINYINT(1) NOT NULL, restaurant TINYINT(1) NOT NULL, INDEX IDX_D57C02D2CE0DCC35 (concert_room_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE concert_room (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, place_number INT NOT NULL, gps VARCHAR(255) NOT NULL, restaurant_max INT NOT NULL, parking_max INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contact (id INT AUTO_INCREMENT NOT NULL, concert_room_id INT NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, company VARCHAR(255) DEFAULT NULL, email VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL, message LONGTEXT NOT NULL, INDEX IDX_4C62E638CE0DCC35 (concert_room_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE in_voice (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, date DATETIME NOT NULL, INDEX IDX_AD0E4645A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE news (id INT AUTO_INCREMENT NOT NULL, category VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE newsletter (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, state VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE privatization (id INT AUTO_INCREMENT NOT NULL, concert_room_id INT NOT NULL, last_name VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, company VARCHAR(255) DEFAULT NULL, email VARCHAR(255) NOT NULL, date DATE NOT NULL, phone VARCHAR(255) NOT NULL, time VARCHAR(255) NOT NULL, number_people INT NOT NULL, budget VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, INDEX IDX_35CCF7BDCE0DCC35 (concert_room_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reservation (id INT AUTO_INCREMENT NOT NULL, concert_id INT NOT NULL, invoice_id INT NOT NULL, reference VARCHAR(255) NOT NULL, total_price DOUBLE PRECISION NOT NULL, ticket_type VARCHAR(255) NOT NULL, restaurant_time DATETIME DEFAULT NULL, parking TINYINT(1) DEFAULT NULL, cancel TINYINT(1) DEFAULT NULL, seats VARCHAR(255) NOT NULL, INDEX IDX_42C8495583C97B2E (concert_id), INDEX IDX_42C849552989F1FD (invoice_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, mail VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, gender VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, building VARCHAR(255) DEFAULT NULL, address_complement VARCHAR(255) DEFAULT NULL, postal_code VARCHAR(20) NOT NULL, country VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL, birthday DATE DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE liked (user_id INT NOT NULL, news_id INT NOT NULL, INDEX IDX_CA19CBBAA76ED395 (user_id), INDEX IDX_CA19CBBAB5A459A0 (news_id), PRIMARY KEY(user_id, news_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shared (user_id INT NOT NULL, news_id INT NOT NULL, INDEX IDX_138CF4BBA76ED395 (user_id), INDEX IDX_138CF4BBB5A459A0 (news_id), PRIMARY KEY(user_id, news_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE concert ADD CONSTRAINT FK_D57C02D2CE0DCC35 FOREIGN KEY (concert_room_id) REFERENCES concert_room (id)');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E638CE0DCC35 FOREIGN KEY (concert_room_id) REFERENCES concert_room (id)');
        $this->addSql('ALTER TABLE in_voice ADD CONSTRAINT FK_AD0E4645A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE privatization ADD CONSTRAINT FK_35CCF7BDCE0DCC35 FOREIGN KEY (concert_room_id) REFERENCES concert_room (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C8495583C97B2E FOREIGN KEY (concert_id) REFERENCES concert (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C849552989F1FD FOREIGN KEY (invoice_id) REFERENCES in_voice (id)');
        $this->addSql('ALTER TABLE liked ADD CONSTRAINT FK_CA19CBBAA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE liked ADD CONSTRAINT FK_CA19CBBAB5A459A0 FOREIGN KEY (news_id) REFERENCES news (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE shared ADD CONSTRAINT FK_138CF4BBA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE shared ADD CONSTRAINT FK_138CF4BBB5A459A0 FOREIGN KEY (news_id) REFERENCES news (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C8495583C97B2E');
        $this->addSql('ALTER TABLE concert DROP FOREIGN KEY FK_D57C02D2CE0DCC35');
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E638CE0DCC35');
        $this->addSql('ALTER TABLE privatization DROP FOREIGN KEY FK_35CCF7BDCE0DCC35');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C849552989F1FD');
        $this->addSql('ALTER TABLE liked DROP FOREIGN KEY FK_CA19CBBAB5A459A0');
        $this->addSql('ALTER TABLE shared DROP FOREIGN KEY FK_138CF4BBB5A459A0');
        $this->addSql('ALTER TABLE in_voice DROP FOREIGN KEY FK_AD0E4645A76ED395');
        $this->addSql('ALTER TABLE liked DROP FOREIGN KEY FK_CA19CBBAA76ED395');
        $this->addSql('ALTER TABLE shared DROP FOREIGN KEY FK_138CF4BBA76ED395');
        $this->addSql('DROP TABLE concert');
        $this->addSql('DROP TABLE concert_room');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE in_voice');
        $this->addSql('DROP TABLE news');
        $this->addSql('DROP TABLE newsletter');
        $this->addSql('DROP TABLE privatization');
        $this->addSql('DROP TABLE reservation');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE liked');
        $this->addSql('DROP TABLE shared');
    }
}

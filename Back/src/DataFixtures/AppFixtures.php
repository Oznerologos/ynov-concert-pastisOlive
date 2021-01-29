<?php

namespace App\DataFixtures;

use App\Entity\Concert;
use App\Entity\ConcertRoom;
use App\Entity\Contact;
use App\Entity\News;
use App\Entity\Privatization;
use App\Entity\User;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Validator\Constraints\Date;

class AppFixtures extends Fixture
{

    /** @var UserPasswordEncoderInterface */
    private $encoder;
    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {

        // Salle de concerts --------------------------------------------------------------
        $aix = new ConcertRoom();
        $aix->setName('Aix');
        $aix->setPlaceNumber(150);
        $aix->setGps('Sud sud est mon capitaine');
        $aix->setRestaurantMax(20);
        $aix->setParkingMax(200);
        $manager->persist($aix);

        $bourges = new ConcertRoom();
        $bourges->setName('Bourges');
        $bourges->setPlaceNumber(100);
        $bourges->setGps('Sud nord est mon capitaine');
        $bourges->setRestaurantMax(22);
        $bourges->setParkingMax(150);
        $manager->persist($bourges);

        $cannes = new ConcertRoom();
        $cannes->setName('Cannes');
        $cannes->setPlaceNumber(200);
        $cannes->setGps('Est mon capitaine');
        $cannes->setRestaurantMax(40);
        $cannes->setParkingMax(500);
        $manager->persist($cannes);

        $dunkerque = new ConcertRoom();
        $dunkerque->setName('Dunkerque');
        $dunkerque->setPlaceNumber(100);
        $dunkerque->setGps('nord nord est mon capitaine');
        $dunkerque->setRestaurantMax(20);
        $dunkerque->setParkingMax(200);
        $manager->persist($dunkerque);

        $echirolles = new ConcertRoom();
        $echirolles->setName('Echirolles');
        $echirolles->setPlaceNumber(150);
        $echirolles->setGps('Est Sud est mon capitaine');
        $echirolles->setRestaurantMax(20);
        $echirolles->setParkingMax(50);
        $manager->persist($echirolles);


        //Contact ---------------------------------------------------------------------
        $contact1 = new Contact();
        $contact1->setFirstName("Test1");
        $contact1->setLastName("Test1");
        $contact1->setCompany("Test1");
        $contact1->setEmail("Test1@Mail.com");
        $contact1->setPhone("06 06 06 06 06");
        $contact1->setMessage("Eu deserunt tempor magna deserunt culpa duis excepteur incididunt.");
        $contact1->setConcertRoom($aix);
        $manager->persist($contact1);

        $contact2 = new Contact();
        $contact2->setFirstName("Test2");
        $contact2->setLastName("Test2");
        $contact2->setCompany("Test2");
        $contact2->setEmail("Test2@Mail.com");
        $contact2->setPhone("06 06 06 06 06");
        $contact2->setMessage("Eu deserunt tempor magna deserunt culpa duis excepteur incididunt.");
        $contact2->setConcertRoom($bourges);
        $manager->persist($contact2);
     
        
        // Private --------------------------------------------------------------------
        $private1 = new Privatization();
        $private1->setLastName("Test1");
        $private1->setFirstName("Test1");
        $private1->setCompany('EDF GDF');
        $private1->setEmail("Test1@mail.com");
        $private1->setDate(new DateTime('06/12/2021'));
        $private1->setPhone("06 06 06 06 06");
        $private1->setTime("18h30");
        $private1->setNumberPeople(150);
        $private1->setBudget("10 000€");
        $private1->setDescription("On veut faire la fiesta comme a Valencia");
        $private1->setConcertRoom($cannes);
        $manager->persist($private1);


        $private2 = new Privatization();
        $private2->setLastName("Test2");
        $private2->setFirstName("Test2");
        $private2->setCompany('EDF GDF');
        $private2->setEmail("Test2@mail.com");
        $private2->setDate(new DateTime('06/12/2021'));
        $private2->setPhone("06 06 06 06 06");
        $private2->setTime("18h30");
        $private2->setNumberPeople(150);
        $private2->setBudget("10 000€");
        $private2->setDescription("PUT YOUR HANDS UP");
        $private2->setConcertRoom($dunkerque);
        $manager->persist($private2);

        // News ---------------------------------------------------------------------------
        $news1 = new News();
        $news1->setCategory("concert");
        $news1->setTitle("Le grand concert de Jean-Mi");
        $news1->setContent("Labore sunt ea exercitation dolor labore. Duis dolor labore ullamco non sint ut fugiat et labore labore laborum. Adipisicing in tempor et non veniam esse exercitation mollit est aliqua consectetur nulla anim laborum. Fugiat eiusmod consectetur aliquip amet laboris adipisicing est dolore. Sit duis pariatur cillum esse dolor ipsum cillum dolore excepteur. Officia sunt qui et amet laboris consectetur sint consectetur nulla excepteur cillum ea irure enim.");
        $manager->persist($news1);

        $news2 = new News();
        $news2->setCategory("concert");
        $news2->setTitle("Le grand concert de Jean-Mi");
        $news2->setContent("Labore sunt ea exercitation dolor labore. Duis dolor labore ullamco non sint ut fugiat et labore labore laborum. Adipisicing in tempor et non veniam esse exercitation mollit est aliqua consectetur nulla anim laborum. Fugiat eiusmod consectetur aliquip amet laboris adipisicing est dolore. Sit duis pariatur cillum esse dolor ipsum cillum dolore excepteur. Officia sunt qui et amet laboris consectetur sint consectetur nulla excepteur cillum ea irure enim.");
        $manager->persist($news2);

        $news3 = new News();
        $news3->setCategory("concert");
        $news3->setTitle("Le grand concert de Jean-Mi");
        $news3->setContent("Labore sunt ea exercitation dolor labore. Duis dolor labore ullamco non sint ut fugiat et labore labore laborum. Adipisicing in tempor et non veniam esse exercitation mollit est aliqua consectetur nulla anim laborum. Fugiat eiusmod consectetur aliquip amet laboris adipisicing est dolore. Sit duis pariatur cillum esse dolor ipsum cillum dolore excepteur. Officia sunt qui et amet laboris consectetur sint consectetur nulla excepteur cillum ea irure enim.");
        $manager->persist($news3);

        $news4 = new News();
        $news4->setCategory("Actualité");
        $news4->setTitle("Le Covid 19");
        $news4->setContent("Labore sunt ea exercitation dolor labore. Duis dolor labore ullamco non sint ut fugiat et labore labore laborum. Adipisicing in tempor et non veniam esse exercitation mollit est aliqua consectetur nulla anim laborum. Fugiat eiusmod consectetur aliquip amet laboris adipisicing est dolore. Sit duis pariatur cillum esse dolor ipsum cillum dolore excepteur. Officia sunt qui et amet laboris consectetur sint consectetur nulla excepteur cillum ea irure enim.");
        $manager->persist($news4);

        $news5 = new News();
        $news5->setCategory("Actualité");
        $news5->setTitle("Le covid 20");
        $news5->setContent("Labore sunt ea exercitation dolor labore. Duis dolor labore ullamco non sint ut fugiat et labore labore laborum. Adipisicing in tempor et non veniam esse exercitation mollit est aliqua consectetur nulla anim laborum. Fugiat eiusmod consectetur aliquip amet laboris adipisicing est dolore. Sit duis pariatur cillum esse dolor ipsum cillum dolore excepteur. Officia sunt qui et amet laboris consectetur sint consectetur nulla excepteur cillum ea irure enim.");
        $manager->persist($news5);

        $news5 = new News();
        $news5->setCategory("Actualité");
        $news5->setTitle("Le covid 21");
        $news5->setContent("Labore sunt ea exercitation dolor labore. Duis dolor labore ullamco non sint ut fugiat et labore labore laborum. Adipisicing in tempor et non veniam esse exercitation mollit est aliqua consectetur nulla anim laborum. Fugiat eiusmod consectetur aliquip amet laboris adipisicing est dolore. Sit duis pariatur cillum esse dolor ipsum cillum dolore excepteur. Officia sunt qui et amet laboris consectetur sint consectetur nulla excepteur cillum ea irure enim.");
        $manager->persist($news5);

        // Concert ---------------------------------------------------------------------

        $concert1 = new Concert();
        $concert1->setName("Daft Punk Alive 2021 (svp j'en reve)");
        $concert1->setArtist("Daft Punk");
        $concert1->setArtistPres("Trop les boss");
        $concert1->setArtistImg("Daftpunk.png");
        $concert1->setDate(new DateTime('04/26/2021'));
        $concert1->setTime(new DateTime('04/26/2021 21:00:00'));
        $concert1->setTimeOpen(new DateTime('04/26/2021 19:00:00'));
        $concert1->setCategory(3);
        $concert1->setMaxPrice(250);
        $concert1->setPriceRate(5);
        $concert1->setParking(false);
        $concert1->setRestaurant(false);
        $concert1->setConcertRoom($aix);
        $manager->persist($concert1);

        $user = new User();
        $user->setMail("test@mail.com");
        $user->setPassword($this->encoder->encodePassword("jesuishashé"));
        $user->setGender("male");
        

        $manager->flush();
    }
}

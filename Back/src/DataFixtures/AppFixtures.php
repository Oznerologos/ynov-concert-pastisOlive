<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\News;
use App\Entity\User;
use App\Entity\Concert;
use App\Entity\Contact;
use App\Entity\ConcertRoom;
use App\Entity\InVoice;
use App\Entity\Privatization;
use App\Entity\Reservation;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

    /** @var UserPasswordEncoderInterface */
    private $encoder;
    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {

        // Salle de concerts --------------------------------------------------------------------------------
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


        //Contact -------------------------------------------------------------------------------------------
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
     
        
        // Private ------------------------------------------------------------------------------------------
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

        // News ------------------------------------------------------------------------------------------------
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

        // Concert ----------------------------------------------------------------------------------------

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
        $concert1->setMusicType("Pop");
        $concert1->setConcertRoom($aix);
        $manager->persist($concert1);

        $concert2 = new Concert();
        $concert2->setName("Californication");
        $concert2->setArtist("Red hot chilli peper");
        $concert2->setArtistPres("Trop les boss");
        $concert2->setArtistImg("redhot.png");
        $concert2->setDate(new DateTime('04/26/2021'));
        $concert2->setTime(new DateTime('04/26/2021 21:00:00'));
        $concert2->setTimeOpen(new DateTime('04/26/2021 19:00:00'));
        $concert2->setCategory(3);
        $concert2->setMaxPrice(250);
        $concert2->setPriceRate(5);
        $concert2->setParking(false);
        $concert2->setRestaurant(false);
        $concert2->setMusicType("Rock");
        $concert2->setConcertRoom($bourges);
        $manager->persist($concert2);

        $concert3 = new Concert();
        $concert3->setName("La zizi party");
        $concert3->setArtist("Franky Vincent");
        $concert3->setArtistPres("C'est pas la taille qui compte");
        $concert3->setArtistImg("franky.png");
        $concert3->setDate(new DateTime('04/26/2021'));
        $concert3->setTime(new DateTime('04/26/2021 21:00:00'));
        $concert3->setTimeOpen(new DateTime('04/26/2021 19:00:00'));
        $concert3->setCategory(3);
        $concert3->setMaxPrice(250);
        $concert3->setPriceRate(5);
        $concert3->setParking(false);
        $concert3->setRestaurant(false);
        $concert3->setMusicType("Rap / Hip-Hop");
        $concert3->setConcertRoom($cannes);
        $manager->persist($concert3);

        $concert4 = new Concert();
        $concert4->setName("GreenWashing");
        $concert4->setArtist("Tryo");
        $concert4->setArtistPres("En fait, ils sont 4");
        $concert4->setArtistImg("tryo.png");
        $concert4->setDate(new DateTime('04/26/2021'));
        $concert4->setTime(new DateTime('04/26/2021 21:00:00'));
        $concert4->setTimeOpen(new DateTime('04/26/2021 19:00:00'));
        $concert4->setCategory(3);
        $concert4->setMaxPrice(250);
        $concert4->setPriceRate(5);
        $concert4->setParking(false);
        $concert4->setRestaurant(false);
        $concert4->setMusicType("Electro");
        $concert4->setConcertRoom($dunkerque);
        $manager->persist($concert4);

        $concert5 = new Concert();
        $concert5->setName("AC/DC");
        $concert5->setArtist("Daft Punk");
        $concert5->setArtistPres("Trop les boss");
        $concert5->setArtistImg("Daftpunk.png");
        $concert5->setDate(new DateTime('04/26/2021'));
        $concert5->setTime(new DateTime('04/26/2021 21:00:00'));
        $concert5->setTimeOpen(new DateTime('04/26/2021 19:00:00'));
        $concert5->setCategory(3);
        $concert5->setMaxPrice(250);
        $concert5->setPriceRate(5);
        $concert5->setParking(false);
        $concert5->setRestaurant(false);
        $concert5->setMusicType("Classique");
        $concert5->setConcertRoom($echirolles);
        $manager->persist($concert5);

        // User ---------------------------------------------------------------------------------------------

        $user = new User();
        $user->setMail("test@mail.com");
        $user->setPassword($this->encoder->encodePassword($user,"jesuishashé"));
        $user->setGender("male");
        $user->setRoles([]);
        $user->setStreet("80 avenue des chartreux");
        $user->setPostalCode("13004");
        $user->setCountry("France");
        $user->setPhone("06 51 51 51 51");
        $user->setBirthday(new DateTime("04/26/1998"));
        $manager->persist($user);

        $admin = new User();
        $admin->setMail("admin@mail.com");
        $admin->setPassword($this->encoder->encodePassword($admin,"moiaussijesuishashé"));
        $admin->setGender("male");
        $admin->setRoles(["ROLE_ADMIN"]);
        $admin->setStreet("9 rue des frères Vallon");
        $admin->setPostalCode("13090");
        $admin->setCountry("France");
        $admin->setPhone("06 51 51 51 51");
        $admin->setBirthday(new DateTime("04/26/1968"));
        $manager->persist($admin);


        // Invoice (qui est en fait un panier)----------------------------------------------------------------

        $invoice = new InVoice();
        $invoice->setDate(new DateTime());
        $invoice->setUser($user);
        $manager->persist($invoice);


        // Reservation --------------------------------------------------------------------------------------

        $reservation = new Reservation();
        $reservation->setReference(150666);
        $reservation->setTotalPrice(500);
        $reservation->setTicketType("E-Ticket");
        $reservation->setSeats("[2,3]"); //Ici, on stock juste les places selectionnées dans un tableau écrit en string
        $reservation->setConcert($concert1);
        $reservation->setInvoice($invoice);
        $manager->persist($reservation);



        $manager->flush();
    }
}
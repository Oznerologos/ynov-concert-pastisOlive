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
        $concert1->setName("Daft Punk Alive 2021");
        $concert1->setArtist("Daft Punk");
        $concert1->setArtistPres("Trop les boss  - Sunt voluptate duis aute elit quis reprehenderit anim est aliquip incididunt dolore deserunt in ut. Dolor cupidatat esse proident cupidatat duis aliquip aliquip. Non incididunt laboris culpa reprehenderit.  ");
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
        $concert2->setArtistPres("Trop les boss  - Eu nulla enim cupidatat nisi sint laboris irure sit laboris veniam do. Do dolore consequat enim aute labore. Id ea labore mollit amet anim irure amet laboris ea duis cillum aliquip.  ");
        $concert2->setArtistImg("redhot.png");
        $concert2->setDate(new DateTime('04/26/2021'));
        $concert2->setTime(new DateTime('04/26/2021 21:00:00'));
        $concert2->setTimeOpen(new DateTime('04/26/2021 19:00:00'));
        $concert2->setCategory(3);
        $concert2->setMaxPrice(147);
        $concert2->setPriceRate(5);
        $concert2->setParking(false);
        $concert2->setRestaurant(false);
        $concert2->setMusicType("Rock");
        $concert2->setConcertRoom($bourges);
        $manager->persist($concert2);

        $concert3 = new Concert();
        $concert3->setName("La zizi party");
        $concert3->setArtist("Franky Vincent");
        $concert3->setArtistPres("C'est pas la taille qui compte  - Dolor ullamco tempor est cupidatat amet. Sunt minim sit qui nostrud sunt. Ipsum excepteur sit quis Lorem irure dolor enim aliquip. Proident est laboris proident sunt ullamco duis consequat in qui non magna culpa ullamco nulla. Esse aliqua enim nulla amet cillum sunt magna. Id cillum dolor aute dolor deserunt culpa. Cillum reprehenderit est sint veniam aliqua id tempor cillum ad aute proident culpa incididunt.  ");
        $concert3->setArtistImg("franky.png");
        $concert3->setDate(new DateTime('04/26/2021'));
        $concert3->setTime(new DateTime('04/26/2021 21:00:00'));
        $concert3->setTimeOpen(new DateTime('04/26/2021 19:00:00'));
        $concert3->setCategory(3);
        $concert3->setMaxPrice(156);
        $concert3->setPriceRate(5);
        $concert3->setParking(false);
        $concert3->setRestaurant(false);
        $concert3->setMusicType("Rap / Hip-Hop");
        $concert3->setConcertRoom($cannes);
        $manager->persist($concert3);

        $concert4 = new Concert();
        $concert4->setName("GreenWashing");
        $concert4->setArtist("Tryo");
        $concert4->setArtistPres("En fait, ils sont 4  - Consequat ut reprehenderit nisi nostrud laboris voluptate proident sit incididunt consequat laboris. Mollit ullamco sunt magna labore ad labore labore consequat. Consequat mollit nisi nulla commodo labore culpa cillum fugiat. Aute aliquip elit occaecat ad anim nisi sint consectetur aute fugiat nostrud.  ");
        $concert4->setArtistImg("tryo.png");
        $concert4->setDate(new DateTime('04/26/2021'));
        $concert4->setTime(new DateTime('04/26/2021 21:00:00'));
        $concert4->setTimeOpen(new DateTime('04/26/2021 19:00:00'));
        $concert4->setCategory(3);
        $concert4->setMaxPrice(845);
        $concert4->setPriceRate(5);
        $concert4->setParking(false);
        $concert4->setRestaurant(false);
        $concert4->setMusicType("Electro");
        $concert4->setConcertRoom($dunkerque);
        $manager->persist($concert4);

        $concert5 = new Concert();
        $concert5->setName("AC/DC");
        $concert5->setArtist("Daft Punk");
        $concert5->setArtistPres("Trop les boss  - Laboris est pariatur nulla dolor sunt. Dolor sint cillum officia reprehenderit deserunt aute Lorem et magna. Anim dolore est pariatur eu incididunt nisi ullamco culpa enim mollit consequat veniam voluptate.  ");
        $concert5->setArtistImg("Daftpunk.png");
        $concert5->setDate(new DateTime('04/26/2021'));
        $concert5->setTime(new DateTime('04/26/2021 21:00:00'));
        $concert5->setTimeOpen(new DateTime('04/26/2021 19:00:00'));
        $concert5->setCategory(3);
        $concert5->setMaxPrice(35);
        $concert5->setPriceRate(5);
        $concert5->setParking(false);
        $concert5->setRestaurant(false);
        $concert5->setMusicType("Classique");
        $concert5->setConcertRoom($echirolles);
        $manager->persist($concert5);

        $concert6 = new Concert();
        $concert6->setName("U2 en live");
        $concert6->setArtist("U2");
        $concert6->setArtistPres("Toi aussi  - Incididunt fugiat quis enim mollit consequat aliquip. Dolore Lorem ea velit duis laborum magna sint. In culpa laborum tempor laboris esse officia laboris esse eiusmod laborum id duis.  ");
        $concert6->setArtistImg("U2.png");
        $concert6->setDate(new DateTime('02/04/2021'));
        $concert6->setTime(new DateTime('02/04/2021 21:00:00'));
        $concert6->setTimeOpen(new DateTime('02/04/2021 19:00:00'));
        $concert6->setCategory(3);
        $concert6->setMaxPrice(265);
        $concert6->setPriceRate(5);
        $concert6->setParking(false);
        $concert6->setRestaurant(false);
        $concert6->setMusicType("Rock");
        $concert6->setConcertRoom($aix);
        $manager->persist($concert6);

        $concert7 = new Concert();
        $concert7->setName("Greenday en Live");
        $concert7->setArtist("Greenday");
        $concert7->setArtistPres("Vertjour  - Reprehenderit ut aute labore sit dolor amet deserunt do officia voluptate amet ea. In mollit occaecat cupidatat exercitation ut qui. Velit pariatur velit duis esse velit duis ex deserunt reprehenderit adipisicing ea duis exercitation enim. Ullamco dolor commodo Lorem duis cillum irure culpa.  ");
        $concert7->setArtistImg("greenday.png");
        $concert7->setDate(new DateTime('02/04/2021'));
        $concert7->setTime(new DateTime('02/04/2021 21:00:00'));
        $concert7->setTimeOpen(new DateTime('02/04/2021 19:00:00'));
        $concert7->setCategory(3);
        $concert7->setMaxPrice(112);
        $concert7->setPriceRate(5);
        $concert7->setParking(false);
        $concert7->setRestaurant(false);
        $concert7->setMusicType("Rock");
        $concert7->setConcertRoom($cannes);
        $manager->persist($concert7);

        $concert8 = new Concert();
        $concert8->setName("Narcotic en Live");
        $concert8->setArtist("Narcotic");
        $concert8->setArtistPres("Fumer tue  - Amet ipsum laboris sit exercitation commodo ad commodo culpa magna et. Sint in pariatur sint ea et laborum reprehenderit. Ad pariatur nostrud velit do aliquip enim. Dolore duis ad aliquip aute. Quis Lorem minim aute cupidatat adipisicing pariatur irure. Minim duis nulla commodo ex exercitation duis voluptate qui incididunt culpa. Quis labore consequat veniam quis dolor in culpa enim.  ");
        $concert8->setArtistImg("narcotic.png");
        $concert8->setDate(new DateTime('02/04/2021'));
        $concert8->setTime(new DateTime('02/04/2021 21:00:00'));
        $concert8->setTimeOpen(new DateTime('02/04/2021 19:00:00'));
        $concert8->setCategory(3);
        $concert8->setMaxPrice(65);
        $concert8->setPriceRate(5);
        $concert8->setParking(false);
        $concert8->setRestaurant(false);
        $concert8->setMusicType("Pop");
        $concert8->setConcertRoom($dunkerque);
        $manager->persist($concert8);

        $concert9 = new Concert();
        $concert9->setName("MJ en hologramme");
        $concert9->setArtist("Mickael Jackson");
        $concert9->setArtistPres("Meilleur performeur du siècle en noir et blanc  - Voluptate elit nostrud labore reprehenderit ex qui id ex labore reprehenderit. Veniam sit veniam qui anim fugiat nisi ipsum laborum cillum. Magna proident amet ea cupidatat ullamco amet non pariatur. Sunt dolor est ex amet. Adipisicing ut aliqua anim enim ipsum cupidatat voluptate veniam magna culpa.  ");
        $concert9->setArtistImg("mj.png");
        $concert9->setDate(new DateTime('02/04/2021'));
        $concert9->setTime(new DateTime('02/04/2021 21:00:00'));
        $concert9->setTimeOpen(new DateTime('02/04/2021 19:00:00'));
        $concert9->setCategory(3);
        $concert9->setMaxPrice(250);
        $concert9->setPriceRate(5);
        $concert9->setParking(false);
        $concert9->setRestaurant(false);
        $concert9->setMusicType("Pop");
        $concert9->setConcertRoom($bourges);
        $manager->persist($concert9);

        $concert10 = new Concert();
        $concert10->setName("Earth Wind and Fire en live");
        $concert10->setArtist("Earth Wind and Fire");
        $concert10->setArtistPres("Le monde vivait en harmonie mais un jour, la nation du feu décida de passer a l'attaque  - Adipisicing commodo labore pariatur aliqua eu deserunt sint in dolore incididunt adipisicing aliquip nisi laboris. Id magna nostrud deserunt excepteur enim. Cupidatat amet velit do cupidatat esse laboris labore ut fugiat sunt nostrud ut. Ut consequat ex nisi dolor qui irure officia voluptate voluptate voluptate sint aliqua. Exercitation sint fugiat tempor pariatur. Aute laborum sint eu eiusmod sint elit duis est ut culpa dolore excepteur excepteur excepteur.  ");
        $concert10->setArtistImg("earth.png");
        $concert10->setDate(new DateTime('02/04/2021'));
        $concert10->setTime(new DateTime('02/04/2021 21:00:00'));
        $concert10->setTimeOpen(new DateTime('02/04/2021 19:00:00'));
        $concert10->setCategory(3);
        $concert10->setMaxPrice(74);
        $concert10->setPriceRate(5);
        $concert10->setParking(false);
        $concert10->setRestaurant(false);
        $concert10->setMusicType("Soul / Funk");
        $concert10->setConcertRoom($echirolles);
        $manager->persist($concert10);

        $concert11 = new Concert();
        $concert11->setName("Eminem en live");
        $concert11->setArtist("Eminem");
        $concert11->setArtistPres("Je préfère les smarties  - Ea labore sit non consectetur reprehenderit culpa ea ipsum aliquip consectetur. Sint ullamco proident voluptate fugiat labore ullamco labore reprehenderit aliquip consequat et. Enim enim reprehenderit incididunt commodo nostrud tempor eu cupidatat eiusmod elit eu. Sit ipsum ut ea qui. Labore labore incididunt exercitation ex adipisicing aliqua enim in quis ut.  ");
        $concert11->setArtistImg("eminem.png");
        $concert11->setDate(new DateTime('02/12/2021'));
        $concert11->setTime(new DateTime('02/12/2021 21:00:00'));
        $concert11->setTimeOpen(new DateTime('02/12/2021 19:00:00'));
        $concert11->setCategory(3);
        $concert11->setMaxPrice(59);
        $concert11->setPriceRate(5);
        $concert11->setParking(false);
        $concert11->setRestaurant(false);
        $concert11->setMusicType("Rap / Hip-Hop");
        $concert11->setConcertRoom($aix);
        $manager->persist($concert11);

        $concert12 = new Concert();
        $concert12->setName("Danakil en live");
        $concert12->setArtist("Danakil");
        $concert12->setArtistPres("Je pensais que c'etait le nom du chanteur  - Incididunt voluptate irure eiusmod veniam laboris ea. Eu exercitation nulla ipsum occaecat. Irure pariatur dolor exercitation non ex. Ut elit nostrud veniam minim fugiat Lorem fugiat exercitation ipsum. Ad non elit ea voluptate laboris laborum laboris laboris velit sint id enim in. Occaecat aliqua ut cillum ex adipisicing ullamco est qui.  ");
        $concert12->setArtistImg("danakil.png");
        $concert12->setDate(new DateTime('02/12/2021'));
        $concert12->setTime(new DateTime('02/12/2021 21:00:00'));
        $concert12->setTimeOpen(new DateTime('02/12/2021 19:00:00'));
        $concert12->setCategory(3);
        $concert12->setMaxPrice(46);
        $concert12->setPriceRate(5);
        $concert12->setParking(false);
        $concert12->setRestaurant(false);
        $concert12->setMusicType("Dub / Reggae");
        $concert12->setConcertRoom($bourges);
        $manager->persist($concert12);

        $concert13 = new Concert();
        $concert13->setName("Lady Baby on live");
        $concert13->setArtist("Lady Baby");
        $concert13->setArtistPres("Quand un suédois metalleux fait de la J-Pop avec deux idoles japonaises  - In culpa culpa proident esse consectetur et. Elit proident in mollit voluptate laborum incididunt est minim eu irure occaecat. Duis velit est nulla ut qui adipisicing deserunt. Est dolore consequat sunt fugiat ullamco elit quis. Reprehenderit fugiat culpa minim cupidatat nostrud duis sint exercitation reprehenderit nulla nulla dolor.  ");
        $concert13->setArtistImg("ladybaby.png");
        $concert13->setDate(new DateTime('02/12/2021'));
        $concert13->setTime(new DateTime('02/12/2021 21:00:00'));
        $concert13->setTimeOpen(new DateTime('02/12/2021 19:00:00'));
        $concert13->setCategory(3);
        $concert13->setMaxPrice(92);
        $concert13->setPriceRate(5);
        $concert13->setParking(false);
        $concert13->setRestaurant(false);
        $concert13->setMusicType("World");
        $concert13->setConcertRoom($cannes);
        $manager->persist($concert13);

        $concert14 = new Concert();
        $concert14->setName("Xavier 'MV' Dang on live");
        $concert14->setArtist("Xavier 'MV' Dang");
        $concert14->setArtistPres("Un vieux monsieur qui fait de la musique de jeux vidéo  - Tempor nostrud dolore ipsum consequat quis duis elit est. Ad aute veniam ad quis cillum laborum officia laborum quis labore ea amet. Sint ullamco cillum non laboris enim voluptate.  ");
        $concert14->setArtistImg("mv.png");
        $concert14->setDate(new DateTime('02/12/2021'));
        $concert14->setTime(new DateTime('02/12/2021 21:00:00'));
        $concert14->setTimeOpen(new DateTime('02/12/2021 19:00:00'));
        $concert14->setCategory(3);
        $concert14->setMaxPrice(120);
        $concert14->setPriceRate(5);
        $concert14->setParking(false);
        $concert14->setRestaurant(false);
        $concert14->setMusicType("Electro");
        $concert14->setConcertRoom($echirolles);
        $manager->persist($concert14);
        
        $concert15 = new Concert();
        $concert15->setName("Kool And The Gang on live");
        $concert15->setArtist("Kool And The Gang");
        $concert15->setArtistPres("Un peu comme earth wind and fire mais en différent  - Deserunt proident irure magna qui aute. Aute mollit minim nostrud sit laborum quis dolore Lorem culpa. Eiusmod aliquip cillum consequat sit excepteur esse occaecat consectetur enim occaecat esse sint officia culpa. Commodo labore magna commodo reprehenderit ut ipsum nulla irure.  ");
        $concert15->setArtistImg("kool.png");
        $concert15->setDate(new DateTime('02/12/2021'));
        $concert15->setTime(new DateTime('02/12/2021 21:00:00'));
        $concert15->setTimeOpen(new DateTime('02/12/2021 19:00:00'));
        $concert15->setCategory(3);
        $concert15->setMaxPrice(92);
        $concert15->setPriceRate(5);
        $concert15->setParking(false);
        $concert15->setRestaurant(false);
        $concert15->setMusicType("Electro");
        $concert15->setConcertRoom($dunkerque);
        $manager->persist($concert15);






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
        $invoice->setDate("04/26/1968");
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
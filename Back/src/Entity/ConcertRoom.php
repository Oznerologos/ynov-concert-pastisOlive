<?php

namespace App\Entity;

use App\Entity\Concert;
use App\Entity\Contact;
use App\Entity\Privatization;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ConcertRoomRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ConcertRoomRepository::class)
 */
class ConcertRoom
{
    /**
     * @ORM\Id
     * @Groups({"concertRoom", "concert"})
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups("concertRoom")
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @Groups("concertRoom")
     * @ORM\Column(type="integer")
     */
    private $placeNumber;

    /**
     * @Groups({"concertRoom", "concert"})
     * @ORM\Column(type="string", length=255)
     */
    private $gps;

    /**
     * @Groups("concertRoom")
     * @ORM\Column(type="integer")
     */
    private $restaurantMax;

    /**
     * @Groups("concertRoom")
     * @ORM\Column(type="integer")
     */
    private $parkingMax;

    /**
     * @Groups("contact_detail")
     * @ORM\OneToMany(targetEntity=Contact::class, mappedBy="concertRoom")
     */
    private $contacts;

    /**
     * @Groups("privatization_detail")
     * @ORM\OneToMany(targetEntity=Privatization::class, mappedBy="concertRoom")
     */
    private $privatizations;

    /**
     * @Groups("concert_detail")
     * @ORM\OneToMany(targetEntity=Concert::class, mappedBy="concertRoom")
     */
    private $concerts;

    public function __construct()
    {
        $this->contacts = new ArrayCollection();
        $this->privatizations = new ArrayCollection();
        $this->concerts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPlaceNumber(): ?int
    {
        return $this->placeNumber;
    }

    public function setPlaceNumber(int $placeNumber): self
    {
        $this->placeNumber = $placeNumber;

        return $this;
    }

    public function getGps(): ?string
    {
        return $this->gps;
    }

    public function setGps(string $gps): self
    {
        $this->gps = $gps;

        return $this;
    }

    public function getRestaurantMax(): ?int
    {
        return $this->restaurantMax;
    }

    public function setRestaurantMax(int $restaurantMax): self
    {
        $this->restaurantMax = $restaurantMax;

        return $this;
    }

    public function getParkingMax(): ?int
    {
        return $this->parkingMax;
    }

    public function setParkingMax(int $parkingMax): self
    {
        $this->parkingMax = $parkingMax;

        return $this;
    }

    /**
     * @return Collection|Contact[]
     */
    public function getContacts(): Collection
    {
        return $this->contacts;
    }

    public function addContact(Contact $contact): self
    {
        if (!$this->contacts->contains($contact)) {
            $this->contacts[] = $contact;
            $contact->setConcertRoom($this);
        }

        return $this;
    }

    public function removeContact(Contact $contact): self
    {
        if ($this->contacts->removeElement($contact)) {
            // set the owning side to null (unless already changed)
            if ($contact->getConcertRoom() === $this) {
                $contact->setConcertRoom(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Privatization[]
     */
    public function getPrivatizations(): Collection
    {
        return $this->privatizations;
    }

    public function addPrivatization(Privatization $privatization): self
    {
        if (!$this->privatizations->contains($privatization)) {
            $this->privatizations[] = $privatization;
            $privatization->setConcertRoom($this);
        }

        return $this;
    }

    public function removePrivatization(Privatization $privatization): self
    {
        if ($this->privatizations->removeElement($privatization)) {
            // set the owning side to null (unless already changed)
            if ($privatization->getConcertRoom() === $this) {
                $privatization->setConcertRoom(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Concert[]
     */
    public function getConcerts(): Collection
    {
        return $this->concerts;
    }

    public function addConcert(Concert $concert): self
    {
        if (!$this->concerts->contains($concert)) {
            $this->concerts[] = $concert;
            $concert->setConcertRoom($this);
        }

        return $this;
    }

    public function removeConcert(Concert $concert): self
    {
        if ($this->concerts->removeElement($concert)) {
            // set the owning side to null (unless already changed)
            if ($concert->getConcertRoom() === $this) {
                $concert->setConcertRoom(null);
            }
        }

        return $this;
    }
}

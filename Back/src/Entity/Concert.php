<?php

namespace App\Entity;

use App\Repository\ConcertRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ConcertRepository::class)
 */
class Concert
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $artist;

    /**
     * @ORM\Column(type="text")
     */
    private $artistPres;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $artistImg;

    /**
     * @ORM\Column(type="date")
     */
    private $date;

    /**
     * @ORM\Column(type="datetime")
     */
    private $time;

    /**
     * @ORM\Column(type="datetime")
     */
    private $timeOpen;

    /**
     * @ORM\Column(type="integer")
     */
    private $category;

    /**
     * @ORM\Column(type="integer")
     */
    private $maxPrice;

    /**
     * @ORM\Column(type="integer")
     */
    private $priceRate;

    /**
     * @ORM\Column(type="boolean")
     */
    private $parking;

    /**
     * @ORM\Column(type="boolean")
     */
    private $restaurant;

    /**
     * @ORM\ManyToOne(targetEntity=ConcertRoom::class, inversedBy="concerts")
     * @ORM\JoinColumn(nullable=false)
     */
    private $concertRoom;

    /**
     * @ORM\OneToMany(targetEntity=Reservation::class, mappedBy="concert")
     */
    private $reservations;

    public function __construct()
    {
        $this->reservations = new ArrayCollection();
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

    public function getArtist(): ?string
    {
        return $this->artist;
    }

    public function setArtist(string $artist): self
    {
        $this->artist = $artist;

        return $this;
    }

    public function getArtistPres(): ?string
    {
        return $this->artistPres;
    }

    public function setArtistPres(string $artistPres): self
    {
        $this->artistPres = $artistPres;

        return $this;
    }

    public function getArtistImg(): ?string
    {
        return $this->artistImg;
    }

    public function setArtistImg(?string $artistImg): self
    {
        $this->artistImg = $artistImg;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getTime(): ?\DateTimeInterface
    {
        return $this->time;
    }

    public function setTime(\DateTimeInterface $time): self
    {
        $this->time = $time;

        return $this;
    }

    public function getTimeOpen(): ?\DateTimeInterface
    {
        return $this->timeOpen;
    }

    public function setTimeOpen(\DateTimeInterface $timeOpen): self
    {
        $this->timeOpen = $timeOpen;

        return $this;
    }

    public function getCategory(): ?int
    {
        return $this->category;
    }

    public function setCategory(int $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getMaxPrice(): ?int
    {
        return $this->maxPrice;
    }

    public function setMaxPrice(int $maxPrice): self
    {
        $this->maxPrice = $maxPrice;

        return $this;
    }

    public function getPriceRate(): ?int
    {
        return $this->priceRate;
    }

    public function setPriceRate(int $priceRate): self
    {
        $this->priceRate = $priceRate;

        return $this;
    }

    public function getParking(): ?bool
    {
        return $this->parking;
    }

    public function setParking(bool $parking): self
    {
        $this->parking = $parking;

        return $this;
    }

    public function getRestaurant(): ?bool
    {
        return $this->restaurant;
    }

    public function setRestaurant(bool $restaurant): self
    {
        $this->restaurant = $restaurant;

        return $this;
    }

    public function getConcertRoom(): ?concertRoom
    {
        return $this->concertRoom;
    }

    public function setConcertRoom(?concertRoom $concertRoom): self
    {
        $this->concertRoom = $concertRoom;

        return $this;
    }

    /**
     * @return Collection|Reservation[]
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservation $reservation): self
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations[] = $reservation;
            $reservation->setConcert($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): self
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getConcert() === $this) {
                $reservation->setConcert(null);
            }
        }

        return $this;
    }
}

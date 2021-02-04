<?php

namespace App\Entity;

use App\Entity\ConcertRoom;
use App\Entity\Reservation;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ConcertRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ConcertRepository::class)
 */
class Concert
{
    /**
     * @Groups("concert")
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups("concert")
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @Groups("concert")
     * @ORM\Column(type="string", length=255)
     */
    private $artist;

    /**
     * @Groups("concert")
     * @ORM\Column(type="text")
     */
    private $artistPres;

    /**
     * @Groups("concert")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $artistImg;

    /**
     * @Groups("concert")
     * @ORM\Column(type="date")
     */
    private $date;

    /**
     * @Groups("concert")
     * @ORM\Column(type="datetime")
     */
    private $time;

    /**
     * @Groups("concert")
     * @ORM\Column(type="datetime")
     */
    private $timeOpen;

    /**
     * @Groups("concert")
     * @ORM\Column(type="integer")
     */
    private $category;

    /**
     * @Groups("concert")
     * @ORM\Column(type="integer")
     */
    private $maxPrice;

    /**
     * @Groups("concert")
     * @ORM\Column(type="integer")
     */
    private $priceRate;

    /**
     * @Groups("concert")
     * @ORM\Column(type="boolean")
     */
    private $parking;

    /**
     * @Groups("concert")
     * @ORM\Column(type="boolean")
     */
    private $restaurant;

    /**
     * @Groups("concert")
     * @ORM\ManyToOne(targetEntity=ConcertRoom::class, inversedBy="concerts")
     * @ORM\JoinColumn(nullable=false)
     */
    private $concertRoom;

    /**
     * @Groups("reservation_detail")
     * @ORM\OneToMany(targetEntity=Reservation::class, mappedBy="concert")
     */
    private $reservations;

    /**
     * @Groups("concert")
     * @ORM\Column(type="string", length=255)
     */
    private $musicType;

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

    public function getMusicType(): ?string
    {
        return $this->musicType;
    }

    public function setMusicType(string $musicType): self
    {
        $this->musicType = $musicType;

        return $this;
    }
}

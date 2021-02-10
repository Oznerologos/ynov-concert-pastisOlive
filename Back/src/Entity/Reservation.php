<?php

namespace App\Entity;

use App\Entity\Concert;
use App\Entity\InVoice;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ReservationRepository;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ReservationRepository::class)
 */
class Reservation
{
    /**
     * @Groups("reservation")
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups("reservation")
     * @ORM\Column(type="string", length=255)
     */
    private $reference;

    /**
     * @Groups("reservation")
     * @ORM\Column(type="float")
     */
    private $totalPrice;

    /**
     * @Groups("reservation")
     * @ORM\Column(type="string", length=255)
     */
    private $ticketType;

    /**
     * @Groups("reservation")
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $restaurantTime;

    /**
     * @Groups("reservation")
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $parking;

    /**
     * @Groups("reservation")
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $cancel;

    /**
     * @Groups("seats")
     * @ORM\Column(type="string", length=255)
     */
    private $seats;

    /**
     * @Groups("reservation")
     * @ORM\ManyToOne(targetEntity=Concert::class, inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $concert;

    /**
     * @Groups("reservation")
     * @ORM\ManyToOne(targetEntity=InVoice::class, inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $invoice;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReference(): ?string
    {
        return $this->reference;
    }

    public function setReference(string $reference): self
    {
        $this->reference = $reference;

        return $this;
    }

    public function getTotalPrice(): ?float
    {
        return $this->totalPrice;
    }

    public function setTotalPrice(float $totalPrice): self
    {
        $this->totalPrice = $totalPrice;

        return $this;
    }

    public function getTicketType(): ?string
    {
        return $this->ticketType;
    }

    public function setTicketType(string $ticketType): self
    {
        $this->ticketType = $ticketType;

        return $this;
    }

    public function getRestaurantTime(): ?\DateTimeInterface
    {
        return $this->restaurantTime;
    }

    public function setRestaurantTime(?\DateTimeInterface $restaurantTime): self
    {
        $this->restaurantTime = $restaurantTime;

        return $this;
    }

    public function getParking(): ?bool
    {
        return $this->parking;
    }

    public function setParking(?bool $parking): self
    {
        $this->parking = $parking;

        return $this;
    }

    public function getCancel(): ?bool
    {
        return $this->cancel;
    }

    public function setCancel(?bool $cancel): self
    {
        $this->cancel = $cancel;

        return $this;
    }

    public function getSeats(): ?string
    {
        return $this->seats;
    }

    public function setSeats(string $seats): self
    {
        $this->seats = $seats;

        return $this;
    }

    public function getConcert(): ?concert
    {
        return $this->concert;
    }

    public function setConcert(?concert $concert): self
    {
        $this->concert = $concert;

        return $this;
    }

    public function getInvoice(): ?inVoice
    {
        return $this->invoice;
    }

    public function setInvoice(?inVoice $invoice): self
    {
        $this->invoice = $invoice;

        return $this;
    }
}

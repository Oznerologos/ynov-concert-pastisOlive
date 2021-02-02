<?php

namespace App\Entity;

use App\Repository\ReservationRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ReservationRepository::class)
 */
class Reservation
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
    private $reference;

    /**
     * @ORM\Column(type="float")
     */
    private $totalPrice;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ticketType;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $restaurantTime;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $parking;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $cancel;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $seats;

    /**
     * @ORM\ManyToOne(targetEntity=Concert::class, inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $concert;

    /**
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

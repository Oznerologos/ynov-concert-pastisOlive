<?php

namespace App\Entity;

use App\Entity\User;
use App\Entity\Reservation;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\InVoiceRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=InVoiceRepository::class)
 */
class InVoice
{
    /**
     * @Groups("invoice")
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups("invoice")
     * @ORM\Column(type="datetime")
     */
    private $date;

    /**
     * @Groups("reservation_detail")
     * @ORM\OneToMany(targetEntity=Reservation::class, mappedBy="invoice")
     */
    private $reservations;

    /**
     * @Groups("invoice")
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="inVoices")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    public function __construct()
    {
        $this->reservations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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
            $reservation->setInvoice($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): self
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getInvoice() === $this) {
                $reservation->setInvoice(null);
            }
        }

        return $this;
    }

    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(?user $user): self
    {
        $this->user = $user;

        return $this;
    }
}

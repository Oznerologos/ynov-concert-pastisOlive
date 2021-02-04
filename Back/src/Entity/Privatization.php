<?php

namespace App\Entity;

use App\Entity\ConcertRoom;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\PrivatizationRepository;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PrivatizationRepository::class)
 */
class Privatization
{
    /**
     * @Groups("privatization")
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups("privatization")
     * @ORM\Column(type="string", length=255)
     */
    private $lastName;

    /**
     * @Groups("privatization")
     * @ORM\Column(type="string", length=255)
     */
    private $firstName;

    /**
     * @Groups("privatization")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $company;

    /**
     * @Groups("privatization")
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @Groups("privatization")
     * @ORM\Column(type="date")
     */
    private $date;

    /**
     * @Groups("privatization")
     * @ORM\Column(type="string", length=255)
     */
    private $phone;

    /**
     * @Groups("privatization")
     * @ORM\Column(type="string", length=255)
     */
    private $time;

    /**
     * @Groups("privatization")
     * @ORM\Column(type="integer")
     */
    private $numberPeople;

    /**
     * @Groups("privatization")
     * @ORM\Column(type="string", length=255)
     */
    private $budget;

    /**
     * @Groups("privatization")
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @Groups("privatization")
     * @ORM\ManyToOne(targetEntity=ConcertRoom::class, inversedBy="privatizations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $concertRoom;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(?string $company): self
    {
        $this->company = $company;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

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

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getTime(): ?string
    {
        return $this->time;
    }

    public function setTime(string $time): self
    {
        $this->time = $time;

        return $this;
    }

    public function getNumberPeople(): ?int
    {
        return $this->numberPeople;
    }

    public function setNumberPeople(int $numberPeople): self
    {
        $this->numberPeople = $numberPeople;

        return $this;
    }

    public function getBudget(): ?string
    {
        return $this->budget;
    }

    public function setBudget(string $budget): self
    {
        $this->budget = $budget;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

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
}

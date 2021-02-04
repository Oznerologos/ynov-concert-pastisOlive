<?php

namespace App\Entity;

use App\Entity\ConcertRoom;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ContactRepository;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ContactRepository::class)
 */
class Contact
{
    /**
     * @Groups("contact")
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups("contact")
     * @ORM\Column(type="string", length=255)
     */
    private $firstName;

    /**
     * @Groups("contact")
     * @ORM\Column(type="string", length=255)
     */
    private $lastName;

    /**
     * @Groups("contact")
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $company;

    /**
     * @Groups("contact")
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @Groups("contact")
     * @ORM\Column(type="string", length=255)
     */
    private $phone;

    /**
     * @Groups("contact")
     * @ORM\Column(type="text")
     */
    private $message;

    /**
     * @Groups("contact")
     * @ORM\ManyToOne(targetEntity=ConcertRoom::class, inversedBy="contacts")
     * @ORM\JoinColumn(nullable=false)
     */
    private $concertRoom;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

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

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

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

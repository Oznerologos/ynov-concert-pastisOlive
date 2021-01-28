<?php

namespace App\Entity;

use App\Entity\InVoice;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User
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
    private $mail;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $gender;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $street;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $building;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $addressComplement;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $postalCode;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $country;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $phone;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $birthday;

    /**
     * @ORM\OneToMany(targetEntity=InVoice::class, mappedBy="user")
     */
    private $inVoices;

    /**
     * @ORM\ManyToMany(targetEntity=News::class, inversedBy="users")
     * @ORM\JoinTable(name="liked")
     */
    private $liked;

    /**
     * @ORM\ManyToMany(targetEntity=News::class, inversedBy="users")
     * @ORM\JoinTable(name="shared")
     */
    private $shared;

    public function __construct()
    {
        $this->inVoices = new ArrayCollection();
        $this->liked = new ArrayCollection();
        $this->shared = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): self
    {
        $this->mail = $mail;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(string $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getBuilding(): ?string
    {
        return $this->building;
    }

    public function setBuilding(?string $building): self
    {
        $this->building = $building;

        return $this;
    }

    public function getAddressComplement(): ?string
    {
        return $this->addressComplement;
    }

    public function setAddressComplement(?string $addressComplement): self
    {
        $this->addressComplement = $addressComplement;

        return $this;
    }

    public function getPostalCode(): ?string
    {
        return $this->postalCode;
    }

    public function setPostalCode(string $postalCode): self
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

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

    public function getBirthday(): ?\DateTimeInterface
    {
        return $this->birthday;
    }

    public function setBirthday(?\DateTimeInterface $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }

    /**
     * @return Collection|InVoice[]
     */
    public function getInVoices(): Collection
    {
        return $this->inVoices;
    }

    public function addInVoice(InVoice $inVoice): self
    {
        if (!$this->inVoices->contains($inVoice)) {
            $this->inVoices[] = $inVoice;
            $inVoice->setUser($this);
        }

        return $this;
    }

    public function removeInVoice(InVoice $inVoice): self
    {
        if ($this->inVoices->removeElement($inVoice)) {
            // set the owning side to null (unless already changed)
            if ($inVoice->getUser() === $this) {
                $inVoice->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|news[]
     */
    public function getLiked(): Collection
    {
        return $this->liked;
    }

    public function addLiked(news $liked): self
    {
        if (!$this->liked->contains($liked)) {
            $this->liked[] = $liked;
        }

        return $this;
    }

    public function removeLiked(news $liked): self
    {
        $this->liked->removeElement($liked);

        return $this;
    }

    /**
     * @return Collection|news[]
     */
    public function getShared(): Collection
    {
        return $this->shared;
    }

    public function addShared(news $shared): self
    {
        if (!$this->shared->contains($shared)) {
            $this->shared[] = $shared;
        }

        return $this;
    }

    public function removeShared(news $shared): self
    {
        $this->shared->removeElement($shared);

        return $this;
    }
}

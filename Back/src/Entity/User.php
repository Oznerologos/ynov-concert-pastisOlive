<?php

namespace App\Entity;

use App\Entity\InVoice;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @UniqueEntity("mail", message="cet email est déjà utilisé.")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
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
     * @ORM\Column(type="json")
     */
    private $roles = [];

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

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->mail;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

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

        /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }
}

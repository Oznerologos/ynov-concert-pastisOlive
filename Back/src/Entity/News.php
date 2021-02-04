<?php

namespace App\Entity;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\NewsRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=NewsRepository::class)
 */
class News
{
    /**
     * @Groups("news")
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups("news")
     * @ORM\Column(type="string", length=255)
     */
    private $category;

    /**
     * @Groups("news")
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @Groups("news")
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @Groups("news")
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="liked")
     */
    private $users;

    public function __construct()
    {
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addLiked($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            $user->removeLiked($this);
        }

        return $this;
    }
}

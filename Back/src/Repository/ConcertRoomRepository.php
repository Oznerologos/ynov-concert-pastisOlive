<?php

namespace App\Repository;

use App\Entity\ConcertRoom;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ConcertRoom|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConcertRoom|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConcertRoom[]    findAll()
 * @method ConcertRoom[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConcertRoomRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConcertRoom::class);
    }

    // /**
    //  * @return ConcertRoom[] Returns an array of ConcertRoom objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ConcertRoom
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

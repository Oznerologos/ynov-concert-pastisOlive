<?php

namespace App\Form;

use App\Entity\ConcertRoom;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ConcertRoomType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('placeNumber')
            ->add('gps')
            ->add('restaurantMax')
            ->add('parkingMax')
            ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ConcertRoom::class,
            'csrf_protection' => false
        ]);
    }
}

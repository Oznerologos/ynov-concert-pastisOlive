<?php

namespace App\Form;

use App\Entity\Concert;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ConcertType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('artist')
            ->add('artistPres')
            ->add('artistImg')
            ->add('date')
            ->add('time')
            ->add('timeOpen')
            ->add('category')
            ->add('maxPrice')
            ->add('priceRate')
            ->add('parking')
            ->add('restaurant')
            ->add('concertRoom')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Concert::class,
            'csrf_protection'=>false
        ]);
    }
}

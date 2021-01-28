<?php

namespace App\Form;

use App\Entity\Privatization;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PrivatizationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('lastName')
            ->add('firstName')
            ->add('company')
            ->add('email')
            ->add('date')
            ->add('phone')
            ->add('time')
            ->add('numberPeople')
            ->add('budget')
            ->add('description')
            ->add('concertRoom')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Privatization::class,
        ]);
    }
}

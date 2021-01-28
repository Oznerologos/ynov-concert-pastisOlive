<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('mail')
            ->add('password')
            ->add('gender')
            ->add('street')
            ->add('building')
            ->add('addressComplement')
            ->add('postalCode')
            ->add('country')
            ->add('phone')
            ->add('birthday')
            ->add('liked')
            ->add('shared')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}

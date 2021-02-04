<?php

namespace App\Controller;

use App\Entity\Privatization;
use App\Form\PrivatizationType;
use App\Repository\PrivatizationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/privatization")
 */
class PrivatizationController extends AbstractController
{
    /**
     * @Route("/", name="privatization_index", methods={"GET"})
     */
    public function index(PrivatizationRepository $privatizationRepository): Response
    {
        return $this->render('privatization/index.html.twig', [
            'privatizations' => $privatizationRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="privatization_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $privatization = new Privatization();
        $form = $this->createForm(PrivatizationType::class, $privatization);
        $data=json_decode($request->getContent(),true);
        $form->submit($data);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($privatization);
            $entityManager->flush();

            return $this->redirectToRoute('privatization_index');
        }

        return $this->render('privatization/new.html.twig', [
            'privatization' => $privatization,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/{id}", name="privatization_show", methods={"GET"})
     */
    public function show(Privatization $privatization): Response
    {
        return $this->render('privatization/show.html.twig', [
            'privatization' => $privatization,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="privatization_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Privatization $privatization): Response
    {
        $form = $this->createForm(PrivatizationType::class, $privatization);
        $data=json_decode($request->getContent(),true);
        $form->submit($data);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('privatization_index');
        }

        return $this->render('privatization/edit.html.twig', [
            'privatization' => $privatization,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/admin/{id}", name="privatization_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Privatization $privatization): Response
    {
        if ($this->isCsrfTokenValid('delete'.$privatization->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($privatization);
            $entityManager->flush();
        }

        return $this->redirectToRoute('privatization_index');
    }
}

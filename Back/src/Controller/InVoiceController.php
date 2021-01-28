<?php

namespace App\Controller;

use App\Entity\InVoice;
use App\Form\InVoiceType;
use App\Repository\InVoiceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/invoice")
 */
class InVoiceController extends AbstractController
{
    /**
     * @Route("/", name="in_voice_index", methods={"GET"})
     */
    public function index(InVoiceRepository $inVoiceRepository): Response
    {
        return $this->render('in_voice/index.html.twig', [
            'in_voices' => $inVoiceRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="in_voice_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $inVoice = new InVoice();
        $form = $this->createForm(InVoiceType::class, $inVoice);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($inVoice);
            $entityManager->flush();

            return $this->redirectToRoute('in_voice_index');
        }

        return $this->render('in_voice/new.html.twig', [
            'in_voice' => $inVoice,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="in_voice_show", methods={"GET"})
     */
    public function show(InVoice $inVoice): Response
    {
        return $this->render('in_voice/show.html.twig', [
            'in_voice' => $inVoice,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="in_voice_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, InVoice $inVoice): Response
    {
        $form = $this->createForm(InVoiceType::class, $inVoice);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('in_voice_index');
        }

        return $this->render('in_voice/edit.html.twig', [
            'in_voice' => $inVoice,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="in_voice_delete", methods={"DELETE"})
     */
    public function delete(Request $request, InVoice $inVoice): Response
    {
        if ($this->isCsrfTokenValid('delete'.$inVoice->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($inVoice);
            $entityManager->flush();
        }

        return $this->redirectToRoute('in_voice_index');
    }
}

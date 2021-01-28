<?php

namespace App\Controller;

use App\Entity\ConcertRoom;
use App\Form\ConcertRoomType;
use App\Repository\ConcertRoomRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/concertroom")
 */
class ConcertRoomController extends AbstractController
{
    /**
     * @Route("/", name="concert_room_index", methods={"GET"})
     */
    public function index(ConcertRoomRepository $concertRoomRepository): Response
    {
        return $this->render('concert_room/index.html.twig', [
            'concert_rooms' => $concertRoomRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="concert_room_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $concertRoom = new ConcertRoom();
        $form = $this->createForm(ConcertRoomType::class, $concertRoom);
        $form->handleRequest($request);
        var_dump($concertRoom);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($concertRoom);
            $entityManager->flush();

            return $this->redirectToRoute('concert_room_index');
        }

        return $this->render('concert_room/new.html.twig', [
            'concert_room' => $concertRoom,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="concert_room_show", methods={"GET"})
     */
    public function show(ConcertRoom $concertRoom): Response
    {
        return $this->render('concert_room/show.html.twig', [
            'concert_room' => $concertRoom,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="concert_room_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ConcertRoom $concertRoom): Response
    {
        $form = $this->createForm(ConcertRoomType::class, $concertRoom);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('concert_room_index');
        }

        return $this->render('concert_room/edit.html.twig', [
            'concert_room' => $concertRoom,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="concert_room_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ConcertRoom $concertRoom): Response
    {
        if ($this->isCsrfTokenValid('delete'.$concertRoom->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($concertRoom);
            $entityManager->flush();
        }

        return $this->redirectToRoute('concert_room_index');
    }
}

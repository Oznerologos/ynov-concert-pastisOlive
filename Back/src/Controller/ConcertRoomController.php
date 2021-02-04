<?php

namespace App\Controller;

use App\Entity\ConcertRoom;
use App\Form\ConcertRoomType;
use App\Repository\ConcertRoomRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
        $response = new Response();

        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $serializer = $this->container->get('serializer');
        $json = $serializer->serialize($concertRoomRepository->findAll(), 'json', ['groups' => 'concertRoom']);
    
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent($json);

        return $response;
    }

    /**
     * @Route("/new", name="concert_room_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $concertRoom = new ConcertRoom();
        $form = $this->createForm(ConcertRoomType::class, $concertRoom);
        $data=json_decode($request->getContent(),true);
        $form->submit($data);

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
     * @Route("/admin/{id}", name="concert_room_show", methods={"GET"})
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
        $data=json_decode($request->getContent(),true);
        $form->submit($data);

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
     * @Route("/admin/{id}", name="concert_room_delete", methods={"DELETE"})
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
